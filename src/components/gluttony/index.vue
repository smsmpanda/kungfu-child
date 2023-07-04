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
    <div>
        <button id="start" @click="getOpenAPI">点击开始</button>
    </div>
</template>
<script  lang="ts">
import { defineComponent, onMounted } from 'vue';
import './style/index.less'

import { GluttonyGame } from '../gluttony';
import { DoorService } from '../../api/doorapi'

export default defineComponent({
    name: 'Gluttony',
    setup() {

        onMounted(() => {
            new GluttonyGame().init()
        })

        function getOpenAPI(): void {
            new DoorService().GetDoorsList()
        }
        return {
            getOpenAPI
        }
    }
})
</script>