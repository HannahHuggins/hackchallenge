var businesses = [];

$(function() {
    initialiseBusinesses();
    var htmlText = loadData();
    document.getElementById("test-para").innerHTML = loadData(htmlText);
});

// function onInit(){
//     initialiseBusinesses();
//     var htmlText = loadData();
//     document.getElementById("test-para").innerHTML = displayData(htmlText);

//     console.log('TEST', $('#test-para'));
// }

function loadData(){
    var output = "";

    businesses.forEach(bus => {
        if(bus.businessName != undefined){
            output += displayData(bus);
            // output++;
        }
    });
    return output;
}

function displayData(business){
    var output = "";

    output += business.businessName + "<br>";
    output += business.postCode + "<br>";
    output += business.hygeneRating + "<br><br>";
    
    return output;
}

// onInit();

function initialiseBusinesses(){
var business1 = {
businessName: "Chi Phi's Chippy",
postCode: "C0D3 CH1",
hygeneRating: 3
}

var business2 = {
businessName: "Posh Donald's Restataunt",
postCode: "C0D3 P05",
hygeneRating: "Exempt"
}

var business3 = {
businessName: "Good Guy's Pizza",
postCode: "C0D3 P1Z",
hygeneRating: 4
}

var business4 = {
businessName: "Chilli Cafe",
postCode: "C0D3 C4F",
hygeneRating: 5
}

var business5 = {
businessName: "Wonky Joe's Grill",
postCode: "C0D3 J03",
hygeneRating: 2
}


}