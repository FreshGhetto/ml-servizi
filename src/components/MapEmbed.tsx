import {cn} from "@/lib/cn";

export const MAPS_PLACE_URL =
  "https://www.google.it/maps/place/ML+Servizi/@45.4678365,12.2339905,17z/data=!3m1!4b1!4m6!3m5!1s0x477eb7f48d00cd6b:0x7cfe91a6556bd0d!8m2!3d45.4678328!4d12.2365654!16s%2Fg%2F11rz58kcl4?entry=ttu&g_ep=EgoyMDI2MDMwMi4wIKXMDSoASAFQAw%3D%3D";

// Use a dedicated embed endpoint (google.com) to avoid iframe blocking from google.it place URLs.
const MAPS_EMBED_URL =
  "https://maps.google.com/maps?hl=it&q=ML%20Servizi%2C%20Via%20Banchina%20dell%27%20Azoto%2015%2C%2030175%20Venezia&t=&z=17&ie=UTF8&iwloc=B&output=embed";

export function MapEmbed({
  className,
  title = "ML Servizi"
}: {
  className?: string;
  title?: string;
}) {
  return (
    <div className={cn("overflow-hidden rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))]", className)}>
      <iframe
        title={title}
        src={MAPS_EMBED_URL}
        className="h-[340px] w-full"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
