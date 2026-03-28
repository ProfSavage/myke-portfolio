start();

async function start() {

    await animateName();
    await animateJob();
    await animateIntroduction();

}

async function animateName() {

    var name = "MYKE LOUIE DE JESUS";
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=~`|\\:;\"\'<>,.?/ '.split('');


    for (let i = 0; i <= name.length; i++) {
        let randomChars = ""

        for (let j = 0; j < name.length - i; j++) {
            var randomChar = characters[Math.floor(Math.random() * characters.length)];
            randomChars += randomChar;
        }

        document.getElementById("home-name").innerHTML = name.substring(0, i) + randomChars;
        await delay(100);

    }
}

async function animateJob() {

    let job = "BACK-END DEVELOPER";
    for (let i = 0; i <= job.length; i++) {
        document.getElementById("home-job").innerHTML = job.substring(0, i);
        await delay(100);
    }
}

async function animateIntroduction() {

    let intro = "From concept to code: building technology-driven solutions.";
    for (let i = 0; i <= intro.length; i++) {
        document.getElementById("home-introduction").innerHTML = intro.substring(0, i);
        await delay(50);
    }

}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}



function showImageDialog(imageSrc) {
    var dialog = document.getElementById("imageDialog");
    var dialogImage = document.getElementById("dialogImage");
    dialogImage.src = imageSrc;
    dialog.style.maxWidth = "50vw";
    dialog.showModal(); 
}

function showImageDialogUpSize(imageSrc) {
    var dialog = document.getElementById("imageDialog");
    var dialogImage = document.getElementById("dialogImage");
    dialogImage.src = imageSrc;
    dialog.style.maxWidth = "90vw";
    dialog.showModal(); 
}

function closeImageDialog() {
    var dialog = document.getElementById("imageDialog");
    dialog.close();
}










//--------------Discarded Ideas iiwan kolang dito for future reference------------------


// let intro = "My name is Myke, and I am a software developer with a passion for creating innovative solutions. I have experience in various programming languages and frameworks, and I enjoy working on projects that challenge me to learn and grow. In my free time, I like to explore new technologies and contribute to open-source projects. I am always eager to collaborate with others and share my knowledge to help build amazing things together.";
//
// for (let i = 0; i < intro.length; i++) {
//     setTimeout(() => {
//         document.write(intro[i]);
//     }, 25 * i);
// }


//--------Entrance Text Animation For Home Section--------

// var endText = "";
// var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=~`|\\:;\"\'<>,.?/ '.split('');

// for (var i = 0; i < 100; i++) {
//     setTimeout(() => {
//         var randomChar = characters[Math.floor(Math.random() * characters.length)];
//         endText += randomChar;
//         document.getElementById("home").innerText = endText;
//     }, 50 * i);
// }

//--------------------------------------------------------


//document.getElementById("home-shield").remove(); Discarded idea remained for my future reference
//<a class="icon" id="home-shield" onclick="animateName()"><i class="bi bi-shield-lock" style="font-size: 50vh;"></i></a>




//created for memes but maybe useful in the future, who knows?
// async function hireMeOver(id) { 

//     await delay(500);
//     var card = document.getElementById(id);
//     card.innerHTML += "<img src='resources/just-do-it.png' alt='Just Do It'>";
    

// }