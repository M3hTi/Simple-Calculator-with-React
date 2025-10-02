import Display from "./Display";

function Calculator() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-950 text-white">
      <div className="w-full max-w-sm border border-gray-700 rounded-lg overflow-hidden bg-gray-900">
        {/* Display */}
        <div className="border-b border-gray-700 p-8 bg-gray-900">
          <Display />
        </div>

        {/* Button Grid */}
        <div className="grid grid-cols-4 gap-0 p-6">
          {/* Row 1 */}
          <button className="cursor-pointer aspect-square border border-gray-700 bg-gray-900 hover:bg-gray-800 transition-colors rounded-sm">
            7
          </button>
          <button className="cursor-pointer aspect-square border border-gray-700 bg-gray-900 hover:bg-gray-800 transition-colors rounded-sm">
            8
          </button>
          <button className="cursor-pointer aspect-square border border-gray-700 bg-gray-900 hover:bg-gray-800 transition-colors rounded-sm">
            9
          </button>
          <button className="cursor-pointer aspect-square border border-cyan-600 bg-gray-900 hover:bg-gray-800 transition-colors rounded-sm">
            %
          </button>

          {/* Row 2 */}
          <button className="cursor-pointer aspect-square border border-gray-700 bg-gray-900 hover:bg-gray-800 transition-colors rounded-sm">
            4
          </button>
          <button className="cursor-pointer aspect-square border border-gray-700 bg-gray-900 hover:bg-gray-800 transition-colors rounded-sm">
            5
          </button>
          <button className="cursor-pointer aspect-square border border-gray-700 bg-gray-900 hover:bg-gray-800 transition-colors rounded-sm">
            6
          </button>
          <button className="cursor-pointer aspect-square border border-cyan-600 bg-gray-900 hover:bg-gray-800 transition-colors rounded-sm">
            X
          </button>

          {/* Row 3 */}
          <button className="cursor-pointer aspect-square border border-gray-700 bg-gray-900 hover:bg-gray-800 transition-colors rounded-sm">
            1
          </button>
          <button className="cursor-pointer aspect-square border border-gray-700 bg-gray-900 hover:bg-gray-800 transition-colors rounded-sm">
            2
          </button>
          <button className="cursor-pointer aspect-square border border-gray-700 bg-gray-900 hover:bg-gray-800 transition-colors rounded-sm">
            3
          </button>
          <button className="cursor-pointer aspect-square border border-cyan-600 bg-gray-900 hover:bg-gray-800 transition-colors rounded-sm">
            -
          </button>

          {/* Row 4 */}
          <button className="cursor-pointer aspect-square border border-gray-700 bg-gray-900 hover:bg-gray-800 transition-colors rounded-sm">
            0
          </button>
          <button className="cursor-pointer aspect-square border border-gray-700 bg-gray-900 hover:bg-gray-800 transition-colors rounded-sm">
            .
          </button>
          <button className="cursor-pointer aspect-square border border-gray-700 bg-gray-900 hover:bg-gray-800 transition-colors rounded-sm">
            {" "}
            ={" "}
          </button>
          <button className="cursor-pointer aspect-square border border-cyan-600 bg-gray-900 hover:bg-gray-800 transition-colors rounded-sm">
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
