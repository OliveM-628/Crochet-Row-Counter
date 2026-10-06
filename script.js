var rowCount = 0;

let photoIterator = 0;
let photoList = ['https://images.pexels.com/photos/8931780/pexels-photo-8931780.jpeg',
    'https://images.pexels.com/photos/8826936/pexels-photo-8826936.jpeg',
    'https://images.pexels.com/photos/5660373/pexels-photo-5660373.jpeg',
    'https://images.pexels.com/photos/5659921/pexels-photo-5659921.jpeg',
    'https://images.pexels.com/photos/4601228/pexels-photo-4601228.png',
    'https://images.pexels.com/photos/5806996/pexels-photo-5806996.jpeg',
    'https://images.pexels.com/photos/3693232/pexels-photo-3693232.jpeg',
    'https://images.pexels.com/photos/35285968/pexels-photo-35285968.jpeg',
    'https://images.pexels.com/photos/9699427/pexels-photo-9699427.jpeg',
    'https://images.pexels.com/photos/11016036/pexels-photo-11016036.jpeg'
];

document.getElementById("showBackground").checked = true;

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
    // if (photoIterator >= photoList.length) {
    //     photoIterator = 0;
    // }
    const collection = document.getElementsByClassName("rowCounterBg");
    collection[0].style.backgroundImage = "linear-gradient(rgba(2, 2, 2, 0.523), rgba(0, 2, 0, 0.763)), url(" + photoList[Math.floor(Math.random() * photoList.length)] + ")";
    console.log(photoIterator);
}

function turnOffBgYarn() {
    var checkbox = document.getElementById("showBackground");
    console.log(checkbox.checked);
    if (checkbox.checked == true) { //the logic is reversed and I don't know why
        console.log("checkbox")
        document.body.style.backgroundImage = "";
    }
    else {
        document.body.style.backgroundImage = "url('Assets\\ideativas-tlm-yarn-8748847_1920.png')"
    }
}
