<template>
  <v-app>
    <v-app-bar>
      <v-app-bar-title>Application</v-app-bar-title>
      <template #append>
        <v-btn class="text-none me-2" height="48" icon slim>
          <v-icon
          icon="mdi-dots-vertical"
          ></v-icon>
          <v-menu activator="parent">
            <v-list density="compact" nav>
              <v-list-item append-icon="mdi-cog-outline" link title="Settings" />

              <v-list-item append-icon="mdi-logout" link title="Logout" />
            </v-list>
          </v-menu>
        </v-btn>
      </template>
    </v-app-bar>
    <v-main>
      <div class="pa-4">
        <v-sheet border="dashed md" color="surface-light" rounded="lg" width="100%">
          <p class="ms-5">Select a region:</p>
          <v-btn class="ma-3" @click="storeData.selectedRegion = 'East'">East</v-btn>
          <v-btn class="ma-3" @click="storeData.selectedRegion = 'Midwest'"
            >Midwest</v-btn
          >
          <p class="ms-5">Selected Region: {{ storeData.selectedRegion }}</p>
          <p class="ms-5 mt-5">
            After selecting a region above, click "Update Chart" below:
          </p>
          <v-btn
            class="ma-3"
            @click="
              storeData.chartData = updateData(grocerData, storeData.selectedRegion)
            "
          >
            Update Chart
          </v-btn>
          <v-card class="w-75 mt-5">
            <StoreInventoryChart />
          </v-card>
        </v-sheet>
      </div>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from "vue";
import { useDataStore } from "@/stores/dataStore.js";
import StoreInventoryChart from "@/components/storeInventoryChart.vue";
import grocerData from "./models/sample-api-data.json";

const storeData = useDataStore();

function updateData(data, selectedRegion) {
  // Filter data by selected state
  const selRegionData = data.filter((item) => item.state === selectedRegion);

  // Extract and sort store names
  const stores = [...new Set(selRegionData.map((item) => item.store))].sort();

  // Extract and sort category values
  const categories = [...new Set(selRegionData.map((item) => item.category))].sort();

  // Initialize the result array for categorized data
  const categorizedData = categories.map((category) => [
    category,
    Array(stores.length).fill(0),
  ]);

  // Populate the categorized data
  selRegionData.forEach((item) => {
    const storeIndex = stores.indexOf(item.store);
    const categoryIndex = categories.indexOf(item.category);
    categorizedData[categoryIndex][1][storeIndex] += item.inventory;
  });

  return [stores, categorizedData];
}

function logout() {
  console.log("Logging out");
}

const items = ref([
  { text: "Google", href: "https://www.google.com" },
  { text: "Github", href: "https://www.github.com" },
]);
</script>

<style scoped></style>
