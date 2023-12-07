<script>

export default {
  name: 'ProjectCard',
  data() {
    return {
    }
  },
  props: {
    project: Object
  }
  
}
</script>

<template>
  <div class="col">
    <div class="card" style="width: 18rem;">
      <img src="" class="card-img-top" alt="...">
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
        <a href="{{ project.url }}" class="card-link">Project Link</a>
        <a href="#" class="card-link">Dettagli</a>
      </div>
    </div>  
</div>
</template>

<style lang="scss" scoped>
  
</style>