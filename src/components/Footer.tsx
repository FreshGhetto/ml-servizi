import Link from "next/link";
import type {Locale} from "@/i18n/routing";
import {Container} from "./Container";
import {getAddress, getDict} from "@/i18n/dict";
import {CONTACT_EMAIL, CONTACT_PEC, CONTACT_VAT} from "@/lib/seo";
import {MAPS_PLACE_URL} from "@/components/MapEmbed";

export async function Footer({locale}: {locale: Locale}) {
  const d = getDict(locale as any);
  const f = d.Footer;
  const address = getAddress(locale as any);

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
              <li>
                {locale === "it" ? "Indirizzo" : "Address"}:{" "}
                <a
                  className="ui-smooth link-underline inline-flex text-[rgb(var(--fg))]"
                  href={MAPS_PLACE_URL}
                  target="_blank"
                  rel="noreferrer"
                >
                  {address}
                </a>
              </li>
              <li>
                {f.email}:{" "}
                <a className="ui-smooth link-underline inline-flex text-[rgb(var(--fg))]" href={`mailto:${CONTACT_EMAIL}`}>
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li>
                PEC:{" "}
                <a className="ui-smooth link-underline inline-flex text-[rgb(var(--fg))]" href={`mailto:${CONTACT_PEC}`}>
                  {CONTACT_PEC}
                </a>
              </li>
              <li>
                {f.phone}:{" "}
                <a className="ui-smooth link-underline inline-flex text-[rgb(var(--fg))]" href="tel:+393515447413">
                  +39 351 544 7413
                </a>
              </li>
              <li>{locale === "it" ? "P.IVA" : "VAT ID"}: <span className="text-[rgb(var(--fg))]">{CONTACT_VAT}</span></li>
            </ul>
          </div>
        </div>

        <div className="link- mt-10 flex flex-col gap-2 border-t border-[rgb(var(--border))] pt-5 text-xs text-[rgb(var(--muted))] sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} ML Servizi. {f.rights}</p>
          <div className="flex items-center gap-4">
            <Link
              className="ui-smooth link-underline inline-flex text-[rgb(var(--muted))] hover:text-[rgb(var(--fg))]"
              href={`/${locale}/privacy-policy`}
            >
              {f.privacy}
            </Link>
            <Link
              className="ui-smooth link-underline inline-flex text-[rgb(var(--muted))] hover:text-[rgb(var(--fg))]"
              href={`/${locale}/cookie-policy`}
            >
              {f.cookies}
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}

