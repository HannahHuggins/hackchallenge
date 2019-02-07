var jsonVar = { 
    businessName: "Test Business", 
    postCode: "P05T CD3", 
    ratingValue: "Awaiting Inspection", 
}

var jsonStr = JSON.stringify(jsonVar);

document.getElementById("test-para").innerHTML = displayData(jsonVar);

function displayData(business){
    var output = "";
    output += business.businessName + "<br />";
    output += business.postCode + "<br />";
    output += business.ratingValue + "<br />";

    return output;
}