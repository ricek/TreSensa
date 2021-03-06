MyGame = function()
{
    MyGame.superclass.constructor.call(this);

    this.assetManager.addAssets("required",[

        //Sprite
        {id:'teemo_alive',url:'teemo_alive.png'},
        {id:'teemo_dead',url:'teemo_dead.png'},
        {id:'teemo_left',url:'teemo_left.png'},
        {id:'teemo_right',url:'teemo_right.png'},

        //UI
        {id:'m',url:'murshoom.png'},
        {id:'pot',url:'pot.png'},

        //Buttons
        {id:'play_btn',url:'play_button.png'},
        {id:'playagain_btn',url:'playagain_button.png'}

    ]);

    TGE.FirstGameWindow = StartScreen;
}

extend(MyGame,TGE.Game);