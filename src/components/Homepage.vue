<template>
  <div>
    <a href="#"
      ><img class="commercial" src="../assets/commercialImg.png" alt=""
    /></a>
    <h2 class="h2-titles">Novedades</h2>
    <section id="novelties">
      <div
        v-for="novelty in noveltySection"
        :key="novelty"
        class="novelty-card"
      >
        <router-link
          :to="{
            name: 'ProductDescriptionSection',
          }"
          ><img
            :src="novelty.img"
            class="img-provisional"
            :alt="novelty.name"
          />
          <p class="item-name">{{ novelty.name }}</p>
          <p class="item-type">{{ novelty.type }} - {{ novelty.gender }}</p>
        </router-link>
      </div>
    </section>
  </div>
</template>

<script>
import { womanproducts } from "../assets/Data/Products.json";
import { manproducts } from "../assets/Data/Products.json";
export default {
  name: "Homepage",
  data() {
    return {
      noveltySection: [],
      items: [...womanproducts, ...manproducts],
    };
  },
  mounted() {
    function numberRandom(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    }
    for (var i = 0; i < 4; i++) {
      var random = numberRandom(0, this.items.length);
      this.noveltySection.push(this.items[random]);
      this.items.splice(random, 1);
    }
  },
};
</script>

<style scoped>
.commercial {
  border: 2px solid rgba(90, 90, 250, 0.39);
  border-radius: 12px;
  width: 80%;
  height: 350px;
  margin-left: 50px;
  margin-top: 50px;
}
.h2-titles {
  margin-top: 50px;
  margin-left: 20px;
  margin-bottom: 20px;
  text-align: left;
  font-size: 40px;
}
#novelties {
  display: inline-flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 80%;
  margin-left: 10px;
  margin-bottom: 50px;
}
.novelty-card {
  text-align: center;
  width: 180px;
  height: 250px;
}
a {
  text-decoration: none;
  color: black;
  font-size: 30px;
}
.img-provisional {
  width: 170px;
  height: 200px;
}
.item-name {
  font-size: 19px;
  margin: 0px;
}
.item-type {
  font-size: 15px;
  color: rgba(56, 56, 56, 0.699);
}
@media (max-width: 450px) {
  .commercial {
    width: 70%;
    height: 150px;
    margin-left: 0px;
  }
  .h2-titles {
    text-align: center;
    margin-left: 0px;
  }
  #novelty {
    align-items: center;
    width: 300px;
  }
  .novelty-card {
    margin-left: 60px;
  }
}
@media (min-width: 451px) and (max-width: 968px) {
  .commercial {
    margin-left: 0px;
    height: 290px;
  }
  #novelties {
    justify-content: space-around;
    width: 100%;
    margin-left: 0px;
  }
  .novelty-card {
    width: 115px;
    height: 280px;
  }
  .img-provisional {
    width: 115px;
    height: 175px;
  }
}
</style>
