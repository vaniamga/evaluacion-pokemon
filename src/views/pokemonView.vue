<template>
    <div v-if="pokemon">
      
      <h2>{{ pokemon.name }}</h2>
     >
    </div>
    <div v-else>
      <p>No se ha seleccionado ningún Pokemon.</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      pokemonUrl: {
        type: String,
        required: true,
      },
    },
    data() {
      return {
        pokemon: null,
      };
    },
    watch: {
      async pokemonUrl() {
        if (this.pokemonUrl) {
          await this.fetchPokemonDetails();
        } else {
          this.pokemon = null;
        }
      },
    },
    methods: {
      async fetchPokemonDetails() {
        try {
         
          const response = await axios.get(this.pokemonUrl);
          this.pokemon = response.data;
        } catch (error) {
          console.error('Error al obtener los detalles del Pokemon:', error);
        }
      },
    },
  };
  </script>
  