import { createStore } from "vuex";

export default createStore({
  state: {
    productos: [],
    carrito: {},
    una: 0,
    descripcion: {},
  },
  mutations: {
    setProducto(state, payload) {
      state.productos = payload;
    },
    setAgregar(state, payload) {
      state.carrito[payload.id] = payload;
      state.una = Object.keys(state.carrito).length;
      console.log(state.carrito);
    },
    setAgregarDes(state, payload) {
      state.descripcion = {};
      state.descripcion[payload.id] = payload;
    },
    filtrarProductos(state, payload) {
      state.productos[payload.name] = payload;
    },
    vaciarCarrito(state) {
      state.carrito = {};
      state.una = Object.keys(state.carrito).length;
    },
    aumentarCantidad(state, payload) {
      state.carrito[payload].cantidad = state.carrito[payload].cantidad + 1;
    },
    disminuirCantidad(state, payload) {
      state.carrito[payload].cantidad = state.carrito[payload].cantidad - 1;
      if (state.carrito[payload].cantidad === 0) {
        delete state.carrito[payload];
      }
      state.una = Object.keys(state.carrito).length;
    },
  },
  actions: {
    async fetchData({ commit }) {
      try {
        const respuesta = await fetch("productos.json");
        const data = await respuesta.json();
        commit("setProducto", data);
      } catch (error) {
        console.log(error);
      }
    },
    agregarItem({ commit, state }, item) {
      item.talla = state.carrito.talla;
      Object.prototype.hasOwnProperty.call(state.carrito, item.id)
        ? (item.cantidad = state.carrito[item.id].cantidad + 1)
        : (item.cantidad = 1);
      commit("setAgregar", item);
    },
    agregarItemDes({ commit }, item) {
      commit("setAgregarDes", item);
    },
  },
  getters: {
    totalPrecio(state) {
      return Object.values(state.carrito)
        .reduce((acum, { cantidad, price }) => acum + cantidad * price, 0)
        .toFixed(2);
    },
  },
  modules: {},
});
