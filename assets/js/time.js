/************************************************************
 *  UK TIME HELPERS
 ************************************************************/
function getUKTime() {
  const now = new Date();
  return new Date(now.toLocaleString("en-US", { timeZone: "Europe/London" }));
}

function getUKDate() {
  const formatter = new Intl.DateTimeFormat("en-GB", {
      timeZone: "Europe/London",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      year: "numeric",
      month: "numeric",
      day: "numeric"
  });

  const parts = formatter.formatToParts(new Date());
  const lookup = Object.fromEntries(parts.map(p => [p.type, p.value]));

  return new Date(
      `${lookup.year}-${lookup.month}-${lookup.day}T${lookup.hour}:${lookup.minute}:${lookup.second}`
  );
}

/************************************************************
*  TIME CONVERSION HELPERS
************************************************************/
function timeToMinutes(timeStr) {
  let [time, period] = timeStr.trim().split(" ");
  let [hours, minutes] = time.split(":").map(Number);

  if (period === "PM" && hours !== 12) hours += 12;
  if (period === "AM" && hours === 12) hours = 0;

  return hours * 60 + minutes;
}

function parseHours(hoursRange) {
  const [openStr, closeStr] = hoursRange.split("-").map(s => s.trim());

  return {
      open: timeToMinutes(openStr),
      close: timeToMinutes(closeStr)
  };
}

