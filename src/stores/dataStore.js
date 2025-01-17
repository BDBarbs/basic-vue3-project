import {ref} from 'vue'
import {defineStore} from 'pinia'

export const useDataStore = defineStore('data', () => {

    let selectedRegion = ref('No Region Selected');
    let chartData = ref([
        [],
        [
          [[], []],
          [[], []],
          [[], []]
        ]
    ]);

    return {
        selectedRegion,
        chartData
        //chartDataTest  
      }
})
