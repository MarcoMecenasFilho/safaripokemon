module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Pokemon',
      [{
        id: 1,
        name: 'Bulbasaur',
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
      },
      {
        id: 2,
        name: 'Ivysaur',
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png',
      },
      {
        id: 3,
        name: 'Venusaur',
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png',
      },
      {
        id: 4,
        name: 'Charmander',
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png',
      },
      {
        id: 5,
        name: 'Charmeleon',
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png',
      },
      {
        id: 6,
        name: 'Charizard',
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png',
      },
      {
        id: 7,
        name: 'Squirtle',
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png',
      },
      {
        id: 8,
        name: 'Wartortle',
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png',
      },
      {
        id: 9,
        name: 'Blastoise',
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png',
      }
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Pokemon', null, {});
  },
};
