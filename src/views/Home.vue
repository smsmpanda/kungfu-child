<template>
    <div class="home-container container-flex-row">
        <div>
            <Navmenu />
        </div>
        <section class="home-content-container container-fill">
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
.home-content-container {
    padding: 10px
}


.home-menu-nav {
    position: relative;
}

.home-container {
    position: relative;
}
</style>