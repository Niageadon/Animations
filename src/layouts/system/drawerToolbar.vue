<template>
  <div>
      <!-----------------toolbar------------------------->
      <q-header bordered class="toolbar text-white">
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
              <!-----------------------------------------css------------------------------------------------------------->
              <q-expansion-item
                expand-separator
                icon="donut_small"
                label="CSS animations"
                caption="some boba"
              >
                  <q-expansion-item
                    :header-inset-level="1"
                    expand-separator
                    label="Card flip"
                    caption="some boba"
                  >
                      <q-list dense >
                        <!--input links here-->
                          <q-item to="/CSS/card-flip" clickable v-ripple>
                              <q-item-section style="text-align: center">
                                  Card
                              </q-item-section>
                          </q-item>
                          <q-item to="/CSS/cube-flip" clickable v-ripple>
                              <q-item-section style="text-align: center">
                                  Cube
                              </q-item-section>
                          </q-item>
                      </q-list>
                  </q-expansion-item>
              </q-expansion-item>
              <!----------------------------------------SVG-Animation----------------------------------------------------->
              <q-expansion-item
              expand-separator
              icon="brush"
              label="SVG animations"
              caption="some boba"
              >
               <!---------------------------smooth display------------------------------>
              <q-expansion-item
                  :header-inset-level="1"
                  expand-separator
                  label="Smooth display"
                  caption="some boba"
              >
                  <q-list dense >
                      <!--input links here-->
                      <q-item to="/CSS/logo-animations" clickable v-ripple>
                          <q-item-section style="text-align: center">
                              Text
                          </q-item-section>
                      </q-item>
                  </q-list>
              </q-expansion-item>
              </q-expansion-item>
              <!----------------------------------------js---------------------------------------------------------------->
              <q-expansion-item
              expand-separator
              icon="brush"
              label="JS animations"
              caption="some boba"
              >
              </q-expansion-item>
              <!------------------------------------------css properties----------------------------------------------------->
              <q-expansion-item
                  expand-separator
                  icon="android"
                  label="CSS properties"
                  caption="some boba"
              >
                  <q-list dense >
                      <!--input links here-->
                      <q-item to="/CSS-property/transform-origin" clickable v-ripple>
                          <q-item-section style="text-align: center">
                              transform-origin
                          </q-item-section>
                      </q-item>
                  </q-list>
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
    },
    computed: {
    }
}
</script>

<style scoped lang="scss">
  @import "../../css/app.scss";

  .toolbar{
    background-color: $app-toolbar-bg;
  }
</style>
