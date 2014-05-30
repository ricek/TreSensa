
GameScreen = function(width,height)
{
   
    GameScreen.superclass.constructor.apply(this,arguments);

    this.teemo;
    this.b1;//Right
    this.b2;//Downright
    this.b3;//downleft
    this.b4;//Left
    this.b5;//Upleft
    this.b6;//Upright
    this.bs;
    this.Score;
	/*this.c1;
    this.c2;
    this.c3;
    this.c4;
    this.c5;
    this.c6;*/
    this.displayScore;

    this.backgroundColor = "#CD9B00";
    this.b1 = new TGE.SpriteSheetAnimation().setup(
    {
        image:"b1",
        columns:1,
        rows:4,
        totalFrames:4,
        fps:24,
        x:0,
        y:0,
        scaleX: 0.35,
        scaleY: 0.35,
        looping:false,
    });
    this.b2 = new TGE.SpriteSheetAnimation().setup(
    {
        image:"b2",
        columns:4,
        rows:1,
        totalFrames:4,
        fps:24,
        x:0,
        y:0,
        scaleX: 0.35,
        scaleY: 0.35,
        looping:false,
    });
    this.b3 = new TGE.SpriteSheetAnimation().setup(
    {
        image:"b3",
        columns:4,
        rows:1,
        totalFrames:4,
        fps:24,
        x:0,
        y:0,
        scaleX: 0.35,
        scaleY: 0.35,
        looping:false,
    });
    this.b4 = new TGE.SpriteSheetAnimation().setup(
    {
        image:"b4",
        columns:4,
        rows:1,
        totalFrames:4,
        fps:24,
        x:0,
        y:0,
        scaleX: 0.35,
        scaleY: 0.35,
        looping:false,
    });
    this.b5 = new TGE.SpriteSheetAnimation().setup(
    {
        image:"b5",
        columns:4,
        rows:1,
        totalFrames:4,
        fps:24,
        x:0,
        y:0,
        scaleX: 0.35,
        scaleY: 0.35,
        looping:false,
    });
    this.b6 = new TGE.SpriteSheetAnimation().setup(
    {
        image:"b6",
        columns:4,
        rows:1,
        totalFrames:4,
        fps:24,
        x:0,
        y:0,
  		scaleX: 0.35,
        scaleY: 0.35,
        looping:false,
    });
    this.displayScore = new TGE.Text().setup({
        x:100,
        y:100,
        text:"Score: "+Score,
        font:"32px sans-serif",
        textColor:"red",

    });
    //this.addChild(this.b1);
    //this.addChild(this.b2);
    //this.addChild(this.b3);
    this.addChild(this.b1);
    this.b1.x=600;
    this.b1.y=400;
    this.addChild(this.b1);
    this.b1.x=600;
    this.b1.x=300;
    this.addChild(this.b5);
    this.b5.x=480;
    this.b5.y=500;
    this.addChild(this.b6);
    this.b6.x=400;
    this.b6.y=500;
    //this.bs = [this.b1,this.b2,this.b3,this.b4,this.b5,this.b6];
    this.bs = [this.b1,this.b5,this.b6];

    //this.b1.play();
    
  /*
    for (var x in this.bs){
        for(var y in this.bs){
            console.log(this);
            if(this.collision(x,y)){
                
            }
        }
    }
   
    for(var c =0;c<6;c++){

        if(this.collision(this.bs[c],this.teemo)){

        }
    }*/

    this.b1.addEventListener("mousedown",this.updateBrick.bind(this));
    this.b5.addEventListener("mousedown",this.updateBrick.bind(this));
    this.b6.addEventListener("mousedown",this.updateBrick.bind(this));
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
    getBounds:function(){
    	return this._checkVisibilityChange(),this._mBoundingInfoDirty&&this._updateAABB(),this._mAABB
    },
  //updateCylinder
    updateTeemo:function(event){
        for(var x =0;x<6;x++){
            if(collision(bs[x],teemo)){
                teemo.setFrame=2;
            }
        }
    },

};
/*
GameScreen.prototype.collision = function(b1,b2){
       if(b1.getBounds().intersects(b2.getBounds())){
            return true;
        }
        else{
            return false;
        }
    };*/
extend(GameScreen,TGE.Window);