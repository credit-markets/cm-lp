import { memo, useEffect, useId, useState, type FormEvent, type ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { CONTACT_EMAIL, CONTACT_MAILTO } from "@/lib/constants";
import { cm } from "@/lib/cm";
import { useLang } from "@/i18n/useLang";
import type { Copy, Lang } from "@/i18n/content";

type Role = "investor" | "originator";

interface LeadPayload {
  role: Role;
  name: string;
  email: string;
  company: string;
  country: string;
  telegram: string;
  investment: string;
  type: string;
  message: string;
  locale: Lang;
}

interface SubmitResponse {
  status?: "success" | "duplicate";
  message?: string;
}

class SubmitError extends Error {
  fields?: Record<string, string[]>;
}

const EASE = [0.16, 1, 0.3, 1] as const;

async function submitLead(data: LeadPayload, errors: Copy["register"]["errors"]): Promise<SubmitResponse> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 10000);
  try {
    const response = await fetch("/api/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
      signal: controller.signal,
    });
    if (!response.ok) {
      const body = await response.json().catch(() => ({}));
      const err = new SubmitError(body.error || errors.generic);
      err.fields = body.fields;
      throw err;
    }
    return (await response.json()) as SubmitResponse;
  } catch (error) {
    if (error instanceof Error && error.name === "AbortError") {
      throw new Error(errors.timeout);
    }
    if (error instanceof TypeError) {
      throw new Error(errors.network);
    }
    throw error;
  } finally {
    clearTimeout(timeoutId);
  }
}

const inputClass =
  "w-full h-12 px-4 rounded-md bg-cm-surface border border-cm-border-strong text-cm-text placeholder:text-cm-muted focus:outline-none focus:border-cm-accent focus:ring-2 focus:ring-cm-accent/20 transition-colors duration-200 aria-[invalid=true]:border-red-600";
const labelClass = "block text-sm font-medium text-cm-text mb-2";

function Field({
  id,
  label,
  optional,
  error,
  children,
}: {
  id: string;
  label: string;
  optional?: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className={labelClass}>
        {label}
        {optional && <span className="font-normal text-cm-text-2"> {optional}</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-2 text-sm text-red-700">
          {error}
        </p>
      )}
    </div>
  );
}

