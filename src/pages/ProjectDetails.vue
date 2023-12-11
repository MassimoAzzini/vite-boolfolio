<script>
import axios from 'axios';
import {store} from '../data/store';
import Loader from '../components/partials/Loader.vue'


export default {
  name: 'ProjectDetails',
  data() {
    return {
      project:{},
      isLoaded: false,
    }
  },

  components:{
    Loader
  },

  methods: {
    getProject(slug) {
      axios.get(store.apiUrl + 'projects/get-project/' + slug)
      .then(res => {
        if(!res.data.project){
          this.$router.push({name: 'error-404'})
        }

        this.isLoaded = true;
        this.project = res.data.project;
      })
    },

  },

  mounted() {
    this.getProject(this.$route.params.slug);
  },
  
  computed: {
    technologiesList() {
      return this.project.technologies?.map(technology => technology.name).join(', ') || '--';
    }
  },

}
</script>

<template>
  <Loader v-if="!isLoaded"/>

  <div v-else class="bg-dark text-white p-5 opacity-75">

    <div class="d-flex justify-content-between align-items-center">
        <div class="d-flex align-items-center">
            <span class="text-white me-3 fw-bold fs-4">Name Project: </span>
            <h1 class="fw-bold text-capitalize"> {{ project.name }}</h1>
        </div>

        <div>
            <a class="btn btn-primary" href="#">Index</a>
        </div>
    </div>

    <div class="row my-4">
        <div class="col">
            <strong>Start Project: </strong> <span>{{ project.start_project }}</span>
        </div>
        <div class="col">
            <strong>End Project: </strong>

            <span>{{ project?.end_project || 'Project still in progress' }}</span>

        </div>

        <div class="col">
            <strong>Technology: </strong>
            <span class="badge text-bg-info">{{ technologiesList }}</span>
        </div>

        <div class="col">
            <strong>Type: </strong>
            <span>{{ project.type?.name }}</span>
        </div>

        <div class="col">
            <strong>Link Project: </strong> <a href="{{ project.url }}"> Project link </a>
        </div>
    </div>

    <div>
        <img :src="project?.image" :alt="project?.image_original_name">
    </div>


    <p>
        <strong>Description Project: </strong>{{ project.description }}
    </p>
  </div>

</template>


<style lang="scss" scoped>

</style>