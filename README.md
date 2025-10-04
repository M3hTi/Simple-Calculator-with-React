# Calculator App

A modern, responsive calculator application built with React and Zustand for state management. Features a beautiful dark/light theme toggle and supports basic arithmetic operations.

## Features

- ✨ Clean and intuitive user interface
- 🌓 Dark/Light theme toggle with smooth transitions
- 🧮 Basic arithmetic operations (addition, subtraction, multiplication, division)
- 📱 Responsive design
- ⚡ Fast and efficient state management with Zustand
- 🎨 Styled with Tailwind CSS

## Supported Operations

- **Addition** (`+`)
- **Subtraction** (`-`)
- **Multiplication** (`x`)
- **Division** (`%`)
- **Decimal numbers** (`.`)
- **Clear display** (`C`)

## Project Structure

```
src/
├─ assets/
│  └─ react.svg
├─ ui/
│  ├─ Calculator.jsx
│  ├─ Display.jsx
│  └─ Toggle.jsx
├─ utils/
│  └─ utils.js
├─ App.jsx
├─ index.css
├─ main.jsx
└─ store.js

```

## How It Works

### State Management

The app uses Zustand for state management with three main actions:

- `appendToDisplay(value)` - Adds numbers and operators to the display
- `clearDisplay()` - Resets the calculator
- `calculate()` - Evaluates the expression and shows the result

### Calculation Logic

The calculator uses a two-phase parsing approach:

1. **Phase 1 - Multiplication and Division** (`calculateParser`)
   - Processes `x` (multiplication) and `%` (division) operators first
   - Follows mathematical order of operations (PEMDAS)
   - Returns an array with these operations resolved

2. **Phase 2 - Addition and Subtraction** (`calculate`)
   - Processes `+` and `-` operators on the simplified array
   - Returns the final result

**Example:**
```
Input: 3 + 4 x 6 % 2 - 2
Step 1: 3 + 24 % 2 - 2  (4 x 6 = 24)
Step 2: 3 + 12 - 2       (24 % 2 = 12)
Step 3: 13               (3 + 12 - 2 = 13)
```

### Theme Toggle

The theme system uses React Context API to provide dark/light mode across the entire app:

- Context provider wraps the entire application
- Theme state is accessible via the `useDark()` hook
- Smooth transitions between themes with Tailwind CSS

## Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd calculator-app

# Install dependencies
npm install

# Start development server
npm run dev
```

## Dependencies

- React
- Zustand (state management)
- Tailwind CSS (styling)
- react-icons (theme toggle icons)

## Usage

1. Click number buttons to input values
2. Click operation buttons (`+`, `-`, `x`, `%`) to perform calculations
3. Click `=` to see the result
4. Click `C` to clear the display
5. Toggle between dark and light themes using the sun/moon button in the top-left corner

## Error Handling

The calculator includes error handling for:
- **Division by zero** - Throws an error with message: "You can't divide by 0"

## Browser Compatibility

Works on all modern browsers that support:
- ES6+ JavaScript features
- CSS Grid and Flexbox
- CSS custom properties

## Future Enhancements

Potential features for future versions:
- Keyboard support
- History of calculations
- Scientific calculator mode
- Memory functions (M+, M-, MR, MC)
- Percentage calculations
- Backspace/delete functionality

## License

MIT License - feel free to use this project for learning or personal use.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.