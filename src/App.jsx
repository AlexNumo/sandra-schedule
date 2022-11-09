import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Schedule from 'Components/Schedule/Schedule';
import ScheduleGet from 'Components/ScheduleGet/ScheduleGet';


import Toaster from './Components/Toasts/Toasts';
function App() {
  return (
    <>
      <Suspense fallback={"Downloading..."}>
        <Routes>
          <Route path='/' element={
            <>
              <Schedule />
              <ScheduleGet/>
            </>
          } />
        </Routes>
      </Suspense>
      <Toaster />
    </>
  );
}

export default App;
