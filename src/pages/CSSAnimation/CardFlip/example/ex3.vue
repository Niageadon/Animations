<template>
    <div>
      <q-card class="q-pa-lg bg-grey-2">
        <q-card-actions class="row">
          <h4 class="q-mt-none q-mb-lg col-3">Flip right</h4>
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
        '    background-size: cover;\n' +
        '    position: absolute;\n' +
        '    background-color: aqua;\n' +
        '    backface-visibility: hidden;\n' +
        '    transform: rotateX(0deg);\n' +
        '    transition: 0.5s;\n' +
        '    text-align: center;\n' +
        '  }\n' +
        '  .back{\n' +
        '    height: 100%;\n' +
        '    width: 100%;\n' +
        '    position: absolute;\n' +
        '    background-color: #000000;\n' +
        '    backface-visibility: hidden;\n' +
        '    transform: rotateY(-180deg);\n' +
        '    transition: 0.5s;\n' +
        '    color: #ffffff;\n' +
        '    text-align: center;\n' +
        '  }\n' +
        '  .card{\n' +
        '    width: 250px;\n' +
        '    height: 430px;\n' +
        '    transform-style: preserve-3d;\n' +
        '    perspective: 700px;\n' +
        '  }\n' +
        '  .card:hover .front {\n' +
        '  transform: rotateY(180deg);\n' +
        '  }\n' +
        '  .card:hover .back {\n' +
        '    transform: rotateY(0deg);\n' +
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
    transform: rotateX(0deg);
    transition: 0.5s;
    text-align: center;
  }
  .back{
    height: 100%;
    width: 100%;
    position: absolute;
    background-color: #000000;
    backface-visibility: hidden;
    transform: rotateY(-180deg);
    transition: 0.5s;
    color: #ffffff;
    text-align: center;
  }
  .card{
    min-width: 25px;
    min-height: 40px;
    max-height: 200px;
    transform-style: preserve-3d;
    perspective: 700px;
  }
  .card:hover .front {
  transform: rotateY(180deg);
  }
  .card:hover .back {
    transform: rotateY(0deg);
  }
</style>
