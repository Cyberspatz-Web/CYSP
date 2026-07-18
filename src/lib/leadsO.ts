export interface LeadPayload {
  name: string;
  email: string;
  company: string;
  companySize: string;
  serviceInterest: string;
  message: string;
}

const ENDPOINT = import.meta.env.VITE_LEADS_ENDPOINT as string | undefined;

/**
 * Sends a contact-form lead to the Google Apps Script backend (see
 * docs/google-apps-script/Code.gs), which appends it to a Google Sheet
 * and emails a notification to info@cyberspatz.com.
 *
 * Apps Script Web Apps don't support CORS preflight, so this uses
 * mode: "no-cors" with a text/plain body — the standard workaround for
 * POSTing to Apps Script from a browser. The response is opaque (can't
 * read status/body), so success is optimistic: if the request didn't
 * throw, we assume it landed. Server-side failures (e.g. a renamed
 * sheet tab) won't surface here — check the Sheet/Apps Script logs
 * directly if submissions aren't arriving.
 */
export async function submitLead(payload: LeadPayload): Promise<{ ok: boolean }> {
  if (!ENDPOINT) {
    if (import.meta.env.DEV) {
      console.warn(
        "[leads] VITE_LEADS_ENDPOINT is not set — submission logged locally only.",
        payload
      );
    }
    await new Promise((resolve) => setTimeout(resolve, 500));
    return { ok: true };
  }

  try {
    await fetch(ENDPOINT, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "text/plain" },
      body: JSON.stringify(payload),
    });
    return { ok: true };
  } catch (err) {
    if (import.meta.env.DEV) console.error("[leads] submission failed", err);
    return { ok: false };
  }
}
