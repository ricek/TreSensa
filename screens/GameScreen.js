
GameScreen = function(width,height)
{
   
    GameScreen.superclass.constructor.apply(this,arguments);
    this.backgroundColor = "#CD9B00";
    this.teemo;
    this.mush;
    this.mushs= new Array();
    this.teemoImage;
    //this.blocks = new Array();
    this.createTeemo();

    //this.createBlock(300,300,"b1");
   // this.createBlock(350,300,"b1");
    /*this.createBlock(400,300,"b1");
    this.createBlock(450,300,"b1");
    this.createBlock(500,300,"b1");
    this.createBlock(550,300,"b1");
    this.createBlock(600,300,"b1");*/
    
    //this.collision(this.blocks[0],this.blocks[1]);
    
    for(var x = 0 ;x<5;x++){this.createMush(Math.random()*this.width,Math.random()*-400);}
    
    
};

GameScreen.prototype =
{
   
   
    updateBrick: function(event){
        var b = event.currentTarget;
        b.x +=10;
        b.play();
        
        

    },
    updateMush:function(event){
        var m = event.currentTarget;
        m.y+=Math.random()*5;
        
    },
    updateTeemo: function(event){
        var t = event.currentTarget;
        if(event.keyCode==37){t.x-=30;this.teemoImage = "teemo_left";}
        if(event.keyCode==39){t.x+=30;this.teemoImage = "teemo_right";}
    },
    createMush:function(posx,posy){
        this.mush = new TGE.Sprite().setup(
        {
            image:'m',
            x:posx,
            y:posy,
            scaleX:0.2,
            scaleY:0.2
            
        });
        this.addChild(this.mush);
        this.mush.addEventListener("update",this.updateMush.bind(this.mush));
        this.addEventListener("update",this.updateGame.bind(this));
        this.mushs.push(this.mush);

        //this.mush.addEventListener("update",this.updateCollision.bind(this.mush));
    },
    createTeemo: function(){
        this.teemo =new TGE.SpriteSheetAnimation().setup(
        {
            image:'teemo',
            columns:7,
            rows:1,
            totalFrames:7,
            fps:7,
            x:this.width / 2,
            y:this.height - 50,
        });
        //this.blocks.push(b);
        this.addChild(this.teemo);
        this.teemo.play();
        //this.blocks[this.blocks.length-1].addEventListener("mousedown",this.updateBrick.bind(this.blocks[this.blocks.length-1]));
        this.teemo.addEventListener("keydown",this.updateTeemo.bind(this.teemo));
    },
    updateGame:function() {
        for(var x =0;x<this.mushs.length;x++){
        if(this.teemo.getBounds().intersects(this.mushs[x].getBounds())){
            this.mushs[x].x=Math.random()*this.width;
            this.mushs[x].y=Math.random()*-400;

        }

    }
    },
    /*getBounds:function(){
        return this._checkVisibilityChange(),this._mBoundingInfoDirty&&this._updateAABB(),this._mAABB
    },*/
    /*collision: function(b1,b2){
       	if(b1.getBounds().intersects(b2.getBounds(),0.55,0.55)){
            return true;
        }
        else{
            return false;
        }
    },*/
   

    /*updateTeemo:function(event){
        for(var x =0;x<6;x++){
            if(collision(bs[x],teemo)){
                teemo.setFrame=2;
            }
        }
    },*/
    /*updateCollision:function(){
        if(this.collision(this.mush,this.teemo)){
            this.removeChild(this.mush);
        }
    },*/


};

extend(GameScreen,TGE.Window);