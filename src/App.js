import './App.css';
import MyForm from './MyForm';

// const myElement = "<h1>Good To See you soon</h1>";

// const myArray = ['apple', 'banana', 'orange'];
// const myList = myArray.map((item) => <p>{item}</p>)

// const vehicles = ['mustang', 'f-150', 'expedition'];

// const [car, truck, suv] = vehicles;

// const myHTMLCode = (
//   <table><tr><td>first</td><td>second</td></tr><tr><td>Third</td><td>Fourth</td></tr><tr><td>Fifth</td><td>Six</td></tr></table>
// );

function Abc(props) {
  return <h1>this is a {props.firstname} {props.lastname}</h1>
}

function Football() {

  const shoot = () => {
    alert("Good Shot");
  }
  const shootWithParater = (a) => {
    alert(a);
  }
  const shootWithEvent = (a, b) => {
    alert(b.type);
  }

  return (<>
    <button onClick={shoot}>Shoot Me</button>&nbsp;&nbsp;&nbsp;
    <button onClick={() => shootWithParater('Kya Shot Hai!')}>Shoot With Parameter</button>&nbsp;&nbsp;&nbsp;
    <button onClick={(event) => shootWithEvent("Goal!", event)}>Shoot with Event</button>
  </>
  );
}

function Missed() { return <h1>Missed!</h1>; }
function MadeGoal() { return <h1>Goal!</h1>; }
function Goal(props) {
  //const isGoal = props.isGoal;
  // if (isGoal) { return <Missed />; }
  // return <MadeGoal />;
  return (<>
    isGoal ? <MadeGoal /> : <Missed />;
  </>);
}

function App() {
  return (
    <div className="App">
      {/* Good Morninger
      {myElement}
      {myArray}
      {myList}
      {truck} */}
      {/* {myHTMLCode} */}
      <Abc firstname="Azhar" lastname="Hussain" />
      <Football />
      <Goal isGoal={false} />
      <MyForm />
    </div>
  );
}

export default App;
