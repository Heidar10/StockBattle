function selectCountry(code) {
  document.getElementById("phoneNumber").value = code;
  updateSelectedCountry(code);
  toggleCountryList();
}

function toggleCountryList() {
  let countryList = document.querySelector(".country-list");
  if (countryList.style.display === "block") {
    countryList.style.display = "none";
  } else {
    countryList.style.display = "block";
  }
}

function getPhoneNumber() {
  let countryCode = document.getElementById("phoneNumber").value;

  console.log("Selected country code:", countryCode);
}

function updateSelectedCountry(code) {
  let selectedCountry = document.getElementById("selectedCountry");
  selectedCountry.innerHTML = `<img src="https://cdn.countryflags.com/thumbs/${getCountryCodeImage(
    code
  )}/flag-400.png" alt="${code} Flag">${code}`;
}

function getCountryCodeImage(code) {
  switch (code) {
    case "+1":
      return "united-states-of-america";
    case "+44":
      return "united-kingdom";
    case "+33":
      return "france";
    default:
      return "";
  }
}

//////////////////////

let countDownDate1 = new Date();
countDownDate1.setHours(countDownDate1.getHours() + 6);
countDownDate1.setMinutes(countDownDate1.getMinutes() + 30);

let countDownDate2 = new Date();
countDownDate2.setMinutes(countDownDate2.getMinutes() + 5);

let x1 = setInterval(function () {
  let now = new Date().getTime();
  let distance = countDownDate1 - now;
  updateTimer(distance, ".time");

  if (distance < 0) {
    clearInterval(x1);
    document.querySelectorAll(".time").forEach(function (timerElement) {
      timerElement.innerHTML = "Time is up";
    });
  }
}, 1000);

let x2 = setInterval(function () {
  let now = new Date().getTime();
  let distance = countDownDate2 - now;
  updateTimer(distance, ".timer");

  if (distance < 0) {
    clearInterval(x2);
    updateTimer(0, ".timer");
    let timer2Element = document.getElementById("timer2");
    if (timer2Element) {
      timer2Element.innerHTML = "Time is up";
    }
  } else {
    updateTimer(distance, ".timer");
  }
}, 1000);

function updateTimer(distance, selector) {
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  seconds = seconds < 10 ? "0" + seconds : seconds;

  let timerElements = document.querySelectorAll(selector);
  let timerString = "";

  if (hours > 0) {
    timerString += hours + "h ";
  }

  timerString +=
    minutes + "m " + "<span class='seconds'>" + seconds + "</span>" + "s";
  timerElements.forEach(function (timerElement) {
    timerElement.innerHTML = timerString;
  });
}

////////////////////
const button = document.querySelector(".burger-menu");
const accountAction = document.querySelector(".account-action-adaptive");

button.addEventListener("click", function () {
  accountAction.classList.toggle("show");
  button.classList.toggle("opened");
});

let prompt = document.querySelector(".prompt");
let promptNot = document.querySelector(".prompt-not");
let container = document.querySelector(".prompt-container");
let containerNot = document.querySelector(".prompt-container-not");

function togglePromptDisplay() {
  if (prompt.style.display === "none" || prompt.style.display === "") {
    prompt.style.display = "flex";
    // promptNot.style.display = "flex";
    container.style.display = "flex";
    // containerNot.style.display = "flex";
  } else {
    prompt.style.display = "none";
    if (promptNot) {
      promptNot.style.display = "none";
    }
    container.style.display = "none";
    if (containerNot) {
      containerNot.style.display = "none";
    }
  }
}

document.querySelectorAll(".question").forEach((question) => {
  question.addEventListener("click", function () {
    togglePromptDisplay();
  });
});

document.querySelectorAll(".prompt-icon-plus").forEach((exit) => {
  exit.addEventListener("click", () => {
    togglePromptDisplay();
  });
});

document.querySelectorAll(".btn-enter").forEach((btnEnter) => {
  btnEnter.addEventListener("click", function (e) {
    e.preventDefault();
    togglePromptDisplay();
  });
});

let arrows = document.querySelectorAll(".arrow");
let hidInfos = document.querySelectorAll(".hidden-info");
let mybattles1 = document.querySelector(".mybattles");

