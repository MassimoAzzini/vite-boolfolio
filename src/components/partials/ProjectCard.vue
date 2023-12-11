<script>
import { store } from "../../data/store"

export default {
  name: 'ProjectCard',
  data() {
    return {
      store,
    }
  },
  props: {
    project: Object
  },

  computed: {
  },

  methods: {
  },

  mounted() {
  },
  
}
</script>

<template>
  <div class="col">
    <div class="card" style="width: 18rem;">
      <img :src="project?.image" class="card-img-top" :alt="project.image_original_name">
      <div class="card-body">
        <h5 class="card-title">{{ project.name }}</h5>
        <p class="card-text">{{ project.short_description }}</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Start project: {{ project.start_project }}</li>
        <li class="list-group-item">Tecnology: <span v-for="technology in project.technologies" :key="technology.id" class="me-2">{{ technology.name }}</span></li>
        <li class="list-group-item">Type: {{ project.type?.name }}</li>
      </ul>
      <div class="card-body">
        <a :href="project.url" target="_blank" class="card-link">Project Link</a>
        <router-link :to="{name: 'projectDetails', params:{slug: project.slug}}">Details</router-link>

      </div>
    </div>  
</div>
</template>

<style lang="scss" scoped>
  
</style>