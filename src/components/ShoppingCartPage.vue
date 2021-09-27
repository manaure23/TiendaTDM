<template>
  <div>
    <h2 id="shopping-cart-title">TU CESTA</h2>
    <div id="main">
      <section id="cart-description">
        <div class="cart-product" v-for="producto in productos" :key="producto">
          <div class="cart-product-img">
            <img class="img" :src="producto.img" alt="" />
          </div>
          <div class="cart-product-description">
            <h4>
              <strong>{{ producto.brand }}</strong>
            </h4>
            <h4>{{ producto.name }}</h4>
            <h4>Precio: {{ producto.price }}</h4>
          </div>
          <div class="counter">
            <button class="button-counter" @click="disminuir(producto.id)">
              -
            </button>
            <p id="cantidad">{{ producto.cantidad }}</p>
            <button class="button-counter" @click="aumentar(producto.id)">
              +
            </button>
          </div>
        </div>
      </section>
      <TotalPrice />
    </div>
  </div>
</template>

<script>
import TotalPrice from "@/components/TotalPrice.vue";
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
export default {
  name: "ShoppingCartPage",
  components: {
    TotalPrice,
  },
  setup() {
    const store = useStore();
    const productos = computed(() => store.state.carrito);
    const aumentar = (id) => {
      store.commit("aumentarCantidad", id);
    };
    const disminuir = (id) => {
      store.commit("disminuirCantidad", id);
    };
    return { productos, aumentar, disminuir };
  },
};
</script>

<style scoped>
h4 {
  line-height: 1.1;
  margin-top: 15px;
  margin-bottom: 15px;
  font-size: 22px;
}
#shopping-cart-title {
  text-align: left;
  font-size: 40px;
  margin-top: 30px;
  margin-left: 30px;
  letter-spacing: 1px;
  font-style: italic;
}
#main {
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
  margin-bottom: 50px;
}
#cantidad {
  margin-top: 50px;
  height: 30px;
  font-size: 20px;
}
#cart-description {
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  margin-top: 20px;
}
.cart-product {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  background-color: rgba(90, 90, 250, 0.226);
  margin-top: 15px;
  margin-bottom: 15px;
  height: 130px;
  border-radius: 10px;
}
.cart-product-img {
  width: 120px;
  height: 130px;
  margin-right: 40px;
}
.img {
  width: 130px;
  height: 130px;
}
.cart-product-description {
  width: 350px;
  height: 130px;
  text-align: left;
}
.counter {
  display: flex;
  justify-content: space-between;
  width: 120px;
  height: 130px;
  text-align: center;
  margin-right: 20px;
}
.button-counter {
  border-radius: 50%;
  width: 27px;
  height: 27px;
  margin-top: 45px;
}
.counter p {
  margin-top: 20px;
}

@media (max-width: 376px) {
  #cart-description {
    margin-left: 0px;
  }
  h4 {
    font-size: 17px;
  }
  .cart-product {
    margin-left: 3px;
    width: 354px;
    justify-content: space-around;
  }
  .cart-product-img {
    width: 80px;
    height: 120px;
    margin-right: 10px;
    margin-left: 10px;
  }
  .img {
    width: 100px;
  }
  .cart-product-description {
    margin-top: 10px;
    margin-left: 20px;
    width: 160px;
    height: 120px;
  }
  .counter {
    flex-direction: column-reverse;
    justify-content: space-around;
    width: 70px;
    height: 110px;
    margin: 0px;
  }
  .button-counter {
    margin-top: 5px;
  }
  .counter p {
    text-align: left;
    margin-top: 5px;
    margin-bottom: 5px;
    margin-left: 10px;
  }
  #shopping-cart-title {
    margin-left: 0px;
    text-align: center;
  }
}
@media (min-width: 377px) and (max-width: 450px) {
  #cart-description {
    margin-left: 0px;
  }
  h4 {
    font-size: 17px;
  }
  .cart-product {
    margin-left: 3px;
    width: 410px;
    justify-content: space-around;
  }
  .cart-product-img {
    width: 80px;
    height: 120px;
    margin-right: 10px;
    margin-left: 10px;
  }
  .img {
    width: 100px;
  }
  .cart-product-description {
    margin-top: 10px;
    width: 160px;
    height: 120px;
  }
  .counter {
    flex-direction: column-reverse;
    justify-content: space-around;
    width: 70px;
    height: 110px;
    margin: 0px;
  }
  .button-counter {
    margin-top: 5px;
  }
  .counter p {
    text-align: left;
    margin-top: 5px;
    margin-bottom: 5px;
    margin-left: 10px;
  }
  #shopping-cart-title {
    margin-left: 0px;
    text-align: center;
  }
}
@media (min-width: 451px) and (max-width: 968px) {
  .cart-product {
    width: 700px;
  }
  #cart-price {
    width: 545px;
    height: 400px;
  }
  .checkout {
    width: 345px;
    margin-left: 90px;
  }
}
@media (min-width: 1280px) and (max-height: 950px) {
  #main {
    height: 545px;
  }
}
@media (min-width: 1900px) and (min-height: 1080px) {
  #main {
    height: 670px;
    justify-content: space-around;
  }
}
</style>