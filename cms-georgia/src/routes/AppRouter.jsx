import { lazy } from 'react';
import { BrowserRouter ,Route, Routes } from 'react-router-dom';


const Home = lazy(()=> import('../pages/home/Home'))


const AppRouter = () => {
  return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
            </Routes>
        </BrowserRouter>
  )
}

export default AppRouter