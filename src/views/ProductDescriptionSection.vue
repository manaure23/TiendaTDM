<template>
  <Header />
  <ProductDescriptionPage />
  <Footer />
</template>

<script>
import ProductDescriptionPage from "@/components/ProductDescriptionPage.vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "ProductDescriptionSection",
  components: {
    ProductDescriptionPage,
    Header,
    Footer,
  },
  data() {
    return {
      prop: null,
    };
  },
};
</script>

<style>
</style>