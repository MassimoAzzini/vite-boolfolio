<script>
export default {
  name: 'Navigator',

  props: {
    paginator: Object,
  },

  data() {
    return {
    }
  },
  methods: {
    callApi(linkUrl){
      console.log(linkUrl);
      this.$emit('callApi', linkUrl);
    }
  }
  
}
</script>
<template>
  <div class="text-center mt-3">
    <button
      @click="callApi(paginator.firstPageUrl)"
      :disabled="paginator.currentPage == 1">
        |&lt;
    </button>

    <button
      v-for="link in paginator.links"
      :key="link.label"
      class="px-2 mx-2"
      v-html="link.label"
      :disabled="link.active || !link.url"
      @click="callApi(link.url)">
    </button>

    <button
      @click="callApi(paginator.lastPageUrl)"
      :disabled="paginator.currentPage == paginator.lastPage">
        &gt;|
    </button>
  </div>
</template>

<style lang="scss" scoped>
  
</style>