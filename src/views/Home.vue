<template>
  <div>
    <HelloWorld/>
    <Counter />
  </div>
</template>

<script>
import HelloWorld from '../components/HelloWorld.vue';
import Counter from '../components/Counter.vue';

export default {
  name: 'Home',
  
  components: {
    HelloWorld,
    Counter
  },
};
</script>
