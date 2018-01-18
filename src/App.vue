<template>
  <div id="app">
    <button type="button" @click="callUnauthorized">unauthorized</button>
    <button type="button" @click="callSystemError">system error</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    callUnauthorized: function () {
      this.$http.get('http://localhost:3000/unauthorized')
    },
    callSystemError: function () {
      this.$http.get('http://localhost:3000/systemerror')
    }
  }
}
</script>
