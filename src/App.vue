<template>
  <div id="app">
    <FormPage />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import FormPage from "@/components/FormPage.vue";

export default Vue.extend({
  name: "App",
  components: {
    FormPage
  }
})
</script>

<style>
</style>