/************************************************************
*  STORE TIMINGS (SINGLE SOURCE OF TRUTH)
************************************************************/
const storeTimings = {
  rugeley: {
    0: { day: 'Open', hours: '12 PM - 3 AM' },
    1: { day: 'Open', hours: '12 PM - 3 AM' },
    2: { day: 'Open', hours: '12 PM - 3 AM' },
    3: { day: 'Open', hours: '12 PM - 3 AM' },
    4: { day: 'Open', hours: '12 PM - 3 AM' },
    5: { day: 'Open', hours: '12 PM - 3 AM' },
    6: { day: 'Open', hours: '12 PM - 3 AM' }
  },
  brownhills: {
    0: { day: 'Open', hours: '12 PM - 3 AM' },
    1: { day: 'Open', hours: '12 PM - 3 AM' },
    2: { day: 'Open', hours: '12 PM - 3 AM' },
    3: { day: 'Open', hours: '12 PM - 3 AM' },
    4: { day: 'Open', hours: '12 PM - 3 AM' },
    5: { day: 'Open', hours: '12 PM - 3 AM' },
    6: { day: 'Open', hours: '12 PM - 3 AM' }
  },
  cannock: {
    0: { day: 'Open', hours: '12 PM - 3 AM' },
    1: { day: 'Open', hours: '12 PM - 3 AM' },
    2: { day: 'Open', hours: '12 PM - 3 AM' },
    3: { day: 'Open', hours: '12 PM - 3 AM' },
    4: { day: 'Open', hours: '12 PM - 3 AM' },
    5: { day: 'Open', hours: '12 PM - 3 AM' },
    6: { day: 'Open', hours: '12 PM - 3 AM' }
  },
  halesowen: {
    0: { day: 'Open', hours: '12 PM - 3 AM' },
    1: { day: 'Open', hours: '12 PM - 3 AM' },
    2: { day: 'Open', hours: '12 PM - 3 AM' },
    3: { day: 'Open', hours: '12 PM - 3 AM' },
    4: { day: 'Open', hours: '12 PM - 3 AM' },
    5: { day: 'Open', hours: '12 PM - 3 AM' },
    6: { day: 'Open', hours: '12 PM - 3 AM' }
  },
  kittsgreen: {
    0: { day: 'Open', hours: '12 PM - 3 AM' },
    1: { day: 'Open', hours: '12 PM - 3 AM' },
    2: { day: 'Open', hours: '12 PM - 3 AM' },
    3: { day: 'Open', hours: '12 PM - 3 AM' },
    4: { day: 'Open', hours: '12 PM - 3 AM' },
    5: { day: 'Open', hours: '12 PM - 3 AM' },
    6: { day: 'Open', hours: '12 PM - 3 AM' }
  },
  uppergornal: {
    0: { day: 'Open', hours: '12 PM - 12 AM' },
    1: { day: 'Open', hours: '12 PM - 12 AM' },
    2: { day: 'Open', hours: '12 PM - 12 AM' },
    3: { day: 'Open', hours: '12 PM - 12 AM' },
    4: { day: 'Open', hours: '12 PM - 12 AM' },
    5: { day: 'Open', hours: '12 PM - 1 AM' },
    6: { day: 'Open', hours: '12 PM - 1 AM' }
  },
  wednesbury: {
    0: { day: 'Open', hours: '3 PM - 3:05 AM' },
    1: { day: 'Open', hours: '3 PM - 3 AM' },
    2: { day: 'Open', hours: '3 PM - 3 AM' },
    3: { day: 'Open', hours: '3 PM - 3 AM' },
    4: { day: 'Open', hours: '3 PM - 3 AM' },
    5: { day: 'Open', hours: '3 PM - 3:05 AM' },
    6: { day: 'Open', hours: '3 PM - 3:05 AM' }
  },
  willenhall: {
    0: { day: 'Open', hours: '3 PM - 3 AM' },
    1: { day: 'Open', hours: '3 PM - 3 AM' },
    2: { day: 'Open', hours: '3 PM - 3 AM' },
    3: { day: 'Open', hours: '3 PM - 3 AM' },
    4: { day: 'Open', hours: '3 PM - 3 AM' },
    5: { day: 'Open', hours: '3 PM - 3 AM' },
    6: { day: 'Open', hours: '3 PM - 3 AM' }
  },
  wolverhampton: {
    0: { day: 'Open', hours: '3 PM - 3 AM' },
    1: { day: 'Open', hours: '3 PM - 3 AM' },
    2: { day: 'Open', hours: '3 PM - 3 AM' },
    3: { day: 'Open', hours: '3 PM - 3 AM' },
    4: { day: 'Open', hours: '3 PM - 3 AM' },
    5: { day: 'Open', hours: '3 PM - 3 AM' },
    6: { day: 'Open', hours: '3 PM - 3 AM' }
  },
  greatbarr: {
    0: { day: 'Open', hours: '3 PM - 3 AM' },
    1: { day: 'Open', hours: '3 PM - 3 AM' },
    2: { day: 'Open', hours: '3 PM - 3 AM' },
    3: { day: 'Open', hours: '3 PM - 3 AM' },
    4: { day: 'Open', hours: '3 PM - 3 AM' },
    5: { day: 'Open', hours: '3 PM - 3 AM' },
    6: { day: 'Open', hours: '3 PM - 3 AM' }
  },
  tipton: {
    0: { day: 'Open', hours: '12 PM - 3 AM' },
    1: { day: 'Open', hours: '12 PM - 3 AM' },
    2: { day: 'Open', hours: '12 PM - 3 AM' },
    3: { day: 'Open', hours: '12 PM - 3 AM' },
    4: { day: 'Open', hours: '12 PM - 3 AM' },
    5: { day: 'Open', hours: '12 PM - 3 AM' },
    6: { day: 'Open', hours: '12 PM - 3 AM' }
  },
  stafford: {
    0: { day: 'Open', hours: '12 PM - 12 AM' },
    1: { day: 'Open', hours: '12 PM - 12 AM' },
    2: { day: 'Open', hours: '12 PM - 12 AM' },
    3: { day: 'Open', hours: '12 PM - 12 AM' },
    4: { day: 'Open', hours: '12 PM - 12 AM' },
    5: { day: 'Open', hours: '12 PM - 12 AM' },
    6: { day: 'Open', hours: '12 PM - 12 AM' }
  },
  netherton: {
    0: { day: 'Open', hours: '12 PM - 11 PM' },
    1: { day: 'Open', hours: '12 PM - 11 PM' },
    2: { day: 'Open', hours: '12 PM - 11 PM' },
    3: { day: 'Open', hours: '12 PM - 11 PM' },
    4: { day: 'Open', hours: '12 PM - 11 PM' },
    5: { day: 'Open', hours: '12 PM - 11 PM' },
    6: { day: 'Open', hours: '12 PM - 11 PM' }
  },
  longbridge: {
    0: { day: 'Open', hours: '12 PM - 3 AM' },
    1: { day: 'Open', hours: '12 PM - 3 AM' },
    2: { day: 'Open', hours: '12 PM - 3 AM' },
    3: { day: 'Open', hours: '12 PM - 3 AM' },
    4: { day: 'Open', hours: '12 PM - 3 AM' },
    5: { day: 'Open', hours: '12 PM - 3 AM' },
    6: { day: 'Open', hours: '12 PM - 3 AM' }
  },
  handsacre: {
    0: { day: 'Open', hours: '12 PM - 10 PM' },
    1: { day: 'Open', hours: '12 PM - 10 PM' },
    2: { day: 'Open', hours: '12 PM - 10 PM' },
    3: { day: 'Open', hours: '12 PM - 10 PM' },
    4: { day: 'Open', hours: '12 PM - 10 PM' },
    5: { day: 'Open', hours: '12 PM - 11 PM' },
    6: { day: 'Open', hours: '12 PM - 11 PM' }
  },
  bushbury: {
    0: { day: 'Open', hours: '12 PM - 3 AM' },
    1: { day: 'Open', hours: '12 PM - 3 AM' },
    2: { day: 'Open', hours: '12 PM - 3 AM' },
    3: { day: 'Open', hours: '12 PM - 3 AM' },
    4: { day: 'Open', hours: '12 PM - 3 AM' },
    5: { day: 'Open', hours: '12 PM - 3 AM' },
    6: { day: 'Open', hours: '12 PM - 3 AM' }
  },
  stoke: {
    0: { day: 'Open', hours: '12 PM - 3 AM' },
    1: { day: 'Open', hours: '12 PM - 3 AM' },
    2: { day: 'Open', hours: '12 PM - 3 AM' },
    3: { day: 'Open', hours: '12 PM - 3 AM' },
    4: { day: 'Open', hours: '12 PM - 3 AM' },
    5: { day: 'Open', hours: '12 PM - 3 AM' },
    6: { day: 'Open', hours: '12 PM - 3 AM' }
  },
  worcester: {
    0: { day: 'Open', hours: '12 PM - 3 AM' },
    1: { day: 'Open', hours: '12 PM - 3 AM' },
    2: { day: 'Open', hours: '12 PM - 3 AM' },
    3: { day: 'Open', hours: '12 PM - 3 AM' },
    4: { day: 'Open', hours: '12 PM - 3 AM' },
    5: { day: 'Open', hours: '12 PM - 3 AM' },
    6: { day: 'Open', hours: '12 PM - 3 AM' }
  },
  bloxwich: {
    0: { day: 'Open', hours: '12 PM - 3 AM' },
    1: { day: 'Open', hours: '12 PM - 3 AM' },
    2: { day: 'Open', hours: '12 PM - 3 AM' },
    3: { day: 'Open', hours: '12 PM - 3 AM' },
    4: { day: 'Open', hours: '12 PM - 3 AM' },
    5: { day: 'Open', hours: '12 PM - 3 AM' },
    6: { day: 'Open', hours: '12 PM - 3 AM' }
  },
};

