import Link from "next/link";
import type {Locale} from "@/i18n/routing";
import {Container} from "./Container";
import {getDict} from "@/i18n/dict";
import {CONTACT_EMAIL} from "@/lib/seo";

export async function Footer({locale}: {locale: Locale}) {
  const d = getDict(locale as any);
  const f = d.Footer;

  return (
    <footer className="mt-20 border-t border-[rgb(var(--border))] bg-[rgb(var(--bg))]">
      <Container className="py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="font-semibold text-[rgb(var(--fg))]">ML Servizi</div>
            <p className="link- mt-2 text-sm text-[rgb(var(--muted))]">{f.about1}</p>
            <p className="link- mt-3 text-sm text-[rgb(var(--muted))]">{f.about2}</p>
          </div>

          <div className="text-sm">
            <div className="font-medium text-[rgb(var(--fg))]">{f.menuTitle}</div>
            <ul className="link- mt-3 space-y-2 text-[rgb(var(--muted))]">
              <li><Link className="ui-smooth link-underline inline-flex hover:text-[rgb(var(--fg))]" href={`/${locale}/services`}>{f.services}</Link></li>
              <li><Link className="ui-smooth link-underline inline-flex hover:text-[rgb(var(--fg))]" href={`/${locale}/portfolio`}>{f.work}</Link></li>
              <li><Link className="ui-smooth link-underline inline-flex hover:text-[rgb(var(--fg))]" href={`/${locale}/insights`}>{f.insights}</Link></li>
              <li><Link className="ui-smooth link-underline inline-flex hover:text-[rgb(var(--fg))]" href={`/${locale}/contact`}>{f.contact}</Link></li>
            </ul>
          </div>

          <div className="text-sm">
            <div className="font-medium text-[rgb(var(--fg))]">{f.contactsTitle}</div>
            <ul className="link- mt-3 space-y-2 text-[rgb(var(--muted))]">
              <li>{f.email}: <span className="text-[rgb(var(--fg))]">{CONTACT_EMAIL}</span></li>
              <li>
                {f.phone}:{" "}
                <a className="text-[rgb(var(--fg))]" href="tel:+393515447413">
                  +39 351 544 7413
                </a>
              </li>
              <li>{f.vatPec}: <span className="text-[rgb(var(--fg))]">...</span></li>
            </ul>
            <div className="mt-4 flex gap-4">
              <Link
                className="ui-smooth link-underline inline-flex link- text-[rgb(var(--muted))] hover:text-[rgb(var(--fg))]"
                href={`/${locale}/privacy-policy`}
              >
                {f.privacy}
              </Link>
              <Link
                className="ui-smooth link-underline inline-flex link- text-[rgb(var(--muted))] hover:text-[rgb(var(--fg))]"
                href={`/${locale}/cookie-policy`}
              >
                {f.cookies}
              </Link>
            </div>
          </div>
        </div>

        <div className="link- mt-10 text-xs text-[rgb(var(--muted))]">
          © {new Date().getFullYear()} ML Servizi. {f.rights}
        </div>
      </Container>
    </footer>
  );
}

