const checkbox1 = document.querySelector("#textCheckbox");
const checkbox2 = document.querySelector("#imageCheckbox");
const checkbox3 = document.querySelector("#gifCheckbox");
// making random image a global scope so that i can reuse it anytime everywhre
var randomImage; 

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


const Create = document.querySelector('.create');
const hideAll = document.querySelector('.hide-all')
const gallery = document.querySelector('.gallery');
Create.addEventListener('click', function(){
    const holder = document.querySelector(".holder");
    for (let i = 0; i < holder.children.length; i++){
      holder.children[i].style.display = "block";
      holder.style.background = "black";
    }
    hideAll.style.display = 'none'
    gallery.style.display = 'none'
});

document.querySelector(".close-image-preview").addEventListener("click", function() {
    const holder = document.querySelector(".holder");
    for (let i = 0; i < holder.children.length; i++){
      holder.children[i].style.display = "none";
      holder.style.background = "none"
    }
    hideAll.style.display = 'block'
    gallery.style.display = 'block'
});



document.querySelector("#copy-link-button").addEventListener("click", function() {
    const imageUrlInput = document.querySelector("#image-url");
    imageUrlInput.value =  randomImage;
    imageUrlInput.select();
    document.execCommand("copy");
});

document.querySelector("#share-whatsapp-button").addEventListener("click", function() {
    const imageUrl = "https://wish-every-one-happy-valentines.netlify.app/" + randomImage;
    const shareMessage = encodeURIComponent("Check out this amazing image! " + imageUrl);
    window.open("https://api.whatsapp.com/send?text=" + shareMessage, "_blank");
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
        "Share your love and affections with the best people you know with the best Happy Valentine’s Day Wishes!",  
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
            "You guys make my life easy by showing your support and admiration throughout my life. Happy Valentine’s Day my dear family.",  
            "Duis aute irure dolor in reprehenderitThe love I have for you and the love I’ve got from you both is beyond comparison. Happy Valentine’s Day 2023.",
            "In a world full of difficulties, you people are my safe place. Happy Valentine’s day to my family.",
            "I do have a valentine but still want to wish ‘Happy Valentine’s Day’ to my dear family because I love them to the moon and back. You guys are the love of my life.",
            "Happy Valentine’s Day. When I think about the word “love” you are the first person that pops into my head because you are the one who loves me the most and the one I love the most.",
            "Wishing a happy Valentine’s day to all my family and friends. Thanks for always being so kind and loving me, and my family. I always keep you in my prayers and in good thoughts.",
            "The most significant connection a person makes in his life is with his family and friends. On this Valentine’s Day, I hope to see all my family and friends even more in love with each other.",
            "Wishing a happy Valentine’s Day to all of my family and friends. I wish everyone true happiness and I pray that love and peace fill your hearts.",
            "Giving love makes it grow stronger! So, this Valentine’s Day, good friends and loving family, spread love everywhere you go and try to make the best of every circumstance!",
            "Beloved family and friends, I am appreciative of your steadfast affection and kindness. I pray that you all experience harmony and joy this Valentine’s Day.",
            "Happy Valentine’s Day, loved ones. May we be blessed with numerous wonderful experiences that we will cherish for the rest of our lives."
            ];
        
        var randomIndex = Math.floor(Math.random() * text.length);
        var randomText = text[randomIndex];

    }else if (selectedGender === "Dad") {
        text = [  
            "You were, are and always will be the first hero of my life. I love you so much, dad. Happy Valentines Day.",   
            "I will forever be blessed to have a father like you in my life, and I couldn’t let Valentine go by without telling you that I love you so much dad!",   
            "Happy Valentine’s Day, dear papa. May this day of love treat you well and have a day filled with great memories. Love you so much",  
            "Happy Valentine’s day Daddy. Your love shone the path of my life. I love you so much.",
            "Dear Dad, to me, you are the definition of ‘Love’. Because you showed me how to love your family unconditionally. Happy Valentine’s Day.",
            "Wishing my dear father the happiest Valentine’s Day. Go on a date with mom and have a great time. Love you",
            "We don’t choose our parents. But if we could, I’d choose you as my dad in every life. Happy Valentine’s day.",
            "Daddy, I am offering my unexpressed love to you this valentine’s day because you are the best dad I can have. Happy Valentine’s Day.",
            "Papa, you are my first superhero and I cherish all the moments we share together. Happy Valentine’s Day."
            ];
        
        var randomIndex = Math.floor(Math.random() * text.length);
        var randomText = text[randomIndex];

    }else if (selectedGender === "Mum") {
        text = [
            " I Cherish Our Late Night Chats, Our Coffee Dates, And The Way We Cry At Cheesy Movies. You’re An Amazing Mother And My Best Friend. I Love You So Much.. Happy Valentine’s Day!",   
            "Happy Valentine’s Day Mom! It’s so easy to love you, Mom! You’re simply the best around!",  
            "Happy Valentine’s Day my mommy. May you keep glowing in this and every other day. Love you to the moon and back.",
            "You are the first person I am in love with since my first breath. Happy Valentine’s Day Mommy!",
            "Having you by my side makes my life unique and special- I’m super glad to be your child. Happy valentine’s Day.",
            "Mom, the way you are always there for me through all my ups and downs, I wish to be there for you as well. You are never alone. Happy Valentine’s Day.",
            "When it comes to moms, you’re the sweetest one ever. I love you to pieces. Happy Valentine’s Day!",
            "A beautiful spirit. A loving heart. Happy Valentine’s Day, Mom!",
            "Sending lots of love from your favorite wild child! Happy Valentine’s Day, Mom",
            "Happy Valentine’s Day Mom! No matter how old I get, you’ll always have my heart.",
            "Mom, You’ve always shown your love in all that you do. I hope you know how much you mean to me. Happy Valentine’s Day!",
            "Happy Valentine’s Day! Mom, you’re the sweetest person in my life. Wishing you a frosting topped, chocolate filled celebration!",
            " Happy Valentine’s Day, Mom! May your heart be happy. May your days be bright. And may you always know how much you’re loved.",
            "Happy Valentine’s Day! Hey Mom, I thought this cute baby covered in kisses would make up for anything bad I’ve done.",
            "Mom, You are the heart and soul of our family. Your love nurtures us and keeps us thriving. Happy Valentine’s Day!",
            "Friendly, lovable, obedient, adorable. I’m all that and more. (Oh, you thought I was talking about the dog?) Happy Valentine’s Day, Mom!",
            "Having you for a mom is the greatest gift I could ever have received. You deserve to feel loved today. Having you for a mom is the greatest gift I could ever have received. You deserve to feel loved today.",
            "Happy Valentine’s Day to My Wonderful Mother! While I don’t need a special day to tell you how I feel, I want you to know how much I love you, always.",
            " I Cherish Our Late Night Chats, Our Coffee Dates, And The Way We Cry At Cheesy Movies. You’re An Amazing Mother And My Best Friend. I Love You So Much.. Happy Valentine’s Day!"
            ];
        
        var randomIndex = Math.floor(Math.random() * text.length);
        var randomText = text[randomIndex];

    }else if (selectedGender === "Sister") {
        text = [
            " Happy Valentine’s Day, Sis! You make my life infinitely more awesome! I even love you more than cupcakes",  
            " Happy Valentine’s Day Sister! Wishing you a day filled with love and surprises-you deserve it! I love you a lot, always and forever.",   
            "Thank you for making my life more awesome, my beautiful sister. I love you more than chocolates. Happy Valentine’s Day.",   
            "Happy Valentine’s Day, sister. I would be so lost without you; no one in the world understands me the way you do. You always know exactly what I am thinking or feeling even before I say a word.",  
            "I love you my big/little sissy! I hope you find love that deserves you. Happy Valentines Day 2023.",
            "Dear sister, may the seasoning of love embrace you and gift you a day filled with love and appreciation. Happy Valentine’s Day.",
            "Happiest Valentine’s Day to my sister blister. Please enjoy your day and make sure to live to the fullest of it. Happy love day, again.",
            "Sisters are the second moms; and you’re not different. Thank you for taking care of me and lifting up my spirit. Happy Valentine’s.",
            "Happy Valentine’s day to the loveliest sister in the world. You make my life awesome.",
            "Happy Valentine’s Day sister! Hope you have a wonderful valentine’s day full of love and surprises.",
            "I hope you know that I fight with you because I love you. Happy Valentine’s Day sister. Have a great love-filled ones.",
            "Happy Valentine’s Day dear sissy. I will always be there for you to protect you from anything and everything. I love you so much.",
            ""
            ];
        
        var randomIndex = Math.floor(Math.random() * text.length);
        var randomText = text[randomIndex];

    }else if (selectedGender === "Brother") {
        text = [
            "After Dad, you are my second superhero. Happy Valentine’s day dear brother.",  
            "You are not only my brother. You are a shelter in this big world that I will always have. Happy Valentine’s day",   
            "Dear brother, you are my best friend. Thanks for always making me feel valued. Love you to infinite. Happy Valentine’s Day",   
            "Thanks for being such a special person and maintaining your territory so well. Happy Valentine’s Day, dear brother",  
            "Happy Valentine’s Day. Brother, thank you for being my first and forever friend in life since the day I was born. It’s because of you that I never feel alone in my life.",
            "Wish you a Valentine’s Day full of surprise. Surprising because I have already eaten the chocolates I have bought for you. Sorry, Big bro.",
            "May this valentine remind you that I will forever love and adore you, little bro, you are the best little man I know!",
            "Off all the brothers on this earth, I am glad you are mine! Happy Valentine’s day annoying yet adorable Brother!"
        ];
        
        var randomIndex = Math.floor(Math.random() * text.length);
        var randomText = text[randomIndex];

    }else if (selectedGender === "Grand-pa") {
        text = [
            "Grandpa, you’ll always own a piece of my heart! Happy Valentine’s Day!",  
            "It’s very natural for you and others may not understand, but you’re a special grandfather a wonderful and special man! Happy Valentine’s Day!",   
            "We all love you more than you’ll ever know, Grandpa! Happy Valentine’s Day!",   
            "We couldn’t call you anything except 'grand' because you shine like the sun and have a heart that’s more precious than gold! Happy Valentine’s Day!",  
            "We’ve got it good having you for a grandpa! You know we like to go first class all the way! Happy Valentine’s Day!",
            "You deserve one of those Best Grandpa On the Planet awards! Happy Valentine’s Day!",
            "You’re my grandfather, but you are also someone that I can come to for anything. Happy Valentine’s Day, Grandpop BFF"
            ];
        
        var randomIndex = Math.floor(Math.random() * text.length);
        var randomText = text[randomIndex];

    }else if (selectedGender === "Grand-ma") {
        text = [
            "No one has a grandmother as great as mine. You’re so amazing I’m super happy that you’re my Valentine!",  
            "Wishing you a Valentine’s Day that’s wonderful from start to finish! Have a great day, Grandma",   
            "For My Special Grandmom, you’re Valentine’s I’ll be. But, only if you promise to be the same for me! With Love From Your Granddaughter!",   
            "For Valentine’s Day, I’m sending you hugs, kisses, and wishes you’ll like. You’re the world’s most awesome grandmother and I hope that Valentine’s Day is full of delight!",  
            "Here’s a Valentine’s Day greeting just for you Nana! It’s full of hugs, kisses, but not one banana!",
            "Hope your Valentine’s Day is all about you and everything that makes you happy, Grandma!",
            "Hope your Valentine’s Day makes you super happy, Grandma!",
            "I couldn’t imagine having anybody else for a grandmom. You’re just so absolutely perfect at it! Happy Valentine’s Day With Love From Your Granddaughter!",
            "I get my smarts from you, Grandma. You’re as bright as they come. Being your granddaughter is very cool and so much fun! Happy Valentine’s Day, Grandma!",
            "I love a lot of things about you .way to many to count! Happy Valentine’s Day, Grandma!",
            "I love you in the morning and I love you late at night. Grandmother, I hope that you have a Happy Valentine’s!",
            "If baked goods are any indication of how much you really care. Then, I know you loves me bunches because, Grandma, you are always there! Happy Valentine’s Day!"
            ];
        
        var randomIndex = Math.floor(Math.random() * text.length);
        var randomText = text[randomIndex];
    }else if (selectedGender === "Other-Fam-Members") {
        text = [
            "Happy Valentine’s day to my amazing family and friends. Spending my life with you all is the biggest blessing.",  
            "Happy Valentine’s Day to my precious family. May this day of love brings you happy thoughts. Best wishes",   
            "Sending you lovely wishes for Valentine’s Day, my dear family. Let’s laugh, love, and celebrate together",   
            "Dear family, happy Valentine’s Day. May we keep flourishing with love and happiness. Wishing you a great day ahead.",  
            "Happy Valentine’s Day dearest family. I am lucky to have you in my life.",
            "Wishing you lots of love and fun on this day of love. May all your prayers get answered. Love you.",
            "Thanks for filling my life with such positivity and love, dear family. Happy Valentine’s Day. Thanks for everything.",
            "Dear mom and dad, sending you warm wishes for Valentine’s Day. Thanks for being so loving and caring not only towards each other but to me as well. Love you two tons.",
            "Happy Valentine’s Day. Thank you guys for never leaving the option to usher me with your love and admiration.",
            "Family has the power to turn a place into a home. Happy Valentine’s day to you all.",
            "My family has been my valentine since I was born because the kind of love they gave me is exquisite. Happy Valentine’s Day dear family.",
            "Wishing a very happy valentine’s day to every member of my family. You do not know how grateful I am to you for making my life this beautiful.",
            "You guys are my most valuable treasure and the ones for whom I can fight with the whole world. Happy Valentine’s Day.",
            ""
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
            "src/images/Valentine-Card-Messages-for-Boyfriend.jpg",
            "src/images/valentine-day-captions-for-boyfriend.jpg"
            ];
        
            for (var i = 0; i < images.length; i++) {
            var randomIndex = Math.floor(Math.random() * images.length);
            randomImage = images[randomIndex];
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
            randomImage = images[randomIndex];
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
            randomImage = images[randomIndex];
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
            randomImage = images[randomIndex];
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
            randomImage = images[randomIndex];
        }
    }else if (selectedGender === "Mum") {
        images = [
            "src/images/valentine72.png",
            "src/images/valentine71.png",
            "src/images/61a0XRXzKDL.jpg",
            "src/images/j_valmo_001.png",
            "src/images/j_valmo_007.png",
            "src/images/j_valmo_002.png",
            "src/images/j_valmo_003.png",
            "src/images/j_valmo_005.png",
            "src/images/j_valmo_004.png",
            "src/images/j_valmo_009.png",
            "src/images/j_valmo_006.png",
            "src/images/j_valmo_010.png",
            "src/images/j_valmo_011.png",
            "src/images/j_valmo_011.png",
            ];
        
            for (var i = 0; i < images.length; i++) {
            var randomIndex = Math.floor(Math.random() * images.length);
            randomImage = images[randomIndex];
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
            randomImage = images[randomIndex];
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
            randomImage = images[randomIndex];
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
            randomImage = images[randomIndex];
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
            randomImage = images[randomIndex];
        }
    
      
    }else if (selectedGender === "Other-Fam-Members") {
        images = [
            "src/images/valentine-messages-for-family.jpg",
            "src/images/valentines-day-quotes-for-family.jpg",
            "src/images/valentine-messages-for-family-members.jpg",
            "src/images/valentine-messages-for-family-and-friends.jpg"
            ];
        
            for (var i = 0; i < images.length; i++) {
            var randomIndex = Math.floor(Math.random() * images.length);
            randomImage = images[randomIndex];
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


document.getElementById("download-button").addEventListener("click", function(){
    // URL of the image to be downloaded
    var imageURL =  randomImage;
    console.log(randomImage)
  
    
    // Create a link element
    var downloadLink = document.createElement("a");
    downloadLink.href = imageURL;
    downloadLink.download = "image.jpg";
    
    // Dispatch a click event on the link
    downloadLink.dispatchEvent(new MouseEvent("click"));
  });