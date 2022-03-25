import "./App.css";

function ErrorFallback({ error }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: "red" }}>{error.message}</pre>
    </div>
  );
}

function Greeting({ subject }) {
  try {
    return <div>Hello {subject.toUpperCase()}</div>;
  } catch (e) {
    return <ErrorFallback error={e} />;
  }
}
function Farewell({ subject }) {
  try {
    return <div>Goodbye {subject.toUpperCase()}</div>;
  } catch (e) {
    return <ErrorFallback error={e} />;
  }
}

function App() {
  return (
    <div className="App">
      <Greeting />
      <Farewell />
    </div>
  );
}

export default App;
