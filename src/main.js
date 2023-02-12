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
                "Share and celebrate your love with the people who matter most this February 14 with a beautiful Happy Valentines Day Wishes for your family members! There are Valentines day wishes for son, for daughter, for sister, for father, for mother, and for parents.",  
                "The love you have for your family forms the strongest bonds you will ever share with another person",   
                "Mothers, brothers, daughters, fathers, sisters, and sons. The people that form your family group are the most important people in your life, so let them know how much you love them with a Happy Valentine’s Day Wishes",   
                "Ut labore et dolore magna aliquaShare your love and affections with the best people you know with the best Happy Valentine’s Day Wishes!",  
                ""
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
    }else if (selectedGender === "parents") {
        text = [
            "Happy Valentine’s Day To My Amazing Parents. You make love look so easy. I’m glad to be the daughter of two people who’ve always been so in love", 
            " Happy Valentine’s Day, My Dear Son! There never was a more delightful son! I love you so much and am thinking of you always!",   
            "Happy Valentine’s Day To My Son. Sending you all my love and plenty of hugs! You really are the sweetest son a mother could ask for!",   
            "Ut labore et dolore magna aliqua",  
            "Duis aute irure dolor in reprehenderit"
            ];
        
        var randomIndex = Math.floor(Math.random() * text.length);
        var randomText = text[randomIndex];

    }else if (selectedGender === "Dad") {
        text = [  
            "Consectetur adipiscing elit",   
            "Sed do eiusmod tempor incididunt",   
            "Ut labore et dolore magna aliqua",  
            "Duis aute irure dolor in reprehenderit"
            ];
        
        var randomIndex = Math.floor(Math.random() * text.length);
        var randomText = text[randomIndex];

    }else if (selectedGender === "Mum") {
        text = [
            " I Cherish Our Late Night Chats, Our Coffee Dates, And The Way We Cry At Cheesy Movies. You’re An Amazing Mother And My Best Friend. I Love You So Much.. Happy Valentine’s Day!",   
            "Happy Valentine’s Day Mom! It’s so easy to love you, Mom! You’re simply the best around!",   
            "Ut labore et dolore magna aliqua",  
            "Duis aute irure dolor in reprehenderit"
            ];
        
        var randomIndex = Math.floor(Math.random() * text.length);
        var randomText = text[randomIndex];

    }else if (selectedGender === "Sister") {
        text = [
            " Happy Valentine’s Day, Sis! You make my life infinitely more awesome! I even love you more than cupcakes",  
            " Happy Valentine’s Day Sister! Wishing you a day filled with love and surprises-you deserve it! I love you a lot, always and forever.",   
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
    }else if (selectedGender === "parents") {
        images = [
            "src/images/valentine77 (1).png",
            "src/images/valentine78.png",
            "src/images/valentine68 (1).png",
            "src/images/valentine69.png",
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
            "src/images/valentine72.png",
            "src/images/valentine71.png",
            "src/61a0XRXzKDL.jpg" 
            ];
        
            for (var i = 0; i < images.length; i++) {
            var randomIndex = Math.floor(Math.random() * images.length);
            var randomImage = images[randomIndex];
        }
    }else if (selectedGender === "Sister") {
        images = [
            "src/images/valentine79.png",
            "src/images/valentine80 (1).png",
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
    content.innerHTML += `<img src="${randomImage}" />`;
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

const wallpapers = [
    "src/images/wp5431349.jpg",
    "src/images/wp4127943.jpg",
    "src/images/wp10632453.jpg",
    "src/images/Existence-of-black-roses-on-Thursd-.jpg",
    "src/images/adrian-regeci-DduZa62Shq0-unsplash (2).jpg"

   
    
   

    // "src/images/41qaznWbStL.jpg",
    // "src/images/wp5318448.jpg",
    // "src/images/wp5483040 (1).jpg",
    // "src/images/61a0XRXzKDL.jpg",
    // "src/images/wp5430869 (1).jpg",
    // "src/images/wp5226104.jpg",
    // "src/images/wp5431097.jpg",
    // "src/images/wp5204841.png",
    // "src/images/wp5318444.jpg ",
    // "src/images/wp5318470.png ",
    // "src/images/wp5318447.jpg",
    // "src/images/wp5233809.jpg",
    // "src/images/wp2884606.jpg",
    // "src/images/wp3369880.png",
    // "src/images/wp2376990.jpg",
    // "src/images/wp5318449.jpg",
    // "src/images/wp5484361.jpg",
    // "src/images/wp5484364.jpg",
    // "src/images/wp5484367.jpg",
    // "src/images/wp5431349.jpg",
    // "src/images/wp5430869 (1).jpg",
    // "src/images/wp5483206.jpg",
    // "src/images/wp10632453.jpg",
    // "src/images/wp11891191.jpg",
    // "src/images/wp5553765.jpg",
    // "src/images/wp11891203.jpg",
    // "src/images/wp5430996.jpg",
    // "src/images/wp11891242.png",
    // "src/images/wp11891243.png",
    // "src/images/wp5318459.jpg"
    ];

    const body = document.querySelector("body");

    const randomIndex = Math.floor(Math.random() * wallpapers.length);
    const randomWallpaper = wallpapers[randomIndex];

body.style.backgroundImage = `url(${randomWallpaper})`;

