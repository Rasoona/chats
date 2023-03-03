<template>
  <div class="about">
    <h1>This is an about page</h1>
    <v-row justify="center" justify-md="start">
      Hello here!
      {{$store.state.login}}
    </v-row>
    <v-text-field
        style="max-width: 300px"
        :rules="[v => !$v.isEmail(v), 'not email']"
        validate-on-blur
    >

    </v-text-field>

  </div>
  </template>

<script>
import {mapGetters} from "vuex";
export  default  {
  methods: {
    auth(){

    },

  },
  computed:{
    ...mapGetters({
      login: 'getLogin'
    })
  }
}

</script>


<style scoped>
</style>
