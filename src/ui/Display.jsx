import useCalculator from "../store";

function Display() {
  const display = useCalculator((store) => store.display);
  const result = useCalculator((store) => store.result);

  console.log(
    "%c📝 LOG: my Display is",
    "color: #10B981; font-weight: bold",
    display
  );

  return (
    <div className="text-white text-4xl font-light text-center">
      {display || result }
    </div>
  );
}

export default Display;
