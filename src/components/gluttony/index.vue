<template>
    <div class="app">
        <div class="snake-stage" id="stage">
            <div id="snake" class="snake-wrap">
                <div class="snake"></div>
            </div>

            <div class="snake-food" id="food">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
        <div class="snake-score-panel">
            <div class="snake-counter">
                SCORE: <span id="score">0</span>
            </div>
            <div class="snake-counter" id="level">
                LEVEL: <span id="level">1</span>
            </div>
        </div>
    </div>
</template>
<script  lang="ts">
import { defineComponent, onMounted, onUnmounted } from 'vue';
import './style/index.less'

import { GluttonyGame } from '../gluttony';


export default defineComponent({
    name: 'Gluttony',
    setup() {
        let gluttony: GluttonyGame
        onMounted(() => {
            gluttony = new GluttonyGame()
            gluttony.init()
        })
        onUnmounted(() => {
            gluttony.destory()
        })
    }
})
</script>