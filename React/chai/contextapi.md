# 🔥 React Context API – Full Notes with Internal Flow

Think of Context as a **global box** that React manages.

All components can:

* **Put data into the box** → using `Provider`
* **Read data from the box** → using `useContext`

---

## 1. Creating the Context

```js
import { createContext } from "react";

const ThemeContext = createContext({
  themeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {},
});
```

What happens internally:

```js
ThemeContext = {
  Provider: Component,
  Consumer: Component,
  _currentValue: {
    themeMode: "light",
    darkTheme: fn,
    lightTheme: fn
  }
}
```

This object you pass is the **default value**.
It is used only when no Provider is found above the component.

It defines the **shape/contract**:

```js
{
  themeMode: string,
  darkTheme: function,
  lightTheme: function
}
```

Names must stay the same forever.
Values will change.

---

## 2. Making Provider Shortcut

```js
export const ThemeProvider = ThemeContext.Provider;
```

This just means:

```js
ThemeProvider === ThemeContext.Provider;
```

No new logic. Just a shorter name.

---

## 3. Providing Real Values

```jsx
<ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
  {children}
</ThemeProvider>
```

Internally:

```js
ThemeContext._currentValue = {
  themeMode: "dark",
  darkTheme: realFn,
  lightTheme: realFn
}
```

So the default value is replaced.

---

## 4. Reading the Values

```js
const { themeMode, darkTheme, lightTheme } = useContext(ThemeContext);
```

Internally:

```js
return ThemeContext._currentValue;
```

So:

```js
useContext(ThemeContext) 
→ { themeMode, darkTheme, lightTheme }
```

---

## 5. Updating Flow

When you call:

```js
setThemeMode("dark");
```

Then:

1. State updates
2. Provider re-renders
3. `_currentValue` updates
4. All components using `useContext(ThemeContext)` re-render
5. UI updates

---

## 6. Default vs Real Values

| Default Value  | Real Value   |
| -------------- | ------------ |
| Dummy backup   | Actual state |
| Prevents crash | Real logic   |
| Documentation  | App behavior |

Default example:

```js
darkTheme: () => {}
```

Real example:

```js
darkTheme: () => setThemeMode("dark")
```

---

## 7. Without Default Values (Professional Pattern)

```js
const ThemeContext = createContext(null);
```

Then custom hook:

```js
function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be inside ThemeProvider");
  }
  return context;
}
```

This guarantees:

* No silent bugs
* No fake data
* Clean architecture

---

## 8. One-Line Mental Model

```

createContext → makes a box
Provider      → fills the box
useContext    → reads the box
state change  → updates the box → rerenders consumers
```

---

## 9. Data Shape Rule

Only values change.
Never change variable names.

Correct:

```js
{
  themeMode: "dark",
  darkTheme: fn,
  lightTheme: fn
}
```

Wrong:

```js
{
  mode: "dark",
  setDark: fn,
}
```

Because consumers expect:

```js
const { themeMode, darkTheme } = useContext(...)
```

---

## 10. Real-life Analogy

Context = water tank
Provider = water pump
useContext = tap

Default value = emergency water
Real value = fresh water

---
