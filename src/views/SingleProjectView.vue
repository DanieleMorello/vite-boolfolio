<script>
import AppBanner from '../components/AppBanner.vue';

export default {
  name: 'SingleProjectView'
}
</script>
    
<template>
  <AppBanner :title="$route.params.slug"></AppBanner>
</template>


<style lang="scss" scoped></style>