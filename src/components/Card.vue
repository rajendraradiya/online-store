<script setup lang="js">
import { inject } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const store = inject("productStore");

const { id, name ,price , image ,category} = defineProps(["name" , "price" ,"image" ,"id","category"])


const navigateToDetails = () =>{
  router.push(`/details/${id}`);
}

const addToCart = () =>{
  store.addProduct(  {
    id: id,
    category: category,
    name: name,
    price: price,
    imageUrl : image,
  },)
}
</script>

<template>
  <v-card
    class="mx-auto hover-card"
    max-width="400"
    elevation="2"
    hover
    @click="navigateToDetails"
  >
    <v-img class="align-end text-white" height="200" :src="image" cover>
    </v-img>

    <v-card-text>
      <h4 class="text-primary">{{ name }}</h4>
    </v-card-text>

    <v-card-actions class="d-flex">
      <v-btn color="primary"> x{{ price.toFixed(2) }} </v-btn>

      <v-spacer></v-spacer>
      <v-btn color="primary" text="Explore" @click.stop="addToCart">
        <v-icon>mdi-cart</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
