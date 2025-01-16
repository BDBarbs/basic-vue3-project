<template>
  <div class="w-100">
    <p>Select a state: </p>
    <v-btn class="ma-3" @click="storeData.selectedGrocer = 'Wisconsin'">Wisconsin</v-btn>
    <v-btn class="ma-3" @click="storeData.selectedGrocer = 'Ohio'">Ohio</v-btn>
    <p class="mt-5">Update Chart:</p>
    <v-btn class="ma-3">Update</v-btn>
    <v-card class="w-75 mt-5">
      <ChartCntyTypeComp/>
    </v-card>
  </div>

</template>

<script setup>
import ChartCntyTypeComp from "@/components/Chart-CntyTypeComp.vue";
import {useDataStore} from "@/stores/dataStore.js";

const storeData = useDataStore();



</script>

<style scoped>

</style>
