<template>
  <VueApexCharts type="bar" height="360px" :options="chartOptions" :series="chartSeries">
  </VueApexCharts>
</template>

<script setup>
/*********
 Imports
 *********/
import VueApexCharts from "vue3-apexcharts";
import { ref } from "vue";
import { useDataStore } from "@/stores/dataStore.js";

const storeData = useDataStore();

/*********
 Apex Chart Options
 *********/
let chartOptions = ref({
  chart: {
    id: "grocerChart",
    type: "bar",
    // height: 350,
    stacked: true,
    stackType: "100%",
    toolbar: {
      show: true,
      tools: {
        download: true,
        zoom: false,
        zoomin: true,
        zoomout: true,
        reset: true,
      },
    },
  },
  title: {
    text: storeData.selectedRegion,
    align: "center",
  },
  plotOptions: {
    bar: {
      horizontal: true,
    },
  },
  grid: {
    padding: {
      bottom: 20,
      right: 20,
      top: 5,
    },
  },
  xaxis: {
    categories: storeData.chartData[0], // ['Fruit', "Meat", "Vegetables"],
    tickPlacement: "on",
    labels: {
      rotate: 0,
      style: {
        fontSize: 10,
      },
    },
  },
  fill: {
    opacity: 1,
  },
  legend: {
    fontSize: 10,
    offsetX: 0,
    offsetY: 0,
  },
  dataLabels: {
    enabled: false,
  },
  noData: {
    text: "No Data",
    style: {
      fontSize: "24px",
    },
  },
});

let chartSeries = ref([
  {
    name: 'fruit', // storeData.chartData[1][0][0],
    data: [10, 14, 10], // storeData.chartData[1][0][1],
  },
  {
    name: 'meat', // storeData.chartData[1][1][0],
    data: [10, 10, 4], // storeData.chartData[1][1][1],
  },
  {
    name: 'vegetable', // storeData.chartData[1][2][0],
    data: [9, 7, 12], // storeData.chartData[1][2][1],
  },
]);

// console.log(storeData.chartDataTest[1][0][1])
</script>

<style scoped></style>
