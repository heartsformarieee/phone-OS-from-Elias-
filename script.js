// ========================================
// ELIAS OS 1.2
// LOCK SCREEN + NOTIFICATIONS
// PHOTOS + US SCRAPBOOK
// ========================================


// ========================================
// ELEMENTS
// ========================================

const lockScreen =
  document.getElementById("lockScreen");

const lockTime =
  document.getElementById("lockTime");

const lockDate =
  document.getElementById("lockDate");

const statusBar =
  document.getElementById("statusBar");

const statusTime =
  document.getElementById("statusTime");

const homeGreeting =
  document.getElementById("homeGreeting");

const weekdayText =
  document.getElementById("weekdayText");

const dayNumber =
  document.getElementById("dayNumber");

const monthText =
  document.getElementById("monthText");

const calendarIconDay =
  document.getElementById("calendarIconDay");

const calendarIconNumber =
  document.getElementById("calendarIconNumber");

const eliasNotification =
  document.getElementById("eliasNotification");

const moriNotification =
  document.getElementById("moriNotification");

const calendarNotification =
  document.getElementById("calendarNotification");

const eliasWidget =
  document.getElementById("eliasWidget");

const eliasWidgetText =
  document.getElementById("eliasWidgetText");

const moriWidget =
  document.getElementById("moriWidget");

const moriWidgetText =
  document.getElementById("moriWidgetText");

const messageBadge =
  document.getElementById("messageBadge");

const homeScreen =
  document.getElementById("homeScreen");

const appWindow =
  document.getElementById("appWindow");

const appTitle =
  document.getElementById("appTitle");

const appContent =
  document.getElementById("appContent");

const closeApp =
  document.getElementById("closeApp");

const photoOverlay =
  document.getElementById("photoOverlay");

const bigPhoto =
  document.getElementById("bigPhoto");

const bigPhotoCaption =
  document.getElementById("bigPhotoCaption");

const closePhoto =
  document.getElementById("closePhoto");


// ========================================
// PHOTO FILES
// ========================================

const photoFiles = [

  {
    src: "kissing.PNG",
    caption: "Kissing ♡"
  },

  {
    src: "expensive gifts.PNG",
    caption: "Expensive gifts ♡"
  },

  {
    src: "these eyes.PNG",
    caption: "These eyes."
  },

  {
    src: "walk.PNG",
    caption: "Night walk."
  },

  {
    src: "sukuna cosplay.PNG",
    caption: "Sukuna cosplay."
  },

  {
    src: "sushi.PNG",
    caption: "Sushi date 🍣"
  },

  {
    src: "home.PNG",
    caption: "At home together."
  },

  {
    src: "cooking.PNG",
    caption: "Cooking together."
  },

  {
    src: "flowers.PNG",
    caption: "Flowers ♡"
  },

  {
    src: "mirror pic.PNG",
    caption: "Mirror pic."
  },

  {
    src: "ring gifting.PNG",
    caption: "Ring gifting ♡"
  },

  {
    src: "morii.PNG",
    caption: "Mori 🐈‍⬛"
  },

  {
    src: "on a walk.JPG",
    caption: "On a walk."
  },

  {
    src: "hello kitty bubble tea.JPG",
    caption: "Hello Kitty bubble tea."
  },

  {
    src: "holding hands.PNG",
    caption: "Holding hands ♡"
  },

  {
    src: "couple.PNG",
    caption: "Us ♡"
  }

];


// ========================================
// SCRAPBOOK FILES
// ========================================

