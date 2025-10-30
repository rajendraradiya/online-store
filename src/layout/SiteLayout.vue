<script setup>
import { onMounted, ref, onUnmounted, provide } from "vue";
import logo from "../assets/logo.svg";
import { useRouter } from "vuetify/lib/composables/router";

const currentTime = ref(null);
let timer = null;
const router = useRouter();

const productList = ref([]);

const generateId = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};
const addProduct = (product) => {
  productList.value.push({
    ...product,
    id: generateId(),
  });
};

const removeProduct = (id) => {
  productList.value = productList.value.filter((p) => p.id !== id);
};

const backToCheckout = () => {
  router.push(`/checkout`);
};

const getTime = () => {
  timer = setInterval(() => {
    console.log("calling");
    const date = new Date();
    const formatted = date.toLocaleString("en-US", {
      month: "short",
      day: "2-digit",
      year: "2-digit",
      hour: "numeric",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });

    currentTime.value = formatted.replace(" ", "/").replace(",", "/");
  }, 1000);
};

provide("productStore", {
  productList,
  addProduct,
  removeProduct,
});

onMounted(() => {
  getTime();
});

onUnmounted(() => {
  clearInterval(timer);
});
</script>
<template>
  <v-layout class="d-flex flex-column">
    <v-app-bar>
      <template v-slot:prepend>
        <v-app-bar-nav-icon class="d-none"></v-app-bar-nav-icon>
      </template>

      <v-row no-gutters>
        <v-col cols="4">
          <RouterLink to="/product" class="d-flex justify-end">
            <v-img :src="logo" height="40px" contain width="20px"></v-img>
          </RouterLink>
        </v-col>
        <v-col cols="4" class="d-flex justify-center align-center">
          <p class="text-primary">{{ currentTime }}</p>
        </v-col>
        <v-col cols="4" class="text-right">
          <v-btn @click="backToCheckout">
            <p class="text-capitalize" :style="{ color: '#00a294' }">
              Cart ({{ productList.length }})
            </p>
          </v-btn>
        </v-col>
      </v-row>

      <template v-slot:append>
        <v-btn icon="mdi-dots-vertical"></v-btn>
      </template>
    </v-app-bar>

    <v-main class="layout-Color">
      <div>
        <RouterView :key="$route.path"> </RouterView>
      </div>
      <TheFooter />
    </v-main>
  </v-layout>
</template>
