<template>
    <div>
        <q-card  class="q-py-lg container">
            <q-card-actions :align="'center'" class="">
                <h4 class="q-mt-none q-mb-lg">flip up -> right</h4>
            </q-card-actions>
            <!------------------------------>
            <div class="row justify-center">
                <div class="cube col-md-2 col-xs-12 q-mx-lg">
                    <div class="top">top</div>
                    <div class="front">front</div>
                    <div class="bot">bot</div>
                    <div class="back">back</div>
                    <div class="left">left</div>
                    <div class="right">right</div>
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
import tabs from '../../../../../layouts/CodeTabs'
export default {
    name: 'ex1',
    components: {
        tabs
    },
    data () {
        return {
            uHTML: '\n<div class="cube col-md-2 col-xs-12 q-mx-lg">\n' +
                '    <div class="top">top</div>\n' +
                '    <div class="front">front</div>\n' +
                '    <div class="bot">bot</div>\n' +
                '    <div class="back">back</div>\n' +
                '    <div class="left">left</div>\n' +
                '    <div class="right">right</div>\n' +
                '</div>',
            uCSS: '\n@import \'../../../../css/cube.scss\';\n' +
                '    .top{\n' +
                '        @extend %cube-top;\n' +
                '        transform:  rotateX(90deg) translateZ($cube-translateZ);\n' +
                '    }\n' +
                '    .front{\n' +
                '        @extend %cube-front;\n' +
                '    }\n' +
                '    .bot{\n' +
                '        @extend %cube-bot;\n' +
                '        transform:  rotateX(-90deg) translateZ($cube-translateZ);\n' +
                '    }\n' +
                '    .back{\n' +
                '        @extend %cube-back;\n' +
                '        transform:  rotateX(-180deg) translateZ($cube-translateZ);\n' +
                '    }\n' +
                '    .left{\n' +
                '        @extend %cube-left;\n' +
                '        transform:  rotateY(-90deg) translateZ($cube-translateZ);\n' +
                '    }\n' +
                '    .right{\n' +
                '        @extend %cube-right;\n' +
                '        transform:  rotateY(90deg) translateZ($cube-translateZ);\n' +
                '    }\n' +
                '    @keyframes blurFadeIn {\n' +
                '        30% {\n' +
                '          transform: rotateX(90deg);\n' +
                '        }\n' +
                '        60% {\n' +
                '          transform: rotateX(90deg) rotateZ(90deg);\n' +
                '        }\n' +
                '    }\n' +
                '    .cube{\n' +
                '        @extend %cube;\n' +
                '        transform-origin: 50% 50% 0;\n' +
                '        &:hover{\n' +
                '        //transform: rotateY(-90deg);\n' +
                '          animation: 2s blurFadeIn;\n' +
                '        }\n' +
                '    }\n' +
                '    .container{\n' +
                '        @extend %container;\n' +
                '    }',
            uJS: '',
            uDescription: ''
        }
    }
}
</script>

<style scoped lang="scss">
@import '../../../../../css/cube';
    .top{
        @extend %cube-top;
        transform:  rotateX(90deg) translateZ($cube-translateZ);
    }
    .front{
        @extend %cube-front;
    }
    .bot{
        @extend %cube-bot;
        transform:  rotateX(-90deg) translateZ($cube-translateZ);
    }
    .back{
        @extend %cube-back;
        transform:  rotateX(-180deg) translateZ($cube-translateZ);
    }
    .left{
        @extend %cube-left;
        transform:  rotateY(-90deg) translateZ($cube-translateZ);
    }
    .right{
        @extend %cube-right;
        transform:  rotateY(90deg) translateZ($cube-translateZ);
    }
    @keyframes blurFadeIn {
        30% {
          transform: rotateX(90deg);
        }
        60% {
          transform: rotateX(90deg) rotateZ(90deg);
        }
    }
    .cube{
        @extend %cube;
        transform-origin: 50% 50% 0;
        &:hover{
        //transform: rotateY(-90deg);
          animation: 2s blurFadeIn;
        }
    }
    .container{
        @extend %container;
    }
</style>
