// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    // @property(cc.Label)
    // label: cc.Label = null;

    // @property
    // text: string = 'hello';

    counter: number = 0
    initialY: number = 0

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.initialY = this.node.y
    }

    start () {

    }

    update (dt) {
       this.counter++;
       this.node.setPosition(this.node.x, this.initialY + this.counter*3) 
       this.node.opacity = 255 - this.counter*3

       if( this.counter >= 100 ) this.destroy()
    }
}
