"use client";

import { createContext, useCallback, useContext, useRef } from "react";

import { mainPhone, phoneHref } from "@/data/restaurant";

import { Greca } from "./Greca";

const OrderDialogContext = createContext<(() => void) | null>(null);

/** Renders the single "online ordering unavailable" dialog shared by every order button. */
export function OrderDialogProvider({ children }: { children: React.ReactNode }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const open = useCallback(() => dialogRef.current?.showModal(), []);
  const close = () => dialogRef.current?.close();

  return (
    <OrderDialogContext.Provider value={open}>
      {children}
      <dialog
        ref={dialogRef}
        aria-labelledby="order-dialog-title"
        aria-describedby="order-dialog-description"
        className="m-auto w-[calc(100%-2rem)] max-w-md overflow-hidden rounded-2xl bg-crema p-0 text-ink shadow-2xl backdrop:bg-vino-deep/80 backdrop:backdrop-blur-sm"
        onClick={(event) => {
          // Clicks on the backdrop land on the <dialog> itself, not its content.
          if (event.target === event.currentTarget) close();
        }}
      >
        <Greca />
        <div className="p-8 text-center">
          <p className="inline-block rounded-sm bg-verde px-3 py-1 font-condensed text-sm font-semibold uppercase tracking-[0.2em] text-lima">
            ¡Muy pronto! · Coming soon
          </p>
          <h2 id="order-dialog-title" className="mt-4 font-display text-3xl text-vino">
            Online Ordering
          </h2>
          <p id="order-dialog-description" className="mt-4 leading-relaxed text-muted">
            Online ordering isn&apos;t available just yet. Give us a call and we&apos;ll have your
            order hot and ready for pickup.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <a
              href={phoneHref(mainPhone)}
              className="rounded-full bg-vino px-6 py-3 font-condensed text-base font-semibold uppercase tracking-wider text-lima transition-colors hover:bg-vino-deep"
            >
              Call {mainPhone}
            </a>
            <button
              type="button"
              autoFocus
              onClick={close}
              className="rounded-full border-2 border-ink/20 px-6 py-3 font-condensed text-base font-semibold uppercase tracking-wider transition-colors hover:border-ink"
            >
              Close
            </button>
          </div>
        </div>
      </dialog>
    </OrderDialogContext.Provider>
  );
}

type OrderButtonProps = {
  className?: string;
  children: React.ReactNode;
};

export function OrderButton({ className, children }: OrderButtonProps) {
  const openDialog = useContext(OrderDialogContext);
  if (!openDialog) throw new Error("OrderButton must be rendered inside OrderDialogProvider");

  return (
    <button type="button" aria-haspopup="dialog" className={className} onClick={openDialog}>
      {children}
    </button>
  );
}
