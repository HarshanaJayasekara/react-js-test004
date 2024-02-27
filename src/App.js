import './App.css';
import Main from './Componets/Main';

const myData = [
  {
  name: "Amal",
  city: "kandy",
  },
  {
  name: "kamal",
  city: "chilaw",
  },
  {
  name: "fgfg",
  city: "hhh",
  },

];


function App() {
  return (
    <>
    <div>
      Text editor
      <h1>Harry</h1>
    </div>
    <p>Hallo Harry</p>
    {myData.map((ele) => {
      return <Main name={ele.name} city={ele.city}/>;
    })}
    </>
  );
}

export default App;
