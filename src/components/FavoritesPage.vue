<template>
  <div>
    <h2 id="favorites-title">FAVORITOS</h2>
    <section id="favorites-items">
      <div class="favorite-card">
        <router-link to="/product-description-section"
          ><img
            src="../assets/Icons/zapatillas.svg"
            class="img-provisional"
            alt=""
          />
          zapatilla</router-link
        >
      </div>
      <div class="favorite-card">
        <router-link to="/product-description-section"
          ><img
            src="../assets/Icons/zapatillas.svg"
            class="img-provisional"
            alt=""
          />
          zapatilla</router-link
        >
      </div>
      <div class="favorite-card">
        <router-link to="/product-description-section"
          ><img
            src="../assets/Icons/zapatillas.svg"
            class="img-provisional"
            alt=""
          />
          zapatilla</router-link
        >
      </div>
      <div class="favorite-card">
        <router-link to="/product-description-section"
          ><img
            src="../assets/Icons/zapatillas.svg"
            class="img-provisional"
            alt=""
          />
          zapatilla</router-link
        >
      </div>
      <div class="favorite-card">
        <router-link to="/product-description-section"
          ><img
            src="../assets/Icons/zapatillas.svg"
            class="img-provisional"
            alt=""
          />
          zapatilla</router-link
        >
      </div>
      <div class="favorite-card">
        <router-link to="/product-description-section"
          ><img
            src="../assets/Icons/zapatillas.svg"
            class="img-provisional"
            alt=""
          />
          zapatilla</router-link
        >
      </div>
      <div class="favorite-card">
        <router-link to="/product-description-section"
          ><img
            src="../assets/Icons/zapatillas.svg"
            class="img-provisional"
            alt=""
          />
          zapatilla</router-link
        >
      </div>
      <div class="favorite-card">
        <router-link to="/product-description-section"
          ><img
            src="../assets/Icons/zapatillas.svg"
            class="img-provisional"
            alt=""
          />
          zapatilla</router-link
        >
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style>
#favorites-title {
  text-align: left;
  font-size: 40px;
  margin-top: 30px;
  margin-left: 30px;
  letter-spacing: 1px;
  font-style: italic;
}
#favorites-items {
  display: inline-flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 70%;
  margin-left: 10px;
  margin-bottom: 50px;
}
.favorite-card {
  text-align: center;
  width: 200px;
  height: 250px;
}
.favorite-card:hover {
  border-radius: 10px;
  border: 1px solid black;
}
.img-provisional {
  width: 170px;
  height: 200px;
}
a {
  text-decoration: none;
  color: black;
  font-size: 30px;
}
@media (max-width: 414px) {
  #favorites-title {
    text-align: center;
    margin-left: 0px;
  }
  #favorites-items {
    margin-left: 0px;
  }
  .favorite-card {
    margin-left: 40px;
  }
}
</style>