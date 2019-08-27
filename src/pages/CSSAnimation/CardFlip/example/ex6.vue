<template>
    <div>
      <q-card  class="q-py-lg container">
        <q-card-actions :align="'center'" class="">
          <h4 class="q-mt-none q-mb-lg">Diagonal flip right</h4>
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
      uHTML: '<div>\n' +
          '         <div class="card">\n' +
          '             <div class="front">front</div>\n' +
          '         <div class="back">back</div>\n' +
          '      </div>',
      uCSS: '.front{\n    @extend %card-front;\n  }\n  .back{\n    @extend %card-back;\n    transform: rotateY(180deg);\n  }\n  .card{\n    @extend %card-body;\n    &:hover .front{\n    transform: rotateY(-180deg);\n    }\n    &:hover .back{\n    transform: rotateY(0deg);\n    }\n  }\n  .container{\n    @extend %container;\n  }',
      uJS: '',
      uDescription: ''
    }
  }
}
</script>

<style scoped lang="scss">
@import '../style.scss';
  .front{
    @extend %card-front;
    transition: 1s;
  }
  .back{
    @extend %card-back;
    transition: 1s;
    transform: rotate3d(1, 1, 0, -0.5turn);
  }
  .card{
    @extend %card-body;
    &:hover .front{
    transform: rotate3d(1, 1, 0, -0.5turn);
    }
    &:hover .back{
    transform: rotate3d(1, 0, 0, 0turn);
    }
  }
  .container{
    @extend %container;
  }
</style>
