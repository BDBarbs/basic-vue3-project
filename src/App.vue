<template>
  <div class="w-100">
    <p>Select a grocer: </p>
    <v-btn class="ma-3">Kroger</v-btn>
    <v-btn class="ma-3">Piggly Wiggly</v-btn>
    <p class="mt-5">Update Chart:</p>
    <v-btn class="ma-3">Update</v-btn>
    <v-card class="w-50 mt-5">
      <ChartCntyTypeComp/>
    </v-card>
  </div>

</template>

<script setup>
import ChartCntyTypeComp from "@/components/Chart-CntyTypeComp.vue";
</script>

<style scoped>

</style>
