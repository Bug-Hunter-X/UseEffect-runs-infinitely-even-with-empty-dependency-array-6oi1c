```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    //This will run only once after initial render
    console.log('Count:', count);
  }, []); // Empty dependency array - runs only once

  const handleClick = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
```