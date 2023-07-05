<template>
    <div class="container-flex-column app-container">
        <Nav />
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
.app-container {
    width: 100%;
    height: 100%;
}
</style>