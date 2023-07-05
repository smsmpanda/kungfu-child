<template>
    <div>
        <button id="start" @click="getVideoList">点击开始</button>
    </div>
    <el-row :gutter="12">
        <ul>
            <li v-for="video in data.videoes.list">
                <el-card shadow="hover">
                    <span>{{ video.title }}</span>
                </el-card>
            </li>
        </ul>
    </el-row>
</template>

<script lang='ts'>
import { defineComponent, onMounted, reactive } from 'vue'
import { VideoService, Result, Video } from '../../api/api-video'

export default defineComponent({
    name: 'Video',
    setup() {
        let videoService: VideoService = null

        // hook
        onMounted(() => {
            videoService = new VideoService()
            videoService.GetVideoList()
        })


        // data
        let videoes: Result<Video> = null
        let data = reactive({
            videoes
        })

        // methods
        function getVideoList(): void {
            videoes = videoService.GetVideoList()
        }

        return {
            getVideoList: getVideoList,
            data
        }
    }
})
</script>