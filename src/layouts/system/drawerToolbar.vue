<template>
  <div>
      <!-----------------toolbar------------------------->
      <q-header bordered class="bg-primary text-white">
        <q-toolbar>
          <q-btn dense flat round icon="menu" @click="drawer = !drawer"></q-btn>
          <q-toolbar-title>
            APP
          </q-toolbar-title>
        </q-toolbar>
      </q-header>
      <!-----------------------drawer------------------------->
      <q-drawer v-model="drawer" side="left" overlay bordered>
        <q-list bordered class="rounded-borders">
          <!--------css------->
          <q-expansion-item
            expand-separator
            icon="donut_small"
            label="CSS animations"
            caption="some boba"
          >

          </q-expansion-item>

          <!-------js-->
          <q-expansion-item
            expand-separator
            icon="brush"
            label="JS animations"
            caption="some boba"
          >

          </q-expansion-item>
        </q-list>
      </q-drawer>

  </div>
</template>

<script>
export default {
  name: 'Toolbar',
  data () {
    return {
      drawer: true
    }
  },

  methods: {
    logout () {
    }
  },

  computed: {
  }
}
</script>

<style scoped>

</style>
