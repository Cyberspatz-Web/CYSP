/**
 * Cyberspatz — Google Apps Script backend for the contact form and
 * waitlist/membership signups. No CRM yet, so this is the lightweight
 * interim: form submissions land in a Google Sheet, an internal
 * notification goes to info@cyberspatz.com, and — for waitlist/
 * membership signups — the registrant gets a welcome email back.
 *
 * SETUP
 * 1. Create a new Google Sheet. Add two tabs named exactly "Leads" and
 *    "Waitlist". In "Leads", add header row:
 *      Timestamp | Name | Email | Company | Company Size | Service Interest | Message
 *    In "Waitlist", add header row:
 *      Timestamp | Name | Email | Product
 * 2. In the Sheet, open Extensions > Apps Script. Delete the default
 *    code and paste this file's contents in.
 * 3. Update NOTIFY_EMAIL below if info@cyberspatz.com isn't correct.
 * 4. Click Deploy > New deployment > type "Web app".
 *      - Execute as: Me
 *      - Who has access: Anyone
 * 5. Copy the deployment URL. Put it in the site's environment as
 *    VITE_LEADS_ENDPOINT (see .env.example in the project root).
 * 6. Redeploy (Deploy > Manage deployments > Edit > New version) any
 *    time you change this script — Apps Script doesn't hot-reload.
 */

const NOTIFY_EMAIL = "info@cyberspatz.com";

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const ss = SpreadsheetApp.getActiveSpreadsheet();

    if (data.type === "waitlist") {
      const sheet = ss.getSheetByName("Waitlist");
      sheet.appendRow([new Date(), data.name || "", data.email || "", data.product || ""]);

      MailApp.sendEmail({
        to: NOTIFY_EMAIL,
        subject: `Waitlist signup: ${data.product || "unknown product"}`,
        body: `${data.name || "(no name given)"} <${data.email}> joined the waitlist for ${data.product}.`,
      });

      // Welcome email back to the registrant themselves.
      if (data.email) {
        const firstName = (data.name || "").split(" ")[0] || "there";
        MailApp.sendEmail({
          to: data.email,
          subject: `Welcome to Cyberspatz ${data.product || ""}`,
          body:
            `Hi ${firstName},\n\n` +
            `Thanks for registering for Cyberspatz ${data.product}. You're on the list — ` +
            `we'll email you directly here as soon as there's something to invite you to ` +
            `(events, early access, or updates, depending on what you signed up for).\n\n` +
            `If you didn't expect this email, you can ignore it.\n\n` +
            `— The Cyberspatz team`,
        });
      }
    } else {
      // Default: treat as a contact/lead submission.
      const sheet = ss.getSheetByName("Leads");
      sheet.appendRow([
        new Date(),
        data.name || "",
        data.email || "",
        data.company || "",
        data.companySize || "",
        data.serviceInterest || "",
        data.message || "",
      ]);
      MailApp.sendEmail({
        to: NOTIFY_EMAIL,
        subject: `New contact form submission: ${data.company || data.name || "unknown"}`,
        body:
          `Name: ${data.name}\n` +
          `Email: ${data.email}\n` +
          `Company: ${data.company}\n` +
          `Company size: ${data.companySize}\n` +
          `Interested in: ${data.serviceInterest}\n\n` +
          `Message:\n${data.message}`,
      });
    }

    return ContentService.createTextOutput(
      JSON.stringify({ ok: true })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(
      JSON.stringify({ ok: false, error: String(err) })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}
