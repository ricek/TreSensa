StartScreen = function() {
    StartScreen.superclass.constructor.apply(this, arguments);

    /*this.addChild(new TGE.Text().setup({
            x : 700,
            y : 300,
            text : "Click to SMASH",
            pressFunction : this.gotoGameScreen.bind(this)
    }));*/
	this.backgroundColor = "#CD9B00";
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