arrows.forEach((arrow, index) => {
  arrow.addEventListener("click", (e) => {
    e.preventDefault();

    let hidInfo = hidInfos[index];

    hidInfos.forEach((info, i) => {
      if (i !== index) {
        info.style.display = "none";
      }
    });

    if (hidInfo.style.display === "none" || hidInfo.style.display === "") {
      hidInfo.style.display = "flex";
      if (mybattles1 && window.innerHeight < 1000) {
        mybattles1.style.setProperty("height", "auto", "important");
      }
    } else {
      hidInfo.style.display = "none";
      if (mybattles1 && window.innerHeight < 1000) {
        mybattles1.style.removeProperty("height");
      }
    }
  });
});

///////////////////////
const promptContainer = document.querySelector(".finished");
const promptContainerLive = document.querySelector(".live");
let promptFinished = document.querySelectorAll(".prompt");
const promptLive = document.querySelector(".prompt-live");

function showPrompt() {
  setTimeout(function () {
    if (promptFinished.length > 0) {
      promptFinished.forEach(function (prompt) {
        prompt.style.display = "flex";
      });
    }
    if (promptLive) {
      promptContainerLive.style.display = "flex";
    }
    if (promptContainer) {
      promptContainer.style.display = "flex";
    }
    if (promptContainerLive) {
      promptContainerLive.style.display = "flex";
    }
  }, 2000);
}

window.addEventListener("load", showPrompt);

//////////////////

function toggleElements() {
  const selectedWallet = document.getElementById("wallets").value;
  const addressElement = document.getElementById("walletAddress");
  const currencyButtons = document.querySelectorAll(".currency");
  const inputElement = document.querySelector(".input");

  if (selectedWallet === "paypal") {
    addressElement.style.display = "none";
    currencyButtons.forEach((button) => {
      button.style.display = "none";
    });
    inputElement.style.borderRight = "1px solid #8c5b82";
    inputElement.style.borderTopRightRadius = "5px";
    inputElement.style.borderBottomRightRadius = "5px";
  } else {
    addressElement.style.display = "flex";
    currencyButtons.forEach((button) => {
      button.style.display = "block";
    });
    inputElement.style.borderRight = "0";
    inputElement.style.borderTopRightRadius = "0";
    inputElement.style.borderBottomRightRadius = "0";
  }
}

///////////////////////// copy key

const copyButton = document.getElementById("copyButton");
const walletAddress = document.getElementById("walletAddress");

if (copyButton) {
  copyButton.addEventListener("click", () => {
    // const addressText = walletAddress.textContent
    //   .trim()
    //   .split("Wallet address :")[1]
    //   .trim();
    const addressText = walletAddress.textContent
      .trim()
      .replace("Wallet address :", "")
      .trim();

    const textarea = document.createElement("textarea");
    textarea.value = addressText;
    textarea.style.position = "fixed";
    textarea.style.opacity = 0;
    document.body.appendChild(textarea);

    textarea.select();
    document.execCommand("copy");

    document.body.removeChild(textarea);

    console.log("Address copied:", addressText);
  });
}

function selectOption(option, element) {
  const buttonDesc = element.parentElement.parentElement.querySelector(
    ".category-choose-stock .desc"
  );
  const selectedStatus = element.textContent.trim();
  let previousSelectedStatus = document.querySelector(".status.selected");

  if (previousSelectedStatus) {
    previousSelectedStatus.classList.remove("selected");
    previousSelectedStatus.classList.remove("white");
  }

  element.classList.add("selected");
  element.classList.add("white");
  buttonDesc.textContent = selectedStatus;
  filterCards(selectedStatus);
  hideMenu(element.parentElement);

  const battleroomBackground = document.querySelector(".forms");
  const formHeight = document.querySelector(".form-height");

  if (selectedStatus === "Active") {
    if (battleroomBackground) {
      battleroomBackground.classList.add("form-height");
    }

    if (formHeight) {
      formHeight.classList.add("form-height");
    }
  } else {
    if (battleroomBackground) {
      battleroomBackground.classList.remove("form-height");
    }

    if (formHeight) {
      formHeight.classList.remove("form-height");
    }
  }
}

