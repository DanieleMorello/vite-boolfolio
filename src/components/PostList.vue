<script>
import axios from 'axios';

export default {
    name: "PostList",
    data() {
        return {
            base_url: 'http://127.0.0.1:8000/',
            projects_API: 'api/projects',
            projects: [],
            loading: true,
            // error: '',
        };
    },

    mounted() {
        axios
            .get(`${this.base_url + this.projects_API}`)
            .then((response) => {
                this.projects = response.data.projects;
                this.loading = false;
                console.log(this.projects);
            })
            .catch(error => {
                console.error(error);
                this.error = error.message;
            })
    },
}
</script>

<template>
    <section class="projects">
        <div class="container">
            <h1>My Projects</h1>
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                <div v-for="project in projects">
                    <div class="card">
                        <img class="card-img-top" :src="base_url + '/storage/' + project.project_image"
                            :alt="project.title">
                        <div class="card-body">
                            <h4 class="card-title">{{ project.title }}</h4>
                            <p class="card-text">{{ project.description }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped></style>