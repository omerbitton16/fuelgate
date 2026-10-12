# FuelGate — Digital Gate Access for Fuel Terminals

A clickable prototype that replaces physical access cards at fuel-terminal gates with a phone app, and gives the security guard a clear, searchable view of every driver's status.

**[Live demo](#)** · single HTML file, no install, all data is fictional

---

## The problem

At a fuel terminal gate, every truck driver swipes a physical card. The guard's screen shows one of three colors:

| Color | Meaning |
|---|---|
| ⚪ White | All clear, entry allowed |
| 🟡 Yellow | Driver isn't registered in the system |
| 🔴 Red | Registered, but missing a required permit (security clearance, work-at-height, or hazmat transport) |

What goes wrong in practice:
- Drivers forget their card or never received one.
- Registration depends on a single person who is often unavailable, so drivers stay "yellow" for days.
- When a driver is red, the guard can't see *which* permit is missing or when it expired.

## The solution

| Role | What they get |
|---|---|
| **Driver** (phone app) | One big Enter / Exit button that shows a rotating QR code (it changes every 30 seconds, so a screenshot can't be passed to another driver). Permit list with expiry dates, a reminder 30 days before a permit expires, and photo upload of new permits. |
| **Guard** (desk station) | The familiar white / yellow / red table, plus search by name, ID or company, exactly what's missing and since when, a photo of each permit, a live scan log, and **manual entry for drivers without a phone**. |
| **Terminal manager** | Approval queue: a driver's upload counts only after the manager verifies it. Drivers never approve their own documents. |
| **System admin** | Approves new registrations, so it's no longer a one-person bottleneck. Security clearances are issued only here. |

Gate feedback stays the same as today: one continuous beep means OK, three short beeps means denied.

## Try it

Open `index.html` in any browser. The driver tab includes ready-made demo scenarios:

1. **yossi**: all clear → enters with a continuous beep.
2. **dani**: work-at-height permit expired → red → uploads a renewal → manager approves → white.
3. **ronen**: registration not approved yet → yellow → admin approves.
4. **mohamad**: all clear, but gets a reminder that a permit expires in 12 days.

## Design decisions

- **QR before NFC.** It works on any phone, needs no new card readers, and has no iPhone NFC restrictions. NFC can come later.
- **Manual lookup is mandatory.** A dead battery shouldn't block the gate.
- **No self-approval.** Every uploaded document stays *pending* until a human verifies it.
- **Branding in one place.** The `BRAND` object at the top of the script holds the name, tagline and terminal, so the prototype can be re-skinned for any operator.

## Tech

Plain HTML, CSS and JavaScript in a single file, with no framework or build step. RTL Hebrew UI, responsive down to phone width, and Web Audio for the gate beeps.

## Status

Prototype for internal discussion. It's not connected to any real system and holds no real data.

---

<div dir="rtl">

### בעברית

אב-טיפוס לחיץ שמחליף את כרטיס הכניסה הפיזי בשער של מסוף דלק באפליקציה לנהג, ונותן למאבטח מסך ברור: מי תקין, מה בדיוק חסר, ומאיזה תאריך.
יש ארבעה תפקידים (נהג, מאבטח, מנהל מסוף, מנהל מערכת), קוד QR שמתחלף, תזכורות לפני שאישור פוקע, ואישור מסמכים ע"י גורם מוסמך בלבד.
כל הנתונים פיקטיביים.

</div>
