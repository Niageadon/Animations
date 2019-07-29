<template>
    <div >
      <q-tabs
        v-model="tab"
        no-caps
        class="shadow-2  bg-grey-5"
      >
        <q-tab v-bind:class="{'bg-white':(tab === 'HTML')}" name="HTML" label="HTML" />
        <q-tab v-bind:class="{'bg-white':(tab === 'CSS')}" name="CSS" label="CSS" />
        <q-tab v-bind:class="{'bg-white':(tab === 'JS')}" name="JS" label="JS" />
        <q-tab v-bind:class="{'bg-white':(tab === 'Description')}" name="Description" label="Description" />
      </q-tabs>
      <q-separator />

      <q-tab-panels   v-model="tab" animated>
        <q-tab-panel style="white-space: pre-wrap" name="HTML">
          <div class="text-h6"></div>
          {{uHTML}}
        </q-tab-panel>

        <q-tab-panel style="white-space: pre-wrap" name="CSS">
          <div class="text-h6"></div>
          {{uCSS}}
        </q-tab-panel>

        <q-tab-panel style="white-space: pre-wrap" name="JS">
          <div class="text-h6"></div>
          {{uJS}}
        </q-tab-panel>

        <q-tab-panel style="white-space: pre-wrap" name="Description">
          <div class="text-h6"></div>
          {{uDescription}}
        </q-tab-panel>
      </q-tab-panels>
    </div>
</template>

<script>
export default {
  name: 'CodeTabs',
  props: ['HTML', 'CSS', 'JS', 'Description'],
  data () {
    return {
      tab: 'HTML',
      uHTML: this.HTML || 'empty',
      uCSS: this.CSS || 'empty',
      uJS: this.JS || 'empty',
      uDescription: this.Description || 'empty'
    }
  }

}
</script>

<style scoped>
  .content{
    max-height: 200px;
  }
</style>
