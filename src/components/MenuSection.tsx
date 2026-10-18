import {
  antojitoFormats,
  antojitoNotes,
  featuredLocation,
  fillings,
  menu,
  type MenuCategory,
} from "@/data/restaurant";
import { formatPrice } from "@/lib/format";

import { SectionHeading } from "./SectionHeading";

const panelStyles = [
  "bg-amarillo-soft border-amarillo",
  "bg-white border-rojo",
  "bg-white border-verde",
] as const;

function Advisory() {
  return (
    <sup className="text-rojo" title="See consumer note below">
      *
    </sup>
  );
}

function AntojitosTable() {
  return (
    <section
      id="tacos"
      aria-labelledby="tacos-title"
      className="overflow-hidden rounded-2xl border-2 border-ink bg-white shadow-[6px_6px_0_#1b1712]"
    >
      <div className="flex flex-wrap items-baseline justify-between gap-2 bg-rojo px-5 py-4 text-white sm:px-6">
        <h3 id="tacos-title" className="font-display text-2xl uppercase">
          Tacos & Antojitos
        </h3>
        <p className="font-condensed text-sm font-semibold uppercase tracking-wider text-amarillo">
          Pick a filling, pick a format
        </p>
      </div>
      {/* The grid is wider than a phone; let it scroll inside its card rather than the page.
          `relative` keeps the absolutely positioned sr-only labels inside the scroller. */}
      <div className="relative overflow-x-auto" tabIndex={0} role="region" aria-labelledby="tacos-title">
        <table className="w-full min-w-[40rem] border-collapse text-left">
          <caption className="sr-only">Which fillings come in each format, with the price per item</caption>
          <thead>
            <tr className="font-condensed uppercase tracking-wider">
              <th scope="col" className="sticky left-0 bg-white px-5 py-3 text-sm font-semibold text-muted sm:px-6">
                Filling
              </th>
              {antojitoFormats.map((format) => (
                <th key={format.key} scope="col" className="px-3 py-3 text-center text-sm font-semibold text-verde">
                  {format.label}
                  <span className="mt-0.5 block font-display text-base normal-case tracking-normal text-rojo-deep">
                    {formatPrice(format.price)}
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {fillings.map((filling) => (
              <tr key={filling.name} className="border-t border-ink/10 even:bg-crema">
                <th scope="row" className="sticky left-0 bg-inherit px-5 py-2.5 font-normal sm:px-6">
                  <span className="block font-bold text-ink">
                    {filling.name}
                    {filling.advisory && <Advisory />}
                  </span>
                  <span className="block text-xs text-muted">{filling.spanish}</span>
                </th>
                {antojitoFormats.map((format) => {
                  const available = filling.formats.includes(format.key);
                  return (
                    <td key={format.key} className="px-3 py-2.5 text-center">
                      {available ? (
                        <span className="inline-flex size-7 items-center justify-center rounded-full bg-verde text-sm font-bold text-white">
                          ✓<span className="sr-only">Available</span>
                        </span>
                      ) : (
                        <span className="text-ink/25">
                          –<span className="sr-only">Not available</span>
                        </span>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <dl className="grid gap-x-6 gap-y-1 border-t-2 border-ink/10 px-5 py-4 text-sm sm:grid-cols-2 sm:px-6">
        {antojitoFormats.map((format) => {
          const note = antojitoNotes[format.key];
          return (
            note && (
              <div key={format.key} className="flex gap-2">
                <dt className="font-bold">{format.label}:</dt>
                <dd className="text-muted">{note}</dd>
              </div>
            )
          );
        })}
      </dl>
    </section>
  );
}

function CategoryPanel({ category, styleIndex }: { category: MenuCategory; styleIndex: number }) {
  return (
    <section
      id={category.id}
      aria-labelledby={`${category.id}-title`}
      className={`rounded-2xl border-2 p-6 ${panelStyles[styleIndex % panelStyles.length]}`}
    >
      <h3 id={`${category.id}-title`} className="font-display text-2xl uppercase text-rojo">
        {category.title}
      </h3>
      <p className="font-condensed text-sm font-semibold uppercase tracking-wider text-verde">
        {category.spanish}
      </p>
      {category.note && <p className="mt-3 text-sm italic text-muted">{category.note}</p>}
      <ul className="mt-4 space-y-3">
        {category.items.map((item) => (
          <li key={item.name}>
            <div className="flex items-baseline gap-3">
              <span className="font-bold">
                {item.name}
                {item.advisory && <Advisory />}
              </span>
              <span aria-hidden="true" className="flex-1 border-b-2 border-dotted border-ink/20" />
              {item.price !== undefined && (
                <span className="font-condensed text-lg font-semibold tabular-nums text-rojo-deep">
                  {formatPrice(item.price)}
                </span>
              )}
            </div>
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
  const jumpLinks = [{ id: "tacos", title: "Tacos" }, ...menu, { id: "desayunos", title: "Breakfast" }];

  return (
    <section id="menu" aria-labelledby="menu-title" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          id="menu-title"
          eyebrow="Nuestro menú"
          title="The Menu"
          intro="Everything is made to order with fresh ingredients. ¡Déjanos preparar tu plato en el tiempo necesario!"
        />

        <nav aria-label="Menu categories" className="mt-10">
          <ul className="flex flex-wrap justify-center gap-2">
            {jumpLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className="block rounded-full border-2 border-ink bg-white px-4 py-1.5 font-condensed text-sm font-semibold uppercase tracking-wider transition-colors hover:bg-amarillo"
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-12">
          <AntojitosTable />
        </div>

        <div className="mt-10 grid items-start gap-6 md:grid-cols-2 lg:grid-cols-3">
          {menu.map((category, index) => (
            <CategoryPanel key={category.id} category={category} styleIndex={index} />
          ))}
        </div>

        <div className="mt-10 space-y-2 text-center text-sm text-muted">
          <p>
            Prices are from our {featuredLocation.area} location&apos;s online delivery menu and may
            differ in the restaurant and between locations.
          </p>
          <p>
            <span className="text-rojo">*</span> Tripa is delicious but eat with care: it can
            occasionally contain small hard pieces. Consuming raw or undercooked meats, poultry,
            seafood or eggs may increase your risk of foodborne illness.
          </p>
        </div>
      </div>
    </section>
  );
}
