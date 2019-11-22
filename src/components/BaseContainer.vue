<template>
  <div class="container">
      <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'BaseContainer',
}
</script>

<style scoped>
.container {
  margin: 55px 8% 0 0;
  width: 78%;
  background-color: #FFFFFF;
  padding: 40px 50px;
  border-radius: 14px;
  box-shadow: 3px 5px 20px 0px rgba(156, 161, 250, 0.16);
}
</style>
