import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Auth from './pages/Auth'
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import EducatorProfile from './pages/EducatorProfile';
import Admin from './pages/Admin';
import EducatorDash from './pages/EducatorDash';
import StudentProfile from './pages/StudentProfile';
import Home from './pages/Home';
import Courses from './pages/Courses';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/courses' element={<Courses/>}/>
        <Route path='/studentdash' element={<Dashboard/>}/>
        <Route path='/teacherdash' element={<EducatorDash/>}/>
        <Route path='/admindash' element={<Admin/>}/>
        <Route path='/login' element={<Auth />}/>
        <Route path='/register' element={<Auth register/>}/>
        <Route path='/teacherprofile' element={<EducatorProfile/>}/>
        <Route path='/studentprofile' element={<StudentProfile/>}/>

        {/* <Route path='/uploadcourse' element={<UploadCourse/>}/> */}
      </Routes>
    </>
  )
}

export default App
