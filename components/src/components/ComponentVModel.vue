<template>
    <div>
        <label for="Email">Email</label>
        <input type="text" v-focus v-model="email" />
        <p>{{ email }}</p>
        <button @click="setEmailDefault">Set email default</button>
    </div>
    <br>
    <div>
        <label for="Username">Username</label>
        <input type="text" v-model="username" />
        <p>{{ username }}</p>
        <button @click="setUserNameDefault">Set username default</button>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const vFocus ={
    mounted: (el) => el.focus()
}
// const email = ref('');
// dùng dc vuee 3.4 đổ lên
const email = defineModel('email')
const [username, modifier] = defineModel('username', {
    set(value){
        if(modifier.capitalize){
            return value.charAt(0).toUpperCase() + value.slice(1)
        }
        return value
    }
})


const setEmailDefault = () => {
    email.value = 'thole3287@gmail.com'
}

const setUserNameDefault = () => {
    username.value = 'thole123'
}

</script>