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


/*********
 Apex Chart Options
 *********/
let chartOptions = ref({
  chart: {
    id: 'CntyTypeCompliance',
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
    categories: [[['All County'], ['Types']], "Metro", "Micro", "Rural"],
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
// console.log(aryChartCompliance[3][0][1])

// console.log(complianceStore.aryDashboardData)


let chartSeries = ref([{
  name: 'Compliant',
  data: [10, 14, 10, 4],
  // color: "#003087"
}, {
  name: 'N/A (No Members)',
  data: [10, 10, 4, 15],
  // color: "#b3b3b3"
}, {
  name: 'Not Compliant',
  data: [9, 10, 10, 7],
  // color: "#ab2328"
}]);


</script>

<style scoped>

</style>