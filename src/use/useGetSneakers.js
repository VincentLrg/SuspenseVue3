import { ref } from 'vue';

// Declare an asynchronous function, that will be used in the Sneakers.vue component 
export async function useGetSneakers(limit) {
    // If the limit is defined, we will created a reactive value of it
    // Otherwise, we will assign a reactive value of 10 to it (the minimum for the limit of this API, max is 100)
    const limitValue = limit ? ref(limit) : ref(10)
    // Define the reactive sneakers value that will get the response JSON
    const sneakers = ref(null);

    // First, we fetch the data from the API, then we get the response.json and assign that to our reactive value
    sneakers.value = await fetch(`https://api.thesneakerdatabase.com/v1/sneakers?limit=${limitValue.value}`)
                            .then(response => {
                                return response.json()
                            })
    return { sneakers }
}