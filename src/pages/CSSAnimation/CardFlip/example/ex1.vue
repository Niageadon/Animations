<template>
    <div>

      <q-card class="q-pa-lg bg-grey-2">
        <q-card-actions class="row">
          <h4 class="q-mt-none q-mb-lg col-3">Flip on hover</h4>
          <q-space/>
        </q-card-actions>
        <div class="row">
          <div class="card col-3">
            <div class="front"></div>
            <div class="back"></div>
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
  name: 'ex1',
  components: {
    tabs
  },
  data () {
    return {
      uHTML: '    <div class="row">\n' +
          '            <div class="card">\n' +
          '               <div class="front"></div>\n' +
          '            <div class="back"></div>\n' +
          '          </div>',
      uCSS: ' .front{\n' +
          '    height: 100%;\n' +
          '    width: 100%;\n' +
          '    background-image: url(https://99px.ru/sstorage/56/2013/12/image_563012130153328414049.jpg);\n' +
          '    background-position: 50% 50%;\n' +
          '    background-size: cover;\n' +
          '    position: absolute;\n' +
          '    top: 0;\n' +
          '    left: 0;\n' +
          '    background-color: #000000;\n' +
          '    backface-visibility: hidden;\n' +
          '    transform: rotateX(0deg);\n' +
          '    transition: 0.5s;\n' +
          '  }\n' +
          '  .back{\n' +
          '    height: 100%;\n' +
          '    width: 100%;\n' +
          '    position: absolute;\n' +
          '    top: 0;\n' +
          '    left: 0;\n' +
          '    background-color: #000000;\n' +
          '    backface-visibility: hidden;\n' +
          '    transform: rotateX(180deg);\n' +
          '    transition: 0.5s;\n' +
          '    color: #ffffff;\n' +
          '    text-align: center;\n' +
          '  }\n' +
          '  .card{\n' +
          '    width: 250px;\n' +
          '    height: 430px;\n' +
          '    transform-style: preserve-3d;\n' +
          '    perspective: 600px;\n' +
          '    transition: .5s;\n' +
          '    transform: rotateX(-180deg);\n' +
          '    transform: rotateX(0deg);\n' +
          '  }\n' +
          '  .card:hover .front {\n' +
          '  transform: rotateX(-180deg);\n' +
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
    height: 100%;
    width: 100%;
    background-position: 50% 50%;
    background-size: cover;
    position: absolute;
    top: 0;
    left: 0;
    background-color: aqua;
    backface-visibility: hidden;
    transform: rotateX(0deg);
    transition: 0.5s;
  }
  .back{
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #000000;
    backface-visibility: hidden;
    transform: rotateX(180deg);
    transition: 0.5s;
    color: #ffffff;
    text-align: center;
  }
  .card{
    width: 250px;
    height: 430px;
    transform-style: preserve-3d;
    perspective: 600px;
    transition: .5s;
    transform: rotateX(-180deg);
    transform: rotateX(0deg);
  }
  .card:hover .front {
  transform: rotateX(-180deg);
  }
  .card:hover .back {
    transform: rotateX(0deg);
  }
</style>
