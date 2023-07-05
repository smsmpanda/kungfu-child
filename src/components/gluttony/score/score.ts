export default class ScorePanel {

    //升级步长（满几分升一级）
    private upgradeStep: number

    //最高等级
    private maxLevel: number

    private Score: number = 0
    Level: number = 1

    scoreHtmlElement: HTMLElement
    levelHtmlElement: HTMLElement

    constructor(maxLevel: number = 10, upgradeStep = 1) {
        this.maxLevel = maxLevel
        this.upgradeStep = upgradeStep
        this.scoreHtmlElement = document.getElementById('score')
        this.levelHtmlElement = document.getElementById('level')
    }

    addScore() {
        console.log(this.Score)
        this.Score += 1
        if (this.Score % this.upgradeStep == 0) {
            this.levelUpGrade()
        }
        this.scoreHtmlElement.innerText = `${this.Score}`
    }

    private levelUpGrade() {
        if (this.Level > this.maxLevel) {
            alert('太棒了！你已达到巅峰王者.')
            return
        }
        this.Level += 1
        this.levelHtmlElement.innerText = `${this.Level}`
    }
}