const scrapbookPages = [

  {
    src: "page one.PNG",
    title: "Page One"
  },

  {
    src: "page two.PNG",
    title: "Page Two"
  },

  {
    src: "page three.PNG",
    title: "Page Three"
  },

  {
    src: "page four.PNG",
    title: "Page Four"
  },

  {
    src: "page six.PNG",
    title: "Page Six"
  },

  {
    src: "page seven.PNG",
    title: "Page Seven"
  },

  {
    src: "page eight.PNG",
    title: "Page Eight"
  },

  {
    src: "page nine.PNG",
    title: "Page Nine"
  },

  {
    src: "page ten.PNG",
    title: "Page Ten"
  },

  {
    src: "page eleven.PNG",
    title: "Page Eleven"
  },

  {
    src: "page twelve.PNG",
    title: "Page Twelve"
  },

  {
    src: "page thirteen.PNG",
    title: "Page Thirteen"
  },

  {
    src: "page fourteen.PNG",
    title: "Page Fourteen"
  }

];

let currentScrapbookIndex = 0;


// ========================================
// CLOCK + DATE
// ========================================

function updateClock() {

  const now =
    new Date();


  const time =
    now.toLocaleTimeString(
      [],
      {
        hour: "2-digit",
        minute: "2-digit"
      }
    );


  statusTime.textContent =
    time;


  lockTime.textContent =
    time;


  lockDate.textContent =
    now.toLocaleDateString(
      [],
      {
        weekday: "long",
        month: "long",
        day: "numeric"
      }
    );


  const hour =
    now.getHours();


  if (hour < 5) {

    homeGreeting.textContent =
      "Still awake, Marie?";

  }

  else if (hour < 12) {

    homeGreeting.textContent =
      "Morning, Marie.";

  }

  else if (hour < 18) {

    homeGreeting.textContent =
      "Hey, Marie.";

  }

  else {

    homeGreeting.textContent =
      "Evening, Marie.";

  }


  const weekdays = [

    "SUNDAY",
    "MONDAY",
    "TUESDAY",
    "WEDNESDAY",
    "THURSDAY",
    "FRIDAY",
    "SATURDAY"

  ];


  const months = [

    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"

  ];


  weekdayText.textContent =
    weekdays[
      now.getDay()
    ];


  calendarIconDay.textContent =
    weekdays[
      now.getDay()
    ].slice(
      0,
      3
    );


  dayNumber.textContent =
    now.getDate();


  calendarIconNumber.textContent =
    now.getDate();


  monthText.textContent =
    months[
      now.getMonth()
    ];

}


updateClock();


setInterval(
  updateClock,
  30000
);


// ========================================
// RANDOM HELPER
// ========================================

function randomItem(array) {

  return array[
    Math.floor(
      Math.random() *
      array.length
    )
  ];

}


// ========================================
// LOCK SCREEN NOTIFICATIONS
// ========================================

const eliasNotifications = [

  "come here.",

  "you awake?",

  "I know you saw this.",

  "Mori stole my spot again.",

  "where did you disappear to?",

  "I was wondering when you'd open this.",

  "we should get sushi.",

  "hey. look at me.",

  "I miss your face.",

  "you better not be ignoring me for Mori.",

  "you've been gone for suspiciously long.",

  "I found another photo of us I like.",

  "open the phone already.",

  "Marieeeee.",

  "I require attention."

];


const moriNotifications = [

  "Motion detected in kitchen.",

  "Mori is staring directly into the camera.",

  "Possible snack-related activity detected.",

  "Mori has occupied Elias's seat.",

  "Motion detected near food bowl.",

  "Mori appears to be plotting something.",

  "Mori is asleep. Somehow this feels suspicious.",

  "Mori has entered the room.",

  "Mori has ignored Elias completely.",

  "Possible crime detected. Suspect: Mori."

];


const calendarNotifications = [

  "Sushi date tonight ♡",

  "Movie night at 20:00.",

  "Reminder: give Mori attention.",

  "Night walk later? 🌙",

  "Stay-home date tonight.",

  "Reminder: steal Elias's hoodie.",

  "Tonight: do absolutely nothing together ♡",

  "Possible spontaneous sushi emergency.",

  "Reminder: annoy Elias lovingly.",

  "Photo dump night ♡"

];


