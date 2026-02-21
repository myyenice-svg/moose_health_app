// Moose Health App - Service Worker
// Handles scheduled reminder notifications

self.addEventListener('install', e => { self.skipWaiting(); });
self.addEventListener('activate', e => { e.waitUntil(clients.claim()); });

// Listen for messages from the main app
self.addEventListener('message', e => {
  if (e.data && e.data.type === 'SCHEDULE_REMINDERS') {
    scheduleReminders();
  }
  if (e.data && e.data.type === 'TEST_NOTIFICATION') {
    self.registration.showNotification('🥗 Moose Fitness', {
      body: 'Bildirimler aktif! Artık hatırlatmalar gelecek.',
      icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="80">🦌</text></svg>',
      badge: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="80">🦌</text></svg>',
      vibrate: [200, 100, 200]
    });
  }
});

function scheduleReminders() {
  const now = new Date();
  const tz = 'America/New_York';

  // Helper: get next occurrence of HH:MM in ET
  function msUntilNext(hour, minute) {
    const nowET = new Date(now.toLocaleString('en-US', { timeZone: tz }));
    const target = new Date(nowET);
    target.setHours(hour, minute, 0, 0);
    if (target <= nowET) target.setDate(target.getDate() + 1);
    return target - nowET;
  }

  const ms1pm = msUntilNext(13, 0);
  const ms7pm = msUntilNext(19, 0);

  // Clear existing timers
  if (self._timer1pm) clearTimeout(self._timer1pm);
  if (self._timer7pm) clearTimeout(self._timer7pm);

  self._timer1pm = setTimeout(() => {
    self.registration.showNotification('🥗 Öğlen Yemeği', {
      body: 'Öğlen ne yedin? Verilerini girmeyi unutma! 📝',
      icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="80">🦌</text></svg>',
      vibrate: [200, 100, 200],
      tag: 'oglen-hatirlatma',
      requireInteraction: false
    });
    // Re-schedule for next day
    setTimeout(() => scheduleReminders(), 5000);
  }, ms1pm);

  self._timer7pm = setTimeout(() => {
    self.registration.showNotification('🍽 Akşam Yemeği', {
      body: 'Akşam ne yedin? Günlük verilerini tamamla! 💪',
      icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="80">🦌</text></svg>',
      vibrate: [200, 100, 200],
      tag: 'aksam-hatirlatma',
      requireInteraction: false
    });
  }, ms7pm);

  console.log(`[SW] Reminders scheduled: lunch in ${Math.round(ms1pm/60000)}min, dinner in ${Math.round(ms7pm/60000)}min`);
}

// Notification click → open app
self.addEventListener('notificationclick', e => {
  e.notification.close();
  e.waitUntil(clients.openWindow('./'));
});
