import { fillings, mainPhone, menu, phoneHref, type MenuCategory } from "@/data/restaurant";

import { SectionHeading } from "./SectionHeading";

function CategoryPanel({ category }: { category: MenuCategory }) {
  return (
    <section
      id={category.id}
      aria-labelledby={`${category.id}-title`}
      className="break-inside-avoid rounded-2xl border-2 border-vino bg-white p-6 shadow-[5px_5px_0_#4a1a2c]"
    >
      <h3 id={`${category.id}-title`} className="font-display text-3xl text-vino">
        {category.title}
      </h3>
      <p className="font-condensed text-sm font-semibold uppercase tracking-wider text-verde">
        {category.english}
      </p>
      {category.note && <p className="mt-3 text-sm italic text-muted">{category.note}</p>}
      <ul className="mt-4 divide-y divide-vino/10">
        {category.items.map((item) => (
          <li key={item.name} className="py-2.5">
            <p className="font-bold">{item.name}</p>
            {item.description && (
              <p className="mt-0.5 text-sm leading-relaxed text-muted">{item.description}</p>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}

export function MenuSection() {
  return (
    <section id="menu" aria-labelledby="menu-title" className="bg-arena py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          id="menu-title"
          eyebrow="Nuestro menú"
          title="The Menu"
          intro="Gorditas, tacos, tortas and platillos, all made to order."
        />

        <nav aria-label="Menu categories" className="mt-10">
          <ul className="flex flex-wrap justify-center gap-2">
            {menu.map((category) => (
              <li key={category.id}>
                <a
                  href={`#${category.id}`}
                  className="block rounded-full border-2 border-vino bg-white px-4 py-1.5 font-condensed text-sm font-semibold uppercase tracking-wider transition-colors hover:bg-lima"
                >
                  {category.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-10 rounded-2xl bg-vino p-6 text-crema sm:p-8">
          <h3 className="font-display text-2xl text-lima">Pick your filling</h3>
          <p className="mt-1 text-sm text-crema/75">
            For tacos, gorditas, sopes, tostadas, quesadillas, burritos and tortas. Ask what&apos;s
            on the plancha today.
          </p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {fillings.map((filling) => (
              <li
                key={filling}
                className="rounded-full border border-lima/50 px-3 py-1 font-condensed text-base font-medium tracking-wide"
              >
                {filling}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 gap-6 md:columns-2 lg:columns-3 [&>*]:mb-6">
          {menu.map((category) => (
            <CategoryPanel key={category.id} category={category} />
          ))}
        </div>

        <p className="mt-4 text-center text-sm text-muted">
          Prices aren&apos;t listed online yet. Call{" "}
          <a href={phoneHref(mainPhone)} className="font-semibold text-vino underline underline-offset-4">
            {mainPhone}
          </a>{" "}
          or ask at the counter.
        </p>
      </div>
    </section>
  );
}
