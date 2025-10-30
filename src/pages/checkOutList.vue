<script setup>
import { ref, onMounted, watch, inject, computed } from "vue";
const store = inject("productStore");

const products = computed(() => store.productList.value); //

const removeItem = (id = null) => {
  store.removeProduct(id);
};

const total = computed(() => {
  if (!store || !store.productList.value.length) return 0;

  return store.productList.value.reduce((sum, product) => {
    const price = parseFloat(product.price) || 0;
    return sum + price;
  }, 0);
});
</script>

<template>
  <div class="pa-4 text-left">
    <h3 class="text-primary">Checkout</h3>
    <div v-if="products.length">
      <v-card
        class="mx-auto pa-4 ma-4"
        elevation="0"
        v-for="(productDetails, index) in products"
        :key="productDetails"
        variant="outlined"
      >
        <v-row>
          <v-col cols="8">
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
                    x {{ productDetails?.price?.toFixed(2) }}
                  </p>
                </div>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="4" class="text-right">
            <v-btn
              color="red"
              variant="flat"
              @click.stop="removeItem(productDetails.id)"
            >
              <v-icon class="">mdi-close</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-card>
    </div>
    <div class="text-right">
      <h3 class="text-primary">Total: x{{ total.toFixed(2) }}</h3>
    </div>
  </div>
</template>
