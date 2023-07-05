<template>
    <ul>
        <li v-for="video in data.videoes.list" :key="video.id">
            <div>title:{{ video.title }}</div>
        </li>
    </ul>
</template>

<script lang='ts'>
import { defineComponent, onMounted, reactive } from 'vue'
import { VideoService, Result, Video } from '../../api/api-video'
import { vi } from 'element-plus/es/locale'

export default defineComponent({
    name: 'Video',
    setup() {

        let videoService: VideoService = null

        // data
        let videoes: Result<Video> = new Result<Video>()
        let data = reactive({
            videoes
        })

        // hook
        onMounted(() => {
            videoService = new VideoService()
            videoService.GetVideoList().then(response => {
                data.videoes = response.result
            })
        })

        return {
            data
        }
    }
})
</script>