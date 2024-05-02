import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Outlet, BrowserRouter } from 'react-router-dom';
import AccordionItemComponent from './components/mapaccord';
import CheckboxList from './components/checkbox';
import LandingAccord from './components/Saccro';
function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  return (

      <>
        {/* <TabsSegmentedControls />
        <ButtonAppBar />

        <Routes>
          <Route path="/" element={<BasicGrid />}>
            <Route path="/list" element={<DataTable />} />
            <Route path="" element={<DataList />} />
          </Route>
        </Routes> */}
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<AccordionItemComponent sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />}>
            <Route path='/Updateside' element={<CheckboxList/>}/>
            <Route path='' element={<LandingAccord sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />}></Route>
          </Route>
        </Routes>
        </BrowserRouter>
    {/* <CheckboxList/> */}
    </>


  );
}

export default App;