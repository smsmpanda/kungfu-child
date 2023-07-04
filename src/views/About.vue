<template>
    <div>{{ title }}</div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';


export default defineComponent({
    name: 'Home',
    setup() {
        return {
            title: 'Home'
        }
    }
})
</script>