<template>
    <div>
      <q-tabs
        v-model="tab"
        no-caps
        style="background-color: #ce84e1"
        class="shadow-2 content"
      >
        <q-tab v-bind:class="{'bg-white':(tab === 'HTML')}" name="HTML" label="HTML" />
        <q-tab v-bind:class="{'bg-white':(tab === 'CSS')}" name="CSS" label="CSS" />
        <q-tab v-bind:class="{'bg-white':(tab === 'JS')}" name="JS" label="JS" />
        <q-tab v-bind:class="{'bg-white':(tab === 'Description')}" name="Description" label="Description" />
      </q-tabs>
      <q-separator />

      <q-tab-panels  v-model="tab" class="content tab" animated>
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

<style scoped lang="scss">
$tab-height: 48px;
$tab-content-height: 200px - $tab-height;
  .content{
    color: black
  }
  .tab{
    min-height: $tab-content-height;
  }
</style>
