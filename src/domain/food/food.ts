export default class Food {

    maxX: number = 290
    maxY: number = 350

    element: HTMLElement
    constructor() {
        this.element = document.getElementById('food')!
    }

    get X(): Number {
        return this.element.offsetLeft
    }
    get Y(): Number {
        return this.element.offsetTop
    }

    change() {

        let left = Math.round(Math.random() * 29) * 10
        let top = Math.round(Math.random() * 35) * 10

        this.element.style.left = `${left}px`
        this.element.style.top = `${top}px`
    }
}