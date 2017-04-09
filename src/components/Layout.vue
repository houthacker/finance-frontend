<template>
  <div>
    <f-header></f-header>
    <router-view class="container"></router-view>
  </div>
</template>

<script>
  import FHeader from './Header'

  export default {
    name: 'f-layout',
    components: {
      FHeader
    }
  }
</script>