const RegisterSection = memo(function RegisterSection() {
  const location = useLocation();
  const reduce = useReducedMotion();
  const uid = useId();
  const [role, setRole] = useState<Role>("investor");
  const [submittedName, setSubmittedName] = useState<string | null>(null);
  const { lang, t } = useLang();
  const c = t.register;
  const f = c.fields;

  // "Request investor access" / "Request originator access" links land here with the role preselected.
  useEffect(() => {
    if (location.hash === "#register-originator") setRole("originator");
    if (location.hash === "#register-investor") setRole("investor");
  }, [location.hash]);

  const mutation = useMutation<SubmitResponse, SubmitError, LeadPayload>({
    mutationFn: (data) => submitLead(data, c.errors),
    onSuccess: (_data, variables) => setSubmittedName(variables.name.split(" ")[0] || ""),
  });

  // Server messages are English; the Portuguese page shows its own wording.
  const fieldError = (name: string) => {
    const msg = mutation.error?.fields?.[name]?.[0];
    return msg ? c.errors.field || msg : undefined;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const get = (key: string) => ((form.get(key) as string | null) ?? "").trim();
    mutation.mutate({
      role,
      name: get("name"),
      email: get("email"),
      company: get("company"),
      country: get("country"),
      telegram: get("telegram"),
      investment: get("investment"),
      type: role === "investor" ? get("type") : "",
      message: get("message"),
      locale: lang,
    });
  };

  const reset = () => {
    mutation.reset();
    setSubmittedName(null);
  };

  const isDuplicate = mutation.data?.status === "duplicate";
  const id = (name: string) => `${uid}-${name}`;
  const fade = reduce ? { duration: 0 } : { duration: 0.2, ease: EASE };

  return (
    <section id="register" className="cm-navy relative py-20 md:py-28 bg-cm-navy text-cm-navy-text overflow-hidden">
      {/* Old links and role-specific entry points */}
      <span id="access" className="absolute top-0" aria-hidden="true" />
      <span id="register-investor" className="absolute top-0" aria-hidden="true" />
      <span id="register-originator" className="absolute top-0" aria-hidden="true" />


      <div className={`relative ${cm.container} grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-12 lg:gap-20`}>
        <div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.03em] leading-[1.08] text-white">
            {c.title}
          </h2>
          <p className="mt-5 text-lg text-cm-navy-text-2 leading-relaxed max-w-md">
            {c.sub}
          </p>
          <p className="mt-10 text-sm text-cm-navy-text-2">
            {c.direct}{" "}
            <a
              href={CONTACT_MAILTO}
              className="cm-num text-white underline underline-offset-4 decoration-white/30 hover:decoration-cm-sky"
            >
              {CONTACT_EMAIL}
            </a>
          </p>
        </div>

        <div className="rounded-xl bg-cm-surface text-cm-text p-6 md:p-10 shadow-[0_24px_64px_rgba(0,0,0,0.35)] [--ring:224_64%_33%]">
          <AnimatePresence mode="wait" initial={false}>
            {mutation.isSuccess ? (
              <motion.div
                key="done"
                initial={reduce ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={fade}
                className="py-10"
                role="status"
              >
                <span className={`${cm.iconBox} !w-12 !h-12`}>
                  <Check className="w-6 h-6" strokeWidth={1.5} aria-hidden="true" />
                </span>
                <h3 className="mt-8 text-2xl md:text-3xl font-bold tracking-[-0.02em]">
                  {isDuplicate ? c.duplicate.title : `${c.success.thanks}${submittedName ? `, ${submittedName}` : ""}.`}
                </h3>
                <p className="mt-4 text-base text-cm-text-2 max-w-md">
                  {isDuplicate
                    ? c.duplicate.body
                    : c.success.body}
                </p>
                <button
                  type="button"
                  onClick={reset}
                  className="mt-10 text-sm font-medium text-cm-accent hover:text-cm-accent-hover transition-colors"
                >
                  {c.another}
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                initial={reduce ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={fade}
                aria-describedby={mutation.isError ? id("form-error") : undefined}
              >
                <fieldset>
                  <legend className={labelClass}>{c.registeringAs}</legend>
                  <div role="radiogroup" className="grid grid-cols-2 rounded-lg border border-cm-border-strong p-1 bg-cm-bg">
                    {(Object.keys(c.roles) as Role[]).map((r) => (
                      <button
                        key={r}
                        type="button"
                        role="radio"
                        aria-checked={role === r}
                        onClick={() => setRole(r)}
                        className={`relative h-10 rounded-md text-sm font-medium transition-colors duration-200 ${
                          role === r ? "text-white" : "text-cm-text-2 hover:text-cm-text"
                        }`}
                      >
                        {role === r && (
                          <motion.span
                            layoutId={`${uid}-role-pill`}
                            className="absolute inset-0 rounded-md bg-cm-accent"
                            transition={fade}
                          />
                        )}
                        <span className="relative">{c.roles[r].label}</span>
                      </button>
                    ))}
                  </div>
                  <p className="mt-2 text-xs text-cm-text-2">{c.roles[role].intro}</p>
                </fieldset>

                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Field id={id("name")} label={f.name} error={fieldError("name")}>
                    <input id={id("name")} name="name" autoComplete="name" required maxLength={120} className={inputClass} />
                  </Field>
                  <Field id={id("email")} label={f.email} error={fieldError("email")}>
                    <input
                      id={id("email")}
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      maxLength={254}
                      aria-invalid={!!fieldError("email")}
                      aria-describedby={fieldError("email") ? `${id("email")}-error` : undefined}
                      className={inputClass}
                    />
                  </Field>
                  <Field id={id("company")} label={f.company} optional={role === "investor" ? f.optional : undefined} error={fieldError("company")}>
                    <input
                      id={id("company")}
                      name="company"
                      autoComplete="organization"
                      required={role === "originator"}
                      maxLength={160}
                      className={inputClass}
                    />
                  </Field>
                  <Field id={id("country")} label={f.country} optional={f.optional} error={fieldError("country")}>
                    <input id={id("country")} name="country" autoComplete="country-name" maxLength={80} className={inputClass} />
                  </Field>

                  {role === "investor" ? (
                    <>
                      <Field id={id("type")} label={f.type}>
                        <select id={id("type")} name="type" defaultValue="institutional" className={inputClass}>
                          <option value="institutional">{f.typeInstitutional}</option>
                          <option value="individual">{f.typeIndividual}</option>
                        </select>
                      </Field>
                      <Field id={id("investment")} label={f.allocation} optional={f.optional}>
                        <select id={id("investment")} name="investment" defaultValue="" className={inputClass}>
                          <option value="">{f.selectRange}</option>
                          {c.allocations.map((o) => (
                            <option key={o.value} value={o.value}>
                              {o.label}
                            </option>
                          ))}
                        </select>
                      </Field>
                    </>
                  ) : (
                    <div className="sm:col-span-2">
                      <Field id={id("investment")} label={f.volume} optional={f.optional}>
                        <select id={id("investment")} name="investment" defaultValue="" className={inputClass}>
                          <option value="">{f.selectRange}</option>
                          {c.volumes.map((o) => (
                            <option key={o.value} value={o.value}>
                              {o.label}
                            </option>
                          ))}
                        </select>
                      </Field>
                    </div>
                  )}

                  <div className="sm:col-span-2">
                    <Field id={id("telegram")} label={f.telegram} optional={f.optional} error={fieldError("telegram")}>
                      <input
                        id={id("telegram")}
                        name="telegram"
                        placeholder={f.telegramPlaceholder}
                        maxLength={64}
                        aria-invalid={!!fieldError("telegram")}
                        className={inputClass}
                      />
                    </Field>
                  </div>
                  <div className="sm:col-span-2">
                    <Field id={id("message")} label={f.message} optional={f.optional} error={fieldError("message")}>
                      <textarea
                        id={id("message")}
                        name="message"
                        rows={3}
                        maxLength={2000}
                        className={`${inputClass} h-auto py-3 resize-y`}
                      />
                    </Field>
                  </div>
                </div>

                {mutation.isError && (
                  <p id={id("form-error")} role="alert" className="mt-6 text-sm text-red-700">
                    {mutation.error.message}
                  </p>
                )}

                <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4 sm:justify-between">
                  <p className="text-xs text-cm-text-2 max-w-xs">
                    {c.consent.before}{" "}
                    <Link to="/terms" className="underline underline-offset-2 hover:text-cm-text">
                      {c.consent.terms}
                    </Link>{" "}
                    {c.consent.and}{" "}
                    <Link to="/privacy" className="underline underline-offset-2 hover:text-cm-text">
                      {c.consent.privacy}
                    </Link>
                    .
                  </p>
                  <button type="submit" disabled={mutation.isPending} className={`${cm.btnPrimary} group`}>
                    {mutation.isPending ? c.sending : c.submit}
                    <ArrowRight
                      className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                  </button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
});

export default RegisterSection;
