<template>
  <v-container>
    <v-alert type="success" :dismissible=true @toggle="toggle()">
      I'm a success alert.
    </v-alert>


  </v-container>
</template>

<script>
  export default {
    name: 'HelloWorld',

    data: () => ({
    }),

    methods: {
      toggle() {
        console.log('close it')
      }
    }
  }
</script>
