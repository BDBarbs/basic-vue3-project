<template>
  <VueApexCharts
        type="bar"
        height="360px"
        :options=chartOptions
        :series=chartSeries>
    </VueApexCharts>
</template>

<script setup>
/*********
 Imports
 *********/
import VueApexCharts from 'vue3-apexcharts';
import {ref} from "vue";
import {useDataStore} from "@/stores/dataStore.js";

const storeData = useDataStore();

/*********
 Apex Chart Options
 *********/
let chartOptions = ref({
  chart: {
    id: 'grocerChart',
    type: 'bar',
    // height: 350,
    stacked: true,
    stackType: '100%',
    toolbar: {
      show: true,
      tools: {
        download: true,
        zoom: false,
        zoomin: true,
        zoomout: true,
        reset: true
      },
    },
  },
  plotOptions: {
    bar: {
      horizontal: true
    }
  },
  grid: {
    padding: {
      bottom: 20,
      right: 20,
      top: 5
    }
  },
  responsive: [{
    // breakpoint: 480,
    options: {
      legend: {
        position: 'bottom',
        offsetX: -10,
        offsetY: 0
      }
    }
  }],
  xaxis: {
    categories: storeData.chartData[0], // ['Fruit', "Meat", "Vegetables"], 
    tickPlacement: 'on',
    labels: {
      rotate: 0,
      style: {
        fontSize: 10
      }
    }
  },
  fill: {
    opacity: 1
  },
  legend: {
    fontSize: 10,
    offsetX: 0,
    offsetY: 0
  },
  dataLabels: {
    enabled: false
  },
  noData: {
    text: 'No Data',
    style: {
      fontSize: '24px'
    }
  }
});

let chartSeries = ref([{
  name: storeData.chartData[1][0][0], // 'fruit',
  data: storeData.chartDataTest[1][0], // [10, 14, 10],
  // color: "#003087"
}, {
  name: storeData.chartData[1][1][0], // 'meat',
  data: storeData.chartDataTest[1][2], // [10, 10, 4],
  // color: "#b3b3b3"
}, {
  name: storeData.chartData[1][2][0], // 'vegetable',
  data: storeData.chartDataTest[1][0], // [9, 7, 12],
  // color: "#ab2328"
}]);


</script>

<style scoped>

</style>