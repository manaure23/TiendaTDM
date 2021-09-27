<template>
  <Header />
  <ManPage />
  <Footer />
</template>

<script>
import Header from "@/components/Header.vue";
import ManPage from "@/components/ManPage.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "ManSection",
  components: {
    Header,
    ManPage,
    Footer,
  },
};
</script>

<style>
</style>
