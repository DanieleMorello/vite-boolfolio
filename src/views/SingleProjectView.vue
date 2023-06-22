<script>
import AppBanner from '../components/AppBanner.vue';
import axios from 'axios';

export default {
  name: 'SingleProjectView',
  components: { AppBanner },
  data() {
    return {
      project: "",
      result: "",
      loading: true,
      base_url: 'http://127.0.0.1:8000/',
    }
  },
  methods: {
    getImageFromPath(path) {
      // console.log(this.base_url + path);
      return this.base_url + 'storage/' + path;
    },
  },
  mounted() {
    const url = this.base_url + 'api/projects/' + this.$route.params.slug;
    // console.log(url);
    axios
      .get(url)
      .then(response => {
        // console.log(response);
        this.loading = false;
        if (response.data.success) {
          this.project = response.data.result
        } else {
          this.$router.push({
            name: 'NotFound',
            // preserve current path and remove the first char to avoid the target URL starting with `//`
            params: { pathMatch: this.$route.path.substring(1).split('/') },
          })
        }
      })
      .catch(error => {
        console.error(error);
        this.error = error.message;
      })
  }
}
</script>
    
<template>
  <AppBanner :title="project.title" v-if="project"></AppBanner>
  <div v-if="project">
    <img :src="getImageFromPath(project.project_image)" class="img-fluid" alt="project.title">
    {{ project.title }}
  </div>
</template>


<style lang="scss" scoped></style>