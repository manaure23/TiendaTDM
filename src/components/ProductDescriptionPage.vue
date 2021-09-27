<template>
  <section>
    <div v-for="producto in productos" :key="producto" id="product-description">
      <div id="img">
        <img :src="producto.img" alt="" class="img-main" />
      </div>
      <div id="description">
        <h3 class="text-description">{{ producto.brand }}</h3>
        <h2 class="text-description">
          {{ producto.name }}
        </h2>
        <h3 class="text-description">{{ producto.price }} €</h3>
        <h4 class="text-description">Color: {{ producto.color }}</h4>
        <select name="size" id="n-size">
          <option v-for="size in producto.sizes" :key="size" :value="size">
            {{ size }}
          </option>
        </select>
        <div id="add-favorite">
          <button id="add" @click="agregar(producto)">Añadir a la cesta</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { womanproducts } from "../assets/Data/Products.json";
import { manproducts } from "../assets/Data/Products.json";
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
export default {
  props: ["id"],

  data() {
    return {
      items: [...womanproducts, ...manproducts],
      product: [],
    };
  },
  setup() {
    const store = useStore();
    const agregar = (producto) => {
      store.dispatch("agregarItem", producto);
    };
    const productos = computed(() => store.state.descripcion);
    return { productos, agregar };
  },
};
</script>

<style scoped>
#product-description {
  display: inline-flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 30px;
  width: 100%;
}
#img {
  width: 400px;
  height: 500px;
  margin-left: 20px;
  margin-right: 20px;
}
.img-main {
  width: 380px;
  height: 480px;
}
#description {
  width: 400px;
  height: 500px;
  text-align: left;
  margin-top: 50px;
}
#n-size {
  width: 280px;
  height: 30px;
  margin-bottom: 10px;
  border-radius: 5px;
  font-size: 19px;
}
#add-favorite {
  display: flex;
  justify-content: left;
  width: 350px;
  margin-top: 20px;
}
#add {
  width: 280px;
  height: 35px;
  border: 1px solid black;
  font-size: 20px;
  border-radius: 8px;
}
#favorite {
  width: 40px;
  height: 35px;
  border: 1px solid black;
  border-radius: 5px;
}
.fav-img {
  width: 25px;
  height: 25px;
}
.text-description {
  margin-top: 18px;
  margin-bottom: 18px;
  font-size: 29px;
}
@media (max-width: 450px) {
  #img {
    margin: 0px;
    width: 375px;
    height: 350px;
  }
  .img-main {
    width: 320px;
    height: 340px;
  }
  #description {
    width: 375px;
    height: 370px;
    margin-top: 10px;
  }
  .text-description {
    margin-left: 10px;
    margin-bottom: 12px;
    margin-top: 12px;
  }
  #n-size {
    margin-left: 25px;
    width: 320px;
  }
  #add-favorite {
    width: 375;
    justify-content: center;
  }
  #add {
    margin-left: 15px;
  }
}
@media (min-height: 900px) and (max-height: 1000px) {
  #product-description {
    height: 650px;
  }
}
@media (min-width: 1900px) and (min-height: 1080px) {
  #product-description {
    height: 780px;
  }
}
</style>