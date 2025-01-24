<template>
<p>
    Locate: {{ locale }}
</p>
<button @click="updateLocale">Update locale from locale component</button>
</template>

<script setup>
// defineProps({
//     locale: String
// })
import { inject } from 'vue';

const {locale, updateLocale} = inject('locale');
</script>