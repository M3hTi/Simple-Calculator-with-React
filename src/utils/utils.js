export function calculateParser(tokens) {
  const operatorMap = { x: "*", "%": "/" };
  const element = [];

  for (let i = 0; i < tokens.length; i++) {
    if (tokens[i] === "x" || tokens[i] === "%") {
      const operator = operatorMap[tokens[i]];
      const prev = Number(element.pop());
      const next = Number(tokens[i + 1]);

      if (next === 0 && operator === "/")
        throw new Error(`You can't "divide by 0`);

      let result;

      switch (operator) {
        case "*":
          result = prev * next;
          break;
        case "/":
          result = prev / next;
          break;
      }

      element.push(result);
      i++;
    } else {
      element.push(tokens[i]);
    }
  }

    return element;
}

console.log(
  "%c📝 LOG: my claculate arr: ",
  "color: #10B981; font-weight: bold",
  calculateParser(["3", "+", "4", "x", "6", "%", "2", "-", "2"])
);

export function calculate(element) {
  const collectors = [];
  for (let i = 0; i < element.length; i++) {
    if (element[i] === "+" || element[i] === "-") {
      const operator = element[i];

      const prev = Number(collectors.pop());
      const next = Number(element[i + 1]);

      let result;

      switch (operator) {
        case "+":
          result = next + prev;
          break;
        case "-":
          result = prev - next;
          break;
      }

      collectors.push(result);
      i++;
    }else {
      collectors.push(Number(element[i]));  
    }
  }

  return collectors.reduce((sum, curr) => sum + curr, 0);
}

console.log(
  "%c📝 LOG: sum is:",
  "color: #10B981; font-weight: bold",
  calculate(["3", "+", "7", "-", "8"])
);
