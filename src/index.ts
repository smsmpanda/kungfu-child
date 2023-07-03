import { createApp } from 'vue';
import App from './App.vue';
import "./style/index.less"


createApp(App).mount('#app');

// import GrameControl from './domain/gluttony/GameControl';

// import { DoorService } from './api/doorapi'


// // gluttony game init
// new GrameControl().init()


// // button binding click event
// const btn = document.getElementById('start') as HTMLButtonElement
// btn.addEventListener('click', () => {
//     const doorsvc = new DoorService().GetDoorsList()
// })