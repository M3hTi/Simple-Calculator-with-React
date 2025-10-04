import useCalculator from "../store";
import Display from "./Display";

function Calculator() {
  const appendToDisplay = useCalculator((store) => store.appendToDisplay);
  const clearDisplay = useCalculator((store) => store.clearDisplay);
  const calculate = useCalculator((store) => store.calculate);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-950 text-white">
      <div className="w-full max-w-sm border border-gray-700 rounded-lg overflow-hidden bg-gray-900">
        {/* Display */}
        <div className="border-b border-gray-700 p-8 bg-gray-900">
          <Display />
        </div>

        {/* Button Grid */}
        <div className="grid grid-cols-4 gap-0 p-6">
          {/* Clear Button - Full Width */}
          <button
            className="cursor-pointer col-span-4 py-3 border mb-2 border-red-600 bg-gray-900 hover:bg-gray-800 transition-colors rounded-sm"
            onClick={clearDisplay}
          >
            C
          </button>

          {/* Row 1 */}
          <button
            className="cursor-pointer aspect-square border border-gray-700 bg-gray-900 hover:bg-gray-800 transition-colors rounded-sm"
            onClick={() => appendToDisplay("7")}
          >
            7
          </button>
          <button
            className="cursor-pointer aspect-square border border-gray-700 bg-gray-900 hover:bg-gray-800 transition-colors rounded-sm"
            onClick={() => appendToDisplay("8")}
          >
            8
          </button>
          <button
            className="cursor-pointer aspect-square border border-gray-700 bg-gray-900 hover:bg-gray-800 transition-colors rounded-sm"
            onClick={() => appendToDisplay("9")}
          >
            9
          </button>
          <button
            className="cursor-pointer aspect-square border border-cyan-600 bg-gray-900 hover:bg-gray-800 transition-colors rounded-sm"
            onClick={() => appendToDisplay("%")}
          >
            %
          </button>

          {/* Row 2 */}
          <button
            className="cursor-pointer aspect-square border border-gray-700 bg-gray-900 hover:bg-gray-800 transition-colors rounded-sm"
            onClick={() => appendToDisplay("4")}
          >
            4
          </button>
          <button
            className="cursor-pointer aspect-square border border-gray-700 bg-gray-900 hover:bg-gray-800 transition-colors rounded-sm"
            onClick={() => appendToDisplay("5")}
          >
            5
          </button>
          <button
            className="cursor-pointer aspect-square border border-gray-700 bg-gray-900 hover:bg-gray-800 transition-colors rounded-sm"
            onClick={() => appendToDisplay("6")}
          >
            6
          </button>
          <button
            className="cursor-pointer aspect-square border border-cyan-600 bg-gray-900 hover:bg-gray-800 transition-colors rounded-sm"
            onClick={() => appendToDisplay("x")}
          >
            X
          </button>

          {/* Row 3 */}
          <button
            className="cursor-pointer aspect-square border border-gray-700 bg-gray-900 hover:bg-gray-800 transition-colors rounded-sm"
            onClick={() => appendToDisplay("1")}
          >
            1
          </button>
          <button
            className="cursor-pointer aspect-square border border-gray-700 bg-gray-900 hover:bg-gray-800 transition-colors rounded-sm"
            onClick={() => appendToDisplay("2")}
          >
            2
          </button>
          <button
            className="cursor-pointer aspect-square border border-gray-700 bg-gray-900 hover:bg-gray-800 transition-colors rounded-sm"
            onClick={() => appendToDisplay("3")}
          >
            3
          </button>
          <button
            className="cursor-pointer aspect-square border border-cyan-600 bg-gray-900 hover:bg-gray-800 transition-colors rounded-sm"
            onClick={() => appendToDisplay("-")}
          >
            -
          </button>

          {/* Row 4 */}
          <button
            className="cursor-pointer aspect-square border border-gray-700 bg-gray-900 hover:bg-gray-800 transition-colors rounded-sm"
            onClick={() => appendToDisplay("0")}
          >
            0
          </button>
          <button
            className="cursor-pointer aspect-square border border-gray-700 bg-gray-900 hover:bg-gray-800 transition-colors rounded-sm"
            onClick={() => appendToDisplay(".")}
          >
            .
          </button>
          <button
            className="cursor-pointer aspect-square border border-cyan-600 bg-gray-900 hover:bg-gray-800 transition-colors rounded-sm"
            onClick={calculate}
          >
            {" "}
            ={" "}
          </button>
          <button
            className="cursor-pointer aspect-square border border-cyan-600 bg-gray-900 hover:bg-gray-800 transition-colors rounded-sm"
            onClick={() => appendToDisplay("+")}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
