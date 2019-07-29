<template>
    <div>
      <q-card class="q-pa-lg bg-grey-2">
        <q-card-actions class="row">
          <h4 class="q-mt-none q-mb-lg col-3">Diagonal flip right</h4>
          <q-space/>
        </q-card-actions>
        <div class="row">
          <div class="card col-3">
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
      uCSS: '  .front{\n' +
        '    height: 100%;\n' +
        '    width: 100%;\n' +
        '    position: absolute;\n' +
        '    background-color: aqua;\n' +
        '    backface-visibility: hidden;\n' +
        '    transform: rotate3d(1, 0, 0, 0deg);\n' +
        '    transition: 0.8s;\n' +
        '    text-align: center;\n' +
        '  }\n' +
        '  .back{\n' +
        '    height: 100%;\n' +
        '    width: 100%;\n' +
        '    position: absolute;\n' +
        '    background-color: #000000;\n' +
        '    backface-visibility: hidden;\n' +
        '    transform: rotate3d(1, 1, 0, 180deg);\n' +
        '    transition: 0.8s;\n' +
        '    color: #ffffff;\n' +
        '    text-align: center;\n' +
        '  }\n' +
        '  .card{\n' +
        '    position: relative;\n' +
        '    width: 250px;\n' +
        '    height: 430px;\n' +
        '    transform-style: preserve-3d;\n' +
        '    z-index:2;\n' +
        '  }\n' +
        '  .card:hover .front {\n' +
        '    transform: rotate3d(1, 1, 0, 180deg);\n' +
        '  }\n' +
        '  .card:hover .back {\n' +
        '    transform: rotate3d(1, 0, 0, 0deg);\n' +
        '  }\n',
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
    transform: rotate3d(1, 0, 0, 0deg);
    transition: 0.8s;
    text-align: center;
  }
  .back{
    height: 100%;
    width: 100%;
    position: absolute;
    background-color: #000000;
    backface-visibility: hidden;
    transform: rotate3d(1, 1, 0, 180deg);
    transition: 0.8s;
    color: #ffffff;
    text-align: center;
  }
  .card{
    position: relative;
    width: 250px;
    height: 430px;
    transform-style: preserve-3d;
    z-index:2;
  }
  .card:hover .front {
    transform: rotate3d(1, 1, 0, 180deg);
  }
  .card:hover .back {
    transform: rotate3d(1, 0, 0, 0deg);
  }
</style>
