<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <!-- If an error is catch everywhere in the app, display the following p -->
  <p v-if="error">{{error}}</p>

  <Suspense v-else>
    <!-- Suspense display #default when all promises in the child component are resolve -->
    <template #default>
      <Sneakers />
    </template>
    <!-- Suspense display #fallback while all promises in the child component are pending -->
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
    // Declaration of reactive variable Error
    const error = ref(null)

    // New Hook, that will check everywhere in the app if an error is trigger
    onErrorCaptured( e => {
      error.value = e;
      
      return true
    })

    return { error }

  }
}
</script>
