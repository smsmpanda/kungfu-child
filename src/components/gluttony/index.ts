import Food from "./food/food";
import Snake from "./snake/snake";
import ScorePanel from "./score/score";


// 游戏控制器
class GluttonyGame {

    private snake: Snake            // 蛇
    private food: Food              // 食物
    private scorePanel: ScorePanel  // 计分板

    private isLive: boolean = true         // 蛇是否存活
    private direction: string

    constructor() {
        this.food = new Food()
        this.snake = new Snake()
        this.scorePanel = new ScorePanel()
    }

    init() {
        document.addEventListener('keydown', this.keydownHandler.bind(this))
        this.run()
    }

    // 键盘按键
    private keydownHandler(event: KeyboardEvent) {

        if (!this.snake.Growth) {
            this.direction = event.key
        }
        else {
            if ((this.direction == 'ArrowDown' && event.key === 'ArrowUp'
                || this.direction == 'ArrowUp' && event.key === 'ArrowDown')
                || (this.direction == 'ArrowLeft' && event.key === 'ArrowRight'
                    || this.direction == 'ArrowRight' && event.key === 'ArrowLeft')) {
                console.log('n')
            }
            else {
                this.direction = event.key
            }
        }
    }

    // 控制蛇的运动
    run() {
        let currentX = this.snake.X
        let currentY = this.snake.Y

        switch (this.direction) {
            case "ArrowUp":
                currentY -= 10
                break;
            case "ArrowDown":
                currentY += 10
                break;
            case "ArrowLeft":
                currentX -= 10
                break;
            case "ArrowRight":
                currentX += 10
                break;
        }

        this.checkEat(currentX, currentY)

        try {
            this.snake.X = currentX
            this.snake.Y = currentY
        } catch (e) {
            alert(e.message)
            this.isLive = false
        }

        this.isLive && setTimeout(this.run.bind(this), 300 - (this.scorePanel.Level - 1) * 30)
    }

    checkEat(x: number, y: number) {
        if (x === this.food.X && y === this.food.Y) {
            this.snake.appendBody();
            this.scorePanel.addScore()
            this.food.change()
        }
    }
}

export { GluttonyGame }