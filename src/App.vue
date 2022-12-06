<template>

  <Header></Header>
  <ContentSection></ContentSection>

</template>

<script>
import Header from "./components/Header.vue";
import ContentSection from "./components/ContentSection.vue";

export default {
  components: { Header, ContentSection},
  data() {
    return {

    }
  }
}
</script>

<style lang="scss">
@use "./style/general.scss";
body {
  background-color: antiquewhite; 
}
</style>