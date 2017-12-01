//In the controller we get the buttons from the view and attach click listeners. In the listener method we do the desired change to the model.

var HomeScreenViewController = function(view, model) {
    

//listener    
view.plusButton.click(function(){
    model.setNumberOfGuests(model.getNumberOfGuests() + 1);
    console.log(model.getNumberOfGuests());
   
});
   
view.minusButton.click(function(){
    model.setNumberOfGuests(model.getNumberOfGuests() - 1);
    });


view.startButton.click(function(){
    var x = document.getElementById("createnewdinner");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
    });

}