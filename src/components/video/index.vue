<template>
    <div>
        <button id="start" @click="getOpenAPI">点击开始</button>
    </div>
</template>

<script lang='ts'>
import { defineComponent, reactive } from 'vue'
import { DoorService } from '../../api/api-video'

export default defineComponent({
    name: 'Video',
    setup() {
        function getOpenAPI(): void {
            new DoorService().GetDoorsList()
        }
        return {
            getOpenAPI
        }
    }
})
</script>

<style scoped></style>