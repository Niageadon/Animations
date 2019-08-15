<template>
    <div>
      <q-card class="q-pa-lg bg-grey-2">
        <q-card-actions class="row">
          <h4 class="q-mt-none q-mb-lg col-3">Diagonal flip right </h4>
          <q-space/>
        </q-card-actions>
        <div class="row">
          <div class="card col-2 q-mx-lg">
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
// TODO: чот не работает
import tabs from '../../../../layouts/CodeTabs'
export default {
  name: 'ex2',
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
      uCSS: '.front{\n' +
        '    height: 100%;\n' +
        '    width: 100%;\n' +
        '    position: absolute;\n' +
        '    background-color: aqua;\n' +
        '    backface-visibility: hidden;\n' +
        '    transform: rotate3d(1, 0, 0, 0turn);\n' +
        '    transition: 1s;\n' +
        '    text-align: center;\n' +
        '  }\n' +
        '  .back{\n' +
        '    height: 100%;\n' +
        '    width: 100%;\n' +
        '    position: absolute;\n' +
        '    background-color: #000000;\n' +
        '    backface-visibility: hidden;\n' +
        '    transform: rotate3d(1, 1, 0, -180deg);\n' +
        '    transition: 1s;\n' +
        '    color: #ffffff;\n' +
        '    text-align: center;\n' +
        '  }\n' +
        '  .card{\n' +
        '    position: relative;\n' +
        '    min-width: 25px;\n' +
        '    min-height: 40px;\n' +
        '    max-height: 200px;\n' +
        '    transform-style: preserve-3d;\n' +
        '    z-index:2;\n' +
        '    perspective: 700px;\n' +
        '  }\n' +
        '  .card:hover .front {\n' +
        '    transform: rotate3d(1, 1, 0, 0.5turn);\n' +
        '  }\n' +
        '  .card:hover .back {\n' +
        '    transform: rotate3d(1, 0, 0, 0turn);\n' +
        '  }',
      uJS: '',
      uDescription: ''
    }
  }
}
</script>

<style scoped>
  .front{
    height: 100%;
    width: 100%;
    position: absolute;
    background-color: aqua;
    backface-visibility: hidden;
    transform: rotate3d(1, 0, 0, 0turn);
    transition: 1s;
    text-align: center;
  }
  .back{
    height: 100%;
    width: 100%;
    position: absolute;
    background-color: #000000;
    backface-visibility: hidden;
    transform: rotate3d(1, 1, 0, -180deg);
    transition: 1s;
    color: #ffffff;
    text-align: center;
  }
  .card{
    position: relative;
    min-width: 25px;
    min-height: 40px;
    max-height: 200px;
    transform-style: preserve-3d;
    z-index:2;
    perspective: 700px;
  }
  .card:hover .front {
    transform: rotate3d(1, 1, 0, 0.5turn);
  }
  .card:hover .back {
    transform: rotate3d(1, 0, 0, 0turn);
  }
</style>
