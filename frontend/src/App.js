import React from 'react';

function Asome({name}) {
//	console.log(prop);
	return <h1>It is ASome {name}</h1>
}

function App() {
  return (
		  <div>
		  	<h1>Hi, Nice meet you.</h1>
		  	<Asome
		  		name="Rudy" />
		  </div>
  );
}

export default App;
