const checkbox1 = document.querySelector("#textCheckbox");
const checkbox2 = document.querySelector("#imageCheckbox");
const checkbox3 = document.querySelector("#gifCheckbox");

checkbox1.addEventListener("click", function() {
if (this.checked) {
    checkbox2.checked = false;
    checkbox3.checked = false;
}
});

checkbox2.addEventListener("click", function() {
if (this.checked) {
    checkbox1.checked = false;
    checkbox3.checked = false;
}
});

checkbox3.addEventListener("click", function() {
if (this.checked) {
    checkbox1.checked = false;
    checkbox2.checked = false;
}
});

 
 // var checkbox1 = document.getElementById("imageCheckbox");
        // var checkbox2 = document.getElementById("textCheckbox");
        // var checkbox3 = document.getElementById("gifCheckbox");
        
        // checkbox1.addEventListener("click", function() {
        //   if (checkbox1.checked && checkbox2.checked && checkbox3.checked) {
        //     alert("All checkboxes are checked!");
        //   }
        // });
        
        // checkbox2.addEventListener("click", function() {
        //   if (checkbox1.checked && checkbox2.checked && checkbox3.checked) {
        //     alert("All checkboxes are checked!");
        //   }
        // });
        
        // checkbox3.addEventListener("click", function() {
        //   if (checkbox1.checked && checkbox2.checked && checkbox3.checked) {
        //     alert("All checkboxes are checked!");
        //   }
        // });



        // var createButton = document.getElementById("createButton");
        // var textCheckbox = document.getElementById("textCheckbox");
        // var imageCheckbox = document.getElementById("imageCheckbox");
        // var gifCheckbox = document.getElementById("gifCheckbox");
        // var generatedText = document.getElementById("generatedText");
        // var generatedImages = document.getElementById("generatedImages");
        // var generatedGifs = document.getElementById("generatedGifs");

        // createButton.addEventListener("click", function() {
        // if (textCheckbox.checked) {
        //     var texts = [      "Lorem ipsum dolor sit amet",  
        //         "Consectetur adipiscing elit",   
        //            "Sed do eiusmod tempor incididunt",   
        //               "Ut labore et dolore magna aliqua",  
        //                   "Duis aute irure dolor in reprehenderit"    ];
        
        //     var randomIndex = Math.floor(Math.random() * texts.length);
        //     var randomText = texts[randomIndex];
        
        //     generatedText.textContent = randomText;
        // }
        
        // if (imageCheckbox.checked) {
        //     var images = [      "https://via.placeholder.com/150x150?text=Image+1",  
        //         "https://via.placeholder.com/150x150?text=Image+2",     
        //          "https://via.placeholder.com/150x150?text=Image+3",   
        //             "https://via.placeholder.com/150x150?text=Image+4",    
        //               "https://via.placeholder.com/150x150?text=Image+5"    ];
        
        //     var randomImages = "";
        //     for (var i = 0; i < images.length; i++) {
        //     var randomIndex = Math.floor(Math.random() * images.length);
        //     var randomImage = images[randomIndex];
        //     randomImages += `<img src="${randomImage}" width="150" height="150">`;
        //     }
        
        //     generatedImages.innerHTML = randomImages;
            
        // }
        // if (gifCheckbox.checked) {
        //     var gifs = [
        //         "https://media.giphy.com/media/3o7abKstlPihoNQ2Qc/giphy.gif",
        //         "https://media.giphy.com/media/xUPGcguWZHRC2HyBRS/giphy.gif",
        //         "https://media.giphy.com/media/26AHvRUhT6pxzbuXG/giphy.gif"
        //     ];
        //     var randomGif = gifs[Math.floor(Math.random() * gifs.length)];
        //     var gifElement = document.createElement("img");
        //     gifElement.setAttribute("src", randomGif);
        //     document.getElementById("generatedGifs").appendChild(gifElement);
        //     }
        // });

        function generateRandomQuotes(){
            var quote = [
                "Lorem ipsum dolor sit amet",  
                "Consectetur adipiscing elit",   
                "Sed do eiusmod tempor incididunt",   
                "Ut labore et dolore magna aliqua",  
                "Duis aute irure dolor in reprehenderit"
            ];
        
            var randomloveQuote = Math.floor(Math.random() * quote.length);
            var randomlove = quote[randomloveQuote];
            document.querySelector('.quote').innerHTML = randomlove;
        }
        
        generateRandomQuotes();
        




