import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Admin from './components/Admin';
import Teacher from './components/Teacher';
import Student from './components/Student';
import Home from './components/Home';
import Course from './components/Course';
import Csefssub from './components/Csefssub';
import Csefsch from './components/Csefsch';
// import Math from './components/Mathf';
import Mathf from './components/Mathf';
import Csefssubstd from './components/Csefssubstd';
import Coursestd from './components/Coursestd';
import Chemliststd from './components/Chemliststd';
import Chemlisttcr from './components/Chemlisttcr';
import Chemlistup from './components/Chemlistup';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      {/* <Math/> */}
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='teacher' element={<Teacher/>}></Route>
        <Route path='student' element={<Student/>}></Route>
        <Route path='admin' element={<Admin/>}></Route>
        <Route path='teacher/course' element={<Course/>}></Route>
        <Route path='student/coursestd' element={<Coursestd/>}></Route>
        <Route path='teacher/course/csefssub' element={<Csefssub/>}></Route>
        <Route path='student/coursestd/csefssubstd' element={<Csefssubstd/>}></Route>
        <Route path='student/coursestd/csefssubstd/chemliststd' element={<Chemliststd/>}></Route>
        <Route path='teacher/course/csefssub/csefsch' element={<Csefsch/>}></Route>
        <Route path='teacher/course/csefssub/mathf' element={<Mathf/>}></Route>
        <Route path='teacher/course/csefssub/csefsch/chemlisttcr' element={<Chemlisttcr/>}></Route>
        <Route path='chemlistup/:id' element={<Chemlistup/>} ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
