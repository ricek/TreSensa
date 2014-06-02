
GameScreen = function(width,height)
{
   
    GameScreen.superclass.constructor.apply(this,arguments);
    this.backgroundColor = "#CD9B00";
    this.blocks = new Array();
    this.createBlock(300,300,"b1");
    this.createBlock(400,400,"b2");
   
    

    
};

GameScreen.prototype =
{
   
    collision: function(b1,b2){
       if(b1.getBounds().intersects(b2.getBounds(),0.5,0.5)){
            return true;
        }
        else{
            return false;
        }
    },
    updateBrick: function(event){
        var b = event.currentTarget;
        b.play();
    },
    createBlock: function(posx,posy,type){
        var b =new TGE.SpriteSheetAnimation().setup(
        {
            image:type,
            columns:1,
            rows:4,
            totalFrames:4,
            fps:24,
            x:posx,
            y:posy,
            scaleX: 0.35,
            scaleY: 0.35,
            looping:false,
        });
        this.blocks.push(b);
        this.addChild(b);
        this.blocks[this.blocks.length-1].addEventListener("mousedown",this.updateBrick.bind(this.blocks[this.blocks.length-1]));
        
    
       

    },
    getBounds:function(){
        return this._checkVisibilityChange(),this._mBoundingInfoDirty&&this._updateAABB(),this._mAABB
    },

    updateTeemo:function(event){
        for(var x =0;x<6;x++){
            if(collision(bs[x],teemo)){
                teemo.setFrame=2;
            }
        }
    },

};

extend(GameScreen,TGE.Window);