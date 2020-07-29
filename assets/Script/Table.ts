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

    @property(cc.Sprite)
    pineSpr: cc.Sprite = null;

    @property(cc.Sprite)
    leafSpr: cc.Sprite = null;

    @property(cc.Sprite)
    winSpr: cc.Sprite = null;

    @property(cc.Label)
    scoreLabel: cc.Label = null;

    @property(cc.Prefab)
    scoreFeedback: cc.Prefab = null;

    @property
    text: string = 'hello';

    line1: Array<number> = [0,1,0]
    line2: Array<number> = [1,0,1]
    line3: Array<number> = [0,1,0]
    line4: Array<number> = [1,0,1]

    score: number = 200

    createdNodes: Array<cc.Node> = []

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
    
        // this.roll()
        this.node.on('clickroll', (e)=>{
            e.stopPropagation();    
            this.roll()
        })
     

    }

    start () {

    }

    update (dt) {
        // this.node.on('clickroll', (e)=>this.roll())
        this.scoreLabel.string = String(this.score)


    }

    //  CUSTOM FUNCTIONS

    renderAll(){
        this.renderLine(this.line1, 0)
        this.renderLine(this.line2, 1)
        this.renderLine(this.line3, 2)
        this.renderLine(this.line4, 3)

    }

    renderLine( line : Array<number>, row: number ){

        line.forEach((item, ind) =>{

            
            const node = new cc.Node();
            let spriteComponent = node.addComponent(cc.Sprite);
            spriteComponent.spriteFrame = item === 1 ?  this.pineSpr.spriteFrame :  this.leafSpr.spriteFrame ;
            this.node.addChild(node);
            node.setPosition( ind * 115 , row * -60)
            node.setScale(.35,.35)
            this.createdNodes.push(node)


        })

        this.checkWin(line, row)
    }

    roll(){

        this.score -= 20
        this.createScoreFeedback('-20', cc.Color.RED)


        this.createdNodes.forEach( number => {
            number.destroy()
        })

        this.line1 = [ this.returnRnd(), this.returnRnd(), this.returnRnd()]
        this.line2 = [ this.returnRnd(), this.returnRnd(), this.returnRnd()]
        this.line3 = [ this.returnRnd(), this.returnRnd(), this.returnRnd()]
        this.line4 = [ this.returnRnd(), this.returnRnd(), this.returnRnd()]
        this.renderAll()
    }

    returnRnd(){
        return Math.floor( Math.random() + .5)
    }

    checkWin(line: Array<number>, row: number){

        if(line[0] == line[1] && line[1] == line[2]){
            setTimeout(()=>{
                const node = new cc.Node();
                let spriteComponent = node.addComponent(cc.Sprite);
                spriteComponent.spriteFrame = this.winSpr.spriteFrame ;
                this.node.addChild(node);
                node.setPosition( 115 , row * -60)
                node.setScale(1.5,.55)
                this.createdNodes.push(node)
                this.score += 100
                this.createScoreFeedback('+100', cc.Color.GREEN)

                
            }, 600 + (row*200))
        }

    }

    createScoreFeedback(text: String, color: cc.Color){

        const scoreFeedbackInst = cc.instantiate(this.scoreFeedback)
        scoreFeedbackInst.setPosition(this.scoreLabel.node.getPosition().x, this.scoreLabel.node.getPosition().y)
        console.log(this.scoreLabel.node.getPosition())
        scoreFeedbackInst.getComponent(cc.Label).string = String(text)
        scoreFeedbackInst.color = color

        this.node.addChild(scoreFeedbackInst)



    }
}