function toggleMenu(button) {
  const optionsContainer = button.closest(".options-container");
  const options = optionsContainer.querySelector(".options");

  options.style.display =
    options.style.display === "none" || options.style.display === ""
      ? "flex"
      : "none";
}
function hideMenu(options) {
  options.style.display = "none";
}

function filterCards(status) {
  const cards = document.querySelectorAll(".battle-card");
  const screenWidth = window.innerWidth;

  cards.forEach((card) => {
    if (status === "Show all" || card.classList.contains(status)) {
      if (screenWidth < 480) {
        card.style.display = "grid";
      } else {
        card.style.display = "flex";
      }
    } else {
      card.style.display = "none";
    }
  });
}
//////////////////////
function hidePassword(input) {
  const inputValue = input.value;
  const hiddenValue = "*".repeat(inputValue.length);

  input.value = hiddenValue;
}

//////////////

const fileInput = document.querySelector("#fileInput");
const selectedFileName = document.querySelector("#selectedFileName");
if (fileInput) {
  fileInput.addEventListener("change", function () {
    const files = this.files;
    if (files.length > 0) {
      let fileName = files[0].name;
      const maxLength = 15;

      if (fileName.length > maxLength) {
        fileName = fileName.substring(0, maxLength - 3) + "...";
      }

      selectedFileName.textContent = `${fileName}`;
    } else {
      selectedFileName.textContent = "";
    }
  });
}

let arrowTrans = document.querySelectorAll(".transaction-arrow");
let hiddenTrans = document.querySelectorAll(".hidden-transaction");

arrowTrans.forEach((arrow, index) => {
  arrow.addEventListener("click", () => {
    if (
      hiddenTrans[index].style.display === "none" ||
      hiddenTrans[index].style.display === ""
    ) {
      hiddenTrans[index].style.display = "flex";
    } else {
      hiddenTrans[index].style.display = "none";
    }
  });
});
// }

document.addEventListener("DOMContentLoaded", function () {
  const dropdowns = document.querySelectorAll(".dropdown");

  dropdowns.forEach(function (dropdown) {
    const dropdownBtn = dropdown.querySelector(".transaction-filter-btn");
    const dropdownContent = dropdown.querySelector(".dropdown-content");

    dropdownBtn.addEventListener("click", function () {
      dropdownContent.classList.toggle("show");
    });

    dropdownContent.addEventListener("click", function (event) {
      const selectedItems = dropdownContent.querySelectorAll("li");
      selectedItems.forEach(function (item) {
        item.classList.remove("active");
      });

      const selectedItem = event.target;
      if (selectedItem.tagName === "LI") {
        selectedItem.classList.add("active");
        const btnText = dropdownBtn.querySelector(".btn-text");
        btnText.textContent = selectedItem.textContent;
        dropdownContent.classList.remove("show");
      }
    });
  });
});

/////////////////////////

function showNextPopup(popupId) {
  let currentPopup = document.getElementById(popupId);
  let promptContent = currentPopup.querySelector(".prompt-content");

  currentPopup.style.display = "flex";
  promptContent.style.display = "flex";
}
document.addEventListener("DOMContentLoaded", function () {
  let plusIcons = document.querySelectorAll(".prompt-icon-plus-ver");

  plusIcons.forEach(function (icon) {
    icon.addEventListener("click", function () {
      let container = this.closest(".prompt-container-verification");
      if (container) {
        container.style.display = "none";
      }
    });
  });
});

function hidePopup(popupId) {
  let popup = document.getElementById(popupId);
  popup.style.display = "none";
}

//////////////////////////
const firstRound = document.querySelector(".first-round");
const secondRound = document.querySelector(".second-round");
const thirdRound = document.querySelector(".third-round");
const fourthRound = document.querySelector(".fourth-round");
const fifthRound = document.querySelector(".fifth-round");
const sixthRound = document.querySelector(".sixth-round");

const callBtn = document.getElementById("callBtn");
const callBtnAdap = document.getElementById("callBtn-adap");

