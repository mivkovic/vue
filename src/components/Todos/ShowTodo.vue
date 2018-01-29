<template>
    
    <li>{{ name }} <span v-if="completed">X</span></li>

</template>

<script>
export default {
  props: ['name','completed','priority'],
  data(){ 

  },
  methods: {

  }
}
</script>

<style>

</style>
