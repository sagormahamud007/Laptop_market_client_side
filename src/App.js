import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Routes/Routes/Routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import { useEffect } from 'react';

function App() {
  // useEffect(() => {
  //   AOS.init()
  //   AOS.refresh()
  // }, [])
  return (
    <div className='max-w-[1440px] mx-auto'>
      <RouterProvider router={router}>

      </RouterProvider>
      <ToastContainer />
    </div>
  );
}

export default App;