if (callBtn && callBtnAdap) {
  callBtn.addEventListener("click", function () {
    if (firstRound.style.display !== "none") {
      firstRound.style.display = "none";
      secondRound.style.display = "flex";
    } else if (secondRound.style.display !== "none") {
      secondRound.style.display = "none";
      thirdRound.style.display = "flex";
    } else if (thirdRound.style.display !== "none") {
      thirdRound.style.display = "none";
      fourthRound.style.display = "flex";
    } else if (fourthRound.style.display !== "none") {
      fourthRound.style.display = "none";
      fifthRound.style.display = "flex";
    } else if (fifthRound.style.display !== "none") {
      fifthRound.style.display = "none";
      sixthRound.style.display = "flex";
      setTimeout(function () {
        showCongratulations();
      }, 2000);
    }
  });
  function showCongratulations() {
    const promptContainer = document.querySelector(
      ".prompt-container.congratulation"
    );
    if (promptContainer) {
      promptContainer.style.display = "flex";
    }
  }
  callBtnAdap.addEventListener("click", function () {
    if (firstRound.style.display !== "none") {
      firstRound.style.display = "none";
      secondRound.style.display = "flex";
    } else if (secondRound.style.display !== "none") {
      secondRound.style.display = "none";
      thirdRound.style.display = "flex";
    } else if (thirdRound.style.display !== "none") {
      thirdRound.style.display = "none";
      fourthRound.style.display = "flex";
    } else if (fourthRound.style.display !== "none") {
      fourthRound.style.display = "none";
      fifthRound.style.display = "flex";
    } else if (fifthRound.style.display !== "none") {
      fifthRound.style.display = "none";
      sixthRound.style.display = "flex";
      setTimeout(function () {
        showCongratulations();
      }, 2000);
    }
  });
  function showCongratulations() {
    const promptContainer = document.querySelector(
      ".prompt-container.congratulation"
    );
    if (promptContainer) {
      promptContainer.style.display = "flex";
    }
  }
}

////////////////////////////////

document.addEventListener("DOMContentLoaded", function () {
  const plusButtons = document.querySelectorAll(
    ".stockvsstock-button-item .right"
  );
  const minusButtons = document.querySelectorAll(
    ".stockvsstock-button-item .left"
  );
  const amountDisplays = document.querySelectorAll(
    ".stockvsstock-button-item .center p.white"
  );

  if (!plusButtons.length || !minusButtons.length || !amountDisplays.length) {
    return;
  }

  let amounts = Array.from({ length: plusButtons.length }, () => 10);

  function updateAmount(index) {
    amountDisplays[index].textContent = `$${amounts[index]}`;
  }

  plusButtons.forEach((button, index) => {
    button.addEventListener("click", function () {
      amounts[index] += 10;
      updateAmount(index);
    });
  });

  minusButtons.forEach((button, index) => {
    button.addEventListener("click", function () {
      if (amounts[index] >= 10) {
        amounts[index] -= 10;
        updateAmount(index);
      }
    });
  });

  amountDisplays.forEach((_, index) => {
    updateAmount(index);
  });
});

/////////////  Chat
const sendButton = document.querySelector(".prompt-chat-btn");
const chatContainer = document.querySelector(".prompt-center");

function addMessage(message, isClient) {
  const messageClass = isClient ? "message-client" : "message-assistant";
  const messageDate = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
  });

  const messageHTML = `
    <div class="${messageClass}">
      <p class="message-text desc ${isClient ? "white" : ""}">
        ${message}
      </p>
      <p class="message-date">${messageDate}</p>
    </div>
  `;

  chatContainer.insertAdjacentHTML("beforeend", messageHTML);
}

if (sendButton) {
  sendButton.addEventListener("click", function () {
    const inputField = document.querySelector(".send");
    const message = inputField.value.trim();
    if (message !== "") {
      addMessage(message, true);
      inputField.value = "";
    }
  });
}

let message = document.querySelector(".message");
let chat = document.querySelector(".chat");
if (message) {
  message.addEventListener("click", () => {
    chat.style.display = "flex";
    container.style.display = "flex";
  });
}

let followButtons = document.querySelectorAll(".btn-follow");
let leaderboardBtn = document.querySelector(".leaderboard-btn");
let promptContainerFollower = document.querySelector(
  ".prompt-container-folllow"
);
let exit = document.querySelectorAll(".prompt-icon-plus-1");

