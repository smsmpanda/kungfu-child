<template>
    <el-menu :default-active="data.activeIndex" class="el-menu-demo" mode="horizontal" :ellipsis="false" :router="true">
        <el-menu-item index="/">
            <template #title>
                <el-icon :size="30">
                    <HomeFilled />
                </el-icon>
                <span>Home</span>
            </template>
        </el-menu-item>
        <el-menu-item index="2"> Gongdan Center </el-menu-item>
        <div class="container-fill" />
        <el-menu-item index="/about">About</el-menu-item>
        <el-sub-menu index="3">
            <template #title>Workspace</template>
            <el-menu-item index="3-1">item one</el-menu-item>
            <el-menu-item index="3-2">item two</el-menu-item>
            <el-menu-item index="3-3">item three</el-menu-item>
            <el-sub-menu index="3-4">
                <template #title>item four</template>
                <el-menu-item index="3-4-1">item one</el-menu-item>
                <el-menu-item index="3-4-2">item two</el-menu-item>
                <el-menu-item index="3-4-3">item three</el-menu-item>
            </el-sub-menu>
        </el-sub-menu>
    </el-menu>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import { HomeFilled } from '@element-plus/icons-vue'


export default defineComponent({
    name: 'App',
    components: {
        HomeFilled
    },
    setup() {
        const data = reactive({
            activeIndex: '/'
        });

        return {
            data
        }
    }
})
</script>
