<template>
    <div class="tab" :class="{closed: isClosed}">
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
        <!---->
        <q-tab-panels  v-model="tab" class="content tab__content" animated>
            <q-tab-panel class="" style="white-space: pre-wrap" name="HTML">
                <q-icon @click="openTab" v-if="isClosed" name="menu_open" style="font-size: 2.5em; cursor: pointer"/>
                <code v-else>
                    {{uHTML}}
                </code>
            </q-tab-panel>
            <!---->
            <q-tab-panel style="white-space: pre-wrap" name="CSS">
                <q-icon @click="openTab" v-if="isClosed" name="menu_open" style="font-size: 2.5em; cursor: pointer"/>
                <code v-else>
                    {{uCSS}}
                </code>
            </q-tab-panel>
            <!---->
            <q-tab-panel style="white-space: pre-wrap" name="JS">
                <q-icon @click="openTab" v-if="isClosed" name="menu_open" style="font-size: 2.5em; cursor: pointer"/>
                <code v-else>
                    {{uJS}}
                </code>
            </q-tab-panel>
            <!---->
            <q-tab-panel style="white-space: pre-wrap" name="Description">
                <q-icon @click="openTab" v-if="isClosed" name="menu_open" style="font-size: 2.5em; cursor: pointer"/>
                <code v-else>
                    {{uDescription}}
                </code>
            </q-tab-panel>
        </q-tab-panels>
    </div>
</template>

<script>
export default {
    name: 'CodeTabs',
    props: ['HTML', 'CSS', 'JS', 'Description', 'closed'],
    data () {
        return {
            tab: 'HTML',
            uHTML: this.HTML || '\nempty',
            uCSS: this.CSS || '\nempty',
            uJS: this.JS || '\nempty',
            uDescription: this.Description || '\nempty',
            isClosed: this.closed || false
        }
    },
    methods: {
        openTab () {
            this.isClosed = !this.isClosed
        }
    }
}
</script>

<style scoped lang="scss">
$tab-height: 48px;
$tab-content-height: 200px - $tab-height;
    .tab{
        &.closed{
            width: 70px;
          &:first-child{
            content: "open"
          }
        }

        &__content{
          color: black;
          min-height: $tab-content-height;

        }
    }

</style>
