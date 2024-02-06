import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

function App() {
  const [inputAirline, setInputAirline] = useState('');
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: 'ADD_AIRLINE',
      payload: {
        name: inputAirline,
      },
    });
  };

  const handleAddAirline = (event) => {
    setInputAirline(event.target.value);
  };

  return (
    <div>
      <h1>Redux Airport</h1>
      <input
        placeholder="Airline Name"
        value={inputAirline}
        onChange={handleAddAirline}
      />
      <button onClick={handleSubmit}>Add Airline</button>
      <table>{/* Airlines should be listed here */}</table>
      <table>
        <thead>
          <tr>
            <th scope="col">Airline</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {inputAirline.map((element, itemIndex) => {
              return <td>{inputAirline}</td>;
            })}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
