<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { capitalize, defineAsyncComponent, provide, ref, watch, watchEffect } from 'vue';
import HelloWorld from './components/HelloWorld.vue'
import ButtonCount from './components/ButtonCount.vue';
import ChildrentComponent from './components/ChildrentComponent.vue';
// import ComponentVModel from './components/ComponentVModel.vue';
import LoadingComponent from './components/LoadingComponent.vue';
import ErrorComponent from './components/ErrorComponent.vue';
const ComponentVModel = defineAsyncComponent({
  loader: () => import('./components/ComponentVModel.vue'),
  loadingComponent: LoadingComponent,
  errorComponent: ErrorComponent
})

const count = ref(0)
const alertFn = () => {
  console.log("Helloooo");

}

const email = ref('')
const username = ref('')

watchEffect(() => {
  console.log('count', email.value, email);
})

// truyền đối số
const changeEmailDefaultFromParent = () => {
  email.value = 'hello123@gmail.com'
}

const changeUserNameDefaultFromParent = () => {
  username.value = 'Change username default from parent'
}


const increaseBy= (number1, number2) => {
  count.value = count.value + number1 + number2;
}
const messagea = ref("hello111");
// const locale = ref("vietnam");
const locationCurrent = ref("vietnam");
const changeLocation = () => {
  locationCurrent.value = "english";
}
provide('locale', {
  locale: locationCurrent,
  updateLocale: changeLocation
});

</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <ComponentVModel v-model:email="email" v-model:username.capitalize="username"/>
      <button @click="locationCurrent = 'englissh'">Change locate</button>
      <button @click="changeEmailDefaultFromParent">Change email default from parent</button>
      <button @click="changeUserNameDefaultFromParent">Change username default from parent</button>
      <!-- <HelloWorld :greeting-message="messagea" /> -->
      <HelloWorld :greeting-message="count" />

      <!-- <button-count :init="5" /> -->
       <!-- event component -->
      <button-count @increase="count++" @increase-by-two-times="count = count + 2" @increase-by="increaseBy">
        <template #increase>Increase</template>
        <template #increaseBy>increaseBy</template>
        <template #increaseByTwoTimes>increaseByTwoTimes</template>
      </button-count>
     <global-component /> 

      <!-- <ChildrentComponent :prop-a="1" :prop-b="2" prop-c="hello" :prop-d="20" :prop-e="{ message: 'Hello' }"
        prop-f="success" :prop-g="alertFn" disable="true" /> -->

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
