import logo from './logo.svg';
import './App.css';
import class_vuduckhoa from './components/class_vuduckhoa';
import Func_JSX_vuduckhoa from './components/Func_JSX_vuduckhoa';
function App() {
  return (
    <section className="App">
     <h1>demo JSX</h1>
     <Func_JSX_vuduckhoa/>
     <Func_JSX_vuduckhoa fullName="Vu Duc khoa" age="20"/>
     
     <class_vuduckhoa/>
     <hr>
     <class_vuduckhoa info="Hoc ReactJs" time="11"/>
     </hr>
    </section>
  );
}

export default App;
