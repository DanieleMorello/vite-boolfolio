<script>
import AppBanner from '../components/AppBanner.vue';
import PostList from '../components/ProjectList.vue';

export default {
  name: "HomeView",
  components: { AppBanner },
  components: { PostList }
}
</script>

<template>
  <AppBanner title="Home"></AppBanner>
  <PostList></PostList>
</template>

<style lang="scss" scoped></style>