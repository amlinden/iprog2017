//ExampleView Object constructor
var HomeScreenView = function (container,model) {

	 // Get all the relevant elements of the view (ones that show data
	 // and/or ones that responded to interaction)
	 this.numberofGuests = container.find("#numberofGuests");
	 this.plusButton = container.find("#plusGuest");
	 this.minusButton = container.find("#minusGuest");
	 this.startButton = container.find("#start");
	 model.addObserver(this);
	 this.update = function(){
		this.numberofGuests.html(model.getNumberOfGuests());
	 }
	 this.numberofGuests.html(model.getNumberOfGuests());
	}