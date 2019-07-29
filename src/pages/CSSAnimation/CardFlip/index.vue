<template>
  <div class="row justify-center">
   <ex1 class="q-mt-lg col-10"></ex1>
   <ex2 class="q-mt-lg col-10"></ex2>
   <ex3 class="q-mt-lg col-10"></ex3>
   <ex4 class="q-mt-lg col-10"></ex4>
   <ex5 class="q-mt-lg col-10"></ex5>
   <h2>    transform-origin: center;</h2>
  </div>
</template>

<script>
import ex1 from './example/ex1.vue'
import ex2 from './example/ex2.vue'
import ex3 from './example/ex3.vue'
import ex4 from './example/ex4.vue'
import ex5 from './example/ex5.vue'
export default {
  name: 'index',
  components: {
    ex1,
    ex2,
    ex3,
    ex4,
    ex5
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
