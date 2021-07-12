<template>
  <main class="page">
    <slot name="top" />

    <Content class="theme-default-content" />
    <PageEdit />

    <PageNav v-bind="{ sidebarItems }" />

    <slot name="bottom">
      <Disqus slot="page-bottom" class="content" />
    </slot>
  </main>
</template>

<script>
import PageEdit from '@theme/components/PageEdit.vue'
import PageNav from '@theme/components/PageNav.vue'

import Disqus from "../../components/Disqus";

export default {
  components: { PageEdit, PageNav, Disqus },
  props: ['sidebarItems']
}
</script>

<style lang="stylus">
@require '../styles/wrapper.styl'
.content {
    width: 750px;
    margin: 0 auto;
}
.page
  padding-bottom 2rem
  display block

</style>