function togglePromptFollowDisplay1() {
  if (
    typeof promptContainerFollower !== "undefined" &&
    promptContainerFollower !== null
  ) {
    if (
      promptContainerFollower.style.display === "none" ||
      promptContainerFollower.style.display === ""
    ) {
      promptContainerFollower.style.display = "flex";
      leaderboardBtn.style.display = "flex";
    } else {
      promptContainerFollower.style.display = "none";
      leaderboardBtn.style.display = "none";
    }
  }
}

if (followButtons) {
  followButtons.forEach((button) => {
    button.addEventListener("click", function () {
      togglePromptFollowDisplay1();
    });
  });
}

exit.forEach((exit) => {
  exit.addEventListener("click", () => {
    togglePromptFollowDisplay1();
  });
});

//////////////////////////////////////////////////////////////////
function getCurrentMonth() {
  let currentDate = new Date();
  let month = currentDate.toLocaleString("en", { month: "short" });
  return month;
}

function getCurrentTime() {
  let currentDate = new Date();
  let hours = currentDate.getHours().toString().padStart(2, "0");
  let minutes = currentDate.getMinutes().toString().padStart(2, "0");
  let seconds = currentDate.getSeconds().toString().padStart(2, "0");
  return hours + ":" + minutes + ":" + seconds;
}

function updateDateTime() {
  let currentMonthElements = document.querySelectorAll("#currentMonth");
  let currentTimeElements = document.querySelectorAll("#currentTime");
  let ampmElement = document.querySelector("#ampm");

  if (currentMonthElements && currentTimeElements) {
    let currentDate = new Date();
    let month = currentDate.toLocaleString("en", { month: "short" });
    let hours = currentDate.getHours();
    let minutes = currentDate.getMinutes().toString().padStart(2, "0");
    let seconds = currentDate.getSeconds().toString().padStart(2, "0");
    let ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12;
    let timeString = hours + ":" + minutes + ":" + seconds;

    currentMonthElements.forEach(function (element) {
      element.textContent = month;
    });

    currentTimeElements.forEach(function (element) {
      element.textContent = timeString;
    });

    if (ampmElement) {
      ampmElement.textContent = ampm;
    } else {
      let newAmpmElement = document.createElement("p");
      newAmpmElement.id = "ampm";
      newAmpmElement.textContent = ampm;

      let monthTimeContainer = document.querySelector(".month-time");
      if (monthTimeContainer) {
        monthTimeContainer.appendChild(newAmpmElement);
      }

      let monthTimeAdaptiveContainer = document.querySelector(
        ".month-time-adaptive"
      );
      if (monthTimeAdaptiveContainer) {
        monthTimeAdaptiveContainer.appendChild(newAmpmElement.cloneNode(true));
      }
    }
  }
}

window.onload = function () {
  updateDateTime();
  setInterval(updateDateTime, 1000);
};

