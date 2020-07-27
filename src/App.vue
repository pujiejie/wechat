<template>
  <div id="app">
    <chatDialog>
      <heads></heads>
    </chatDialog>
  </div>
</template>

<script>
import heads from './components/chatDialogHead'
import chatDialog from './components/chatDialog'

export default {
  name: 'App',
  components: {
    chatDialog,
    heads
  }
}
</script>

<style>
  body,
  html {
    height: 100%;
    box-sizing: border-box;
  }
  #app {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    height: 100%;
  }
</style>
