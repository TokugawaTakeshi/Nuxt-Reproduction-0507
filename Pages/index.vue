<template lang="pug">

  h1 {{ title }}

</template>


<script lang="ts">

  import { Component, Vue } from "nuxt-property-decorator";


  @Component
  export default class extends Vue {
    private readonly title: string = "It works";
  }
</script>


<style lang="stylus">

  h1

    color orangered

</style>