///////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", function () {
  let battleroom = document.querySelector(".battleroom");
  let mybattles = document.querySelector(".mybattles");
  let allbattles = document.querySelector(".all-battles");
  let battleroom1 = document.querySelector(".battleroom-rooms");
  let stockOpen = document.querySelector(".stockvsstock-open");
  let stock = document.querySelector(".stockvsstock");
  let block1 = document.querySelector(".block-1-mybattles");
  let block = document.querySelector(".block-freeroom");
  let windowWidth = window.innerWidth;

  function checkHeight() {
    let battleroomHeight = battleroom ? battleroom.offsetHeight : 0;
    let allbattlesHeight = allbattles ? allbattles.offsetHeight : 0;

    if (battleroomHeight) {
      if (windowWidth <= 2048) {
        if (battleroomHeight > 900) {
          block1.style.setProperty("height", "auto", "important");
        } else {
          // block1.style.height = "";
        }
      } else {
        if (battleroomHeight > 1250) {
          block1.style.setProperty("height", "auto", "important");
        } else {
          // block1.style.height = "";
        }
      }

      if (
        ((windowWidth > 1366 && windowWidth <= 1519) || windowWidth >= 1600) &&
        battleroomHeight < 480 &&
        block1
      ) {
        block1.style.setProperty("height", "auto", "important");
      } else if (
        ((windowWidth > 1366 && windowWidth <= 1519) || windowWidth >= 1600) &&
        battleroomHeight > 487 &&
        block1 &&
        window.windowHeight >= 1000
      ) {
        block1.style.setProperty("height", "100vh", "important");
      } else {
        // block1.style.height = "";
      }
    }

    if (allbattlesHeight) {
      if (
        ((windowWidth > 1366 && windowWidth <= 1519) || windowWidth >= 1600) &&
        allbattlesHeight < 500 &&
        window.innerHeight >= 820
      ) {
        mybattles.style.setProperty("height", "100vh", "important");
      } else {
        mybattles.style.height = "";
      }
    }
  }

  function checkHeight1() {
    let battleroomHeight1 = battleroom1 ? battleroom1.offsetHeight : 0;

    if (battleroomHeight1) {
      if (windowWidth <= 1919) {
        if (battleroomHeight1 > 750) {
          block.style.setProperty("height", "auto", "important");
        } else {
          block.style.height = "";
        }
      } else if (windowWidth === 1920) {
        if (battleroomHeight1 > 900) {
          block.style.setProperty("height", "auto", "important");
        } else {
          block.style.height = "";
        }
      } else {
        if (battleroomHeight1 > 1250) {
          block.style.setProperty("height", "auto", "important");
        } else {
          block.style.height = "";
        }
      }
    }
  }

  checkHeight();
  checkHeight1();

  window.addEventListener("resize", function () {
    windowWidth = window.innerWidth;
    checkHeight();
    checkHeight1();
  });
});

////////////////////////  Social media
document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.querySelector(".toggle-icons");
  const socialMedia = document.querySelector(".social-media-adaptive");
  const iconsContainer = document.querySelector(".icons-container");

  if (toggleButton) {
    toggleButton.addEventListener("click", function () {
      socialMedia.classList.toggle("icons-visible-mobile");
      if (window.innerWidth < 480) {
        iconsContainer.classList.toggle("visible");
      } else {
        iconsContainer.classList.toggle("visible");
      }
    });
  }
});

/////// //////
let blockStocks = document.querySelector(".block-stocks");
let battleroom = document.querySelector(".block-1-mybattles");
let pokerroom = document.querySelector(".block-pokerroom");
let blockStocksVR = document.querySelector(
  ".block-viproom .battleroom-background"
);
let blockStocksVipRoom = document.querySelector(".block-stocks.vip-room");
let blockStocksPokerRoom = document.querySelector(".block-stocks.poker-room");
let blockStocksVsStocks = document.querySelector(".block-stock-rooms");

