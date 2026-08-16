// ========================================
// ELIAS OS 1.5
// FULL CALL SYSTEM
// MUSIC + LOCK SCREEN + PHOTOS + SCRAPBOOK
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
// MUSIC DATA
// ========================================

const song = {
  src: "our song.mp3",
  title: "Our Song",
  artist: "Marie × Elias",
  artwork: "couple.PNG"
};


// ========================================
// CALL DATA
// ========================================

const callData = {
  ringtone: "Y-3.mp3",
  callerPhoto: "childhood.PNG",
  callerName: "Elias ♡"
};


// ========================================
// GLOBAL AUDIO
// ========================================

const musicAudio =
  new Audio(song.src);

musicAudio.preload =
  "metadata";

musicAudio.volume =
  1;


const ringtoneAudio =
  new Audio(callData.ringtone);

ringtoneAudio.preload =
  "auto";

ringtoneAudio.loop =
  true;

ringtoneAudio.volume =
  0.85;


let repeatEnabled =
  false;

let shuffleEnabled =
  false;

let songHasStarted =
  false;


// ========================================
// MEDIA SESSION
// ========================================

function setupMediaSession() {

  if (
    !("mediaSession" in navigator)
  ) {

    return;

  }


  try {

    navigator.mediaSession.metadata =
      new MediaMetadata({

        title:
          song.title,

        artist:
          song.artist,

        album:
          "Elias OS ♡",

        artwork: [

          {
            src:
              song.artwork,
            sizes:
              "512x512",
            type:
              "image/png"
          }

        ]

      });


    navigator.mediaSession.setActionHandler(
      "play",
      function() {

        musicAudio.play();

      }
    );


    navigator.mediaSession.setActionHandler(
      "pause",
      function() {

        musicAudio.pause();

      }
    );


    navigator.mediaSession.setActionHandler(
      "seekbackward",
      function() {

        musicAudio.currentTime =
          Math.max(
            0,
            musicAudio.currentTime - 10
          );

      }
    );


    navigator.mediaSession.setActionHandler(
      "seekforward",
      function() {

        musicAudio.currentTime =
          Math.min(
            musicAudio.duration || Infinity,
            musicAudio.currentTime + 10
          );

      }
    );

  }

  catch (error) {

    console.log(
      "Media Session unavailable:",
      error
    );

  }

}


setupMediaSession();


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


let currentScrapbookIndex =
  0;


// ========================================
// CLOCK
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
// HELPERS
// ========================================

function randomItem(array) {

  return array[
    Math.floor(
      Math.random() *
      array.length
    )
  ];

}


function formatTime(seconds) {

  if (
    !Number.isFinite(seconds)
  ) {

    return "0:00";

  }


  const minutes =
    Math.floor(
      seconds / 60
    );


  const remainingSeconds =
    Math.floor(
      seconds % 60
    );


  return (
    minutes +
    ":" +
    String(
      remainingSeconds
    ).padStart(
      2,
      "0"
    )
  );

}


// ========================================
// NOTIFICATIONS
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

  "Marieeeee.",

  "I require attention.",

  "open the phone already."

];


const moriNotifications = [

  "Motion detected in kitchen.",

  "Mori is staring directly into the camera.",

  "Possible snack-related activity detected.",

  "Mori has occupied Elias's seat.",

  "Motion detected near food bowl.",

  "Mori appears to be plotting something.",

  "Possible crime detected. Suspect: Mori."

];


