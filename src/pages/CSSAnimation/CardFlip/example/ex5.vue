<template>
    <div>
      <q-card  class="q-py-lg container">
        <q-card-actions :align="'center'" class="">
          <h4 class="q-mt-none q-mb-lg">Diagonal flip left</h4>
        </q-card-actions>
        <!------------------------------>
        <div class="row justify-center">
          <div class="card col-md-2 col-xs-12 q-mx-lg">
            <div class="front">front</div>
            <div class="back">back</div>
          </div>
          <!------------------------------>
          <tabs
            v-bind:HTML="uHTML"
            v-bind:CSS="uCSS"
            v-bind:JS="uJS"
            v-bind:Description="uDescription"
            class="col-md-9 col-xs-12">
          </tabs>
        </div>

      </q-card>
    </div>
</template>

<script>
import tabs from '../../../../layouts/CodeTabs'
export default {
    name: 'ex1',
    components: {
        tabs
    },
    data () {
        return {
            uHTML: '\n<div>\n' +
                '    <div class="card">\n' +
                '        <div class="front">front</div>\n' +
                '    <div class="back">back</div>\n' +
                '</div>',
            uCSS: '\n  .front{\n    @extend %card-front;\n    transition: 1s;\n  }\n  .back{\n    @extend %card-back;\n    transition: 1s;\n    transform: rotate3d(1, 1, 0, 0.5turn);\n  }\n  .card{\n    @extend %card-body;\n    &:hover .front{\n    transform: rotate3d(1, 1, 0, 0.5turn);\n    }\n    &:hover .back{\n    transform: rotate3d(1, 0, 0, 0turn);\n    }\n  }\n  .container{\n    @extend %container;\n  }',
            uJS: '',
            uDescription: ''
        }
    }
}
</script>

<style scoped lang="scss">
@import '../../../../css/card.scss';
  .front{
    @extend %card-front;
    transition: 1s;
  }
  .back{
    @extend %card-back;
    transition: 1s;
    transform: rotate3d(1, 1, 0, 0.5turn);
  }
  .card{
    @extend %card;
    &:hover .front{
    transform: rotate3d(1, 1, 0, 0.5turn);
    }
    &:hover .back{
    transform: rotate3d(1, 0, 0, 0turn);
    }
  }
  .container{
    @extend %container;
  }
</style>
