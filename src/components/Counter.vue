<template>
    <section>
        <span>Click to increment or decrement counter using vuex </span>
        <button type="button" v-on:click="increment()">Increment Counter: {{ count }}</button>
        <button type="button" v-on:click="decrement()">Decrement Counter: {{ count }}</button>
    </section>
</template>

<script>
export default {
  name: 'Counter',
  computed: {
      count() {
          return this.$store.state.count
      }
  },
  methods: {
    increment() {
        this.$store.commit('increment')
        console.log(this.$store.state.count)
    },

    decrement() {
        this.$store.commit('decrement')
        console.log(this.$store.state.count)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
