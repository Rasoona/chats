<template>
  <v-app id="inspire" style="background-color: #292F3F">
    <div class="chat-header">
   <div><v-app-bar

        app
        clipped-right
        flat
        height="72"
        color="#292F3F"


    >
      <v-spacer></v-spacer>
      <v-toolbar-title>Mysterious Messenger</v-toolbar-title>
      <v-spacer></v-spacer>

   </v-app-bar></div>
      <div><v-divider>f</v-divider></div>
    </div>


      <v-navigation-drawer color="#373E4E" permanent
        app
        width="300"
      >


<!--        <v-divider class="mx-3 my-5"></v-divider>-->

<!--        <v-avatar-->
<!--            v-for="n in 6"-->
<!--            :key="n"-->
<!--            class="d-block text-center mx-auto mb-9"-->
<!--            color="grey lighten-1"-->
<!--            size="28"-->
<!--        ></v-avatar>-->


<div class="profile">
       <div><v-avatar
            class="text-center mx-5 ma-5"
            color="grey darken-1"
            size="50"
        ></v-avatar>
       </div>
  <div><h1>Name</h1></div>
</div>
        <v-divider class="mx-3"></v-divider>
        <v-text-field class="my-5 ma-5"
                      color="white"
                      background-color="rgba(0, 0, 0, 0.25)"
            append-icon="mdi-magnify"
            dense
            flat
            hide-details
            rounded
            solo-inverted

        ></v-text-field>

      <v-list
          class="mx-0"
          shaped
          color="#373E4E"
      >
        <v-list-item
            v-for="n in 4"
            :key="n"
            link

        >
          <v-list-item-content >

            <v-list-item-title>Item {{ n }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main style="background-color: #292F3F">

      <!--  -->
    </v-main>

    <v-footer
        app
        color="#292F3F"
        height="72"
        inset
    >
      <v-text-field
          background-color="#00000040"
          dense
          flat
          hide-details
          rounded
          solo
      ></v-text-field>
    </v-footer>
  </v-app>
</template>
<style scoped>
.profile{
  display: flex;
  align-items: center;
}
h1{


}
.chat-header{
  display: flex;
}


</style>

<script>
// import HomeView from './views/HomeView.vue'

export default {
  name: 'App',
  components: {

  },
  data: () => ({
    //
  }),
};
</script>
