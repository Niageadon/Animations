<template>
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
</template>

<script>
import tabs from '../../../layouts/CodeTabs'
export default {
  name: 'ex1',
  components: {
    tabs
  },
  data () {
    return {
      uHTML: '<div class="card col-2 q-mx-lg">\n' +
        '      <div class="front">front</div>\n' +
        '      <div class="back">back</div>\n' +
        '    </div>',
      uCSS: '  .front{\n' +
        '    transform-origin: top;\n' +
        '    height: 100%;\n' +
        '    width: 100%;\n' +
        '    position: absolute;\n' +
        '    background-color: aqua;\n' +
        '    backface-visibility: hidden;\n' +
        '    transform: rotateX(0deg);\n' +
        '    transition: 0.5s;\n' +
        '    text-align: center;\n' +
        '  }\n' +
        '  .back{\n' +
        '    transform-origin: top;\n' +
        '    height: 100%;\n' +
        '    width: 100%;\n' +
        '    position: absolute;\n' +
        '    background-color: #000000;\n' +
        '    backface-visibility: hidden;\n' +
        '    transform: rotateX(180deg);\n' +
        '    transition: 0.5s;\n' +
        '    color: #ffffff;\n' +
        '    text-align: center;\n' +
        '  }\n' +
        '  .card{\n' +
        '    min-width: 25px;\n' +
        '    min-height: 40px;\n' +
        '    transform-style: preserve-3d;\n' +
        '    perspective: 700px;\n' +
        '  }\n' +
        '  .card:hover .front {\n' +
        '    transform: rotateX(-180deg);\n' +
        '  }\n' +
        '  .card:hover .back {\n' +
        '    transform: rotateX(0deg);\n' +
        '  }',
      uJS: '',
      uDescription: ''
    }
  }
}
</script>

<style scoped>
  .front{
    transform-origin: top;
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
    transform-origin: top;
    height: 100%;
    width: 100%;
    position: absolute;
    background-color: #000000;
    backface-visibility: hidden;
    transform: rotateX(90deg);
    transition: 0.5s;
    color: #ffffff;
    text-align: center;
  }
  .card{
    min-width: 25px;
    min-height: 40px;
    max-height: 300px;
    transform-style: preserve-3d;
    perspective: 700px;
  }
  .card:hover .front {
    transform: rotateX(-90deg);
  }
  .card:hover .back {
    transform: rotateX(0deg);
  }
</style>