function loadNotifications() {

  eliasNotification.textContent =
    randomItem(
      eliasNotifications
    );


  moriNotification.textContent =
    randomItem(
      moriNotifications
    );


  calendarNotification.textContent =
    randomItem(
      calendarNotifications
    );

}


loadNotifications();


// ========================================
// LOCK + UNLOCK
// ========================================

function unlockPhone() {

  lockScreen.classList.add(
    "hidden"
  );


  statusBar.classList.remove(
    "hidden"
  );


  homeScreen.classList.remove(
    "hidden"
  );

}


function lockPhone() {

  appWindow.classList.add(
    "hidden"
  );


  homeScreen.classList.add(
    "hidden"
  );


  statusBar.classList.add(
    "hidden"
  );


  photoOverlay.classList.add(
    "hidden"
  );


  loadNotifications();


  updateClock();


  lockScreen.classList.remove(
    "hidden"
  );

}


lockScreen.addEventListener(
  "click",
  unlockPhone
);


// ========================================
// ELIAS WIDGET
// ========================================

const eliasWidgetLines = [

  "There you are.",

  "Come here.",

  "You checking on me again?",

  "Mori stole my spot. Again.",

  "You look suspiciously cute today.",

  "I was wondering when you'd open this.",

  "Don't just stare at the widget.",

  "Okay, fine. I missed you.",

  "We should get sushi.",

  "Stay for a while.",

  "You're back ♡",

  "I have absolutely nothing important to say.",

  "Actually, wait. Come here.",

  "Mori thinks this is his phone.",

  "You found me again."

];


eliasWidget.addEventListener(
  "click",
  function() {

    eliasWidgetText.textContent =
      randomItem(
        eliasWidgetLines
      );

  }
);


// ========================================
// MORI WIDGET
// ========================================

const moriLines = [

  "judging you",

  "sleeping",

  "plotting something",

  "wants food",

  "stole Elias's seat",

  "pretending not to care",

  "watching everything",

  "committing crimes",

  "demanding attention",

  "ignoring Elias"

];


moriWidget.addEventListener(
  "click",
  function() {

    moriWidgetText.textContent =
      randomItem(
        moriLines
      );

  }
);


// ========================================
// OPEN APPS
// ========================================

document
  .querySelectorAll(
    "[data-app]"
  )
  .forEach(
    function(button) {

      button.addEventListener(
        "click",
        function() {

          openApp(
            button.dataset.app
          );

        }
      );

    }
  );


function openApp(app) {

  homeScreen.classList.add(
    "hidden"
  );


  statusBar.classList.add(
    "hidden"
  );


  appWindow.classList.remove(
    "hidden"
  );


  appContent.innerHTML =
    "";


  if (
    app === "messages"
  ) {

    renderMessages();

  }


  if (
    app === "photos"
  ) {

    renderPhotos();

  }


  if (
    app === "notes"
  ) {

    renderNotes();

  }


  if (
    app === "mori"
  ) {

    renderMori();

  }


  if (
    app === "calendar"
  ) {

    renderCalendar();

  }


  if (
    app === "music"
  ) {

    renderMusic();

  }


  if (
    app === "favorites"
  ) {

    renderUs();

  }


  if (
    app === "settings"
  ) {

    renderSettings();

  }


  window.scrollTo(
    0,
    0
  );

}


// ========================================
// CLOSE APP
// ========================================

closeApp.addEventListener(
  "click",
  function() {

    appWindow.classList.add(
      "hidden"
    );


    homeScreen.classList.remove(
      "hidden"
    );


    statusBar.classList.remove(
      "hidden"
    );


    window.scrollTo(
      0,
      0
    );

  }
);


// ========================================
// MESSAGES
// ========================================

