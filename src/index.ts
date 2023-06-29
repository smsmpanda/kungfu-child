import GrameControl from './domain/gluttony/GameControl';
import "./style/index.less"

import { DoorService } from './api/doorapi'


// gluttony game init
new GrameControl().init()


// button binding click event
const btn = document.getElementById('start') as HTMLButtonElement
btn.addEventListener('click', () => {
    const doorsvc = new DoorService().GetDoorsList()
})