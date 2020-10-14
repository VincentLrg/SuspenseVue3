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

    async setup() {
        const { sneakers } = await useGetSneakers(10);

        return { sneakers }
    }
}
</script>