import React from "react";
import { CurrencyProps } from "../types";
import { CURRENCIES } from "../constant";

export default function Currency({
  activeCurrency,
  onCurrency,
}: CurrencyProps) {
  return (
    <div>
      <label className="block text-xl font-medium tracking-tighter text-gray-700 dark:text-brand mb-1">
        Currency
      </label>
      {Object.entries(CURRENCIES).map(([name, symbol]) => (
        <span
          key={name}
          onClick={onCurrency(name, symbol)}
          className={`chip ${name == activeCurrency && "active"}`}
        >
          {name}
        </span>
      ))}
    </div>
  );
}
