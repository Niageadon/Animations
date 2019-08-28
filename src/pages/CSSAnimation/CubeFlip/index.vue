<template>
  <div class="row justify-center">
   <ex1 class="q-mt-lg col-md-10 col-xs-12"></ex1>
  </div>
</template>

<script>
import ex1 from './example/ex1.vue'

export default {
  name: 'index',
  components: {
    ex1
  },
  data () {
    return {
      dd: 'ddssd'
    }
  }
}
</script>

<style scoped>
</style>
