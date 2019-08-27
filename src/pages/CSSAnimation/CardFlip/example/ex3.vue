<template>
    <div>
      <q-card  class="q-py-lg container">
        <q-card-actions :align="'center'" class="">
          <h4 class="q-mt-none q-mb-lg">Flip right</h4>
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
      uCSS: '.front{\n    @extend %card-front;\n  }\n  .back{\n    @extend %card-back;\n    transform: rotateY(-180deg);\n  }\n  .card{\n    @extend %card-body;\n    &:hover .front{\n    transform: rotateY(180deg);\n    }\n    &:hover .back{\n    transform: rotateY(0deg);\n    }\n  }\n  .container{\n    @extend %container;\n  }',
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
  }
  .back{
    @extend %card-back;
    transform: rotateY(-180deg);
  }
  .card{
    @extend %card-body;
    &:hover .front{
    transform: rotateY(180deg);
    }
    &:hover .back{
    transform: rotateY(0deg);
    }
  }
  .container{
    @extend %container;
  }
</style>