/************************************************************
*  BUILD BRANCH TIMINGS DYNAMICALLY
************************************************************/
function buildBranchTimings(storeTimings, today) {
  const timings = {};

  Object.keys(storeTimings).forEach(store => {
      const todayTiming = storeTimings[store][today];
      if (!todayTiming) return;

      timings[`${store}-branch`] = parseHours(todayTiming.hours);
  });

  return timings;
}

/************************************************************
*  OPEN / CLOSED STATUS HANDLER
************************************************************/
document.addEventListener("DOMContentLoaded", function () {

  const ukNow = getUKDate();
  const today = ukNow.getDay();
  const branchTimings = buildBranchTimings(storeTimings, today);

  function updateBranchStatus() {
      const now = getUKTime();
      const currentMinutes = now.getHours() * 60 + now.getMinutes();

      Object.keys(branchTimings).forEach(branchId => {
          const indicator = document.getElementById(branchId);
          if (!indicator) return;

          const { open, close } = branchTimings[branchId];

          const isOpen = close < open
              ? currentMinutes >= open || currentMinutes < close
              : currentMinutes >= open && currentMinutes < close;

          indicator.classList.toggle("open", isOpen);
          indicator.classList.toggle("closed", !isOpen);
      });
  }

  updateBranchStatus();
  setInterval(updateBranchStatus, 0);
});

/************************************************************
*  DISPLAY TODAY'S HOURS
************************************************************/
function formatTiming(t) {
  if (!t) return '<span class="store-time">No hours available</span>';
  return `<span class="store-time">${t.day} <strong>${t.hours}</strong> everyday</span>`;
}

document.addEventListener("DOMContentLoaded", function () {
  const ukNow = getUKDate();
  const today = ukNow.getDay();

  document.querySelectorAll('.store').forEach(storeEl => {
      const storeId = storeEl.getAttribute('data-store-id');
      let hoursEl = storeEl.querySelector('.store-hours');

      if (!hoursEl) {
          hoursEl = document.createElement('div');
          hoursEl.className = 'store-hours';
          storeEl.appendChild(hoursEl);
      }

      const timings = storeTimings[storeId];
      const dayTiming = timings ? timings[today] : null;

      hoursEl.innerHTML = formatTiming(dayTiming);
  });
});
