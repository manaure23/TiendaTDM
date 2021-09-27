<template>
  <Header />
  <WomanPage />
  <Footer />
</template>

<script>
import Header from "@/components/Header.vue";
import WomanPage from "@/components/WomanPage.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "WomanSection",
  components: {
    Header,
    WomanPage,
    Footer,
  },
};
</script>

<style>
</style>