const calendarNotifications = [

  "Sushi date tonight ♡",

  "Movie night at 20:00.",

  "Reminder: give Mori attention.",

  "Night walk later? 🌙",

  "Stay-home date tonight.",

  "Reminder: steal Elias's hoodie.",

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


function showMissedCallNotification() {

  eliasNotification.textContent =
    "Missed call from Elias ♡";

}


loadNotifications();


// ========================================
// LOCK SCREEN NOW PLAYING
// ========================================

function createNowPlayingCard() {

  let card =
    document.getElementById(
      "lockNowPlaying"
    );


  if (card) {

    return card;

  }


  card =
    document.createElement(
      "div"
    );


  card.id =
    "lockNowPlaying";


  card.className =
    "lock-now-playing hidden";


  card.innerHTML =
    `
    <img
      src="${song.artwork}"
      class="lock-album-art"
      alt=""
    >

    <div class="lock-song-details">

      <small>
        NOW PLAYING
      </small>

      <strong>
        ${song.title}
      </strong>

      <span>
        ${song.artist}
      </span>

    </div>

    <button
      id="lockPlayButton"
      class="lock-play-button"
      type="button"
    >
      ▶
    </button>
    `;


  const notifications =
    lockScreen.querySelector(
      ".lock-notifications"
    );


  notifications.insertAdjacentElement(
    "afterend",
    card
  );


  card
    .querySelector(
      "#lockPlayButton"
    )
    .addEventListener(
      "click",
      function(event) {

        event.stopPropagation();

        toggleMusic();

      }
    );


  return card;

}


function updateLockNowPlaying() {

  const card =
    createNowPlayingCard();


  const button =
    card.querySelector(
      "#lockPlayButton"
    );


  if (
    songHasStarted
  ) {

    card.classList.remove(
      "hidden"
    );

  }

  else {

    card.classList.add(
      "hidden"
    );

  }


  button.textContent =
    musicAudio.paused
      ? "▶"
      : "Ⅱ";

}


createNowPlayingCard();


// ========================================
// MUSIC CONTROLS
// ========================================

async function toggleMusic() {

  if (
    musicAudio.paused
  ) {

    try {

      await musicAudio.play();

      songHasStarted =
        true;

    }

    catch (error) {

      console.error(
        "Music could not play:",
        error
      );

    }

  }

  else {

    musicAudio.pause();

  }


  updateMusicUI();

  updateLockNowPlaying();

}


function skipBackward() {

  musicAudio.currentTime =
    Math.max(
      0,
      musicAudio.currentTime - 10
    );

}


function skipForward() {

  musicAudio.currentTime =
    Math.min(
      musicAudio.duration || Infinity,
      musicAudio.currentTime + 10
    );

}


function updateMusicUI() {

  const playButton =
    document.getElementById(
      "playButton"
    );


  const albumArt =
    document.getElementById(
      "albumArt"
    );


  if (playButton) {

    playButton.textContent =
      musicAudio.paused
        ? "▶"
        : "Ⅱ";

  }


  if (albumArt) {

    albumArt.classList.toggle(
      "playing",
      !musicAudio.paused
    );

  }


  const repeatButton =
    document.getElementById(
      "repeatButton"
    );


  if (repeatButton) {

    repeatButton.classList.toggle(
      "active",
      repeatEnabled
    );

  }


  const shuffleButton =
    document.getElementById(
      "shuffleButton"
    );


  if (shuffleButton) {

    shuffleButton.classList.toggle(
      "active",
      shuffleEnabled
    );

  }

}


musicAudio.addEventListener(
  "play",
  function() {

    songHasStarted =
      true;

    updateMusicUI();

    updateLockNowPlaying();

  }
);


musicAudio.addEventListener(
  "pause",
  function() {

    updateMusicUI();

    updateLockNowPlaying();

  }
);


musicAudio.addEventListener(
  "ended",
  function() {

    if (
      repeatEnabled
    ) {

      musicAudio.currentTime =
        0;


      musicAudio.play();

      return;

    }


    updateMusicUI();

    updateLockNowPlaying();

  }
);


musicAudio.addEventListener(
  "timeupdate",
  function() {

    const progress =
      document.getElementById(
        "musicProgress"
      );


    const currentText =
      document.getElementById(
        "currentMusicTime"
      );


    const totalText =
      document.getElementById(
        "totalMusicTime"
      );


    if (
      progress &&
      Number.isFinite(
        musicAudio.duration
      ) &&
      musicAudio.duration > 0
    ) {

      progress.value =
        (
          musicAudio.currentTime /
          musicAudio.duration
        ) * 100;

    }


    if (currentText) {

      currentText.textContent =
        formatTime(
          musicAudio.currentTime
        );

    }


    if (totalText) {

      totalText.textContent =
        formatTime(
          musicAudio.duration
        );

    }

  }
);


// ========================================
// CALL SYSTEM
// ========================================

let activeCallOverlay =
  null;

let callTimerInterval =
  null;

let callSeconds =
  0;

let callAnswered =
  false;


async function startRingtone() {

  try {

    ringtoneAudio.currentTime =
      0;


    await ringtoneAudio.play();

  }

  catch (error) {

    console.log(
      "Ringtone needs a user interaction first:",
      error
    );

  }

}


function stopRingtone() {

  ringtoneAudio.pause();

  ringtoneAudio.currentTime =
    0;

}


function createIncomingCall() {

  if (
    activeCallOverlay
  ) {

    return;

  }


  callAnswered =
    false;


  const overlay =
    document.createElement(
      "div"
    );


  overlay.className =
    "incoming-call-overlay ringing";


  overlay.innerHTML =
    `
    <div class="incoming-call-content">

      <p class="incoming-small">
        INCOMING CALL
      </p>


      <div class="caller-photo-shell">

        <img
          src="${callData.callerPhoto}"
          class="caller-photo"
          alt="Elias"
        >

      </div>


      <h2>
        ${callData.callerName}
      </h2>


      <p id="callStatus">
        Elias OS Audio
      </p>


      <div class="incoming-call-actions">

        <button
          id="declineCall"
          class="call-action decline"
          type="button"
        >

          ✕

          <span>
            Decline
          </span>

        </button>


        <button
          id="acceptCall"
          class="call-action accept"
          type="button"
        >

          ☎

          <span>
            Accept
          </span>

        </button>

      </div>

    </div>
    `;


  document.body.appendChild(
    overlay
  );


  activeCallOverlay =
    overlay;


  startRingtone();


  document
    .getElementById(
      "declineCall"
    )
    .addEventListener(
      "click",
      function() {

        declineCall();

      }
    );


  document
    .getElementById(
      "acceptCall"
    )
    .addEventListener(
      "click",
      function() {

        acceptCall();

      }
    );

}


function acceptCall() {

  if (
    !activeCallOverlay
  ) {

    return;

  }


  callAnswered =
    true;


  stopRingtone();


  activeCallOverlay.classList.remove(
    "ringing"
  );


  activeCallOverlay.classList.add(
    "active-call"
  );


  const status =
    document.getElementById(
      "callStatus"
    );


  const actions =
    activeCallOverlay.querySelector(
      ".incoming-call-actions"
    );


  status.textContent =
    "0:00";


  actions.innerHTML =
    `
    <button
      id="endActiveCall"
      class="call-action end"
      type="button"
    >

      ✕

      <span>
        End
      </span>

    </button>
    `;


  document
    .getElementById(
      "endActiveCall"
    )
    .addEventListener(
      "click",
      function() {

        endCall();

      }
    );


  callSeconds =
    0;


  callTimerInterval =
    setInterval(
      function() {

        callSeconds++;


        const minutes =
          Math.floor(
            callSeconds / 60
          );


        const seconds =
          String(
            callSeconds % 60
          ).padStart(
            2,
            "0"
          );


        status.textContent =
          `${minutes}:${seconds}`;

      },

      1000
    );

}


function declineCall() {

  callAnswered =
    false;


  stopRingtone();


  showMissedCallNotification();


  endCall();

}


function endCall() {

  stopRingtone();


  if (
    callTimerInterval
  ) {

    clearInterval(
      callTimerInterval
    );


    callTimerInterval =
      null;

  }


  if (
    activeCallOverlay
  ) {

    activeCallOverlay.remove();

    activeCallOverlay =
      null;

  }

}


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


  // Occasional surprise call
  if (
    Math.random() < 0.12
  ) {

    setTimeout(
      function() {

        createIncomingCall();

      },

      1800
    );

  }

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

  updateLockNowPlaying();


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

  "Actually, wait. Come here.",

  "Mori thinks this is his phone."

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

  "demanding attention"

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

      const bubble =
        document.createElement(
          "div"
        );


      bubble.className =
        "bubble elias";


      if (
        text.includes(
          "Mori"
        )
      ) {

        bubble.textContent =
          "Wow. Betrayal in my own phone.";

      }

      else if (
        text.includes(
          "want"
        )
      ) {

        bubble.textContent =
          "Your attention. Obviously.";

      }

      else {

        bubble.textContent =
          "There you are. That's better.";

      }


      chat.appendChild(
        bubble
      );

    },

    500
  );

}


