window.__require=function t(e,o,r){function n(c,s){if(!o[c]){if(!e[c]){var p=c.split("/");if(p=p[p.length-1],!e[p]){var u="function"==typeof __require&&__require;if(!s&&u)return u(p,!0);if(i)return i(p,!0);throw new Error("Cannot find module '"+c+"'")}c=p}var a=o[c]={exports:{}};e[c][0].call(a.exports,function(t){return n(e[c][1][t]||t)},a,a.exports,t,e,o,r)}return o[c].exports}for(var i="function"==typeof __require&&__require,c=0;c<r.length;c++)n(r[c]);return n}({Button:[function(t,e,o){"use strict";cc._RF.push(e,"22b8clk3ohMrL7dZECtkKb7","Button");var r=this&&this.__extends||function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function r(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(r.prototype=o.prototype,new r)}}(),n=this&&this.__decorate||function(t,e,o,r){var n,i=arguments.length,c=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(c=(i<3?n(c):i>3?n(e,o,c):n(e,o))||c);return i>3&&c&&Object.defineProperty(e,o,c),c};Object.defineProperty(o,"__esModule",{value:!0});var i=cc._decorator,c=i.ccclass,s=(i.property,function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r(e,t),e.prototype.onLoad=function(){var t=this;this.node.on(cc.Node.EventType.MOUSE_DOWN,function(e){t.onClick(e)})},e.prototype.start=function(){},e.prototype.update=function(t){},e.prototype.onClick=function(t){this.node.dispatchEvent(new cc.Event.EventCustom("clickroll",!0))},e=n([c],e)}(cc.Component));o.default=s,cc._RF.pop()},{}],ScoreFeedback:[function(t,e,o){"use strict";cc._RF.push(e,"54176kUfvxORaJAFc5taEx8","ScoreFeedback");var r=this&&this.__extends||function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function r(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(r.prototype=o.prototype,new r)}}(),n=this&&this.__decorate||function(t,e,o,r){var n,i=arguments.length,c=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(c=(i<3?n(c):i>3?n(e,o,c):n(e,o))||c);return i>3&&c&&Object.defineProperty(e,o,c),c};Object.defineProperty(o,"__esModule",{value:!0});var i=cc._decorator,c=i.ccclass,s=(i.property,function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.counter=0,e.initialY=0,e}return r(e,t),e.prototype.onLoad=function(){this.initialY=this.node.y},e.prototype.start=function(){},e.prototype.update=function(t){this.counter++,this.node.setPosition(this.node.x,this.initialY+3*this.counter),this.node.opacity=255-3*this.counter,this.counter>=100&&this.destroy()},e=n([c],e)}(cc.Component));o.default=s,cc._RF.pop()},{}],Table:[function(t,e,o){"use strict";cc._RF.push(e,"eb651+2R4xPd4aRYJqmvHJE","Table");var r=this&&this.__extends||function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function r(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(r.prototype=o.prototype,new r)}}(),n=this&&this.__decorate||function(t,e,o,r){var n,i=arguments.length,c=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(c=(i<3?n(c):i>3?n(e,o,c):n(e,o))||c);return i>3&&c&&Object.defineProperty(e,o,c),c};Object.defineProperty(o,"__esModule",{value:!0});var i=cc._decorator,c=i.ccclass,s=i.property,p=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.pineSpr=null,e.leafSpr=null,e.winSpr=null,e.scoreLabel=null,e.scoreFeedback=null,e.text="hello",e.line1=[0,1,0],e.line2=[1,0,1],e.line3=[0,1,0],e.line4=[1,0,1],e.score=200,e.createdNodes=[],e}return r(e,t),e.prototype.onLoad=function(){var t=this;this.node.on("clickroll",function(e){e.stopPropagation(),t.roll()})},e.prototype.start=function(){},e.prototype.update=function(t){this.scoreLabel.string=String(this.score)},e.prototype.renderAll=function(){this.renderLine(this.line1,0),this.renderLine(this.line2,1),this.renderLine(this.line3,2),this.renderLine(this.line4,3)},e.prototype.renderLine=function(t,e){var o=this;t.forEach(function(t,r){var n=new cc.Node;n.addComponent(cc.Sprite).spriteFrame=1===t?o.pineSpr.spriteFrame:o.leafSpr.spriteFrame,o.node.addChild(n),n.setPosition(115*r,-60*e),n.setScale(.35,.35),o.createdNodes.push(n)}),this.checkWin(t,e)},e.prototype.roll=function(){this.score-=20,this.createScoreFeedback("-20",cc.Color.RED),this.createdNodes.forEach(function(t){t.destroy()}),this.line1=[this.returnRnd(),this.returnRnd(),this.returnRnd()],this.line2=[this.returnRnd(),this.returnRnd(),this.returnRnd()],this.line3=[this.returnRnd(),this.returnRnd(),this.returnRnd()],this.line4=[this.returnRnd(),this.returnRnd(),this.returnRnd()],this.renderAll()},e.prototype.returnRnd=function(){return Math.floor(Math.random()+.5)},e.prototype.checkWin=function(t,e){var o=this;t[0]==t[1]&&t[1]==t[2]&&setTimeout(function(){var t=new cc.Node;t.addComponent(cc.Sprite).spriteFrame=o.winSpr.spriteFrame,o.node.addChild(t),t.setPosition(115,-60*e),t.setScale(1.5,.55),o.createdNodes.push(t),o.score+=100,o.createScoreFeedback("+100",cc.Color.GREEN)},600+200*e)},e.prototype.createScoreFeedback=function(t,e){var o=cc.instantiate(this.scoreFeedback);o.setPosition(this.scoreLabel.node.getPosition().x,this.scoreLabel.node.getPosition().y),console.log(this.scoreLabel.node.getPosition()),o.getComponent(cc.Label).string=String(t),o.color=e,this.node.addChild(o)},n([s(cc.Sprite)],e.prototype,"pineSpr",void 0),n([s(cc.Sprite)],e.prototype,"leafSpr",void 0),n([s(cc.Sprite)],e.prototype,"winSpr",void 0),n([s(cc.Label)],e.prototype,"scoreLabel",void 0),n([s(cc.Prefab)],e.prototype,"scoreFeedback",void 0),n([s],e.prototype,"text",void 0),e=n([c],e)}(cc.Component);o.default=p,cc._RF.pop()},{}]},{},["Button","ScoreFeedback","Table"]);