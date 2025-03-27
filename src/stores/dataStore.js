import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useDataStore = defineStore('data', () => {

    let selectedRegion = ref('No Region Selected');
    // let chartData = ref(undefined)

    // /*
    let chartData = ref([
        [],
        [
            [[], []],
            [[], []],
            [[], []]
        ]
    ]);
    // */



    return {
        selectedRegion,
        chartData,
        //chartDataTest  
    }
})

[
    {
        "VEGETABLES": "Potatoes, Carrots, Onions, Sweet Potatoes, Green Beans",
        "FRUITS": "Apples, Oranges, Bananas, Hass Avocados, Grapes, Strawberries",
        "NUTS": "Almonds, Brazil Nuts, Walnuts, Pecans, Peanuts, Cashews",
    }
]
