import useCalculator from "../store";
import { useDark } from "./Toggle";

function Display() {
  const display = useCalculator((store) => store.display);
  const result = useCalculator((store) => store.result);

  const { isDark } = useDark();

  console.log(
    "%c📝 LOG: my Display is",
    "color: #10B981; font-weight: bold",
    display
  );

  return (
    <div
      className={`${
        isDark ? "text-white" : "text-gray-900"
      } text-4xl font-light text-center`}
    >
      {display || result}
    </div>
  );
}

export default Display;
