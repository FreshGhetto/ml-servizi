import {getRequestConfig} from "next-intl/server";
import {defaultLocale, locales, type Locale} from "./routing";

export default getRequestConfig(async ({locale}) => {
  const currentLocale = (locales as readonly string[]).includes(locale ?? "")
    ? (locale as Locale)
    : defaultLocale;

  return {
    locale: currentLocale,
    messages: (await import(`../../messages/${currentLocale}.json`)).default
  };
});