function renderMessages() {

  appTitle.textContent =
    "Messages";


  messageBadge.classList.add(
    "hidden"
  );


  appContent.innerHTML =
    `
    <div class="contact-card">

      <div class="contact-avatar">
        E
      </div>

      <div>

        <strong>
          Elias ♡
        </strong>

        <small>
          online-ish
        </small>

      </div>

    </div>


    <div
      id="chat"
      class="chat"
    >

      <div class="bubble elias">
        hey
      </div>

      <div class="bubble elias">
        you alive?
      </div>

      <div class="bubble elias">
        come here.
      </div>

    </div>


    <div
      id="fakeReplies"
      class="fake-reply-area"
    >

      <button
        class="reply-button"
        data-reply="I'm here 😭"
      >
        I'm here 😭
      </button>


      <button
        class="reply-button"
        data-reply="What do you want?"
      >
        What do you want?
      </button>


      <button
        class="reply-button"
        data-reply="Mori is cuter."
      >
        Mori is cuter.
      </button>

    </div>
    `;


  document
    .querySelectorAll(
      ".reply-button"
    )
    .forEach(
      function(button) {

        button.addEventListener(
          "click",
          function() {

            sendFakeReply(
              button.dataset.reply
            );

          }
        );

      }
    );

}


function sendFakeReply(text) {

  const chat =
    document.getElementById(
      "chat"
    );


  const replies =
    document.getElementById(
      "fakeReplies"
    );


  const myBubble =
    document.createElement(
      "div"
    );


  myBubble.className =
    "bubble me";


  myBubble.textContent =
    text;


  chat.appendChild(
    myBubble
  );


  replies.innerHTML =
    "";


  setTimeout(
    function() {

      const eliasBubble =
        document.createElement(
          "div"
        );


      eliasBubble.className =
        "bubble elias";


      if (
        text.includes(
          "Mori"
        )
      ) {

        eliasBubble.textContent =
          "Wow. Betrayal in my own phone.";

      }

      else if (
        text.includes(
          "want"
        )
      ) {

        eliasBubble.textContent =
          "Your attention. Obviously.";

      }

      else {

        eliasBubble.textContent =
          "There you are. That's better.";

      }


      chat.appendChild(
        eliasBubble
      );


      eliasBubble.scrollIntoView({

        behavior:
          "smooth"

      });

    },

    500
  );

}


// ========================================
// PHOTOS APP
// ========================================

function renderPhotos() {

  appTitle.textContent =
    "Photos";


  let photosHTML =
    `
    <div class="photos-heading">

      <small>
        ELIAS OS GALLERY
      </small>

      <h3>
        Photos ♡
      </h3>

    </div>


    <div class="photos-meta">
      ${photoFiles.length} photos
    </div>


    <div class="photo-grid">
    `;


  photoFiles.forEach(
    function(photo) {

      photosHTML +=
        `
        <button
          class="photo-card"
          data-photo="${photo.src}"
          data-caption="${photo.caption}"
          type="button"
        >

          <img
            src="${photo.src}"
            alt="${photo.caption}"
          >

        </button>
        `;

    }
  );


  photosHTML +=
    `
    </div>
    `;


  appContent.innerHTML =
    photosHTML;


  document
    .querySelectorAll(
      ".photo-card"
    )
    .forEach(
      function(card) {

        card.addEventListener(
          "click",
          function() {

            openPhoto(
              card.dataset.photo,
              card.dataset.caption
            );

          }
        );

      }
    );

}


// ========================================
// US ♡ SCRAPBOOK APP
// ========================================

function renderUs() {

  appTitle.textContent =
    "Us ♡";


  currentScrapbookIndex =
    0;


  drawScrapbookPage();

}


