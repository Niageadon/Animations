<template>
  <div>
    <q-card class="q-pa-lg bg-grey-2">
      <q-card-actions class="row">
        <h4 class="q-mt-none q-mb-lg col-3">Title</h4>
        <q-space/>
      </q-card-actions>
      <div class="row">
        <div class="card col-3">
          <div class="front">front</div>
          <div class="back">back</div>
        </div>
        <q-space></q-space>
        <tabs
          v-bind:HTML="uHTML"
          v-bind:CSS="uCSS"
          v-bind:JS="uJS"
          v-bind:Description="uDescription"
          class=" col-9">
        </tabs>
      </div>

    </q-card>
  </div>
</template>

<script>
import tabs from '../../../../layouts/CodeTabs'
export default {
  name: 'template',
  components: {
    tabs
  },
  data () {
    return {
      uHTML: '',
      uCSS: '',
      uJS: '',
      uDescription: ''
    }
  }
}
</script>

<style scoped>

</style>