// ========================================
// PHOTOS
// ========================================

function renderPhotos() {

  appTitle.textContent =
    "Photos";


  let html =
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

      html +=
        `
        <button
          class="photo-card"
          data-photo="${photo.src}"
          data-caption="${photo.caption}"
          type="button"
        >

          <img
            src="${photo.src}"
            alt=""
          >

        </button>
        `;

    }
  );


  html +=
    "</div>";


  appContent.innerHTML =
    html;


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
// SCRAPBOOK
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

        Memory
        ${currentScrapbookIndex + 1}
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


  document
    .getElementById(
      "prevPage"
    )
    .addEventListener(
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


  document
    .getElementById(
      "nextPage"
    )
    .addEventListener(
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


  document
    .getElementById(
      "scrapbookOpen"
    )
    .addEventListener(
      "click",
      function() {

        openPhoto(
          current.src,
          `Our Scrapbook — ${current.title}`
        );

      }
    );


  document
    .getElementById(
      "openFullscreenPage"
    )
    .addEventListener(
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
        Live status: plotting something.
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

        document
          .getElementById(
            "moriCamText"
          )
          .textContent =
          randomItem([

            "Mori knocked something over. No regrets.",

            "Mori is asleep in the most inconvenient place possible.",

            "Mori has stolen Elias's seat again.",

            "Mori is staring directly into the camera.",

            "Mori is innocent. Allegedly."

          ]);

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
      </p>

    </div>


    <div class="calendar-event">

      <small>
        FRIDAY · 20:30
      </small>

      <strong>
        Sushi Date 🍣
      </strong>

    </div>


    <div class="calendar-event">

      <small>
        SOMETIME
      </small>

      <strong>
        Give Mori attention
      </strong>

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


      <div class="album-art-shell">

        <img
          id="albumArt"
          class="real-album-art"
          src="${song.artwork}"
          alt="${song.title}"
        >

      </div>


      <h3>
        ${song.title}
      </h3>


      <p>
        ${song.artist}
      </p>


      <div class="music-progress-wrap">

        <input
          id="musicProgress"
          class="music-progress"
          type="range"
          min="0"
          max="100"
          value="0"
        >


        <div class="music-time">

          <span id="currentMusicTime">
            ${formatTime(
              musicAudio.currentTime
            )}
          </span>

          <span id="totalMusicTime">
            ${formatTime(
              musicAudio.duration
            )}
          </span>

        </div>

      </div>


      <div class="main-music-controls">

        <button
          id="backButton"
          class="secondary-music-button"
          type="button"
        >
          ↶
          <small>10</small>
        </button>


        <button
          id="playButton"
          class="play-button"
          type="button"
        >
          ${
            musicAudio.paused
              ? "▶"
              : "Ⅱ"
          }
        </button>


        <button
          id="forwardButton"
          class="secondary-music-button"
          type="button"
        >
          ↷
          <small>10</small>
        </button>

      </div>


      <div class="music-extra-controls">

        <button
          id="shuffleButton"
          class="music-option-button ${
            shuffleEnabled
              ? "active"
              : ""
          }"
          type="button"
        >
          🔀
        </button>


        <button
          id="repeatButton"
          class="music-option-button ${
            repeatEnabled
              ? "active"
              : ""
          }"
          type="button"
        >
          🔁
        </button>

      </div>


      <div class="volume-wrap">

        <span>🔈</span>

        <input
          id="volumeSlider"
          class="volume-slider"
          type="range"
          min="0"
          max="1"
          step="0.01"
          value="${musicAudio.volume}"
        >

        <span>🔊</span>

      </div>


      <p class="music-little-note">
        Our little soundtrack ♡
      </p>


    </div>
    `;


  const progress =
    document.getElementById(
      "musicProgress"
    );


  if (
    Number.isFinite(
      musicAudio.duration
    ) &&
    musicAudio.duration > 0
  ) {

    progress.value =
      (
        musicAudio.currentTime /
        musicAudio.duration
      ) * 100;

  }


  progress.addEventListener(
    "input",
    function() {

      if (
        Number.isFinite(
          musicAudio.duration
        ) &&
        musicAudio.duration > 0
      ) {

        musicAudio.currentTime =
          (
            Number(
              progress.value
            ) /
            100
          ) *
          musicAudio.duration;

      }

    }
  );


  document
    .getElementById(
      "playButton"
    )
    .addEventListener(
      "click",
      toggleMusic
    );


  document
    .getElementById(
      "backButton"
    )
    .addEventListener(
      "click",
      skipBackward
    );


  document
    .getElementById(
      "forwardButton"
    )
    .addEventListener(
      "click",
      skipForward
    );


  document
    .getElementById(
      "repeatButton"
    )
    .addEventListener(
      "click",
      function() {

        repeatEnabled =
          !repeatEnabled;


        musicAudio.loop =
          repeatEnabled;


        updateMusicUI();

      }
    );


  document
    .getElementById(
      "shuffleButton"
    )
    .addEventListener(
      "click",
      function() {

        shuffleEnabled =
          !shuffleEnabled;


        updateMusicUI();

      }
    );


  document
    .getElementById(
      "volumeSlider"
    )
    .addEventListener(
      "input",
      function(event) {

        musicAudio.volume =
          Number(
            event.target.value
          );

      }
    );


  updateMusicUI();

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
      <small>DEVICE</small>
      <strong>Elias OS</strong>
    </div>


    <div class="info-card">
      <small>VERSION</small>
      <strong>1.5</strong>
    </div>


    <div class="info-card">
      <small>MUSIC</small>
      <strong>${song.title}</strong>
    </div>


    <div class="info-card">
      <small>CALLER</small>
      <strong>${callData.callerName}</strong>
    </div>


    <div class="info-card">
      <small>RINGTONE</small>
      <strong>Y-3.mp3</strong>
    </div>


    <button
      id="testCallButton"
      class="lock-button"
      type="button"
    >
      ☎ Incoming Call from Elias
    </button>


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
      "testCallButton"
    )
    .addEventListener(
      "click",
      createIncomingCall
    );


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

updateLockNowPlaying();
