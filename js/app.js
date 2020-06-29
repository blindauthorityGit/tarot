const cards = [
    {
        name: "0 - Der Narr",
        thema: "Aufbruch",
        text:
            "Hier darfst Du auch einmal verrückt (ver-rücken!) spielen. Hier könnte das Chaos beginnen und eine neue Reise, mit leichtem Gepäcke, bevorstehen, vorausgesetzt Du bist bereit Dich darauf einzulassen. Es ist hier der Impuls am Kommen. Ein Teil kann unbeschwert sein, aber auch Unabhängigkeit wollen, es deutet auch auf einen Neubeginn hin.  Hier kannst Du neue Erfahrungen sammeln. Es geht aber auch darum einmal den Weg zu Deinem wahren ICH zu riskieren. Die Zahl Null steht hier für die Endlosigkeit und den ewigen Anfang.",
        kopf:
            "Achte auf Inkonsequenz, Mutlosigkeit, aber auch auf Bestechlichkeit.",
        background: "../img/0_narr.jpg",
        id: "narr",
        index: 0,
    },
    {
        name: "1 - Magie",
        thema: "Willenskraft",
        text:
            "Hier entsteht die Verbindung von Oben und Untern, die Macht und der Wille, werden zum Thema. Unabhängig sein und die Selbstgestaltung ist wesentlich. Es geht um ICH BIN und die Frage bin ich eine Seele in einem Körper oder ein Körper in einer Seele. Hier kommen die Impulse und Ideen mit denen die Möglichkeiten der eigenen Kreativität erkannt werden und in die Tat umgesetzt werden. wollen. Handeln, statt nur zu reagieren – ganz bewusst und mit Disziplin den eigenen Weg in die Tat umsetzen. Die Zahl Eins steht hier für Anfang und den Pioniergeist.",
        kopf:
            "Vorsicht vor Tricks, Manipulationen und Machtmissbrauch. Sich schwach denken.",
        background: "../img/1_magie.jpg",
        id: "magie",
        index: 1,
    },
    {
        name: "Zwei der Federn",
        thema: "Anspannung - den Blick schärfen",
        text:
            "Diese Karte will Deinen Fluss der ewigen Gedanken in die Ruhe bringen. Hier lähmen Dich die Probleme und Deine ewige Zweifelei. Es könnte sich eine gewisse Unbeweglichkeit eingestellt haben. Dein Leben besteht gerade aus Anspannung und Du bist labil. Vielleicht gibt es Grund zur Trauer oder ängstlichen Gedanken. Diese Karte lässt vermuten, dass die Gefühle keinen Ausdruck finden können. In Gedanken läuft das Karussell „soll ich oder soll ich nicht“, es zerreißt Dich fast. Am liebsten würdest Du einfach davon laufen. Es ist an der Zeit, den Dingen in die Augen zu blicken. Um für einen Augenblick das Gedankenkarussell zu beruhigen kann die Meditation hilfreich sein. Es kann das grübeln und zweifeln für eine Zeit in den Hintergrund rücken lassen, um dann den Mut zu aktivieren und Dich zum Handeln zu bringen. Nur das kann etwas verändern. In Beziehungen ist es an der Zeit die Dinge oder Gespräche nicht länger zu verschieben. Fasse Dich an der Hand und gehe mutig an. In der Arbeitswelt liegt es an Dir, aus der Passivität auszusteigen und nun mehr Entschlossenheit zu zeigen. Wage auch einmal etwas Neues.",
        kopf:
            "Diese Karte will Dich vor Selbstbetrug warnen, auch Täuschungen, egal ob Dir selbst gegenüber oder von außen. Gehe Dinge nicht unüberlegt an, aber lasse es nicht nur ein Gespenst Deiner Gedanken sein, sondern habe den Mut ins Handeln zu kommen. Dich unverbindlich aus der Affäre zu ziehen wird Dir nicht gelingen, auch Dinge nur oberflächlich anzugehen wird kein Ende herbeibringen.",
        background: "../img/2_federn.jpg",
        id: "federn",
        index: 2,
    },
    {
        name: "Zwei der Flammen",
        thema: "Abwägen, dann handeln",
        text:
            "Diese Karte dreht sich um Deinen Standpunkt und um neue Zielsetzungen. Beachte dabei Deine Talente und auch deine Visionen und Wünsche. Ideen werden neu formuliert und dann geht es ran an den Speck. Es ist Zeit Dinge umzusetzen. Es geht um das Auswählen und abwägen, eine Entscheidung will getroffen werden, hierzu bedarf es einer gewissen ruhe und Gelassenheit. Für Entscheidungen darf auch immer ein Kompromiss in Frage kommen, wenn Du Dich dazu nicht restlos von Deinen Zielen entfernst, bleibe Dir treu. In Beziehungen solltest Du darauf achten deine Klarheit und Würde nicht zu verlieren, aber trotzdem nicht mit dem Kopf durch die Wand zu gehen. Im Arbeitsbereich verlasse die Geduldszone und komme ins Handeln. Mit Verantwortung und Selbstbewusst kannst Du Deine innere Zerrissenheit nutzen und in ideenreiche Ziele umwandeln.",
        kopf:
            "Hier ist es eine Ermahnung, nicht in Lethargie zu verfallen, ebenso vergiss nicht, dass ein bestimmtes Maß an Konflikten dazugehört. Wenn Du hier nicht zügig handelst, dann wird jemand andere es für Dich machen. Lass Dich nicht von Deiner Komfortzone ablenken. Manche Ziele dienen eher Deiner Selbstgefälligkeit und manchmal ist Dein Handeln oberflächlich, was am Ende andere siegen lässt.",
        background: "../img/2_flammen.jpg",
        id: "flammen",
        index: 3,
    },
    {
        name: "2 - Hohepriesterin",
        thema: "Unbewusstes",
        text:
            "Hier entstehen Vision aus der Stille. Es geht um Verborgenes, alles was Geheimnisse birgt. Deine Geduld ist gefragt. Vertrauen auf die unbewussten Kräfte, also auf die eigene Intuition hören, dabei auf den richtigen Zeitpunkt warten, dann ist das Potenzial vorhanden zur Umsetzung. Sehen, ohne etwas oder jemanden zu beurteilen.",
        kopf:
            "Beachte die emotionalen auf und Abs. Passivität hält Dich auf. Oft unberechenbare Situation.",
        background: "../img/2_hoehepriesterin.jpg",
        id: "2_hoehepriesterin",
        index: 4,
    },
];

