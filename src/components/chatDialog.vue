<template>
  <div class="chatBox">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        msg: 'hello chardialog'
      }
    }
  }
</script>

<style scoped>
  .chatBox {
    width: 350px;
    height: 100%;
    background-color: #EDEAE8;
    box-sizing: border-box;
  }
</style>
