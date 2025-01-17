<template>
  <div class="w-100">
    <p>Select a region: </p>
    <v-btn class="ma-3" @click="storeData.selectedRegion = 'East'">East</v-btn>
    <v-btn class="ma-3" @click="storeData.selectedRegion = 'Midwest'">Midwest</v-btn>
    <p>Selected Region: {{ storeData.selectedRegion }}</p>
    <p class="mt-5">After selecting a region above, click "Update Chart" below:</p>
    <v-btn 
    class="ma-3" 
    @click="storeData.chartData = updateData(grocerData, storeData.selectedRegion)">
      Update Chart
    </v-btn>
    <v-card class="w-75 mt-5">
      <StoreInventoryChart/>
    </v-card>
  </div>

</template>

<script setup>
import {useDataStore} from "@/stores/dataStore.js";
import StoreInventoryChart from "@/components/storeInventoryChart.vue";
import grocerData from "./models/sample-api-data.json";

const storeData = useDataStore();

function updateData(data, selectedRegion) {
    // Filter data by selected state 
    const selStateData = data.filter(item => item.state === selectedRegion);

    // Extract and sort store names
    const stores = [...new Set(selStateData.map(item => item.store))].sort();

    // Extract and sort category values
    const categories = [...new Set(selStateData.map(item => item.category))].sort();

    // Initialize the result array for categorized data
    const categorizedData = categories.map(category => [category, Array(stores.length).fill(0)]);

    // Populate the categorized data
    selStateData.forEach(item => {
        const storeIndex = stores.indexOf(item.store);
        const categoryIndex = categories.indexOf(item.category);
        categorizedData[categoryIndex][1][storeIndex] += item.inventory;
    });

    return [stores, categorizedData];
}

</script>

<style scoped>

</style>