function handleResize() {
  let windowHeight = window.innerHeight;

  if (blockStocksPokerRoom) {
    let blockStocksPokerRoomHeight = blockStocksPokerRoom.offsetHeight;
    if (windowHeight > 840 && blockStocksPokerRoomHeight < 610) {
      battleroom.style.height = "100vh";
    } else if (windowHeight > 840 && blockStocksPokerRoomHeight < 600) {
      battleroom.style.height = "100vh";
    } else {
      battleroom.style.setProperty("height", "auto", "important");
    }

    if (
      ((window.innerWidth > 1366 && window.innerWidth <= 1519) ||
        window.innerWidth >= 1600) &&
      blockStocksPokerRoomHeight < 480 &&
      battleroom
    ) {
      battleroom.style.setProperty("height", "auto", "important");
    } else if (
      ((window.innerWidth > 1366 && window.innerWidth <= 1519) ||
        window.innerWidth >= 1600) &&
      blockStocksPokerRoomHeight > 487 &&
      battleroom &&
      window.windowHeight >= 1000
    ) {
      battleroom.style.setProperty("height", "100vh", "important");
    } else {
      // block1.style.height = "";
    }
  }
  if (blockStocks) {
    let blockStocksHeight = blockStocks.offsetHeight;

    if (blockStocksPokerRoom.length === 2) {
      if (battleroom) {
        battleroom.style.height = "auto";
      }
    } else {
      if (windowHeight > 840 && blockStocksHeight < 600) {
        battleroom.style.height = "100vh";
      } else if (windowHeight > 1000 && blockStocksHeight < 700) {
        battleroom.style.height = "100vh";
      } else {
        if (battleroom) {
          battleroom.style.removeProperty("height");
        }
      }
    }
  }

  if (blockStocksVipRoom) {
    let blockStocksVipRoomHeight = blockStocksVipRoom.offsetHeight;
    if (windowHeight <= 820 && blockStocksVipRoomHeight <= 422) {
      blockStocksVR.style.height = "auto";
    } else if (windowHeight <= 820 && blockStocksVipRoomHeight >= 423) {
      blockStocksVR.style.height = "auto";
    } else if (windowHeight >= 1220 && blockStocksVipRoomHeight >= 423) {
      blockStocksVR.style.height = "100vh";
    } else if (window.innerWidth > 1919) {
      blockStocksVR.style.setProperty("height", "auto", "important");
    } else {
      blockStocksVR.style.height = "auto";
    }
  }

  let battleroomBackground = document.querySelector(
    ".stockvsstock-open.battleroom-background"
  );
  let battleroomBackground1 = document.querySelector(
    ".stockvsstock.battleroom-background"
  );

  if (blockStocksVsStocks) {
    let blockStockRoomsHeight = blockStocksVsStocks.offsetHeight;
    if (
      windowHeight <= 820 &&
      blockStockRoomsHeight <= 370 &&
      battleroomBackground
    ) {
      battleroomBackground.style.setProperty("height", "auto", "important");
    } else if (
      windowHeight <= 1120 &&
      blockStockRoomsHeight <= 750 &&
      battleroomBackground
    ) {
      battleroomBackground.style.setProperty("height", "auto", "important");
    } else if (
      windowHeight <= 1500 &&
      blockStockRoomsHeight < 700 &&
      battleroomBackground
    ) {
      battleroomBackground.style.setProperty("height", "auto", "important");
    } else {
      if (battleroomBackground) {
        battleroomBackground.style.setProperty("height", "100vh", "important");
      }
    }

    if (
      windowHeight <= 800 &&
      blockStockRoomsHeight <= 305 &&
      battleroomBackground1
    ) {
      battleroomBackground1.style.setProperty("height", "auto", "important");
    } else if (
      windowHeight <= 900 &&
      blockStockRoomsHeight <= 670 &&
      blockStockRoomsHeight >= 305 &&
      battleroomBackground1
    ) {
      battleroomBackground1.style.setProperty("height", "auto", "important");
    } else if (
      windowHeight <= 980 &&
      blockStockRoomsHeight >= 610 &&
      blockStockRoomsHeight >= 305 &&
      battleroomBackground1
    ) {
      battleroomBackground1.style.setProperty("height", "auto", "important");
    } else if (
      windowHeight <= 1500 &&
      blockStockRoomsHeight < 850 &&
      battleroomBackground1
    ) {
      battleroomBackground1.style.setProperty("height", "auto", "important");
    } else {
      if (battleroomBackground1) {
        battleroomBackground1.style.setProperty("height", "100vh", "important");
      }
    }
  }
}

window.addEventListener("resize", handleResize);
window.dispatchEvent(new Event("resize"));

/////////////////////////

const chooseGroup = document.querySelectorAll('input[name="chooseGroup"]');
const pickStock = document.querySelectorAll('input[name="pickStock"]');

function handleGroupChange() {
  const selectedGroup = document.querySelector(
    'input[name="chooseGroup"]:checked'
  );
  if (selectedGroup) {
    chooseGroup.forEach((radio) =>
      radio.parentElement.classList.remove("active")
    );
    selectedGroup.parentElement.classList.add("active");
  }
}

function handlePlanChange() {
  const selectedStock = document.querySelector(
    'input[name="pickStock"]:checked'
  );
  if (selectedStock) {
    pickStock.forEach((radio) =>
      radio.parentElement.classList.remove("active")
    );
    selectedStock.parentElement.classList.add("active");
  }
}

chooseGroup.forEach((radio) =>
  radio.addEventListener("change", handleGroupChange)
);
pickStock.forEach((radio) =>
  radio.addEventListener("change", handlePlanChange)
);

////////////////////////////////

