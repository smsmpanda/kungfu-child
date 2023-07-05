<template>
    <div class="container-flex-row">
        <nav>
            <Navmenu />
        </nav>
        <section class="home-container container-fill">
            <router-view></router-view>
        </section>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import Navmenu from '../components/Navmenu.vue';


export default defineComponent({
    name: 'Home',
    components: {
        Navmenu
    },
    setup() {
        return {}
    }
})
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}

.home-container {
    padding: 5px
}
</style>