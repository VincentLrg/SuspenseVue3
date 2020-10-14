<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <p v-if="error">{{error}}</p>
  <Suspense v-else>
    <template #default>
      <Sneakers />
    </template>
    <template #fallback>
      <p>They see me spinnin', they hattin'...</p>
    </template>
  </Suspense>
</template>

<script>
import { onErrorCaptured, ref } from 'vue'
import Sneakers from './components/Sneakers.vue'

export default {
  name: 'App',
  components: {
    Sneakers
  },
  setup(){
    const error = ref(null)

    onErrorCaptured( e => {
      error.value = e;
      
      return true
    })

    return { error }

  }
}
</script>
