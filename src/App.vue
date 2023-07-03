<template>
    <h1>{{ data.title }}</h1>
    <hr />
    <Gluttony></Gluttony>
</template>
<script setup lang="ts">
import { reactive } from 'vue';
import Gluttony from './components/gluttony/index.vue'

const data = reactive({
    title: 'Gluttony'
});

</script>