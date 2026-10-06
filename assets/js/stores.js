(function () {
const STORES = [
  {
    "id": "rugeley",
    "name": "Rugeley",
    "address": "29 Horse Fair, Rugeley, WS15 2EJ",
    "phone": "0188 974 3402",
    "mapImage": "./assets/images/stores/rugeley-map.jpg",
    "mapUrl": "https://maps.app.goo.gl/oEsMth8he5kdeKz17",
    "orderUrl": "https://aladdinsorder.com/rugeley/aladdins-pizza-rugeley/ordernow",
    "hours": {
      "mon": "12 PM - 3 AM",
      "tue": "12 PM - 3 AM",
      "wed": "12 PM - 3 AM",
      "thu": "12 PM - 3 AM",
      "fri": "12 PM - 3 AM",
      "sat": "12 PM - 3 AM",
      "sun": "12 PM - 3 AM"
    }
  },
  {
    "id": "brownhills",
    "name": "Brownhills",
    "address": "13 High St, Brownhills, Walsall, WS8 6ED",
    "phone": "0154 375 3214",
    "mapImage": "./assets/images/stores/brownhills-map.jpg",
    "mapUrl": "https://maps.app.goo.gl/fyyzr4urCWrDkeXC7",
    "orderUrl": "https://aladdinsorder.com/brownhills/aladdins-brownhills/ordernow",
    "hours": {
      "mon": "12 PM - 3 AM",
      "tue": "12 PM - 3 AM",
      "wed": "12 PM - 3 AM",
      "thu": "12 PM - 3 AM",
      "fri": "12 PM - 3 AM",
      "sat": "12 PM - 3 AM",
      "sun": "12 PM - 3 AM"
    }
  },
  {
    "id": "cannock",
    "name": "Cannock",
    "address": "6 Walsall Rd, Cannock, WS11 0HE",
    "phone": "0154 338 4085",
    "mapImage": "./assets/images/stores/cannock-map.jpg",
    "mapUrl": "https://maps.app.goo.gl/9H8TikCK9oXvTC3C8",
    "orderUrl": "https://aladdinsorder.com/cannock/aladdins-pizza-cannock/ordernow",
    "hours": {
      "mon": "12 PM - 3 AM",
      "tue": "12 PM - 3 AM",
      "wed": "12 PM - 3 AM",
      "thu": "12 PM - 3 AM",
      "fri": "12 PM - 3 AM",
      "sat": "12 PM - 3 AM",
      "sun": "12 PM - 3 AM"
    }
  },
  {
    "id": "halesowen",
    "name": "Halesowen",
    "address": "89 Dudley Rd, Halesowen, B63 3NS",
    "phone": "0121 368 6565",
    "mapImage": "./assets/images/stores/halesowen-map.jpg",
    "mapUrl": "https://maps.app.goo.gl/yNnjgJ1zqqUu8gGz5",
    "orderUrl": "https://aladdinsorder.com/halesowen/aladdins-halesowen/ordernow",
    "hours": {
      "mon": "12 PM - 3 AM",
      "tue": "12 PM - 3 AM",
      "wed": "12 PM - 3 AM",
      "thu": "12 PM - 3 AM",
      "fri": "12 PM - 3 AM",
      "sat": "12 PM - 3 AM",
      "sun": "12 PM - 3 AM"
    }
  },
  {
    "id": "kittsgreen",
    "name": "Kitt's Green",
    "address": "109 Lea Village, Birmingham, B33 9SQ",
    "phone": "0121 368 8915",
    "mapImage": "./assets/images/stores/kitts-green-map.jpg",
    "mapUrl": "https://maps.app.goo.gl/7b7z2sL2fSbCs7tq8",
    "orderUrl": "https://aladdinsorder.com/birmingham/aladdins-kitts-green/ordernow",
    "hours": {
      "mon": "12 PM - 3 AM",
      "tue": "12 PM - 3 AM",
      "wed": "12 PM - 3 AM",
      "thu": "12 PM - 3 AM",
      "fri": "12 PM - 3 AM",
      "sat": "12 PM - 3 AM",
      "sun": "12 PM - 3 AM"
    }
  },
  {
    "id": "uppergornal",
    "name": "Upper Gornal",
    "address": "2 The Arcade, Upper Gornal, DY3 2DA",
    "phone": "0138 491 2098",
    "mapImage": "./assets/images/stores/upper-gormal-map.jpg",
    "mapUrl": "https://maps.app.goo.gl/eQE48siAQE9zNhcY6",
    "orderUrl": "https://aladdinsorder.com/upper-gornal/aladdins-upper-gornal/ordernow",
    "hours": {
      "mon": "12 PM - 12 AM",
      "tue": "12 PM - 12 AM",
      "wed": "12 PM - 12 AM",
      "thu": "12 PM - 12 AM",
      "fri": "12 PM - 1 AM",
      "sat": "12 PM - 1 AM",
      "sun": "12 PM - 12 AM"
    }
  },
  {
    "id": "wednesbury",
    "name": "Wednesbury",
    "address": "40 Lower High St, Wednesbury, WS10 7AQ",
    "phone": "0121 505 2665",
    "mapImage": "./assets/images/stores/wednesbury-map.jpg",
    "mapUrl": "https://maps.app.goo.gl/cDHAaHHP6cxA9h9B9",
    "orderUrl": "https://aladdinsorder.com/wednesbury/aladdins/ordernow",
    "hours": {
      "mon": "3 PM - 3 AM",
      "tue": "3 PM - 3 AM",
      "wed": "3 PM - 3 AM",
      "thu": "3 PM - 3 AM",
      "fri": "3 PM - 3:05 AM",
      "sat": "3 PM - 3:05 AM",
      "sun": "3 PM - 3:05 AM"
    }
  },
  {
    "id": "willenhall",
    "name": "Willenhall",
    "address": "63 High Rd, Lane Head, Willenhall, WV12 4JN",
    "phone": "0190 293 6400",
    "mapImage": "./assets/images/stores/willenhall-map.jpg",
    "mapUrl": "https://maps.app.goo.gl/WvGHKJ1cCQZfqea99",
    "orderUrl": "https://aladdinsorder.com/willenhall/aladdins-pizza-willenhall/ordernow",
    "hours": {
      "mon": "3 PM - 3 AM",
      "tue": "3 PM - 3 AM",
      "wed": "3 PM - 3 AM",
      "thu": "3 PM - 3 AM",
      "fri": "3 PM - 3 AM",
      "sat": "3 PM - 3 AM",
      "sun": "3 PM - 3 AM"
    }
  },
  {
    "id": "wolverhampton",
    "name": "Wolverhampton",
    "address": "1 Willenhall Rd, Wolverhampton, WV1 2HG",
    "phone": "0190 295 5699",
    "mapImage": "./assets/images/stores/wolverhampton-map.jpg",
    "mapUrl": "https://maps.app.goo.gl/37CBwbXufCzJysKx9",
    "orderUrl": "https://aladdinsorder.com/wolverhampton/aladdins-pizza-wolverhampton/ordernow",
    "hours": {
      "mon": "3 PM - 3 AM",
      "tue": "3 PM - 3 AM",
      "wed": "3 PM - 3 AM",
      "thu": "3 PM - 3 AM",
      "fri": "3 PM - 3 AM",
      "sat": "3 PM - 3 AM",
      "sun": "3 PM - 3 AM"
    }
  },
  {
    "id": "greatbarr",
    "name": "Great Barr",
    "address": "514 Queslett Rd, Great Barr, B43 7EJ",
    "phone": "0121 818 0076",
    "mapImage": "./assets/images/stores/great-barr-map.jpg",
    "mapUrl": "https://maps.app.goo.gl/jYwz992ARxRebzGaA",
    "orderUrl": "https://aladdinsorder.com/great-barr/aladdins-pizza-great-barr/ordernow",
    "hours": {
      "mon": "3 PM - 3 AM",
      "tue": "3 PM - 3 AM",
      "wed": "3 PM - 3 AM",
      "thu": "3 PM - 3 AM",
      "fri": "3 PM - 3 AM",
      "sat": "3 PM - 3 AM",
      "sun": "3 PM - 3 AM"
    }
  },
  {
    "id": "tipton",
    "name": "Tipton",
    "address": "11 Bloomfield Rd, Tipton, DY4 9EU",
    "phone": "0121 269 9064",
    "mapImage": "./assets/images/stores/Tipton.jpg",
    "mapUrl": "https://maps.app.goo.gl/R5pZdvxmNsVuHDLg7",
    "orderUrl": "https://aladdinsorder.com/tipton/aladdins-tipton/ordernow",
    "hours": {
      "mon": "12 PM - 3 AM",
      "tue": "12 PM - 3 AM",
      "wed": "12 PM - 3 AM",
      "thu": "12 PM - 3 AM",
      "fri": "12 PM - 3 AM",
      "sat": "12 PM - 3 AM",
      "sun": "12 PM - 3 AM"
    }
  },
  {
    "id": "stafford",
    "name": "Stafford",
    "address": "61 Weston Road, Stafford, ST16 3RL",
    "phone": "0178 533 5776",
    "mapImage": "./assets/images/stores/stafford-map.jpg",
    "mapUrl": "https://maps.app.goo.gl/U2kM6yiBoRLh2tA98",
    "orderUrl": "https://aladdinsorder.com/stafford/aladdins-pizza-stafford/ordernow",
    "hours": {
      "mon": "12 PM - 12 AM",
      "tue": "12 PM - 12 AM",
      "wed": "12 PM - 12 AM",
      "thu": "12 PM - 12 AM",
      "fri": "12 PM - 12 AM",
      "sat": "12 PM - 12 AM",
      "sun": "12 PM - 12 AM"
    }
  },
  {
    "id": "netherton",
    "name": "Netherton",
    "address": "12 Bush Road, Netherton, Dudley, DY2 0BH",
    "phone": "0138 449 2255",
    "mapImage": "./assets/images/stores/netherton-map.jpg",
    "mapUrl": "https://maps.app.goo.gl/eQFfyJCrbYKhmVJG7",
    "orderUrl": "https://aladdinsorder.com/netherton/aladdins-pizza-netherton/ordernow",
    "hours": {
      "mon": "12 PM - 11 PM",
      "tue": "12 PM - 11 PM",
      "wed": "12 PM - 11 PM",
      "thu": "12 PM - 11 PM",
      "fri": "12 PM - 11 PM",
      "sat": "12 PM - 11 PM",
      "sun": "12 PM - 11 PM"
    }
  },
  {
    "id": "longbridge",
    "name": "Longbridge",
    "address": "99 Coombes Lane, Birmingham, B31 4QU",
    "phone": "0121 368 8887",
    "mapImage": "./assets/images/stores/longbridge-map.jpg",
    "mapUrl": "https://maps.app.goo.gl/Bpu4K3J5mPfCDsTg8",
    "orderUrl": "https://aladdinsorder.com/birmingham/aladdins-longbridge/ordernow",
    "hours": {
      "mon": "12 PM - 3 AM",
      "tue": "12 PM - 3 AM",
      "wed": "12 PM - 3 AM",
      "thu": "12 PM - 3 AM",
      "fri": "12 PM - 3 AM",
      "sat": "12 PM - 3 AM",
      "sun": "12 PM - 3 AM"
    }
  },
  {
    "id": "handsacre",
    "name": "Handsacre",
    "address": "Unit 2 Tuppenhurst Lane, Handsacre, WS15 4EH",
    "phone": "0154 364 8481",
    "mapImage": "./assets/images/stores/handsacre-map.jpg",
    "mapUrl": "https://maps.app.goo.gl/VVoEH6VaKbumr7Zz7",
    "orderUrl": "https://aladdinsorder.com/handsacre/aladdins-pizza-handsacre/ordernow",
    "hours": {
      "mon": "12 PM - 10 PM",
      "tue": "12 PM - 10 PM",
      "wed": "12 PM - 10 PM",
      "thu": "12 PM - 10 PM",
      "fri": "12 PM - 11 PM",
      "sat": "12 PM - 11 PM",
      "sun": "12 PM - 10 PM"
    }
  },
  {
    "id": "bushbury",
    "name": "Bushbury",
    "address": "396 Bushbury Lane, Wolverhampton, WV10 9UW",
    "phone": "0190 295 2510",
    "mapImage": "./assets/images/stores/bushbury-map.jpg",
    "mapUrl": "https://maps.app.goo.gl/C5fF9uhij6FvqTGm8",
    "orderUrl": "https://aladdinsorder.com/wolverhampton/aladdins-bushbury/ordernow",
    "hours": {
      "mon": "12 PM - 3 AM",
      "tue": "12 PM - 3 AM",
      "wed": "12 PM - 3 AM",
      "thu": "12 PM - 3 AM",
      "fri": "12 PM - 3 AM",
      "sat": "12 PM - 3 AM",
      "sun": "12 PM - 3 AM"
    }
  },
  {
    "id": "stoke",
    "name": "Stoke-On-Trent",
    "address": "438 Leek Road, Stoke-On-Trent, ST1 3HU",
    "phone": "0178 235 7446",
    "mapImage": "./assets/images/stores/stoke-map.jpg",
    "mapUrl": "https://maps.app.goo.gl/A3VMZKUdjzF4JKNd7",
    "orderUrl": "https://aladdinsorder.com/stoke-on-trent/aladdins-stoke/ordernow",
    "hours": {
      "mon": "12 PM - 3 AM",
      "tue": "12 PM - 3 AM",
      "wed": "12 PM - 3 AM",
      "thu": "12 PM - 3 AM",
      "fri": "12 PM - 3 AM",
      "sat": "12 PM - 3 AM",
      "sun": "12 PM - 3 AM"
    }
  },
  {
    "id": "worcester",
    "name": "Worcester",
    "address": "43 The Tything, Worcester, WR1 1JT",
    "phone": "0190 591 8395",
    "mapImage": "./assets/images/stores/worcester-map.jpg",
    "mapUrl": "https://maps.app.goo.gl/T1mYP5b8ngNXFSzQ7",
    "orderUrl": "https://aladdinsorder.com/worcester/aladdins-worcester/ordernow",
    "hours": {
      "mon": "12 PM - 3 AM",
      "tue": "12 PM - 3 AM",
      "wed": "12 PM - 3 AM",
      "thu": "12 PM - 3 AM",
      "fri": "12 PM - 3 AM",
      "sat": "12 PM - 3 AM",
      "sun": "12 PM - 3 AM"
    }
  },
  {
    "id": "bloxwich",
    "name": "Bloxwich",
    "address": "3 Wolverhampton Road, Bloxwich, WS3 2EY",
    "phone": "0192 291 4003",
    "mapImage": "./assets/images/stores/bloxwich-map.jpg",
    "mapUrl": "https://maps.app.goo.gl/24Dm7WKCjwLNr6Z67",
    "orderUrl": "https://aladdinsorder.com/bloxwich/aladdins-bloxwich/ordernow",
    "hours": {
      "mon": "12 PM - 3 AM",
      "tue": "12 PM - 3 AM",
      "wed": "12 PM - 3 AM",
      "thu": "12 PM - 3 AM",
      "fri": "12 PM - 3 AM",
      "sat": "12 PM - 3 AM",
      "sun": "12 PM - 3 AM"
    }
  }
];

function getUKNow() {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "Europe/London",
    weekday: "short",
    hour: "numeric",
    minute: "numeric",
    hourCycle: "h23"
  }).formatToParts(new Date());

  const get = type => parts.find(p => p.type === type).value;
  const days = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };

  return {
    day: days[get("weekday")],
    minutes: (parseInt(get("hour"), 10) % 24) * 60 + parseInt(get("minute"), 10)
  };
}

