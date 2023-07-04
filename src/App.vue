<template>
    <Nav />
    <router-view>

    </router-view>
</template>
<script  lang="ts">
import { defineComponent, defineAsyncComponent } from 'vue';

export default defineComponent({
    name: 'App',
    components: {
        Nav: defineAsyncComponent(() => import('./components/Nav.vue'))
    }
})
</script>