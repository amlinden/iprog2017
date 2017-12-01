//this is the overall code of the application. 
//initial setup of the app (when the page loads for the first time).
$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	//And create the needed controllers and views
	var homeScreenView = new HomeScreenView($("#exampleView"), model);
	///var selectdinnerView = new SelectdinnerView($("#selectdinnerView"));
	var homeScreenViewController = new HomeScreenViewController(homeScreenView,model);

});