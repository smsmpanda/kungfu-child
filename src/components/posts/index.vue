<template>
    <el-space direction="vertical" :size="30">
        <el-card shadow="never" v-for="post in data.posts" :key="post.id">
            <h3>{{ post.title }}</h3>
            <p>{{ post.body }}</p>
            <div>
                <el-button type="primary" plain>
                    <template #icon>
                        <el-icon>
                            <CaretTop />
                        </el-icon>
                    </template>
                    <span>赞同</span>
                </el-button>
                <el-link :size="123">
                    Edit
                    <el-icon>
                        <Comment></Comment>
                    </el-icon>
                </el-link>
                <el-link>
                    Check<el-icon class="el-icon--right"><icon-view /></el-icon>
                </el-link>
            </div>
        </el-card>
    </el-space>
</template>

<script lang='ts'>
import { defineComponent, onMounted, reactive } from 'vue'
import { getPostsAsync, Post } from '../../api/api-posts'
import { CaretTop, Comment, Edit } from '@element-plus/icons-vue'

export default defineComponent({
    name: 'Posts',
    components: {
        CaretTop,
        Comment,
        Edit
    },
    setup() {

        let posts: Array<Post> = new Array<Post>()
        let data = reactive({
            posts
        })

        onMounted(() => {
            getPostsAsync().then(res => data.posts = res)
        })

        return {
            data
        }
    }
})
</script>
<style></style>