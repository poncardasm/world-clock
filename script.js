function updateClocks() {
  const now = new Date();

  // Format options for 24-hour time display
  const timeOptions = {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  };

  // Format options for date display
  const dateOptions = {
    weekday: 'short',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  // Update UTC time and date
  document.getElementById('utc-time').textContent = now.toLocaleTimeString(
    'en-GB',
    {
      ...timeOptions,
      timeZone: 'UTC',
    }
  );
  document.getElementById('utc-date').textContent = now.toLocaleDateString(
    'en-GB',
    {
      ...dateOptions,
      timeZone: 'UTC',
    }
  );

  // Update Helsinki time and date
  document.getElementById('helsinki-time').textContent = now.toLocaleTimeString(
    'en-GB',
    {
      ...timeOptions,
      timeZone: 'Europe/Helsinki',
    }
  );
  document.getElementById('helsinki-date').textContent = now.toLocaleDateString(
    'en-GB',
    {
      ...dateOptions,
      timeZone: 'Europe/Helsinki',
    }
  );

  // Update Manila time and date
  document.getElementById('manila-time').textContent = now.toLocaleTimeString(
    'en-GB',
    {
      ...timeOptions,
      timeZone: 'Asia/Manila',
    }
  );
  document.getElementById('manila-date').textContent = now.toLocaleDateString(
    'en-GB',
    {
      ...dateOptions,
      timeZone: 'Asia/Manila',
    }
  );

  // Update San Francisco time and date
  document.getElementById('san-francisco-time').textContent =
    now.toLocaleTimeString('en-GB', {
      ...timeOptions,
      timeZone: 'America/Los_Angeles',
    });
  document.getElementById('san-francisco-date').textContent =
    now.toLocaleDateString('en-GB', {
      ...dateOptions,
      timeZone: 'America/Los_Angeles',
    });

  // Update Beijing time and date
  document.getElementById('beijing-time').textContent = now.toLocaleTimeString(
    'en-GB',
    {
      ...timeOptions,
      timeZone: 'Asia/Shanghai',
    }
  );
  document.getElementById('beijing-date').textContent = now.toLocaleDateString(
    'en-GB',
    {
      ...dateOptions,
      timeZone: 'Asia/Shanghai',
    }
  );
}

// Initial update
updateClocks();

// Update every second
setInterval(updateClocks, 1000);
