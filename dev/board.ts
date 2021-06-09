import { Tiles } from "./tiles.js"
import { GameObject } from "./gameObject.js"

export class Board extends GameObject{
    constructor() {
        super()
        console.log("Board init")
        this.create()
    }

    protected create() {
        console.log('hey')

    }

    public update() {

    }
}