function drawScrapbookPage() {

  const current =
    scrapbookPages[
      currentScrapbookIndex
    ];


  appContent.innerHTML =
    `
    <div class="photos-heading">

      <small>
        MARIE × ELIAS
      </small>

      <h3>
        Our Scrapbook ♡
      </h3>

    </div>


    <div class="scrapbook-meta">
      ${scrapbookPages.length} memories
    </div>


    <div class="scrapbook-viewer">


      <button
        id="scrapbookOpen"
        class="scrapbook-frame"
        type="button"
      >

        <img
          src="${current.src}"
          alt="${current.title}"
        >

      </button>


      <div class="scrapbook-caption">

        ${current.title}

      </div>


      <div class="scrapbook-count">

        Memory ${
          currentScrapbookIndex + 1
        }
        of
        ${scrapbookPages.length}

      </div>


      <div class="scrapbook-controls">


        <button
          id="prevPage"
          class="scrapbook-button"
          type="button"
          ${
            currentScrapbookIndex === 0
              ? "disabled"
              : ""
          }
        >
          ‹ Previous
        </button>


        <button
          id="nextPage"
          class="scrapbook-button"
          type="button"
          ${
            currentScrapbookIndex ===
            scrapbookPages.length - 1
              ? "disabled"
              : ""
          }
        >
          Next ›
        </button>


      </div>


      <button
        id="openFullscreenPage"
        class="scrapbook-open-button"
        type="button"
      >
        Open Fullscreen ♡
      </button>


    </div>
    `;


  const prevPage =
    document.getElementById(
      "prevPage"
    );


  const nextPage =
    document.getElementById(
      "nextPage"
    );


  const scrapbookOpen =
    document.getElementById(
      "scrapbookOpen"
    );


  const openFullscreenPage =
    document.getElementById(
      "openFullscreenPage"
    );


  prevPage.addEventListener(
    "click",
    function() {

      if (
        currentScrapbookIndex > 0
      ) {

        currentScrapbookIndex--;


        drawScrapbookPage();

      }

    }
  );


  nextPage.addEventListener(
    "click",
    function() {

      if (
        currentScrapbookIndex <
        scrapbookPages.length - 1
      ) {

        currentScrapbookIndex++;


        drawScrapbookPage();

      }

    }
  );


  scrapbookOpen.addEventListener(
    "click",
    function() {

      openPhoto(
        current.src,
        `Our Scrapbook — ${current.title}`
      );

    }
  );


  openFullscreenPage.addEventListener(
    "click",
    function() {

      openPhoto(
        current.src,
        `Our Scrapbook — ${current.title}`
      );

    }
  );

}


// ========================================
// PHOTO VIEWER
// ========================================

function openPhoto(
  src,
  caption
) {

  bigPhoto.src =
    src;


  bigPhotoCaption.textContent =
    caption;


  photoOverlay.classList.remove(
    "hidden"
  );

}


closePhoto.addEventListener(
  "click",
  function() {

    photoOverlay.classList.add(
      "hidden"
    );

  }
);


photoOverlay.addEventListener(
  "click",
  function(event) {

    if (
      event.target ===
      photoOverlay
    ) {

      photoOverlay.classList.add(
        "hidden"
      );

    }

  }
);


// ========================================
// NOTES
// ========================================

function renderNotes() {

  appTitle.textContent =
    "Notes";


  appContent.innerHTML =
    `
    <div class="note-card">

      <small>
        PINNED
      </small>

      <h3>
        things Marie keeps stealing
      </h3>

      <p>
        • my hoodies<br>
        • half my blanket<br>
        • my sushi<br>
        • Mori's attention<br>
        • apparently my entire phone
      </p>

    </div>


    <div class="note-card">

      <small>
        ELIAS
      </small>

      <h3>
        important
      </h3>

      <p>
        Buy sushi.<br>
        Stop letting Mori manipulate me.<br>
        Neither of these things will happen.
      </p>

    </div>


    <div class="note-card">

      <small>
        01:47
      </small>

      <h3>
        reminder
      </h3>

      <p>
        Tell Marie to go to sleep.
        She will ignore this.
      </p>

    </div>
    `;

}


// ========================================
// MORI CAM
// ========================================

