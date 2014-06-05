StartScreen = function() {
    StartScreen.superclass.constructor.apply(this, arguments);

	this.backgroundColor = "#CD9B00";
	this.addChild(new TGE.Sprite().setup({
        x : this.percentageOfWidth(0.5),
        y : this.percentageOfHeight(0.5),
        scaleX : 0.5,
        scaleY : 0.5,
        image: "teemo"
    }));
    this.addChild(new TGE.Button().setup({
        x : this.percentageOfWidth(0.5),
        y : this.percentageOfHeight(0.75),
        image: "play_btn",
        pressFunction : this.gotoGameScreen.bind(this),
    }));
}

StartScreen.prototype = {

	gotoGameScreen : function() {
		this.transitionToWindow({
			windowClass : GameScreen,
			fadeTime : 0.75
		});
	}	
}

extend(StartScreen, TGE.Window);