function timeToMinutes(str) {
  const m = str.trim().match(/^(\d{1,2})(?::(\d{2}))?\s*(AM|PM)$/i);
  if (!m) return NaN;
  let hours = parseInt(m[1], 10);
  const minutes = m[2] ? parseInt(m[2], 10) : 0;
  const period = m[3].toUpperCase();
  if (period === "PM" && hours !== 12) hours += 12;
  if (period === "AM" && hours === 12) hours = 0;
  return hours * 60 + minutes;
}

const DAY_KEYS = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"]; // matches getDay()

function getHoursForDay(store, day) {
  return store.hours[DAY_KEYS[day]] || null;
}

function parseHours(range) {
  const [o, c] = range.split("-");
  return { open: timeToMinutes(o), close: timeToMinutes(c) };
}

function isStoreOpen(store, day, minutes) {
  const todayRange = getHoursForDay(store, day);
  if (todayRange) {
    const { open, close } = parseHours(todayRange);
    if (!isNaN(open) && !isNaN(close)) {
      const overnight = close <= open;
      if (!overnight && minutes >= open && minutes < close) return true;
      if (overnight && minutes >= open) return true;
    }
  }

  // After midnight: still inside yesterday's late-night window?
  const yRange = getHoursForDay(store, (day + 6) % 7);
  if (yRange) {
    const { open, close } = parseHours(yRange);
    if (!isNaN(open) && !isNaN(close) && close <= open && minutes < close) return true;
  }
  return false;
}

