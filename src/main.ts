import { Game, Types } from 'phaser'
import { HelloWorldScene } from "./scenes"


export type IGameConfig = Types.Core.GameConfig & {

}


const config: IGameConfig = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'game',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
        }
    },
    scene: [HelloWorldScene]
}


const game = new Game(config)