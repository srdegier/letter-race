import { GameObject } from "./gameObject.js";
export class Board extends GameObject {
    constructor() {
        super();
        console.log("Board init");
        this.create();
    }
    create() {
        console.log('hey');
    }
    update() {
    }
}
//# sourceMappingURL=board.js.map