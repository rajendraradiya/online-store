<script setup>
import { ref, onMounted, watch, inject } from "vue";
import { useRoute } from "vue-router";
import { useRouter } from "vuetify/lib/composables/router";
const store = inject("productStore");

const productList = ref([]);
const productDetails = ref(null);

const route = useRoute();
const router = useRouter();

const getProductList = async () => {
  try {
    const res = await fetch(
      "https://saddamakhtar88.github.io/online-store-app/http/products.json"
    );
    productList.value = await res.json();

    productDetails.value = productList.value.find(
      (v) => v.id === route.params.id
    );
  } catch (err) {
    console.error("Failed to load products:", err);
  }
};

watch(
  () => route.params.id,
  () => getProductList()
);

const backToProduct = () => {
  router.push(`/product`);
};

const addToCart = () => {
  store.addProduct({
    id: productDetails.value.id,
    category: productDetails.value.category,
    name: productDetails.value.name,
    price: productDetails.value.price,
    imageUrl: productDetails.value.imageUrl,
  });
};

onMounted(() => {
  getProductList();
});
</script>

<template>
  <div class="pa-4 text-left">
    <v-btn class="bg-primary" @click="backToProduct">back</v-btn>
    <v-card
      class="mx-auto pa-4 ma-4"
      elevation="0"
      v-if="productDetails"
      variant="outlined"
    >
      <v-row>
        <v-col cols="2">
          <v-img
            class="align-end text-white"
            height="300"
            :src="productDetails.imageUrl"
            cover
          >
          </v-img>
        </v-col>
        <v-col cols="4" class="text-left pt-5 pl-8">
          <div>
            <h3 class="text-primary my-3">{{ productDetails.name }}</h3>
            <p class="text-primary my-3">{{ productDetails.category }}</p>
            <p class="text-primary my-3">
              x {{ productDetails.price.toFixed(2) }}
            </p>
          </div>
          <v-btn color="primary" class="mt-12" @click.stop="addToCart">
            <v-icon class="mr-2">mdi-cart</v-icon> <span>Add to Cart</span>
          </v-btn>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>
