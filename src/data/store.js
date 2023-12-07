import { reactive } from "vue";

export const store = reactive({
  apiUrl: 'http://127.0.0.1:8000/api/',
  imageUrl: 'http://127.0.0.1:8000/storage/',
  placeholder: 'http://127.0.0.1:8000/img/placeholder.jpg',
  projects: [],
});