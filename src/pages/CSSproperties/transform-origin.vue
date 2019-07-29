<template>
  <div class="row justify-center q-mt-lg">
    <q-card class="col-9">
      <q-card-section>Описание: Устанавливает координаты точки, относительно которой будет происходить трансформация элемента.</q-card-section>
      <q-card-section>Синтаксис: transform-origin: &lt;x&gt; &lt;y&gt; &lt;z&gt;</q-card-section>
      <q-card-section>Примеры использования:</q-card-section>
        <q-card-section class="q-ml-lg">transform-origin: center;</q-card-section>
        <q-card-section class="q-ml-lg">transform-origin: top left;</q-card-section>
        <q-card-section class="q-ml-lg">transform-origin: 50px 50px;</q-card-section>
        <q-card-section class="q-ml-lg">transform-origin: bottom right 60px;</q-card-section>
    </q-card>

    <q-card class="col-9 q-ma-lg">
      <q-card-section>transform-origin: top</q-card-section>
      <ex1></ex1>
    </q-card>

    <q-card class="col-9 q-ma-lg">
      <q-card-section>transform-origin: bot</q-card-section>
      <ex2></ex2>
    </q-card>
  </div>
</template>

<script>
import ex1 from './transform-origin/ex1'
import ex2 from './transform-origin/ex2'
export default {
  name: 'transform-origin',
  components: {
    ex2,
    ex1
  }
}
</script>

<style scoped>
  .tab {
  }

</style>
