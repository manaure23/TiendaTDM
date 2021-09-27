<template>
  <div>
    <h2 class="h2-titles">Mujer</h2>
    <select v-model="filter" name="filter" id="filter-options">
      <option value="all">Todos</option>
      <option value="zapatillas">Zapatillas</option>
      <option value="camisetas">Camisas</option>
      <option value="pantalones">Pantalones</option>
      <option value="abrigos">Abrigos</option>
    </select>
    <section id="items">
      <div v-for="item in consola2" :key="item" class="product-card">
        <router-link
          :to="{
            name: 'ProductDescriptionSection',
          }"
          @click="agregarDes(item)"
        >
          <img :src="item.img" :alt="item.name" class="img-product" />
          <p class="item-name">
            {{ item.name }}
          </p>
          <p class="item-type">
            {{ item.type }}
          </p>
        </router-link>
      </div>
    </section>
  </div>
</template>

<script>
import { computed, onMounted } from "@vue/runtime-core";
import { useStore } from "vuex";
export default {
  name: "WomanPage",
  data() {
    return {
      filter: "all",
    };
  },
  setup() {
    const store = useStore();
    const agregar = (item) => {
      store.dispatch("agregarItem", item);
    };
    const agregarDes = (item) => {
      store.dispatch("agregarItemDes", item);
    };
    onMounted(() => {
      store.dispatch("fetchData");
    });
    const items = computed(() => store.state.productos);
    return { items, agregarDes, agregar };
  },
  computed: {
    consola: function () {
      let filtro = this.items.filter((item) => {
        return item.gender == "Mujer";
      });
      return filtro;
    },
    consola2: function () {
      let filtro2 = this.consola.filter((item2) => {
        return this.filter == "all" ? item2 : item2.type == this.filter;
      });
      return filtro2;
    },
  },
};
</script>

<style scoped>
.h2-titles {
  margin-top: 40px;
  margin-left: 70px;
  margin-right: 70px;
  margin-bottom: 40px;
  text-align: center;
  border-radius: 10px;
  font-size: 40px;
  background-color: rgba(90, 90, 250, 0.13);
}
#filter-options {
  padding: 5px 70px;
  text-align: center;
  border: 1px solid rgba(90, 90, 250, 0.301);
  border-radius: 10px;
  background-color: rgba(90, 90, 250, 0.144);
  font-size: 20px;
}
#items {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-top: 30px;
  margin-left: 80px;
  margin-right: 80px;
  margin-bottom: 30px;
}
.product-card {
  text-align: center;
  width: 235px;
  height: 300px;
  margin-left: 10px;
  margin-right: 20px;
  margin-top: 10px;
}
.product-card:hover {
  border: 2px solid black;
  border-radius: 15px;
}
a {
  text-decoration: none;
  color: black;
  font-size: 30px;
}
.img-product {
  width: 225px;
  height: 230px;
  border-radius: 15px;
}
.item-name {
  font-size: 19px;
  margin: 8px 0px 0px 0px;
}
.item-type {
  font-size: 15px;
  color: rgba(56, 56, 56, 0.699);
  margin: 3px 0px 0px 0px;
}
@media (max-width: 450px) {
  #items {
    margin-left: 0px;
    margin-right: 0px;
  }
  .product-card {
    margin-left: 27px;
  }
  .filter-button {
    width: 250px;
    margin-top: 3px;
    margin-bottom: 3px;
  }
}
@media (min-width: 451px) and (max-width: 968px) {
  .h2-titles {
    margin-bottom: 25px;
  }
  .filter-button {
    width: 400px;
    margin-top: 5px;
  }
  .menu-filter-buttons {
    flex-direction: column;
  }
}
</style>