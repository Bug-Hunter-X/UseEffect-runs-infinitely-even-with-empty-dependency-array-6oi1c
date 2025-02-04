# useEffect Infinite Loop Bug in React

This repository demonstrates an uncommon bug in React's `useEffect` hook where the effect runs infinitely even when the dependency array is empty.  This usually happens due to complex state updates or interactions with other libraries/components.

## Bug Description

The `useEffect` hook is designed to run after every render.  However, when an empty dependency array `[]` is provided, it *should* only run once after the initial render. This example shows a scenario where the effect runs repeatedly causing an infinite loop and console spam.

## How to Reproduce

1. Clone the repository.
2. Run `npm install`.
3. Run `npm start`.
4. Observe the console output; you'll see 'Count' printed continuously even with empty dependency array.

## Solution

The solution involves carefully examining the state updates and ensuring that no unexpected changes trigger re-renders within the component's logic.

The solution file shows a fix, but the root cause must be analyzed for each specific case. This may involve using `useCallback` for memoized functions or restructuring state updates to prevent unnecessary re-renders.