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

    /*
  let chartDataTest = ref([
    ['Costco', 'Piggly Wiggly', 'Whole Foods'],
    [
        ['fruit', [10, 14, 7]],
        ['meat', [13, 8, 4]],
        ['vegetables', [9, 7, 12]]
    ]
  ]);
    */

    return {
        selectedRegion,
        chartData
        //chartDataTest  
      }
})
