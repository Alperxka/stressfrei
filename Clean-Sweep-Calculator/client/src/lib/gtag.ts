declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: Record<string, unknown>[];
    uetq: unknown[];
  }
}

const ADS_ID = "AW-16511678497";
const FORM_LABEL = "c_ZtCOP0hZAcEKHwsME9";
const CALL_CLICK_LABEL = "nByqCM--hZAcEKHwsME9";
const WHATSAPP_LABEL = "POhnCISmjZAcEKHwsME9";
const EMAIL_LABEL = "TBckCMzU-48cEKHwsME9";

function push(event: Record<string, unknown>) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(event);
}

function uetPush(eventName: string) {
  window.uetq = window.uetq || [];
  window.uetq.push("event", eventName, {});
}

export function initGoogleAds() {
}

export function initPhoneTracking() {
  document.addEventListener("click", (e) => {
    const anchor = (e.target as HTMLElement).closest("a");
    if (!anchor) return;

    const href = anchor.href || "";

    if (href.startsWith("tel:")) {
      push({
        event: "anruf_klick",
        event_category: "kontakt",
        event_label: href,
      });
      if (typeof window.gtag === "function" && CALL_CLICK_LABEL) {
        window.gtag("event", "conversion", {
          send_to: `${ADS_ID}/${CALL_CLICK_LABEL}`,
        });
      }
      uetPush("anruf_klick");
      return;
    }

    if (href.includes("wa.me") || href.includes("whatsapp")) {
      push({
        event: "whatsapp_klick",
        event_category: "kontakt",
        event_label: href,
      });
      if (typeof window.gtag === "function") {
        window.gtag("event", "conversion", {
          send_to: `${ADS_ID}/${WHATSAPP_LABEL}`,
        });
      }
      uetPush("whatsapp_klick");
      return;
    }

    if (href.startsWith("mailto:")) {
      push({
        event: "email_klick",
        event_category: "kontakt",
        event_label: href,
      });
      if (typeof window.gtag === "function" && EMAIL_LABEL) {
        window.gtag("event", "conversion", {
          send_to: `${ADS_ID}/${EMAIL_LABEL}`,
        });
      }
      uetPush("email_klick");
    }
  });
}

export function trackConversion(
  formName: string,
  userData?: { phone?: string; email?: string }
) {
  if (typeof window.gtag === "function") {
    // Enhanced Conversions: user_data must be set BEFORE the conversion event.
    // Google automatically hashes email + phone_number (SHA-256) — never sent in plain text.
    if (userData?.phone || userData?.email) {
      const userDataPayload: Record<string, string> = {};
      if (userData.email) {
        userDataPayload["email"] = userData.email.trim().toLowerCase();
      }
      if (userData.phone) {
        // Normalize to E.164 format (+49...) — required by Google
        let phone = userData.phone.replace(/[\s\-\(\)\/]/g, "");
        if (phone.startsWith("00")) phone = "+" + phone.slice(2);
        else if (phone.startsWith("0")) phone = "+49" + phone.slice(1);
        else if (!phone.startsWith("+")) phone = "+49" + phone;
        userDataPayload["phone_number"] = phone;
      }
      window.gtag("set", "user_data", userDataPayload);
    }

    window.gtag("event", "conversion", {
      send_to: `${ADS_ID}/${FORM_LABEL}`,
    });
  }

  push({
    event: "formular_abgeschickt",
    formular_name: formName,
  });

  push({
    event: "generate_lead",
    event_category: "formular",
    event_label: formName,
  });

  // Microsoft UET: send profile data for customer matching if available
  if (userData?.phone || userData?.email) {
    window.uetq = window.uetq || [];
    const pid: Record<string, string> = {};
    if (userData.email) pid["em"] = userData.email;
    if (userData.phone) pid["ph"] = userData.phone;
    window.uetq.push("set", { pid });
  }

  uetPush("formular_abgeschickt");
}
