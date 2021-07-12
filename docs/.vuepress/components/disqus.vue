<template>
  <div id="disqus_thread"></div>
</template>

<script>
  export default {
    mounted() {
      (function() {
        var d = window.document, s = d.createElement('script');
        s.src = 'https://leedamoo.disqus.com/embed.js';
        s.setAttribute('data-timestamp', +new Date());
        (d.head || d.body).appendChild(s);
      })();
    }
  }
</script>