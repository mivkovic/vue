<template>
    
    <li :class="{done: completed}">{{ name }}</li>

</template>

<script>
export default {
  props: ['name','completed','priority']
}
</script>

<style>

.done{
    text-decoration: line-through;
}

</style>
