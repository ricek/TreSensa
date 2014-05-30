MyGame = function()
{
   
    MyGame.superclass.constructor.call(this);

   
    var gameAssets = [

        //Blocks
        {id:'b1',url:'assets/block/style1.png'},
        {id:'b2',url:'assets/block/style2.png'},
        {id:'b3',url:'assets/block/style3.png'},
        {id:'b4',url:'assets/block/style4.png'},
        {id:'b5',url:'assets/block/style5.png'},
        {id:'b6',url:'assets/block/style6.png'},

        //Buttons
        {id:'play_btn',url:'assets/play_button.png'},
        {id:'playagain_btn',url:'assets/playagain_button.png'}  
    ];
     /*{id:'c1',url:''},{id:'c2',url:''},{id:'c3',url:''},{id:'c4',url:''},{id:'c5',url:''},{id:'c6',url:''},*/
    this.assetManager.assignImageAssetList("required", gameAssets);

   
    TGE.FirstGameWindow = StartScreen;
}

extend(MyGame,TGE.Game);