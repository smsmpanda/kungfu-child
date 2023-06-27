import Food from "../food/food"
export default class Snake {
    private head: HTMLElement       // 蛇头
    private bodies: HTMLCollection  // 蛇的身体
    private wrap: HTMLElement       // 蛇的外壳
    Growth: boolean                 // 蛇是否成长了

    private limitWidth: number = 0   //舞台最大宽度
    private limitHeight: number = 0  //舞台最大高度

    constructor() {
        this.head = document.querySelector('#snake > div')!
        this.bodies = document.getElementById('snake')!.getElementsByTagName('div')
        this.wrap = document.getElementById('snake')
        this.limitWidth = Food.WidthLimit - this.head.clientWidth
        this.limitHeight = Food.HeightLimit - this.head.clientHeight
    }

    get X(): number {
        return this.head.offsetLeft
    }
    get Y(): number {
        return this.head.offsetTop
    }

    set X(value: number) {
        if (this.X === value)
            return
        if (value < 0 || value > this.limitWidth) { // 超出舞台最大边界，死亡
            throw new Error("GAME OVER");
        }
        this.moveBody()
        this.head.style.left = `${value}px`

        this.collisionDetection()
    }
    set Y(value: number) {
        if (this.Y === value)
            return

        if (value < 0 || value > this.limitHeight) { // 超出舞台最大边界，死亡
            throw new Error("GAME OVER");
        }
        this.moveBody()
        this.head.style.top = `${value}px`

        this.collisionDetection()
    }

    appendBody() {
        this.wrap.insertAdjacentHTML("beforeend", `<div class='snake'></div>`)
        if (!this.Growth) {
            this.Growth = true
        }
    }

    moveBody() {
        for (let i = this.bodies.length - 1; i > 0; i--) {
            const x = (this.bodies[i - 1] as HTMLElement).offsetLeft;
            const y = (this.bodies[i - 1] as HTMLElement).offsetTop;

            (this.bodies[i] as HTMLElement).style.left = `${x}px`;
            (this.bodies[i] as HTMLElement).style.top = `${y}px`
        }
    }

    // 碰撞检测
    collisionDetection() {
        for (let index = 1; index < this.bodies.length; index++) {
            const body = this.bodies[index] as HTMLElement;
            if (this.X === body.offsetLeft && this.Y === body.offsetTop) {
                throw new Error("撞到自己了..");
            }
        }
    }
}