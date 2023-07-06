<template>
    <ul>
        <li v-for="favImage in data.favImages" :key="favImage.thumbnailUrl">
            <img :src="favImage.url" />
        </li>
    </ul>
</template>

<script lang = 'ts' >
import { defineComponent, onMounted, reactive } from 'vue'
import { getImagesAsync, FavImage } from '../../api/api-favimage'

export default defineComponent({
    name: 'FavImage',
    setup() {

        let favImages = Array<FavImage>()
        let data = reactive({
            favImages
        })

        onMounted(() => {
            getImagesAsync().then(res => data.favImages = res)
        })

        return {
            data
        }
    }
})
</script>