import Calculator from "./components/Calculator";
import ThemeColorSwitcher from "./components/ThemeColorSwitcher";
import ThemeSwitcher from "./components/ThemeSwitcher";

function App() {
  return (
    <>
      <main className="bg-white dark:bg-black relative">
        <div className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-4 lg:px-0">
            <ThemeSwitcher />
            <div className="mx-auto max-w-2xl sm:text-center">
              <ThemeColorSwitcher />
              <h2 className="text-3xl font-bold tracking-tighter text-brand sm:text-4xl text-center">
                Profit Margin Calculator
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-white text-center">
                Optimize your menu item prices to maximize profits by
                identifying the most effective selling prices.
              </p>
            </div>
            <Calculator />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
