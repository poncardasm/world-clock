// Time format state
let is24Hour = true;

// Format options for time display
function getTimeOptions() {
  return {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: !is24Hour,
  };
}

// Format options for date display
const dateOptions = {
  weekday: 'short',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

// Function to determine if it's day or night
function isDaytime(hour) {
  return hour >= 6 && hour < 18; // Day time is between 6 AM and 6 PM
}

// Function to update a single clock
function updateClock(timeZone, timeId, dateId, locationId) {
  const timeInZone = new Date(new Date().toLocaleString('en-US', { timeZone }));
  const hour = timeInZone.getHours();

  // Update time
  document.getElementById(timeId).textContent = timeInZone.toLocaleTimeString(
    'en-GB',
    getTimeOptions()
  );

  // Update date
  document.getElementById(dateId).textContent = timeInZone.toLocaleDateString(
    'en-GB',
    dateOptions
  );

  // Update day/night indicator
  const locationElement = document.getElementById(locationId);
  const dayNightIcon = isDaytime(hour) ? '☀️' : '🌙';
  locationElement.dataset.daynight = dayNightIcon;
}

function updateClocks() {
  // Update all clocks with their respective timezones
  updateClock('UTC', 'utc-time', 'utc-date', 'utc-location');
  updateClock(
    'Europe/Helsinki',
    'helsinki-time',
    'helsinki-date',
    'helsinki-location'
  );
  updateClock('Asia/Manila', 'manila-time', 'manila-date', 'manila-location');
  updateClock(
    'America/Los_Angeles',
    'san-francisco-time',
    'san-francisco-date',
    'sf-location'
  );
  updateClock(
    'Asia/Shanghai',
    'beijing-time',
    'beijing-date',
    'beijing-location'
  );
}

// Handle time format toggle
document.querySelectorAll('.time-format-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    // Update active state
    document
      .querySelectorAll('.time-format-btn')
      .forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');

    // Update time format
    is24Hour = btn.dataset.format === '24';

    // Update all clocks immediately
    updateClocks();
  });
});

// Initial update
updateClocks();

// Update every second
setInterval(updateClocks, 1000);
