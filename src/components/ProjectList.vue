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
            links: '',
            error: '',
            max_text_length: 100,
        };
    },
    methods: {
        getProjects(url) {

            axios
                .get(url)
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
        getImageFromPath(path) {
            // console.log(this.base_url + 'storage/' + path);
            return this.base_url + 'storage/' + path;
        },
        prevPage(path) {
            // console.log(path);
            this.getProjects(path);
        },
        nextPage(path) {
            // console.log(path);
            this.getProjects(path);
        },
        truncateText(text) {
            if (text.length > this.max_text_length) {
                // console.log(text.slice(0, 100));
                return text.slice(0, this.max_text_length) + '...';
            }
            // console.log(text);
            return text
        }
    },
    mounted() {
        this.getProjects(`${this.base_url + this.projects_API}`)
    },
}
</script>

<template>
    <section class="projects" v-if="projects && !loading">
        <div class="container">
            <h1>My Projects</h1>
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                <div v-for="project in projects.data">
                    <div class="card h-100">
                        <img class="card-img-top" :src="base_url + '/storage/' + project.project_image"
                            :alt="project.title">
                        <div class="card-body">
                            <h4 class="card-title">{{ project.title }}</h4>
                            <p class="card-text">{{ truncateText(project.description) }}</p>
                            <router-link :to="{ name: 'single-project', params: { slug: project.slug } }"
                                class="nav-link">Read more</router-link>
                        </div>
                        <div class="card-footer">
                            <span class="badge bg-primary">{{ project.id }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container mt-4" v-if="projects">
            <nav aria-label="Page navigation">
                <ul class="pagination">
                    <li class="page-item">
                        <button class="page-link" href="#" aria-label="Previous" v-if="projects.prev_page_url"
                            @click="prevPage(projects.prev_page_url)">
                            <span aria-hidden="true">&laquo;</span>
                        </button>
                    </li>
                    <!-- Todo -->
                    <!-- <li class="page-item active" aria-current="page">
                        <router-link class="page-link" :to="{ name: 'per_page', params: 1 }">1</router-link>
                    </li>
                    <li class="page-item">
                        <router-link class="page-link" :to="{ name: 'per_page', params: 2 }">2</router-link>
                    </li>
                    <li class="page-item">
                        <router-link class="page-link" :to="{ name: 'per_page', params: 3 }">3</router-link>
                    </li> -->
                    <li class="page-item">
                        <button class="page-link" href="#" aria-label="Next" v-if="projects.next_page_url"
                            @click="nextPage(projects.next_page_url)">
                            <span aria-hidden="true">&raquo;</span>
                        </button>
                    </li>
                </ul>
            </nav>

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