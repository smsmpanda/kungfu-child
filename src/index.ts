import Food from './domain/food/food'
import "./style/index.less"


const food = new Food();
console.log(food.X, food.Y)
food.change()