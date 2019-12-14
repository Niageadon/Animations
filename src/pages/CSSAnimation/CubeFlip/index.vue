<template>
    <div class="row justify-center">
        <ex1 class="q-mt-lg col-md-10 col-xs-12"></ex1>
        <ex2 class="q-mt-lg col-md-10 col-xs-12"></ex2>
    </div>
</template>

<script>
import ex1 from './example/ex1(flip-down).vue'
import ex2 from './example/ex2(flip-up).vue'

export default {
    name: 'index',
    components: {
        ex1,
        ex2
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
