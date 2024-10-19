import ErrorBoundary from "./components/ErrorBoundary";
import Home from "./page/Home";

function App() {
  return (
    <div>
      <ErrorBoundary>
        <Home />
      </ErrorBoundary>
    </div>
  );
}

export default App;
