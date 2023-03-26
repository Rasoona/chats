<template>
  <HelloWorld :items="list" />
</template>

<script>
  import HelloWorld from '../components/HelloWorld'

  export default {
    name: 'HomeView',
    components: {
      HelloWorld,
    },
    data: () => ({
      list: []
    })
  }
</script>