document.addEventListener("DOMContentLoaded", function () {
  const blockGroups = document.querySelectorAll(
    ".block-group-a, .block-group-b"
  );

  blockGroups.forEach(function (blockGroup) {
    blockGroup.addEventListener("click", function () {
      const id = this.querySelector('input[type="radio"]').id;
      selectGroup(id);
    });
  });

  const choiceRounds = document.querySelectorAll(
    ".choice-round.choice-team-play"
  );

  choiceRounds.forEach(function (choiceRound) {
    choiceRound.addEventListener("click", function () {
      const radio = this.querySelector('input[type="radio"]');
      if (radio) {
        radio.checked = true;
      }
    });
  });
});

function selectGroup(id) {
  const group = document.getElementById(id);
  if (group) {
    group.checked = true;
  }
}

/////////////////////////

document.addEventListener("DOMContentLoaded", function () {
  const joinBattleInputs = document.querySelectorAll(".join-battle-input");
  const trendingMenu = document.querySelector(".vertical-menu-treding");
  const inputSelected = document.querySelectorAll(
    ".join-battle-input-selected"
  );

  if (joinBattleInputs.length > 2) {
    trendingMenu.style.height = "155px";
  } else if (joinBattleInputs.length === 1 && inputSelected.length < 2) {
    trendingMenu.style.maxHeight = "200px";
  } else if (joinBattleInputs.length <= 2 && inputSelected.length >= 1) {
    trendingMenu.style.height = "155px";
  }
});
/////////////////////

document.querySelectorAll(".main-balance-btn").forEach(function (button) {
  button.addEventListener("click", function (event) {
    event.preventDefault();
    document.querySelectorAll(".bg-main-balance").forEach(function (element) {
      element.style.display = "flex";
    });
  });
});

document.querySelectorAll(".score-points-btn").forEach(function (button) {
  button.addEventListener("click", function (event) {
    event.preventDefault();
    document.querySelectorAll(".bg-score-points").forEach(function (element) {
      element.style.display = "flex";
    });
  });
});
document.querySelectorAll(".aside-btn").forEach(function (button) {
  button.addEventListener("click", function (event) {
    event.preventDefault();
    document.querySelectorAll(".bg-status").forEach(function (element) {
      element.style.display = "flex";
    });
  });
});

document.querySelectorAll(".prompt-container").forEach(function (container) {
  container.addEventListener("click", function (event) {
    if (
      event.target === container ||
      event.target.classList.contains("close-icon")
    ) {
      container.style.display = "none";
    }
  });
});

///////////////////////////////////////////

document.addEventListener("DOMContentLoaded", function () {
  const radioButtons = document.querySelectorAll(".radio-button");

  radioButtons.forEach(function (radioButton) {
    radioButton.addEventListener("click", function () {
      const radio = this.querySelector('input[type="radio"]');
      if (radio) {
        radio.checked = true;
      }
    });
  });
});

document.querySelectorAll(".open").forEach(function (button) {
  button.addEventListener("click", function () {
    button.classList.add("clicked");
  });
});
document.querySelectorAll(".hold").forEach(function (button) {
  button.addEventListener("click", function () {
    button.classList.add("clicked");
  });
});

///////////////////

window.addEventListener("load", function () {
  document.querySelector(".loader-background").style.display = "none";
  document.querySelector(".block").style.display = "flex";
});

//////////////////////

let flipDirection = true;

function replaceImage(container) {
  const stockContainer = container.querySelector(".stock-container");

  if (stockContainer) {
    const img = stockContainer.querySelector("img");

    if (img && img.src.includes("green-horse-1.svg")) {
      const flipClass = flipDirection ? "flip-right" : "flip-left";
      stockContainer.classList.add(flipClass);

      setTimeout(() => {
        stockContainer.innerHTML = `
                    <img src="./assets/images/poker-room/spade.svg" alt="" />
                    <span class="overlay-text">pep</span>
                `;
        stockContainer.classList.remove(flipClass);

        flipDirection = !flipDirection;
      }, 300);
    }
  }
}

document.querySelectorAll(".open").forEach((button) => {
  button.addEventListener("click", function (event) {
    event.stopPropagation();
    const openHold = this.closest(".open-hold");
    replaceImage(openHold);
  });
});

document.querySelectorAll(".hidden-card-item-btn").forEach((card) => {
  card.addEventListener("click", function () {
    replaceImage(this.querySelector(".open-hold"));
  });
});
