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
    <section class="projects" v-if="projects && !loading">
        <div class="container">
            <h1>My Projects</h1>
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                <div v-for="project in projects">
                    <div class="card h-100">
                        <img class="card-img-top" :src="base_url + '/storage/' + project.project_image"
                            :alt="project.title">
                        <div class="card-body">
                            <h4 class="card-title">{{ project.title }}</h4>
                            <p class="card-text">{{ project.description }}</p>
                            <router-link :to="{ name: 'single-project', params: { slug: project.slug } }"
                                class="nav-link">Read more</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <div v-else>
        <section class="loading">
            <div class="row">
                <div class="col">
                    <div class="card" aria-hidden="true">
                        <img src="..." class="card-img-top">
                        <div class="card-body">
                            <h5 class="card-title placeholder-glow">
                                <span class="placeholder col-6"></span>
                            </h5>
                            <p class="card-text placeholder-glow">
                                <span class="placeholder col-7"></span>
                                <span class="placeholder col-4"></span>
                                <span class="placeholder col-4"></span>
                                <span class="placeholder col-6"></span>
                                <span class="placeholder col-8"></span>
                            </p>
                            <a href="#" tabindex="-1" class="btn btn-primary disabled placeholder col-6"></a>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="card" aria-hidden="true">
                        <img src="..." class="card-img-top">
                        <div class="card-body">
                            <h5 class="card-title placeholder-glow">
                                <span class="placeholder col-6"></span>
                            </h5>
                            <p class="card-text placeholder-glow">
                                <span class="placeholder col-7"></span>
                                <span class="placeholder col-4"></span>
                                <span class="placeholder col-4"></span>
                                <span class="placeholder col-6"></span>
                                <span class="placeholder col-8"></span>
                            </p>
                            <a href="#" tabindex="-1" class="btn btn-primary disabled placeholder col-6"></a>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card" aria-hidden="true">
                        <img src="..." class="card-img-top">
                        <div class="card-body">
                            <h5 class="card-title placeholder-glow">
                                <span class="placeholder col-6"></span>
                            </h5>
                            <p class="card-text placeholder-glow">
                                <span class="placeholder col-7"></span>
                                <span class="placeholder col-4"></span>
                                <span class="placeholder col-4"></span>
                                <span class="placeholder col-6"></span>
                                <span class="placeholder col-8"></span>
                            </p>
                            <a href="#" tabindex="-1" class="btn btn-primary disabled placeholder col-6"></a>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card" aria-hidden="true">
                        <img src="..." class="card-img-top">
                        <div class="card-body">
                            <h5 class="card-title placeholder-glow">
                                <span class="placeholder col-6"></span>
                            </h5>
                            <p class="card-text placeholder-glow">
                                <span class="placeholder col-7"></span>
                                <span class="placeholder col-4"></span>
                                <span class="placeholder col-4"></span>
                                <span class="placeholder col-6"></span>
                                <span class="placeholder col-8"></span>
                            </p>
                            <a href="#" tabindex="-1" class="btn btn-primary disabled placeholder col-6"></a>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card" aria-hidden="true">
                        <img src="..." class="card-img-top">
                        <div class="card-body">
                            <h5 class="card-title placeholder-glow">
                                <span class="placeholder col-6"></span>
                            </h5>
                            <p class="card-text placeholder-glow">
                                <span class="placeholder col-7"></span>
                                <span class="placeholder col-4"></span>
                                <span class="placeholder col-4"></span>
                                <span class="placeholder col-6"></span>
                                <span class="placeholder col-8"></span>
                            </p>
                            <a href="#" tabindex="-1" class="btn btn-primary disabled placeholder col-6"></a>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    </div>
</template>

<style lang="scss" scoped></style>