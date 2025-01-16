import {ref} from 'vue'
import {defineStore} from 'pinia'

export const useDataStore = defineStore('data', () => {

    let selectedGrocer = ref(null)
    let chartData = ref([
        [],
        []
    ]);

  let chartDataTest = ref([
    ['Piggly Wiggly', 'Whole Foods', 'Kroger'],
    [
        [10, 14, 10],
        [10, 10, 4],
        [9, 7, 12]
    ]
  ]);


    return {
        selectedGrocer,
        chartData,
        chartDataTest
    }
})
