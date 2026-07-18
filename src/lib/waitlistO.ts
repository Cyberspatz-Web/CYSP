export interface WaitlistPayload {
  name: string;
  email: string;
  product: string; // "Community" | "Academy" | "AI"
}

const ENDPOINT = import.meta.env.VITE_LEADS_ENDPOINT as string | undefined;

/**
 * Same backend and same no-cors/text-plain pattern as submitLead in
 * leads.ts — see that file's comment for why. The Apps Script backend
 * (docs/google-apps-script/Code.gs) routes this to the "Waitlist" sheet
 * tab based on the `type: "waitlist"` field.
 */
export async function submitWaitlist(payload: WaitlistPayload): Promise<{ ok: boolean }> {
  if (!ENDPOINT) {
    if (import.meta.env.DEV) {
      console.warn(
        "[waitlist] VITE_LEADS_ENDPOINT is not set — signup logged locally only.",
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
      body: JSON.stringify({ ...payload, type: "waitlist" }),
    });
    return { ok: true };
  } catch (err) {
    if (import.meta.env.DEV) console.error("[waitlist] submission failed", err);
    return { ok: false };
  }
}
