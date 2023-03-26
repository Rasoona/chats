<template>
  <div class="about">
    <h1 class="asd">This is an about page</h1>
    <v-row justify="center" justify-md="start">
      Hello here!
      {{$store.state.login}}
    </v-row>
    <v-text-field
        style="max-width: 300px"
        :rules="[v => !$v.isEmail(v), 'not email']"
        validate-on-blur
    >

      <button @click="foo"></button>

    </v-text-field>

  </div>
  </template>

<script>
import {mapGetters} from "vuex";
export  default  {
  methods: {
    auth(){

    },
    foo() {
      console.log('Hello');
    }
  },
  computed:{
    ...mapGetters({
      login: 'getLogin'
    })
  },
}

</script>


<style scoped>
.asd {
  color: red;
}
</style>
