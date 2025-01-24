import { ref } from 'vue';
export const useCounter = () => {
    const count = ref(0);
    const incresement = () => {
        count.value++;
    };
    const decreament = () => {
        count.value--;
    };
    return { count, incresement, decreament };
}