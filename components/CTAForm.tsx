"use client";

import { useEffect, useRef, useState } from "react";

const flodeskFormId = "6a9a6e40f26015bf13b79a45";
const successDelayMs = 1400;

export function CTAForm() {
  const mountRef = useRef<HTMLDivElement>(null);
  const redirectStarted = useRef(false);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    let observer: MutationObserver | undefined;
    let isActive = true;

    const beginDelayedRedirect = () => {
      if (redirectStarted.current) return;
      redirectStarted.current = true;
      window.setTimeout(() => window.location.assign("/thanks"), successDelayMs);
    };

    const observeSuccess = () => {
      const root = mount.querySelector<HTMLElement>(`[data-ff-el="root"].ff-${flodeskFormId}`);
      if (!root) return;
      observer = new MutationObserver(() => {
        if (root.dataset.ffStage === "success") beginDelayedRedirect();
      });
      observer.observe(root, { attributes: true, attributeFilter: ["data-ff-stage"] });
    };

    const runEmbedScripts = (scripts: HTMLScriptElement[]) => {
      scripts.forEach((originalScript) => {
        const script = document.createElement("script");
        [...originalScript.attributes].forEach((attribute) => script.setAttribute(attribute.name, attribute.value));
        script.textContent = originalScript.textContent;
        mount.appendChild(script);
      });
    };

    const loadEmbed = async () => {
      try {
        const response = await fetch("/flodesk-embed.html");
        if (!response.ok) throw new Error("Unable to load the Flodesk form.");
        const html = await response.text();
        if (!isActive) return;

        const documentFragment = new DOMParser().parseFromString(html, "text/html");
        documentFragment.head.querySelectorAll("link, style").forEach((node) => document.head.appendChild(node.cloneNode(true)));
        const scripts = [...documentFragment.body.querySelectorAll("script")];
        scripts.forEach((script) => script.remove());
        mount.replaceChildren(...[...documentFragment.body.childNodes].map((node) => node.cloneNode(true)));
        observeSuccess();
        setStatus("ready");
        // Keep Flodesk's supplied config and scripts unchanged so its native capture flow remains intact.
        runEmbedScripts(scripts);
      } catch {
        if (isActive) setStatus("error");
      }
    };

    void loadEmbed();
    return () => {
      isActive = false;
      observer?.disconnect();
    };
  }, []);

  return (
    <section id="book-consultation" className="relative isolate scroll-mt-5 overflow-hidden px-5 py-16 sm:px-6 sm:py-24" aria-labelledby="booking-title">
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(135deg,#eaf3ff_0%,#f8fafc_46%,#eef2ff_100%)]" />
      <div className="pointer-events-none absolute -left-20 top-10 -z-10 h-72 w-72 rounded-full bg-blue-200/60 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 -right-16 -z-10 h-80 w-80 rounded-full bg-indigo-200/50 blur-3xl" />
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">Book the Call</p>
        <h2 id="booking-title" className="mt-4 text-4xl font-black leading-[1.05] tracking-[-0.045em] text-ink sm:text-5xl">Free One-to-One Consultation</h2>
        <p className="mt-3 text-xl font-bold leading-8 text-ink sm:text-2xl">Customized Strategy for Your Business</p>
        <p className="mx-auto mt-4 max-w-xl text-pretty text-base leading-7 text-muted sm:text-lg">See what may be holding back your enquiries—and what to focus on first.</p>
      </div>
      <div className="flodesk-host relative mx-auto mt-10 max-w-2xl rounded-[2rem] border border-white bg-white/95 p-2 shadow-[0_30px_80px_-35px_rgba(37,99,235,0.45)] backdrop-blur sm:mt-12 sm:p-3">
        {status === "loading" && <p className="p-8 text-center text-sm font-medium text-muted" role="status">Loading secure consultation form…</p>}
        {status === "error" && <p className="p-8 text-center text-sm font-medium text-red-600" role="alert">The consultation form could not load. Please refresh the page and try again.</p>}
        <div ref={mountRef} className={status === "ready" ? "block" : "hidden"} />
      </div>
      <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-muted">Your details will only be used to respond to your consultation request.</p>
    </section>
  );
}