/************************************************************
 * RENDER
 ************************************************************/
function escapeHTML(str) {
  return String(str)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}

function storeCardHTML(store) {
  const telHref = "tel:" + store.phone.replace(/\s+/g, "");
  return `
    <div class="col-md-6">
      <div class="alla-loc">
        <div class="alla-map">
          <a href="${escapeHTML(store.mapUrl)}" target="_blank" rel="noopener">
            <img src="${escapeHTML(store.mapImage)}" alt="${escapeHTML(store.name)} map" class="img-fluid">
          </a>
        </div>
        <div class="alla-cnt">
          <span class="indicator" id="${escapeHTML(store.id)}-branch"></span>
          <h4>${escapeHTML(store.name)}</h4>
          <p>${escapeHTML(store.address)}</p>
          <a href="${telHref}">${escapeHTML(store.phone)}</a>
          <div class="store" data-store-id="${escapeHTML(store.id)}">
            <div class="store-hours"></div>
          </div>
          <a href="${escapeHTML(store.orderUrl)}" class="order-btn" target="_blank" rel="noopener">Order Now</a>
        </div>
      </div>
    </div>`;
}

function updateStores() {
  const { day, minutes } = getUKNow();

  STORES.forEach(store => {
    const indicator = document.getElementById(`${store.id}-branch`);
    if (indicator) {
      const open = isStoreOpen(store, day, minutes);
      indicator.classList.toggle("open", open);
      indicator.classList.toggle("closed", !open);
    }

    const hoursEl = document.querySelector(`.store[data-store-id="${store.id}"] .store-hours`);
    if (hoursEl) {
      const range = getHoursForDay(store, day);
      hoursEl.innerHTML = range
        ? `<span class="store-time">Open <strong>${escapeHTML(range)}</strong> today</span>`
        : `<span class="store-time">No hours available</span>`;
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("stores-list");
  if (!container) return;

  container.innerHTML = STORES.map(storeCardHTML).join("");
  updateStores();
  setInterval(updateStores, 30000); // refresh twice a minute
});
})();
