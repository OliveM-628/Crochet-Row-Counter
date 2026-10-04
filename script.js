var rowCount = 0;

function addRow() {
    rowCount += 1;
    document.getElementById("rowCounter").innerHTML = "Row: "+ rowCount;
}

function removeRow() {
    rowCount -= 1;
    document.getElementById("rowCounter").innerHTML = "Row: "+ rowCount;
}

function changeImage() {
    console.log("working");
    const collection = document.getElementsByClassName("rowCounterBg");
    collection[0].style.backgroundImage = "linear-gradient(rgba(2, 2, 2, 0.523), rgba(0, 2, 0, 0.763)), url('Assets/pexels-introspectivedsgn-8826936.jpg')";
}
