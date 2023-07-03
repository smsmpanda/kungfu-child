<template>
    <h1>{{ data.title }}</h1>
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
        <button id="start" @click="testBtnHandler">点击开始</button>
    </div>
</template>
<script setup lang="ts">
import { defineComponent, onMounted, reactive } from 'vue';

import GrameControl from './domain/gluttony/GameControl';
import { DoorService } from './api/doorapi'

onMounted(() => {
    new GrameControl().init()
})

const data = reactive({
    title: 'Gluttony'
});

function testBtnHandler(): void {
    new DoorService().GetDoorsList()
}
</script>