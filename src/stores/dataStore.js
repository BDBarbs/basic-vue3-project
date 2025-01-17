import {ref} from 'vue'
import {defineStore} from 'pinia'

export const useDataStore = defineStore('data', () => {

    let selectedState = ref(null)
    let chartData = ref([
        [],
        []
    ]);

  let chartDataTest = ref([
    ['Costco', 'Piggly Wiggly', 'Whole Foods'],
    [
        [10, 14, 10],
        [10, 10, 4],
        [9, 7, 12]
    ]
  ]);


    return {
        selectedState,
        chartData,
        chartDataTest
    }
})
