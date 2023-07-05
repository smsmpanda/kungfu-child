<template>
    <div class="container-flex-column">
        <Nav class="app-nav" />
        <div class="container-fill banner">
            <router-view></router-view>
        </div>
    </div>
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

<style lang="less">
.app-nav {
    position: sticky;
    top: 0;
    z-index: 999;
}
</style>