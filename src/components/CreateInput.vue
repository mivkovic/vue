<template>
  <input class='input' :type="type" v-model="value" :name="name" :placeholder="placeholder" @blur="onChange">
</template>


<script>
  export default {
    name: 'CreateInput',
    props: ['name','type','placeholder'],
    data() {
      return {
        value: ''
      }
    },
    methods: {
      onChange() {
        this.$emit('onBlur', this.value);
      }
    }
  }
</script>

<style>
  .input {
    padding: 10px 25px;
    margin: 10px 0;
    border-radius: 4px;
    border:1px solid gray;
  }
</style>
