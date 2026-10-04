var rowCount = 0;

let photoIterator = 0;
let photoList = ['https://images.pexels.com/photos/8931780/pexels-photo-8931780.jpeg',
    'Assets/pexels-introspectivedsgn-8826936.jpg',
    'https://images.pexels.com/photos/5660373/pexels-photo-5660373.jpeg',
    'https://images.pexels.com/photos/5659921/pexels-photo-5659921.jpeg'
];

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
    photoIterator += 1;
    if (photoIterator >= photoList.length) {
        photoIterator = 0;
    }
    const collection = document.getElementsByClassName("rowCounterBg");
    collection[0].style.backgroundImage = "linear-gradient(rgba(2, 2, 2, 0.523), rgba(0, 2, 0, 0.763)), url(" + photoList[photoIterator] + ")";
    console.log(photoIterator);
}
