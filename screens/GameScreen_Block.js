
GameScreen = function(width,height)
{
   
    GameScreen.superclass.constructor.apply(this,arguments);
    this.backgroundColor = "#CD9B00";
    this.blocks = new Array();
    
    this.createBlock(300,300,"b1");
    this.createBlock(500,300,"b1");
    this.createBlock(600,300,"b1");
    this.createBlock(800,300,"b1");
    this.createBlock(1000,300,"b1");
    /*this.createBlock(400,300,"b1");
    this.createBlock(450,300,"b1");
    this.createBlock(500,300,"b1");
    this.createBlock(550,300,"b1");
    this.createBlock(600,300,"b1");*/
    
    this.addEventListener("update",this.updateBrick.bind(this));
  
};

GameScreen.prototype =
{
   
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
    /*getBounds:function(){
        return this._checkVisibilityChange(),this._mBoundingInfoDirty&&this._updateAABB(),this._mAABB
    },*/
    collision: function(b1,b2){
       	if(b1.getBounds().intersects(b2.getBounds())){
            //b2.play();
            return true;
        }
        else{
            return;
        }
    },

    updateBrick: function(event){
        var b = event.currentTarget;
        //console.log(this.blocks.length);
        //for(var x =0;x<2;x++){
            if(this.collision(this.blocks[0],this.blocks[1])){
                this.blocks[0].x=450;
            }
        //};
    }

};

extend(GameScreen,TGE.Window);