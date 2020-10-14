# Call API with Suspense & VueJS 3 📡

This use case of Suspense build-in feature of VueJS 3 is created using [ViteJS](https://github.com/vitejs/vite) (light framework to build VueJS app without webpack)

## Init project

    git clone https://github.com/VincentLrg/SuspenseVue3.git
    npm i (or yarn install)
    npm run dev (or yarn dev)

## Repository

### Warning ⚠︎
If you aren't familiar with VueJS 3, new concept and Composition API, you should definitely check the official VueJS documentation [here](https://v3.vuejs.org/guide/introduction.html).

---

This repository show you how to make an asynchronous API call with Vue JS 3 & the Suspense build-in feature and make it reusable across your app.

## How Suspense work ?

First, Suspense should be declare in a Parent component, with #default template (which will have the slot for the component you wanted to show) and #fallback template, which will have html that display when you load the data.

It will take the child component that is refer in the #default template, and, while all promises in it are pending, we will display the #fallback template. After all the promises are resolved, Vue will switch reactively to display the content of #default template.

### Error catcher
In the parent component, there is an error catcher using the new hook `onErrorCaptured` and a reactive variable. With a simple `v-if/v-else`, we check if we need to display the error message if an error is thrown everywhere in the app, or the Suspense component we don't have any error.
You can simply copy/paste it, and it's the best practice for now ! 