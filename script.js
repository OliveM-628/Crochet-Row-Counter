var rowCount = 0;

function addRow() {
    rowCount += 1;
    document.getElementById("rowCounter").innerHTML = rowCount;
}

function removeRow() {
    rowCount -= 1;
    document.getElementById("rowCounter").innerHTML = rowCount;
}