const cardsCopy = [...cards];

console.log(cardsCopy);

// SHUFFLE CARDS ARRAY

let cardsArray = Array.from(document.getElementsByClassName("cards"));
let cardsArrayBack = Array.from(document.getElementsByClassName("back"));
console.log(cardsArray[0]);

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

shuffleArray(cards);

let dropzoneWrap = document.querySelector("#dropzone");
let cardwrapper = document.getElementById("cardWrapper");
console.log(cardsArray);

// MAKE THE CARDS

cardsArray.map((e, i) => {
    console.log(cards[i].background);
    // e.style.backgroundImage = "url(" + cards[i].background + ")";
    e.id = cards[i].id;
    e.classList.add(cards[i].index);
    e.dataset.index = cards[i].index;
});

// INNER BACKGROUND IMAGE

cardsArrayBack.map((e, i) => {
    e.style.backgroundImage = "url(" + cards[i].background + ")";
});

function onDragStart(event) {
    event.dataTransfer.setData("text/plain", event.target.id);
    // var dragIcon = document.createElement("img");
    // dragIcon.src =
    //     "https://www.googlewatchblog.de/wp-content/uploads/rip-googl.jpg";
    // dragIcon.width = 100;
    // event.dataTransfer.setDragImage(dragIcon, -10, -10);

    // event.currentTarget.classList.add("flip-out-hor-top");
    // event.currentTarget.style.opacity = 0.5;
}

function onDragOver(event) {
    event.preventDefault();
    console.log("drüber");
}

let txt = document.querySelector(".text");
let thema = document.querySelector(".thema");
let flipped = false;
console.log(thema);

function flipCard(card) {
    let rndm = Math.floor(Math.random() * 100);
    console.log(rndm);
    if (rndm < 5) {
        card.style.transform = "rotate(180deg)";
        flipped = true;
    }
}

let droppedPast = false;
let droppedPresent = false;
let droppedFuture = false;

// PAST DROP

function onDrop(event) {
    let id = event.dataTransfer.getData("text");
    let draggableElement = document.getElementById(id);
    const dropzone = event.target;
    console.log(draggableElement.dataset.index);

    if (!droppedPast) {
        dropzone.appendChild(draggableElement);
        flipCard(draggableElement);
        console.log(draggableElement.childNodes[1]);
        setTimeout(() => {
            draggableElement.childNodes[1].style.transform = "rotateY(180deg)";
            thema.innerHTML = cardsCopy[draggableElement.dataset.index].name;
            txt.innerHTML = cardsCopy[draggableElement.dataset.index].text;
        }, 200);

        droppedPast = true;
    }
    event.dataTransfer.clearData();
    dropzone.style.opacity = 1;
}

// PRESENT DROP

function onDropPresent(event) {
    let id = event.dataTransfer.getData("text");
    let draggableElement = document.getElementById(id);
    const dropzone = event.target;
    console.log(thema);
    draggableElement.classList.add("flip-horizontal-top");
    // let choice = cards[Math.floor(Math.random() * cards.length)];
    // dropzone.style.backgroundImage = choice.background;
    if (!droppedPresent) {
        dropzone.appendChild(draggableElement);
        thema.innerHTML = cards[draggableElement.dataset.index].thema;
        txt.innerHTML = cards[draggableElement.dataset.index].text;
        droppedPresent = true;
    }
    event.dataTransfer.clearData();
    dropzone.style.opacity = 1;
}

// FUTURE DROP

function onDropPresent(event) {
    let id = event.dataTransfer.getData("text");
    let draggableElement = document.getElementById(id);
    const dropzone = event.target;
    console.log(draggableElement);
    draggableElement.classList.add("flip-horizontal-top");
    // let choice = cards[Math.floor(Math.random() * cards.length)];
    // dropzone.style.backgroundImage = choice.background;
    if (!droppedPresent) {
        dropzone.appendChild(draggableElement);
        txt.innerHTML = cards[draggableElement.dataset.index].name;
        droppedPresent = true;
    }
    event.dataTransfer.clearData();
    dropzone.style.opacity = 1;
}

// MOBILE DRAGGER

let mobileBox = Array.from(document.getElementsByClassName("mobileTest"));
let box = document.getElementById("box");

// box.addEventListener("touchmove", function (e) {
//     let touchLocation = e.targetTouches[0];
//     box.style.left = touchLocation.pageX + "px";
//     box.style.top = touchLocation.pageY + "px";
// });

console.log(mobileBox);

mobileBox.forEach((e) => {
    e.addEventListener("touchmove", function (item) {
        let touchLocation = item.targetTouches[0];
        e.style.left = touchLocation.pageX + "px";
        e.style.top = touchLocation.pageY + "px";

        console.log("möp");
    });
});