function generateContent() {
    var imageCheckbox = document.getElementById("imageCheckbox");
    var textCheckbox = document.getElementById("textCheckbox");
    var gifCheckbox = document.getElementById("gifCheckbox");
    var genderSelect = document.getElementById("genderSelect");
    var content = document.getElementById("content");
    content.innerHTML = "";

    if (textCheckbox.checked) {
        var selectedGender = genderSelect.value;
        var text;
    if (selectedGender === "BoyFriend") {
            text = [
                "Lorem ipsum dolor sit amet",  
                "Consectetur adipiscing elit",   
                "Sed do eiusmod tempor incididunt",   
                "Ut labore et dolore magna aliqua",  
                "Duis aute irure dolor in reprehenderit"
                ];
            
        var randomIndex = Math.floor(Math.random() * text.length);
        var randomText = text[randomIndex];

    } else if (selectedGender === "GirlFriend") {
        text = [
            "Lorem ipsum dolor sit amet",  
            "Consectetur adipiscing elit",   
            "Sed do eiusmod tempor incididunt",   
            "Ut labore et dolore magna aliqua",  
            "Duis aute irure dolor in reprehenderit"
            ];
        
        var randomIndex = Math.floor(Math.random() * text.length);
        var randomText = text[randomIndex];

    }else if (selectedGender === "Friend") {
        text = [
            "Lorem ipsum dolor sit amet",  
            "Consectetur adipiscing elit",   
            "Sed do eiusmod tempor incididunt",   
            "Ut labore et dolore magna aliqua",  
            "Duis aute irure dolor in reprehenderit"
            ];
        
        var randomIndex = Math.floor(Math.random() * text.length);
        var randomText = text[randomIndex];

    }else if (selectedGender === "Dad") {
        text = [
            "Lorem ipsum dolor sit amet",  
            "Consectetur adipiscing elit",   
            "Sed do eiusmod tempor incididunt",   
            "Ut labore et dolore magna aliqua",  
            "Duis aute irure dolor in reprehenderit"
            ];
        
        var randomIndex = Math.floor(Math.random() * text.length);
        var randomText = text[randomIndex];

    }else if (selectedGender === "Mum") {
        text = [
            "Lorem ipsum dolor sit amet",  
            "Consectetur adipiscing elit",   
            "Sed do eiusmod tempor incididunt",   
            "Ut labore et dolore magna aliqua",  
            "Duis aute irure dolor in reprehenderit"
            ];
        
        var randomIndex = Math.floor(Math.random() * text.length);
        var randomText = text[randomIndex];

    }else if (selectedGender === "Sister") {
        text = [
            "Lorem ipsum dolor sit amet",  
            "Consectetur adipiscing elit",   
            "Sed do eiusmod tempor incididunt",   
            "Ut labore et dolore magna aliqua",  
            "Duis aute irure dolor in reprehenderit"
            ];
        
        var randomIndex = Math.floor(Math.random() * text.length);
        var randomText = text[randomIndex];

    }else if (selectedGender === "Brother") {
        text = [
            "Lorem ipsum dolor sit amet",  
            "Consectetur adipiscing elit",   
            "Sed do eiusmod tempor incididunt",   
            "Ut labore et dolore magna aliqua",  
            "Duis aute irure dolor in reprehenderit"
            ];
        
        var randomIndex = Math.floor(Math.random() * text.length);
        var randomText = text[randomIndex];

    }else if (selectedGender === "Grand-pa") {
        text = [
            "Lorem ipsum dolor sit amet",  
            "Consectetur adipiscing elit",   
            "Sed do eiusmod tempor incididunt",   
            "Ut labore et dolore magna aliqua",  
            "Duis aute irure dolor in reprehenderit"
            ];
        
        var randomIndex = Math.floor(Math.random() * text.length);
        var randomText = text[randomIndex];

    }else if (selectedGender === "Grand-ma") {
        text = [
            "Lorem ipsum dolor sit amet",  
            "Consectetur adipiscing elit",   
            "Sed do eiusmod tempor incididunt",   
            "Ut labore et dolore magna aliqua",  
            "Duis aute irure dolor in reprehenderit"
            ];
        
        var randomIndex = Math.floor(Math.random() * text.length);
        var randomText = text[randomIndex];
    }else if (selectedGender === "Other-Fam-Members") {
        text = [
            "Lorem ipsum dolor sit amet",  
            "Consectetur adipiscing elit",   
            "Sed do eiusmod tempor incididunt",   
            "Ut labore et dolore magna aliqua",  
            "Duis aute irure dolor in reprehenderit"
            ];
        
        var randomIndex = Math.floor(Math.random() * text.length);
        var randomText = text[randomIndex];
    }
    content.innerHTML += `<p>${randomText}</p>`;}

    // ////////////////////image selection/////////////////////////////////

    if (imageCheckbox.checked) {
        var selectedGender = genderSelect.value;
        var images;
    if (selectedGender === "BoyFriend") {

        images = [
            "src/images/800x600.jpg",
            "src/images/41qaznWbStL.jpg",
            "src/images/51+jItp5JiL.jpg",
            "src/images/81LmaYlUyZL.png",
            "src/61a0XRXzKDL.jpg" 
            ];
        
            for (var i = 0; i < images.length; i++) {
            var randomIndex = Math.floor(Math.random() * images.length);
            var randomImage = images[randomIndex];
        }

    } else if (selectedGender === "GirlFriend") {
        images = [
            "src/images/800x600.jpg",
            "src/images/41qaznWbStL.jpg",
            "src/images/51+jItp5JiL.jpg",
            "src/images/81LmaYlUyZL.png",
            "src/61a0XRXzKDL.jpg" 
            ];
        
            for (var i = 0; i < images.length; i++) {
            var randomIndex = Math.floor(Math.random() * images.length);
            var randomImage = images[randomIndex];
        }

    }else if (selectedGender === "Friend") {
        images = [
            "src/images/800x600.jpg",
            "src/images/41qaznWbStL.jpg",
            "src/images/51+jItp5JiL.jpg",
            "src/images/81LmaYlUyZL.png",
            "src/61a0XRXzKDL.jpg" 
            ];
        
            for (var i = 0; i < images.length; i++) {
            var randomIndex = Math.floor(Math.random() * images.length);
            var randomImage = images[randomIndex];
        }
    }else if (selectedGender === "Dad") {
        images = [
            "src/images/800x600.jpg",
            "src/images/41qaznWbStL.jpg",
            "src/images/51+jItp5JiL.jpg",
            "src/images/81LmaYlUyZL.png",
            "src/61a0XRXzKDL.jpg" 
            ];
        
            for (var i = 0; i < images.length; i++) {
            var randomIndex = Math.floor(Math.random() * images.length);
            var randomImage = images[randomIndex];
        }
    }else if (selectedGender === "Mum") {
        images = [
            "src/images/800x600.jpg",
            "src/images/41qaznWbStL.jpg",
            "src/images/51+jItp5JiL.jpg",
            "src/images/81LmaYlUyZL.png",
            "src/61a0XRXzKDL.jpg" 
            ];
        
            for (var i = 0; i < images.length; i++) {
            var randomIndex = Math.floor(Math.random() * images.length);
            var randomImage = images[randomIndex];
        }
    }else if (selectedGender === "Sister") {
        images = [
            "src/images/800x600.jpg",
            "src/images/41qaznWbStL.jpg",
            "src/images/51+jItp5JiL.jpg",
            "src/images/81LmaYlUyZL.png",
            "src/61a0XRXzKDL.jpg" 
            ];
        
            for (var i = 0; i < images.length; i++) {
            var randomIndex = Math.floor(Math.random() * images.length);
            var randomImage = images[randomIndex];
        }
    }else if (selectedGender === "Brother") {
        images = [
            "src/images/800x600.jpg",
            "src/images/41qaznWbStL.jpg",
            "src/images/51+jItp5JiL.jpg",
            "src/images/81LmaYlUyZL.png",
            "src/61a0XRXzKDL.jpg" 
            ];
        
            for (var i = 0; i < images.length; i++) {
            var randomIndex = Math.floor(Math.random() * images.length);
            var randomImage = images[randomIndex];
        }
    }else if (selectedGender === "Grand-pa") {
        images = [
            "src/images/800x600.jpg",
            "src/images/41qaznWbStL.jpg",
            "src/images/51+jItp5JiL.jpg",
            "src/images/81LmaYlUyZL.png",
            "src/61a0XRXzKDL.jpg" 
            ];
        
            for (var i = 0; i < images.length; i++) {
            var randomIndex = Math.floor(Math.random() * images.length);
            var randomImage = images[randomIndex];
        }
    }else if (selectedGender === "Grand-ma") {
        images = [
            "src/images/800x600.jpg",
            "src/images/41qaznWbStL.jpg",
            "src/images/51+jItp5JiL.jpg",
            "src/images/81LmaYlUyZL.png",
            "src/61a0XRXzKDL.jpg" 
            ];
        
            for (var i = 0; i < images.length; i++) {
            var randomIndex = Math.floor(Math.random() * images.length);
            var randomImage = images[randomIndex];
        }
    }else if (selectedGender === "Other-Fam-Members") {
        images = [
            "src/images/800x600.jpg",
            "src/images/41qaznWbStL.jpg",
            "src/images/51+jItp5JiL.jpg",
            "src/images/81LmaYlUyZL.png",
            "src/61a0XRXzKDL.jpg" 
            ];
        
            for (var i = 0; i < images.length; i++) {
            var randomIndex = Math.floor(Math.random() * images.length);
            var randomImage = images[randomIndex];
        }
    }
    content.innerHTML += `<img src="${randomImage}"  width="150" height="150" />`;
    }
// //////////////// gif selection/////////////////////
    if (gifCheckbox.checked) {
        var selectedGender = genderSelect.value;
        var gifs;
    if (selectedGender === "BoyFriend") {

        gifs = [
                "https://media.giphy.com/media/3o7abKstlPihoNQ2Qc/giphy.gif",
                "https://media.giphy.com/media/xUPGcguWZHRC2HyBRS/giphy.gif",
                "https://media.giphy.com/media/26AHvRUhT6pxzbuXG/giphy.gif"
            ];
        var randomGif = gifs[Math.floor(Math.random() * gifs.length)];

    } else if (selectedGender === "GirlFriend") {
        gifs = [
            "https://media.giphy.com/media/3o7abKstlPihoNQ2Qc/giphy.gif",
            "https://media.giphy.com/media/xUPGcguWZHRC2HyBRS/giphy.gif",
            "https://media.giphy.com/media/26AHvRUhT6pxzbuXG/giphy.gif"
        ];
        var randomGif = gifs[Math.floor(Math.random() * gifs.length)];

    }else if (selectedGender === "Friend") {
        gifs = [
            "https://media.giphy.com/media/3o7abKstlPihoNQ2Qc/giphy.gif",
            "https://media.giphy.com/media/xUPGcguWZHRC2HyBRS/giphy.gif",
            "https://media.giphy.com/media/26AHvRUhT6pxzbuXG/giphy.gif"
        ];
        var randomGif = gifs[Math.floor(Math.random() * gifs.length)];
    }else if (selectedGender === "Dad") {
        gifs = [
            "https://media.giphy.com/media/3o7abKstlPihoNQ2Qc/giphy.gif",
            "https://media.giphy.com/media/xUPGcguWZHRC2HyBRS/giphy.gif",
            "https://media.giphy.com/media/26AHvRUhT6pxzbuXG/giphy.gif"
        ];
        var randomGif = gifs[Math.floor(Math.random() * gifs.length)];
    }else if (selectedGender === "Mum") {
        gifs = [
            "https://media.giphy.com/media/3o7abKstlPihoNQ2Qc/giphy.gif",
            "https://media.giphy.com/media/xUPGcguWZHRC2HyBRS/giphy.gif",
            "https://media.giphy.com/media/26AHvRUhT6pxzbuXG/giphy.gif"
        ];
        var randomGif = gifs[Math.floor(Math.random() * gifs.length)];
    }else if (selectedGender === "Sister") {
        gifs = [
            "https://media.giphy.com/media/3o7abKstlPihoNQ2Qc/giphy.gif",
            "https://media.giphy.com/media/xUPGcguWZHRC2HyBRS/giphy.gif",
            "https://media.giphy.com/media/26AHvRUhT6pxzbuXG/giphy.gif"
        ];
        var randomGif = gifs[Math.floor(Math.random() * gifs.length)];
    }else if (selectedGender === "Brother") {
        gifs = [
            "https://media.giphy.com/media/3o7abKstlPihoNQ2Qc/giphy.gif",
            "https://media.giphy.com/media/xUPGcguWZHRC2HyBRS/giphy.gif",
            "https://media.giphy.com/media/26AHvRUhT6pxzbuXG/giphy.gif"
        ];
        var randomGif = gifs[Math.floor(Math.random() * gifs.length)];
    }else if (selectedGender === "Grand-pa") {
        gifs = [
            "https://media.giphy.com/media/3o7abKstlPihoNQ2Qc/giphy.gif",
            "https://media.giphy.com/media/xUPGcguWZHRC2HyBRS/giphy.gif",
            "https://media.giphy.com/media/26AHvRUhT6pxzbuXG/giphy.gif"
        ];
        var randomGif = gifs[Math.floor(Math.random() * gifs.length)];
    }else if (selectedGender === "Grand-ma") {
        gifs = [
            "https://media.giphy.com/media/3o7abKstlPihoNQ2Qc/giphy.gif",
            "https://media.giphy.com/media/xUPGcguWZHRC2HyBRS/giphy.gif",
            "https://media.giphy.com/media/26AHvRUhT6pxzbuXG/giphy.gif"
        ];
        var randomGif = gifs[Math.floor(Math.random() * gifs.length)];
    }else if (selectedGender === "Other-Fam-Members") {
        gifs = [
            "https://media.giphy.com/media/3o7abKstlPihoNQ2Qc/giphy.gif",
            "https://media.giphy.com/media/xUPGcguWZHRC2HyBRS/giphy.gif",
            "https://media.giphy.com/media/26AHvRUhT6pxzbuXG/giphy.gif"
        ];
        var randomGif = gifs[Math.floor(Math.random() * gifs.length)];
    }
    content.innerHTML += `<img src="${randomGif}" />`;
    }
}

// const wallpapers = [
//     "src/images/800x600.jpg",
//     "src/images/41qaznWbStL.jpg",
//     "src/images/51+jItp5JiL.jpg",
//     "src/images/81LmaYlUyZL.png",
//     "src/61a0XRXzKDL.jpg"
//     ];

//     const body = document.querySelector("body");
//     const randomIndex = Math.floor(Math.random() * wallpapers.length);
//     const randomWallpaper = wallpapers[randomIndex];

// body.style.backgroundImage = `url(${randomWallpaper})`;

