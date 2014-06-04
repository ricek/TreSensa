
GameScreen = function(width,height)
{
   
    GameScreen.superclass.constructor.apply(this,arguments);
    this.backgroundColor = "#CD9B00";
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
    
    for(var x = 0 ;x< 100;x++){this.createMush(Math.random()*this.width,100);}

    
};

GameScreen.prototype =
{
   
   
    updateBrick: function(event){
        var b = event.currentTarget;
        b.x +=10;
        b.play();
        
        

    },
    updateTeemo: function(event){
        var t = event.currentTarget;
        if(event.keyCode==37){t.x-=10;}
        if(event.keyCode==39){t.x+=10;}
    },
    createMush:function(posx,posy){
        var m = new TGE.Sprite().setup(
        {
            image:'m',
            x:posx,
            y:posy,
            percentageOfHeight:0.5,
            percentageOfWidth:0.5,
        });
        this.addChild(m);
    },
    createTeemo: function(){
        var b =new TGE.SpriteSheetAnimation().setup(
        {
            image:'teemo',
            columns:7,
            rows:1,
            totalFrames:7,
            fps:7,
            x:600,
            y:700,
        });
        //this.blocks.push(b);
        this.addChild(b);
        b.play();
        //this.blocks[this.blocks.length-1].addEventListener("mousedown",this.updateBrick.bind(this.blocks[this.blocks.length-1]));
        b.addEventListener("keydown",this.updateTeemo.bind(b));
    },
    /*getBounds:function(){
        return this._checkVisibilityChange(),this._mBoundingInfoDirty&&this._updateAABB(),this._mAABB
    },*/
    collision: function(b1,b2){
       	if(b1.getBounds().intersects(b2.getBounds(),0.55,0.55)){
            b2.play();
        }
        else{
            return;
        }
    },
   

    /*updateTeemo:function(event){
        for(var x =0;x<6;x++){
            if(collision(bs[x],teemo)){
                teemo.setFrame=2;
            }
        }
    },*/
    /*checkCollision:function(){
        for(var x =0;x<this.blocks.length-1;x++){
            	if(this.collision(this.blocks[x],this.blocks[x+1]))
            		{
            			this.blocks[x+1].play();
            		}
            		
        	
            }
        
        
        
    },*/


};

extend(GameScreen,TGE.Window);