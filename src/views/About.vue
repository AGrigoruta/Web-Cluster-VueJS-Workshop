<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p v-if="apiData.success">
      {{ apiData.message }}
    </p>
    <p v-else>
      Whoomp whoomp, no api for you
    </p>
  </div>
</template>

<script>
  export default {
    name: 'About',
    data() {
      return {
        apiData: {}
      }
    },
    mounted() {
      fetch(`http://localhost:8081/api/test`)
        .then(response => response.json())
        .then((apiData) => {
          this.apiData = apiData
        })
    }
  }
</script>