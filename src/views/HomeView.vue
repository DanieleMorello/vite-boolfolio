<script>
import AppBanner from '../components/AppBanner.vue';
import ProjectList from '../components/ProjectList.vue';

export default {
  name: "HomeView",
  components: { AppBanner, ProjectList },
}
</script>

<template>
  <AppBanner title="Home"></AppBanner>
  <ProjectList></ProjectList>
</template>

<style lang="scss" scoped></style>