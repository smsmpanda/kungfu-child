<template>
    <h1>{{ data.title }}</h1>
    <Gluttony />
    <img :src="testImg" alt="测试图片说明">
</template>
<script  lang="ts">
import { defineAsyncComponent, defineComponent, reactive } from 'vue';
import testImg from './assets/img/p.png'

export default defineComponent({
    name: 'App',
    components: {
        Gluttony: defineAsyncComponent(() => import('./components/gluttony/index.vue'))
    },
    setup() {
        const data = reactive({
            title: 'Gluttony',
        });
        return {
            data,
            testImg
        }
    }
})
</script>