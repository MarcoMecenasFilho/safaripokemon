const frisby = require('frisby');
const { BASE_URL } = require('../helper/helpers');
const newPokemon = {
  name: "Butterfree",
  id: 12,
  image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/012.png"
}

describe('Test endpoint to create Pokemon', () => {


  it('should create a new Pokemon', async () => {
    await frisby.fetch(`${BASE_URL}/pokemon`, {
      method: 'DELETE',
      body: JSON.stringify({
      name: "Butterfree"
      })
    });
  
    await frisby.post(`${BASE_URL}/pokemon`, newPokemon)
      .expect('status', 201)
      .then((response) => {
        const {json} = response;
        expect(json).toEqual(newPokemon);
      })

  });

  it('when Pokemon name already exists in database', async () => {
  
    await frisby.post(`${BASE_URL}/pokemon`, newPokemon )
      .expect('status', 409)
      .then((response) => {
        const {json} = response;
        expect(json).toEqual( {message: 'Pokemon name already exists'});
      })
  });

  
  
  it('when Pokemon id already exists in database', async () => {
  
    await frisby.post(`${BASE_URL}/pokemon`, {
      id: 25,
      name: "asakso29sj27sh72s2h",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png"})
      .expect('status', 409)
      .then((response) => {
        const {json} = response;
        expect(json).toEqual( {message: 'Pokemon id already exists'});
      })


      await frisby.fetch(`${BASE_URL}/pokemon`, {
        method: 'DELETE',
        body: JSON.stringify({
        name: "Butterfree"
        })
      });

  });

})

describe('Test validation to create Pokemon', () => {

    
  it('When the name is not passed', async () => { 
  
    await frisby.post(`${BASE_URL}/pokemon`, {
      id: 25,
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png"
    })
      .expect('status', 400)
      .then((response) => {
        const {json} = response;
        expect(json).toEqual({ message:"Name is required" });
      })
    });
    it('When the name is empty', async () => { 
    
      await frisby.post(`${BASE_URL}/pokemon`, {
        name: "",
        id: 25,
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png"
      })
        .expect('status', 400)
        .then((response) => {
          const {json} = response;
          expect(json).toEqual({ message:"Name is not allowed to be empty" });
        })
      });
      it('When the id is not passed', async () => { 
    
        await frisby.post(`${BASE_URL}/pokemon`, {
          name: "Pikachu",
          image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png"
        })
          .expect('status', 400)
          .then((response) => {
            const {json} = response;
            expect(json).toEqual({ message:"Id is required" });
          })
        });
        it('When the id is not a number', async () => { 
    
          await frisby.post(`${BASE_URL}/pokemon`, {
            name: "Pikachu",
            id: "25",
            image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png"
          })
            .expect('status', 422)
            .then((response) => {
              const {json} = response;
              expect(json).toEqual({ message:"Id must be a number" });
            })
          });
  
          it('When the id is not a integer', async () => { 
    
            await frisby.post(`${BASE_URL}/pokemon`, {
              name: "Pikachu",
              id: 25.22,
              image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png"
            })
              .expect('status', 422)
              .then((response) => {
                const {json} = response;
                expect(json).toEqual({ message:"Id must be integer" });
              })
            });
  
            it('When the id is not positive', async () => { 
    
              await frisby.post(`${BASE_URL}/pokemon`, {
                name: "Pikachu",
                id: -25,
                image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png"
              })
                .expect('status', 422)
                .then((response) => {
                  const {json} = response;
                  expect(json).toEqual({ message:"Id must be greater than or equal to 1" });
                })
              });
  
          it('When the image is not passed', async () => { 
    
            await frisby.post(`${BASE_URL}/pokemon`, {
              name: "Pikachu",
              id: 25
            })
              .expect('status', 400)
              .then((response) => {
                const {json} = response;
                expect(json).toEqual({ message:"Image is required" });
              })
            });
  
  
        it('When the image is empty', async () => { 
    
          await frisby.post(`${BASE_URL}/pokemon`, {
            name: "Pikachu",
            id: 25,
            image: ""
          })
            .expect('status', 400)
            .then((response) => {
              const {json} = response;
              expect(json).toEqual({ message:"Image is not allowed to be empty" });
            })
          });

})