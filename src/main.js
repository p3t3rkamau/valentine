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
                "Happy Valentines Day to the man of my dreams! Be with me today and tomorrow, and forever! I love you.",  
                "Happy Valentine’s Day, sweetheart! No words can describe how much grateful I’m to God for sending you to my life.",   
                "Happy Valentine Day sweetheart! Sending you lots of hugs, kisses and love",   
                "Happy Valentine’s Day. Sharing heart with someone could never be as joyful as it is with you!",  
                "May the sweetness of love and the warmth of romance be with us on Valentine’s Day. Love you forever.",
                "To my Valentine, I wish you all the happiness, love and joy. Love you forever",
                "You are the best valentine I could have asked for. Thank you for all the thrills and grills. Cheers to another year of love and care. Happy valentine’s day.",
                "Happy first Valentine’s Day, my Love! I hope we have many more valentines together as life partners.",
                "Your love is a source of strength for me. Thank you for all of your kindness and love. Happy Valentine’s Day!",
                "I have never fallen so deeply in love. When I’m around you, I feel so alive. You make me the happiest person on earth. Happy Valentine’s Day, my sweetheart.",
                "To my Valentine, Happy Valentine’s Day! May our everlasting love tale experience more valentine’s day together. I will always love you no matter what.",
                "Chocolates are sweet, flowers are romantic. But if you’re with me, I don’t need anything else. Happy valentine day my king!",
                "My love for you keeps growing with time and distance. I wish you were here beside me on this beautiful day. Happy Valentine’s Day!",
                "I loved you, I love you and I will love you forever. Let’s celebrate many more Valentine’s Days to come.",
                "After so many years together, my feelings for you are still the same. And it will stay like this forever. You are the light of my life and the cause for all of my happiness! Happy Valentine’s Day, love!",
                "My life is so full of tunes and pleasant memories because of you. It feels like a dream come true to have you as a partner. I’ll never grow weary of falling in love with you. I wish you a happy valentine’s day full of love and kisses!",
                "It’s just one day in the year, but you should know that I love you every day and every moment. Take my love on this beautiful occasion!",
                "I don’t want fancy gifts and fresh flowers. All I need is you holding my hands and saying that you love me. Happy Valentines Day.",
                "We should be holding hands and sharing a conversation about how wonderful it is that we have each other. But know that my love for you goes beyond what words can express. Happy Valentine’s Day, sweetheart ❤️"

                ];
            
        var randomIndex = Math.floor(Math.random() * text.length);
        var randomText = text[randomIndex];

    } else if (selectedGender === "GirlFriend") {
        text = [
            "My sweet valentine, I’m so glad that you’re all mine. Happy Valentine’s Day.",  
            "I’m so happy to have you in my life. Happy Valentine’s day, girlfriend!",   
            "Everything will change except my love for you! Happy Valentine’s Day!",   
            "Life would be simply meaningless without you. Thank you for being my girlfriend. Happy Valentine’s day, love.",  
            "Having you as my valentine for life is the biggest blessing there is and there will ever be. I love you my darling. Happy Valentine’s Day!",
            "Happy Valentine’s Day, babe. Thank you for making each day of my life so memorable and special!",
            "I may get tired of breathing someday but I’ll never get tired of loving you. Life is nothing without loving you. Happy Valentine Day!",
            "May we keep growing this love even when we are apart. Thanks for being my favorite. Love you, my beloved girlfriend. Happy Valentine’s Day.",
            "Thanks for shining so bright and making my life a better one just by existing, my darling girlfriend. Please stay happy and live the best life because your happy face means everything to me. Happy Valentine’s Day. Love you to the moon and all the way back.",
            "I can’t stop loving you because it’s the only thing I’m good at and the only reason I was sent here on earth. I love you! Wishing you a happy valentine!",
            "Thank you for the prettiest and most lovely valentine one could ever ask for. My heart breaks thinking about the distance between us, but I am glad that you are mine. Happy Valentine’s Day.",
            "Happy Valentines Day 2023! I want to celebrate every Valentine’s Day with you because I consider loving you to be a privilege for which I will always be grateful.",
            "You are the prettiest flower on the earth, and I am glad to have you in my garden of love. Have an awesome valentine.",
            "Sometimes I wonder if I’m living a dream. Because so far I cannot believe how blessed I feel about your love. Happy Valentine’s Day.",
            "You make me feel alive, and I am thankful to receive your abundant love and care. Happy Valentine’s Day!",
            "Baby, I gave my heart to you the day we met, and I promise to keep yours warm and safe. I love you!",
            "Happy Valentine’s Day to the world’s best girlfriend! I appreciate all that you do for me. I hope our love can unite us for the rest of our lives!",
            "All my life, I have adored the bond we share now- I cannot wait to wife you and spend the rest of my life with you, pretty. May God bless you always. Happy valentine’s Day. Love you today, tomorrow, and forever.",
            "My heart keeps beating for you even when we are apart, you are right here with me in my heart. Thanks for being my marvelous darling. Happy Valentine’s Day.",
            "Your eyes speak a thousand words and your smile shines brighter than a thousand stars. For me, you’re a goddess! Happy Valentine’s Day!"
            ];
        
        var randomIndex = Math.floor(Math.random() * text.length);
        var randomText = text[randomIndex];

    }else if (selectedGender === "Friend") {
        text = [
            "Happy valentine’s Day, my beloved friend. Wishing you a day filled with joy, love, and precious moments.",  
            "Valentine’s day is all about love, and to me, love is our friendship. I wish you a very happy Valentine’s Day.",   
            "Happy Valentine’s Day, my dear friends. Life would be so empty without you all.",   
            "Thank you for allowing me to be your best friend. I wish you a day full of love and happiness. Happy valentine’s day!",  
            "May God send all the love in the world to each of us and shower his blessing on this lovely day. I wish everyone a lovely Valentine’s Day.",
            "Happy Valentines Day! Sending my unconditional love to all my friends on Valentine’s Day!",
            "Happy Valentine’s Day, bestie. Every memory I pass with you is special to me.",
            "Thank you for embracing me with unconditional love and warmth in your life. I wish you a wonderful valentine’s day.",
            "Bestie, I want to thank you for always being my supporter and motivator. Have fun and Happy Valentine’s Day!",
            "You deserve the purest form of love any day, not just on valentine’s day. You have a heart full of love and empathy. Wishing you a happy valentine’s day!",
            "Happy Valentine’s Day, my friend. I love you. My wish for you this Valentine’s is for you to find your soulmate soon this year so you may celebrate your next Valentine with the love of your life next to you.",
            "I pray that God gives you love and peace in life. May find the right one to spend your life with. Sending my warm wishes to you on this valentine’s day!",
            "Valentine’s Day is all about love, so I’m sending some of mine to you. Thanks for being a friend.",
            "Happy Valentine’s Day, my best friend. I want you to have all the happiness in this world.",
            "Every day is a great day for me to celebrate our friendship and the love we share. May this beautiful journey of my friendship with you never end. Happy valentine’s day!",
            "Wishing you a very happy Valentine’s Day, my friends. Who needs a boyfriend or girlfriend when they have such supportive and lovely friends like you guys?",
            "Thanks for being the most caring friend I have ever had. You are the best, friend! Happy valentine’s day 2023!"
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
            "src/images/Happy-Valentines-Day-My-Love (1).jpg",
            "src/images/valentine-message-for-boyfriend.jpg",
            "src/images/valentine-wishes-for-boyfriend-1.jpg",
            "src/images/valentine-messages-for-boyfriend.jpg",
            "src/images/first-valentines-day-messages-for-boyfriend.jpg",
            "src/images/4545454545",
            "src/images/Valentine-Card-Messages-for-Boyfriend.jpg",
            "valentine-day-captions-for-boyfriend.jpg",
            ""
            ];
        
            for (var i = 0; i < images.length; i++) {
            var randomIndex = Math.floor(Math.random() * images.length);
            var randomImage = images[randomIndex];
        }

    } else if (selectedGender === "GirlFriend") {
        images = [
            "src/images/valentine-messages-for-girlfriend-2.jpg",
            "src/images/happy-valentines-day-message-to-girlfriend.jpg",
            "src/images/valentine-message-for-girlfriend.jpg",
            "src/images/Valentine-Wishes-for-Girlfriend-1.jpg",
            "src/images/valentine-day-wishes-for-girlfriend.jpg",
            "src/images/valentine-day-wishes-for-long-distance-relationship.jpg",
            "src/images/long-valentine-messages-for-girlfriend.jpg",
            "src/images/ valentines-day-card-messages-for-girlfriend.jpg",
            "src/images/valentine-wishes-for-girlfriend (1).jpg",
            "src/images/Valentine-Messages-for-Girlfriend-1.jpg",
            "src/images/valentine-day-quotes-for-girlfriend-1.jpg",
            "src/images/Valentine-Caption-For-Girlfriend.jpg"
            ];
        
            for (var i = 0; i < images.length; i++) {
            var randomIndex = Math.floor(Math.random() * images.length);
            var randomImage = images[randomIndex];
        }

    }else if (selectedGender === "Friend") {
        images = [
            "src/images/Happy-Valentines-Day-Friend.jpg",
            "src/images/valentine-message-to-a-friend.jpg",
            "src/images/valentine-messages-for-friends.jpg",
            "src/images/valentine-messages-for-best-friend.jpg",
            "src/images/happy-valentines-day-best-friend.jpg",
            "src/images/Valentine-Day-Wishes-for-Best-Friend.jpg",
            "src/images/Valentine’s-Day-Wishes-for-Single-Friend.jpg",
            "src/images/happy-valentine-friendship-message.jpg" 
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

