<script>
import { store } from '../data/store';
import ProjectCard from './partials/ProjectCard.vue';

export default {
  name: 'Main',

  components: {
    ProjectCard,
  },

  data() {
    return {
      titolo: 'I miei progetti',
      store
    }
  },
  
}
</script>

<template>
    <h1 class="text-center">{{ titolo }}</h1>
    <div class="row">
      <ProjectCard v-for="project in store.projects" :key="project.id" :project="project"/>
    </div>
</template>

<style lang="scss" scoped>
  
</style>