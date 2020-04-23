<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: "RootApp",
  mounted() {
    window.console.log(this.$config);
  }
};
</script>