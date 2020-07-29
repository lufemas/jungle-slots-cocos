// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    // @property(cc.Node)
    // table: cc.Node ;

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.node.on(cc.Node.EventType.MOUSE_DOWN, (e)=>{
            this.onClick(e)
        })
    }

    start () {
        

    }

    update (dt) {

    
        
    }

    onClick(eventType){
        this.node.dispatchEvent( new cc.Event.EventCustom('clickroll', true) );
    }

}
