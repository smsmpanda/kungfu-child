export default class Food {

    //食物尺寸
    width: number = 10
    height: number = 10

    //舞台对象
    stage: HTMLElement

    //舞台尺寸
    static WidthLimit: number = 0
    static HeightLimit: number = 0

    //食物放置步长
    foodPlaceStep: number = 10
    foodElement: HTMLElement

    constructor() {
        this.stage = document.getElementById('stage')!
        this.foodElement = document.getElementById('food')!
        Food.WidthLimit = this.stage.clientWidth
        Food.HeightLimit = this.stage.clientHeight
    }

    get X(): Number {
        return this.foodElement.offsetLeft
    }
    get Y(): Number {
        return this.foodElement.offsetTop
    }

    change() {
        let left = Math.round(Math.random() * (Food.WidthLimit - this.width) / this.foodPlaceStep) * this.foodPlaceStep
        let top = Math.round(Math.random() * (Food.HeightLimit - this.height) / this.foodPlaceStep) * this.foodPlaceStep

        this.foodElement.style.left = `${left}px`
        this.foodElement.style.top = `${top}px`
    }
}