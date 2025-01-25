import { BrowserRouter, Routes, Route } from 'react-router';
import { HomePage, ResultPage } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path='result' element={<ResultPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
