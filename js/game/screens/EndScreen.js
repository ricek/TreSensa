EndScreen = function() {
    EndScreen.superclass.constructor.apply(this, arguments);

	this.backgroundColor = "#CD9B00";
    this.addChild(new TGE.Button().setup({
        x : this.percentageOfWidth(0.5),
        y : this.percentageOfHeight(0.75),
        image: "playagain_btn",
        pressFunction : this.gotoStartScreen.bind(this),
    }));
}

EndScreen.prototype = {

	gotoStartScreen : function() {
		this.transitionToWindow({
			windowClass : StartScreen,
			fadeTime : 0.75
		});
	}	
}

extend(EndScreen, TGE.Window);