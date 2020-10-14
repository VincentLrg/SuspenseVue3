import { ref } from 'vue';

export async function useGetSneakers(limit) {
    const limitValue = limit ? ref(limit) : ref(10)
    const sneakers = ref(null);
    sneakers.value = await fetch(`https://api.thesneakerdatabase.com/v1/sneakers?limit=${limitValue.value}`)
                            .then(response => {
                                return response.json()
                            })
    return { sneakers }
}