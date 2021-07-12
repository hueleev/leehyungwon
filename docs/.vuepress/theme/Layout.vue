<!-- .vuepress/theme/Layout.vue -->
<template>
    <Disqus slot="page-bottom" class="content" />
</template>

<style scoped>
  .content {
    width: 750px;
    margin: 0 auto;
  }
</style>

<script>
  import Disqus from "../components/Disqus";
  export default {
    components: {
      Disqus
    }
  };
</script>