import React from 'react';
import ResultPage from './components/ResultPage';
import HomePage from './pages/HomePage';


const App = () => {


  const studentResults = {
      "id": 1,
        "surname": "bob",
        "firstname": "Peter",
        "age": 25,
        "gender": "male",
        "levitem": "100 Levitem",
        "state": "kaduna"
  }
  

  return (
    <div>
      {/* <HomePage/> */}
       <ResultPage results={studentResults} />
    </div>
  );
};

export default App;