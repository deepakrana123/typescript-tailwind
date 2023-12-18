import React, { useState } from "react";
import Currency from "./Currency";
import { TextField } from "./TextField";

function Calculator() {
  const [currency, setCurrency] = useState<string | undefined>(undefined);
  const onCurrency = (id: string) => () => {
    setCurrency(id);
  };
  // mx-auto max-w-2xl rounded-3xl ring-1 max-h-max ring-gray-200 dark:ring-gray-700 sm:mt-13 mt-16 lg:mx-0 lg:flex lg:max-w-none
  //  px-4 py-6 md:p-8 sm:p-10 lg:flex-auto items-center flex
  const handleSubmit = () => () => {};
  return (
    <div className="">
      <div className="">
        <form
          method="POST"
          autoComplete="off"
          className="space-y-8 w-full"
          onSubmit={handleSubmit()}
        >
          <Currency activeCurrency={currency} onCurrency={onCurrency} />
          <TextField
            label="Cost Of Item"
            name={"byee"}
            value={"hi"}
            currency={currency}
            error={""}
            onChange={onCurrency("id")}
            onBlur={onCurrency("id")}
          />
          <TextField
            label={"hii"}
            name={"byee"}
            value={"hi"}
            currency={currency}
            error={""}
            onChange={onCurrency("id")}
            onBlur={onCurrency("id")}
          />
          <div className="flex flex-col space-y-3 md:flex-row md:space-y-0 md:space-x-8">
            <button className="flex-1 btn btn-primary" type="submit">
              Calculate
            </button>
            <button className="flex-1 btn btn-secondary" type="submit">
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Calculator;
