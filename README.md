# Call API with Suspense & VueJS 3 📡

This is an use case of the VueJS 3 Suspense feature, created using [ViteJS](https://github.com/vitejs/vite) (light framework to build VueJS apps without webpack)

## Init project

    git clone https://github.com/VincentLrg/SuspenseVue3.git
    npm i (or yarn install)
    npm run dev (or yarn dev)

## Repository

### Warning ⚠︎
If you aren't familiar with VueJS 3's new concepts and Composition API, you should definitely check out the official VueJS documentation [here](https://v3.vuejs.org/guide/introduction.html).

---

This repository shows you how to make an asynchronous API call with Vue JS 3 & its' Suspense built-in feature, and how to make it reusable across your app.

## How Does Suspense work ?

First, Suspense should be declared in a Parent component, with a #default template (which will have a slot for the component you wanted to show) and a #fallback template, which will have the HTML that will be displayed when you load the data).

It'll store the child component referred in the #default template while all of its' promises are pending, meanwhile displaying the #fallback template. After these are resolved, Vue will switch reactively to display the content of the #default template.

### Error catcher
In the parent component, there's an error catcher that uses the new hook onErrorCaptured and a reactive variable. With a simple v-if/v-else, we check if we need to either display the Suspense component, or the error message if an error is thrown anywhere in the app. 
You can simply copy/paste it, and it's the best practice for now !