function renderMori() {

  appTitle.textContent =
    "Mori Cam";


  appContent.innerHTML =
    `
    <div class="mori-cam">

      <img
        src="morii.PNG"
        alt="Mori"
      >

      <h3>
        Mori Cam 🐈‍⬛
      </h3>

      <p id="moriCamText">
        Live status: pretending he doesn't need anybody.
      </p>

      <button
        id="moriCamButton"
        class="mori-button"
        type="button"
      >
        Check Mori
      </button>

    </div>
    `;


  document
    .getElementById(
      "moriCamButton"
    )
    .addEventListener(
      "click",
      function() {

        const text =
          document.getElementById(
            "moriCamText"
          );


        const events = [

          "Mori knocked something over. No regrets.",

          "Mori is asleep in the most inconvenient place possible.",

          "Mori wants food. He ate recently. This is irrelevant.",

          "Mori is staring directly into the camera.",

          "Mori has stolen Elias's seat again.",

          "Mori is purring. Mission accomplished.",

          "Mori has vanished. This is suspicious.",

          "Mori is watching you from across the room.",

          "Mori has selected violence.",

          "Mori is innocent. Allegedly."

        ];


        text.textContent =
          randomItem(
            events
          );

      }
    );

}


// ========================================
// CALENDAR
// ========================================

function renderCalendar() {

  appTitle.textContent =
    "Calendar";


  appContent.innerHTML =
    `
    <div class="calendar-event">

      <small>
        TODAY · 19:00
      </small>

      <strong>
        Movie night ♡
      </strong>

      <p>
        Elias claims you choose the movie.
        Elias will complain about the movie.
      </p>

    </div>


    <div class="calendar-event">

      <small>
        FRIDAY · 20:30
      </small>

      <strong>
        Sushi Date 🍣
      </strong>

      <p>
        Sit beside Elias, apparently.
        Sitting opposite him has been forbidden.
      </p>

    </div>


    <div class="calendar-event">

      <small>
        SOMETIME
      </small>

      <strong>
        Give Mori attention
      </strong>

      <p>
        This event repeats approximately every eleven minutes.
      </p>

    </div>
    `;

}


// ========================================
// MUSIC
// ========================================

function renderMusic() {

  appTitle.textContent =
    "Music";


  appContent.innerHTML =
    `
    <div class="music-player">

      <div class="album-art">
        ♡
      </div>

      <h3>
        Our Song
      </h3>

      <p>
        Marie × Elias
      </p>

      <button
        id="playButton"
        class="play-button"
        type="button"
      >
        ▶
      </button>

    </div>
    `;


  const button =
    document.getElementById(
      "playButton"
    );


  let playing =
    false;


  button.addEventListener(
    "click",
    function() {

      playing =
        !playing;


      button.textContent =
        playing
          ? "Ⅱ"
          : "▶";

    }
  );

}


// ========================================
// SETTINGS
// ========================================

function renderSettings() {

  appTitle.textContent =
    "Settings";


  appContent.innerHTML =
    `
    <div class="info-card">

      <small>
        DEVICE
      </small>

      <strong>
        Elias OS
      </strong>

    </div>


    <div class="info-card">

      <small>
        VERSION
      </small>

      <strong>
        1.2
      </strong>

    </div>


    <div class="info-card">

      <small>
        OWNER
      </small>

      <strong>
        Marie ♡
      </strong>

    </div>


    <div class="info-card">

      <small>
        PHOTOS
      </small>

      <strong>
        ${photoFiles.length} photos
      </strong>

    </div>


    <div class="info-card">

      <small>
        SCRAPBOOK
      </small>

      <strong>
        ${scrapbookPages.length} memories
      </strong>

    </div>


    <div class="info-card">

      <small>
        MORI ACCESS
      </small>

      <strong>
        unfortunately unlimited
      </strong>

    </div>


    <div class="info-card">

      <small>
        API COST
      </small>

      <strong>
        €0.00 😌
      </strong>

    </div>


    <button
      id="lockPhoneButton"
      class="lock-button"
      type="button"
    >
      Lock Elias OS
    </button>
    `;


  document
    .getElementById(
      "lockPhoneButton"
    )
    .addEventListener(
      "click",
      lockPhone
    );

}


// ========================================
// START
// ========================================

updateClock();

loadNotifications();
