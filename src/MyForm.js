import { useState } from 'react';

function MyForm() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [textarea, setTextarea] = useState("The content of text area goes in the attribute");
  const [myCar, setMyCar] = useState("Volvo");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name === "")
      alert("please enter name::");
    else if (age === "")
      alert("please enter age::")
    else
      alert(`your name is : ${name}  and your age is : ${age}`);
  }

  const handleChange = (event) => {
    setMyCar(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label for="name">Enter Name :
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label><br />
      <label for="age">Enter Age :
        <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
      </label><br />
      <label for="textarea">Enter area :
        <textarea value={textarea} onChange={(e) => setTextarea(e.target.value)} />
      </label><br />
      <label for="myCar">Select Vehicle :
        <select value={myCar} onChange={handleChange}>
          <option value="Ford">Ford</option>
          <option value="Volvo">Volvo</option>
          <option value="Fiat">Fiat</option>
        </select>
      </label><br />
      <input type="submit" />
    </form>
  );
}
export default MyForm;