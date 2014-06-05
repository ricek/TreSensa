MyGame = function()
{
   
    MyGame.superclass.constructor.call(this);

   
    var gameAssets = [
        {id:'teemo_left',url:'assets/teemo_left.png'},
        {id:'teemo_right',url:'assets/teemo_right.png'},
        {id:'m',url:'assets/murshoom.png'},
        //Blocks
        /*{id:'b1',url:'assets/block/style1.png'},
        {id:'b2',url:'assets/block/style2.png'},
        {id:'b3',url:'assets/block/style3.png'},
        {id:'b4',url:'assets/block/style4.png'},
        {id:'b5',url:'assets/block/style5.png'},
        {id:'b6',url:'assets/block/style6.png'},*/

        //Buttons
        {id:'play_btn',url:'assets/play_button.png'},
        {id:'playagain_btn',url:'assets/playagain_button.png'}  
    
     ];
    this.assetManager.assignImageAssetList("required", gameAssets);

   
    TGE.FirstGameWindow = GameScreen;
}

extend(MyGame,TGE.Game);