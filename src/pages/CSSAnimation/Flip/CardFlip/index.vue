<template>
    <div class="row justify-center">
         <ex1 class="q-mt-lg col-md-10 col-xs-12"></ex1>
         <ex2 class="q-mt-lg col-md-10 col-xs-12"></ex2>
         <ex3 class="q-mt-lg col-md-10 col-xs-12"></ex3>
         <ex4 class="q-mt-lg col-md-10 col-xs-12"></ex4>
         <ex5 class="q-mt-lg col-md-10 col-xs-12"></ex5>
         <ex6 class="q-mt-lg col-md-10 col-xs-12"></ex6>
    </div>
</template>

<script>
import ex1 from './example/ex1.vue'
import ex2 from './example/ex2.vue'
import ex3 from './example/ex3.vue'
import ex4 from './example/ex4.vue'
import ex5 from './example/ex5.vue'
import ex6 from './example/ex6.vue'
export default {
    name: 'index',
    components: {
        ex1,
        ex2,
        ex3,
        ex4,
        ex5,
        ex6
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
