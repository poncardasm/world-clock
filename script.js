function updateClocks() {
  const now = new Date();

  // Format options for 24-hour time display
  const options = {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  };

  // Update UTC time
  document.getElementById('utc-time').textContent = now.toLocaleTimeString(
    'en-GB',
    {
      ...options,
      timeZone: 'UTC',
    }
  );

  // Update Helsinki time
  document.getElementById('helsinki-time').textContent = now.toLocaleTimeString(
    'en-GB',
    {
      ...options,
      timeZone: 'Europe/Helsinki',
    }
  );

  // Update Manila time
  document.getElementById('manila-time').textContent = now.toLocaleTimeString(
    'en-GB',
    {
      ...options,
      timeZone: 'Asia/Manila',
    }
  );

  // Update San Francisco time
  document.getElementById('san-francisco-time').textContent =
    now.toLocaleTimeString('en-GB', {
      ...options,
      timeZone: 'America/Los_Angeles',
    });

  // Update Beijing time
  document.getElementById('beijing-time').textContent = now.toLocaleTimeString(
    'en-GB',
    {
      ...options,
      timeZone: 'Asia/Shanghai',
    }
  );
}

// Initial update
updateClocks();

// Update every second
setInterval(updateClocks, 1000);
