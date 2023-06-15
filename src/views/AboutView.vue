<script>
import AppBanner from '../components/AppBanner.vue';
import PostList from '../components/ProjectList.vue';

export default {
  name: "AboutView",
  components: { AppBanner, PostList }
}
</script>

<template>
  <AppBanner title="About"></AppBanner>
  <section class="bio py-5">
    <div class="container">
      <div class="row">
        <div class="col">
          <img src="../assets/img/me.jpg" alt="Me">
        </div>
        <div class="col">
          <h2>Daniele Morello</h2>
          <p class="lead">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore earum sapiente ipsam nisi aut
            error! Soluta, culpa quis placeat, quidem non laudantium, nemo atque vel nostrum iure cum incidunt est!</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>