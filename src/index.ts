import GrameControl from './domain/GameControl';
import "./style/index.less"


const gameControl = new GrameControl();
gameControl.init()


const btn = document.getElementById('start') as HTMLButtonElement
//typescript为按钮绑定点击事件

btn.addEventListener('click', () => {
    console.log(111)
})