import Phaser from "phaser"


export class HelloWorldScene extends Phaser.Scene {
    constructor() {
        super()
    }

    preload() {
        this.load.setBaseURL('/')

        this.load.image('sky', 'assets/skies/space3.png')
        this.load.image('logo', 'assets/sprites/phaser3-logo.png')
        this.load.image('red', 'assets/particles/red.png')
    }

    create() {
        let windowWidth = window.innerWidth
        let widnowHeight = window.innerHeight

        let bg = this.add.image(windowWidth / 2, widnowHeight / 2, 'sky')
        bg.setDisplaySize(windowWidth, widnowHeight)

        const particles = this.add.particles(0, 0, 'red', {
            speed: 100,
            scale: { start: 1, end: 0 },
            blendMode: 'ADD'
        })

        const logo = this.physics.add.image(400, 100, 'logo')

        logo.setVelocity(100, 200)
        logo.setBounce(1, 1)
        logo.setCollideWorldBounds(true)

        particles.startFollow(logo)
    }
}