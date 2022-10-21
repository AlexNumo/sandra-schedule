import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Schedule from 'Components/Schedule/Schedule';

import Toaster from './Components/Toasts/Toasts';
function App() {
  return (
    <>
      <Suspense fallback={"Downloading..."}>
        <Routes>
          <Route path='/' element={
            <>
              <Schedule />
            </>
          } />
        </Routes>
      </Suspense>
      <Toaster />
    </>
  );
}

export default App;
