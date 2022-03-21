const sinon = require('sinon');
const { expect } = require('chai');
const pokemonService = require('../../service/pokemonService');
const pokemonController = require('../../controller/pokemonController');
const validationCreatePokemon = require('../../middleware/validationCreatePokemon')
const validationDeletePokemon = require('../../middleware/validationDeletePokemon')

describe('CONTROLLERS TESTS POKEMON', () => {
  const request = {};
  const response = {};
  let next = () => {};
  
  beforeEach(() => {
    request.body = {}
    request.params = {}
    response.status = sinon.stub().returns(response);
    response.json = sinon.stub().returns()
    next = sinon.stub().returns();;
  })

  describe('Testa pokemon no banco de dados', () => { 
    describe('Caso o pokemon exista no banco', () => { 
      const data = {
        id: 1,
        name: 'Bulbasaur',
        image: 'https://archives.bulbagarden.net/media/upload/2/21/001Bulbasaur.png',}
  
      const serviceResponseSuccess = {
        id: 1,
        name: 'Bulbasaur',
        image: 'https://archives.bulbagarden.net/media/upload/2/21/001Bulbasaur.png',
      };

      beforeEach(() => {
        request.query = "Bulbasaur"
        sinon.stub(pokemonService, 'getByQuery').resolves(serviceResponseSuccess);
      });

      afterEach(() => {
        pokemonService.getByQuery.restore();
      });

      it('Chama o response.status com o valor 200', async () =>{
        await pokemonController.getByQuery(request, response, next)

        expect(response.status.calledWith(200)).to.be.true;
      })

      it('Chama o response.json com os dados do pokemon ', async () =>{
        await pokemonController.getByQuery(request, response, next)

        expect(response.json.calledWith(data)).to.be.true;
      })
    })
    describe('Caso o pokemon não exista no banco', () => { 
      const serviceResponseSuccess = null;

      beforeEach(() => {
        request.query = "Bulbasaur"
        sinon.stub(pokemonService, 'getByQuery').resolves(serviceResponseSuccess);
      });

      afterEach(() => {
        pokemonService.getByQuery.restore();
      });

      it('Chama o response.status com o valor 404', async () =>{
        await pokemonController.getByQuery(request, response, next)

        expect(response.status.calledWith(404)).to.be.true;
      })

      it('Chama o response.json com os dados do pokemon ', async () =>{
        await pokemonController.getByQuery(request, response, next)

        expect(response.json.calledWith({message: 'Pokemon not found'})).to.be.true;
      })
    })
    
  })

  
  describe('Cria pokemon no banco de dados', () => { 
    describe('Caso o pokemon não exista no banco', () => { 
  
      const serviceResponseSuccess = {
        id: 1,
        name: 'Bulbasaur',
        image: 'https://archives.bulbagarden.net/media/upload/2/21/001Bulbasaur.png',
      };

      beforeEach(() => {
        request.body = {
          id: 1,
          name: 'Bulbasaur',
          image: 'https://archives.bulbagarden.net/media/upload/2/21/001Bulbasaur.png',}
        sinon.stub(pokemonService, 'create').resolves(serviceResponseSuccess);
      });

      afterEach(() => {
        pokemonService.create.restore();
      });

      it('Chama o response.status com o valor 201', async () =>{
        await pokemonController.create(request, response, next)

        expect(response.status.calledWith(201)).to.be.true;
      })

      it('Chama o response.json com os dados do pokemon ', async () =>{
        await pokemonController.create(request, response, next)

        expect(response.json.calledWith(serviceResponseSuccess)).to.be.true;
      })
    })
    describe('Quando as validações falham', () => { 
      it('Quando "name" não é passado no body', async () => {
          request.body = {id: 1, image: 'imagemdopokemon'};
          await validationCreatePokemon(request, response, next);
          expect(response.status.calledWith('400')).to.be.true;
          expect(response.json.calledWith( {message: '"Name" is required'})).to.be.true;
      })
      it('Quando "name"  é passado vazio no body', async () => {
        request.body = {name: "", id: 1, image: "imagemdopokemon"};
        await validationCreatePokemon(request, response, next);
        expect(response.status.calledWith('400')).to.be.true;
        expect(response.json.calledWith( {message: '"Name" is not allowed to be empty'})).to.be.true;
    })
    it('Quando "image" não é passado no body', async () => {
      request.body = {name: "Bulbasaur", id: 1};
      await validationCreatePokemon(request, response, next);
      expect(response.status.calledWith('400')).to.be.true;
      expect(response.json.calledWith( {message: '"Image" is required'})).to.be.true;
  })
    it('Quando "Image"  é passado vazio no body', async () => {
      request.body = {name: "Bulbasaur", id: 1, image: ""};
      await validationCreatePokemon(request, response, next);
      expect(response.status.calledWith('400')).to.be.true;
      expect(response.json.calledWith( {message: '"Image" is not allowed to be empty'})).to.be.true;
    })
    it('Quando "Id" não é passado', async () => {
      request.body = {name: "Bulbasaur", image: "imagempokemon"}
      await validationCreatePokemon(request, response, next)
      expect(response.status.calledWith('400')).to.be.true;
      expect(response.json.calledWith( {message: '"Id" is required'})).to.be.true;
    })
    it('Quando "Id" não é um numero inteiro', async () => {
      request.body = {name: "Bulbasaur", id:22.22, image: "imagempokemon"} 
      await validationCreatePokemon(request, response, next)
      expect(response.status.calledWith('422')).to.be.true;
      expect(response.json.calledWith( {message: '"Id" must an integer'})).to.be.true;
    })
    })
    
  })

  describe('excluir pokemon no banco de dados', () => { 
    describe('Caso o pokemon não exista no banco', () => { 
  
      const serviceResponseSuccess = 
        {code:404, message: 'Bulbasaur does not exist in the database to be deleted'};

      beforeEach(() => {
        request.body = {name: 'Bulbasaur'},
        sinon.stub(pokemonService, 'exclude').resolves(serviceResponseSuccess);
      });

      afterEach(() => {
        pokemonService.exclude.restore();
      });

      it('Chama o response.status com o valor 404', async () =>{
        await pokemonController.exclude(request, response, next)

        expect(response.status.calledWith(404)).to.be.true;
      })

      it('Chama o response.json com os dados do pokemon ', async () =>{
        await pokemonController.exclude(request, response, next)

        expect(response.json.calledWith({message: serviceResponseSuccess.message})).to.be.true;
      })
    })
    describe('Caso o pokemon exista no banco', () => { 
  
      const serviceResponseSuccess = {}

      beforeEach(() => {
        request.body = {name: 'Bulbasaur'},
        sinon.stub(pokemonService, 'exclude').resolves(serviceResponseSuccess);
      });

      afterEach(() => {
        pokemonService.exclude.restore();
      });

      it('Chama o response.status com o valor 204', async () =>{
        await pokemonController.exclude(request, response, next)

        expect(response.status.calledWith(204)).to.be.true;
      })

      it('Chama o response.json com os dados do pokemon ', async () =>{
        await pokemonController.exclude(request, response, next)

        expect(response.json.calledWith({})).to.be.true;
      })
    })
    describe('Quando as validações falham para exlcluir pokemon', () => { 
      it('Quando "name" não é passado no body', async () => {
          request.body = {id: 1, image: 'imagemdopokemon'};
          await validationDeletePokemon(request, response, next);
          expect(response.status.calledWith('400')).to.be.true;
          expect(response.json.calledWith( {message: '"Name" is required'})).to.be.true;
      })
      it('Quando "name"  é passado vazio no body', async () => {
        request.body = {name: "", id: 1, image: "imagemdopokemon"};
        await validationDeletePokemon(request, response, next);
        expect(response.status.calledWith('400')).to.be.true;
        expect(response.json.calledWith( {message: '"Name" is not allowed to be empty'})).to.be.true;
    })
    })
    
  })
})
