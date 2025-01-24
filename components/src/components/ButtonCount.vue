<template>
    <!-- <button @click="count++">{{ count }}</button> -->
    <!-- <p>{{ countPlus }}</p> -->
     <!-- <button @click="$emit('increase')">Increase</button> -->
     <button @click="callFunctionIncrease"><slot name="increase">Button Content</slot></button>
     <button @click="callFunctionIncreaseByTwoTimes"><slot name="increaseByTwoTimes"></slot></button>
     <button @click="callFunctionIncreaseBy"><slot name="increaseBy"></slot></button>


</template>
<script setup>

const emit = defineEmits(['increase', 'increaseByTwoTimes', 'increaseBy'])

const callFunctionIncrease = () => {
    emit('increase')
}

const callFunctionIncreaseByTwoTimes = () => {
    emit('increaseByTwoTimes')
}

const callFunctionIncreaseBy = () => {
    emit('increaseBy', 10, 10)
}
// import {computed, ref} from 'vue';

// const props = defineProps({
//     init: Number
// })

// const count = ref(props.init);

// const countPlus = computed(() => props.init + 2)

</script> 