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
                <q-btn v-if="show.isFull[0]" type="a" @click="toggleShow" :label="show.showAll? 'hide': 'show all'" push color="purple" />
                <q-icon @click="openTab" v-if="isClosed" name="menu_open" style="font-size: 2.5em; cursor: pointer"/>
                <code v-else>
                    {{getText[0]}}
                </code>
            </q-tab-panel>
            <!---->
            <q-tab-panel style="white-space: pre-wrap" name="CSS">
                <q-btn v-if="show.isFull[1]" type="a" @click="toggleShow" :label="show.showAll? 'hide': 'show all'" push color="purple" />
                <q-icon @click="openTab" v-if="isClosed" name="menu_open" style="font-size: 2.5em; cursor: pointer"/>
                <code v-else>
                    {{getText[1]}}
                </code>
            </q-tab-panel>
            <!---->
            <q-tab-panel style="white-space: pre-wrap" name="JS">
                <q-btn v-if="show.isFull[2]" type="a" @click="toggleShow" :label="show.showAll? 'hide': 'show all'" push color="purple" />
                <q-icon @click="openTab" v-if="isClosed" name="menu_open" style="font-size: 2.5em; cursor: pointer"/>
                <code v-else>
                    {{getText[2]}}
                </code>
            </q-tab-panel>
            <!---->
            <q-tab-panel style="white-space: pre-wrap" name="Description">
                <q-btn v-if="show.isFull[3]" type="a" @click="toggleShow" :label="show.showAll? 'hide': 'show all'" push color="purple" />
                <q-icon @click="openTab" v-if="isClosed" name="menu_open" style="font-size: 2.5em; cursor: pointer"/>
                <code v-else>
                    {{getText[3]}}
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
            isClosed: this.closed || false,
            show: {
                showAll: false,
                showCount: 150,
                isFull: [true, true, true, true]
            }
        }
    },
    methods: {
        openTab () {
            this.isClosed = !this.isClosed
        },
        checkFull (arr) {
            this.$set(this.show.isFull, '0', arr[0].length < this.uHTML.length)
            this.$set(this.show.isFull, '1', arr[1].length < this.uCSS.length)
            this.$set(this.show.isFull, '2', arr[2].length < this.uJS.length)
            this.$set(this.show.isFull, '3', arr[3].length < this.uDescription.length)
        },
        toggleShow () {
            this.show.showAll = !this.show.showAll
        }
    },
    computed: {
        getText () {
            let arr = []
            if (this.show.showAll) {
                arr.push(this.uHTML, this.uCSS, this.uJS, this.uDescription)
            } else {
                arr.push(
                    this.uHTML.slice(0, this.show.showCount),
                    this.uCSS.slice(0, this.show.showCount),
                    this.uJS.slice(0, this.show.showCount),
                    this.uDescription.slice(0, this.show.showCount)
                )
                this.checkFull(arr)
                this.show.isFull.forEach((el, key) => {
                    if (el) {
                        arr[key] = arr[key] + '...'
                    }
                })
            }
            return arr
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
        .bg-white{
            color: #9c27b0
        }
    }

</style>
