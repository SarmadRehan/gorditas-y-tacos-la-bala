import { featuredLocation, phoneHref } from "@/data/restaurant";

import { OrderButton } from "./OrderDialog";

/** Thumb-reachable call and order buttons, shown on small screens only. */
export function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t-4 border-amarillo bg-verde p-3 md:hidden">
      <a
        href={phoneHref(featuredLocation.phoneDisplay)}
        className="rounded-full border-2 border-crema py-3 text-center font-condensed text-base font-semibold uppercase tracking-wider text-crema"
      >
        Call
      </a>
      <OrderButton className="rounded-full bg-rojo py-3 text-center font-condensed text-base font-semibold uppercase tracking-wider text-white">
        Order Online
      </OrderButton>
    </div>
  );
}
