<template>
  <div class="w-100">
    <p>Select a state: </p>
    <v-btn class="ma-3" @click="storeData.selectedState = 'Wisconsin'">Wisconsin</v-btn>
    <v-btn class="ma-3" @click="storeData.selectedState = 'Ohio'">Ohio</v-btn>
    <p class="mt-5">Update Chart:</p>
    <v-btn 
    class="ma-3" 
    @click="storeData.chartData = processData(grocerData, storeData.selectedState)"
    >
      Update
    </v-btn>
    <v-card class="w-75 mt-5">
      <ChartCntyTypeComp/>
    </v-card>
  </div>

</template>

<script setup>
import ChartCntyTypeComp from "@/components/storeInventoryChart.vue";
import {useDataStore} from "@/stores/dataStore.js";
import grocerData from "./models/sample-api-data.json";

const storeData = useDataStore();

function processData(data, selectedState) {
    // Filter data by selected state 
    const selStateData = data.filter(item => item.state === selectedState);

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
