
GameScreen = function(width,height)
{
   
    GameScreen.superclass.constructor.apply(this,arguments);
    this.backgroundColor = "#CD9B00";
    this.teemo;
    this.mush;
    this.mushs= new Array();
    this.score;
    this.scoreDisplayed = 0;
	this.pots=new Array();
	this.pot;
    //this.blocks = new Array();
    this.createTeemo();
    this.score = new TGE.Text().setup({
            text:"Score: "+this.scoreDisplayed.toString(),
            font:"32px Aria",
            hAlign:"right",
            vAlign:"top",
    });
    this.addChild(this.score);
    //this.createBlock(300,300,"b1");
   // this.createBlock(350,300,"b1");
    /*this.createBlock(400,300,"b1");
    this.createBlock(450,300,"b1");
    this.createBlock(500,300,"b1");
    this.createBlock(550,300,"b1");
    this.createBlock(600,300,"b1");*/
    
    //this.collision(this.blocks[0],this.blocks[1]);
	for(var x = 1;x<=10;x++){
		this.createPot(x*50,50);
	}
    
    for(var x = 0 ;x<5;x++){this.createMush(Math.random()*this.width,Math.random()*-800);}
    this.addEventListener("update",this.updateGame.bind(this)); 
	
    this.score.addEventListener("update",this.updateScore.bind(this));
    
};

GameScreen.prototype =
{
   
   
    /*updateBrick: function(event){
        var b = event.currentTarget;
        b.x +=10;
        b.play();
        
        

    },*/
	createPot:function(posx,posy){
		this.pot = new TGE.Sprite().setup({
			image:'pot',
			x:posx,
			y:posy,
			
			
		});
		this.addChild(this.pot);
		this.pots.push(this.pot);
		
	
	
	},
	/*updatePot:function(){
		for(var z =0;z<this.mushs.length;z++){
            if(this.teemo.getBounds().intersects(this.mushs[z].getBounds()) && this.pots.length < 10){
				this.createPot(this.pots[this.pots.length-1].x+50,50);
			}
			if(this.mushs[z].x>this.height){
				this.removeChild(this.pots[this.pots.length-1]);
			
			}
		}
	},*/	
		
	
    updateScore:function(){
        for(var x =0;x<this.mushs.length;x++){
            if(this.teemo.getBounds().intersects(this.mushs[x].getBounds())){
                this.scoreDisplayed+=1;
                this.removeChild(this.score);
                this.score = new TGE.Text().setup({
                    text:"Score: "+this.scoreDisplayed.toString(),
                    font:"32px Aria",
                    hAlign:"left",
                    vAlign:"top",
                });
                this.addChild(this.score);
            }
        }

    },
    updateMush:function(event){
        var m = event.currentTarget;
        m.y+=Math.random()*5;
        
    },
    updateTeemo: function(event){
        var t = event.currentTarget;
        if(event.keyCode==37){
            t.x-=30;
            t.setImage('teemo_left',1,7);
        }
        else if(event.keyCode==39){
            t.x+=30;
            t.setImage('teemo_right',1,7);
        }
		
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
        
        this.mushs.push(this.mush);

        //this.mush.addEventListener("update",this.updateCollision.bind(this.mush));
    },
    createTeemo: function(){
        this.teemo =new TGE.SpriteSheetAnimation().setup(
        {
            image:'teemo_left',
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
			if(this.teemo.getBounds().intersects(this.mushs[x].getBounds(),0.6,0.7)){
				this.mushs[x].x=Math.random()*this.width;
				this.mushs[x].y=Math.random()*-400;
				
			}
            if(this.teemo.getBounds().intersects(this.mushs[x].getBounds(),0.6,0.7) && this.pots.length < 10 && this.pots.length > 0){
				this.createPot(this.pots[this.pots.length-1].x+50,50);
				
			}
			if(this.teemo.getBounds().intersects(this.mushs[x].getBounds(),0.6,0.7) && this.pots.length < 10 && this.pots.length == 0){
				this.createPot(50,50);
				
			}
			if(this.mushs[x].y>this.height){
				this.removeChild(this.pots[this.pots.length-1]);
				this.mushs[x].y=0;
				this.pots.pop()
				//this.pots.splice(this.pots[9]);
				
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