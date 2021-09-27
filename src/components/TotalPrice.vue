<template>
  <section>
    <div v-if="Object.keys(productos).length === 0" id="empty">
      <p>Su carrito esta vacio</p>
    </div>
    <div v-else id="cart-price">
      <h3 class="text-cart-price" id="title-total-price">
        <strong>TOTAL</strong>
      </h3>
      <h4 class="text-cart-price">Subtotal:</h4>
      <h4 class="text-cart-price">Envio</h4>
      <h3 class="text-cart-price" id="text-total-price">
        Total {{ totalPrice }}
      </h3>
      <button class="checkout"><strong>Tramitar pedido</strong></button>
    </div>
  </section>
</template>

<script>
import { computed } from "@vue/reactivity";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const totalPrice = computed(() => store.getters.totalPrecio);
    const productos = computed(() => store.state.carrito);
    const vaciar = () => {
      store.commit("vaciarCarrito");
    };
    return { totalPrice, productos, vaciar };
  },
};
</script>

<style>
#empty p {
  font-size: 28px;
  margin-left: 60px;
}
#cart-price {
  width: 450px;
  height: 330px;
  background-color: rgba(90, 90, 250, 0.226);
  text-align: left;
  margin-left: 100px;
  margin-top: 35px;
  border-radius: 10px;
}
.checkout {
  width: 300px;
  height: 35px;
  background-color: rgba(90, 90, 250, 0.39);
  margin-left: 80px;
  margin-top: 30px;
  border: 1px black solid;
  border-radius: 9px;
  text-align: center;
  font-size: 20px;
  letter-spacing: 1px;
}
.text-cart-price {
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 10px;
}
#text-total-price {
  border-top: 2px solid black;
  padding-top: 10px;
}
@media (max-width: 376px) {
  #cart-price {
    margin-left: 3px;
    width: 350px;
  }
  .checkout {
    margin-left: 12px;
    width: 330px;
  }
}
@media (min-width: 377px) and (max-width: 450px) {
  #cart-price {
    margin-left: 3px;
    width: 410px;
  }
  .checkout {
    margin-left: 20px;
    width: 330px;
  }
}
</style>