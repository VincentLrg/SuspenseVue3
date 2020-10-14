<template>
    <ul>
        <li v-for="sneaker in sneakers.results" :key="sneaker.id">
            {{ sneaker.title }}
        </li>
    </ul>
</template>

<script>
import { useGetSneakers } from '../use/useGetSneakers'

export default {
    name: 'Sneakers',

    // Asynchronous setup, while we working with asynchronous API call
    async setup() {
        // We will wait while useGetSneakers return a value (after the API call is finished and we will destructure it into a sneakers variable)
        const { sneakers } = await useGetSneakers(10);

        return { sneakers }
    }
}
</script>