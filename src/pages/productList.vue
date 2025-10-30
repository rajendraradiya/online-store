<script setup>
import Card from "@/components/Card.vue";
import { onMounted, ref } from "vue";

const productList = ref([]);
const machineRollers = ref([]);
const machineSorters = ref([]);
const machineDryers = ref([]);
const machineDieCasting = ref([]);

const getProductList = async () => {
  console.log("calling1");
  const res = await fetch(
    "https://saddamakhtar88.github.io/online-store-app/http/products.json"
  );
  productList.value = await res.json();
  machineRollers.value = productList.value.filter(
    (p) => p.category === "machine_roller"
  );
  machineSorters.value = productList.value.filter(
    (p) => p.category === "machine_sorter"
  );
  machineDryers.value = productList.value.filter(
    (p) => p.category === "machine_dryer"
  );
  machineDieCasting.value = productList.value.filter(
    (p) => p.category === "machine_die_casting"
  );
};

onMounted(() => {
  getProductList();
});
</script>

<template>
  <v-row no-gutters class="pa-3">
    <v-col cols="12" class="text-left py-2">
      <h3 class="text-primary">Rollers</h3>
    </v-col>
    <v-col cols="12">
      <v-row>
        <v-col cols="2" v-for="(item, index) in machineRollers" :key="item">
          <Card
            :id="item.id"
            :name="item.name"
            :image="item.imageUrl"
            :price="item.price"
            :category="item.category"
          ></Card>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
  <v-row no-gutters class="pa-3">
    <v-col cols="12" class="text-left py-2">
      <h3 class="text-primary">Optical Sorters</h3>
    </v-col>
    <v-col cols="12">
      <v-row>
        <v-col cols="2" v-for="(item, index) in machineSorters" :key="item">
          <Card
            :id="item.id"
            :name="item.name"
            :image="item.imageUrl"
            :price="item.price"
            :category="item.category"
          ></Card>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
  <v-row no-gutters class="pa-3">
    <v-col cols="12" class="text-left py-2">
      <h3 class="text-primary">Dryers</h3>
    </v-col>
    <v-col cols="12">
      <v-row>
        <v-col cols="2" v-for="(item, index) in machineDryers" :key="item">
          <Card
            :id="item.id"
            :name="item.name"
            :image="item.imageUrl"
            :price="item.price"
            :category="item.category"
          ></Card>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
  <v-row no-gutters class="pa-3">
    <v-col cols="12" class="text-left py-2">
      <h3 class="text-primary">Die Casting Machines</h3>
    </v-col>
    <v-col cols="12">
      <v-row>
        <v-col cols="2" v-for="(item, index) in machineDieCasting" :key="item">
          <Card
            :id="item.id"
            :name="item.name"
            :image="item.imageUrl"
            :price="item.price"
            :category="item.category"
          ></Card>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>
