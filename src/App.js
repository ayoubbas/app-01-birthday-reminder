import logo from './logo.svg';
import './App.css';
import data from "./data";
import Person from './components/person';

console.log(data);

function App() {
  return (
    <div className='app'>
      <div className='container'>
        <div className='title'>
          <h1><span>29</span> birthdays today</h1>
        </div>
          <div className='items'>
          {data.map((item)=>{
            return <Person item={item} key={item.id} />
          })}
          </div>
      </div>
    </div>
  );
}

export default App;
