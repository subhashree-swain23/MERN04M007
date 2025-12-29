import React from 'react';

function Home(props) {
  return (
    <div>
      This is the home page
      <br />
      a value :{props.a}
      <br />
      string value :{props.str}
      <br />
      is true :{props.isTrue.toString()}
      <br />
      Array :{props.arr}
      <br />
      <ul>
        {
            props.arr.map((v,i)=>(
                <li key={i}>{v}</li>
            ))
        }
        <br />
        object value
        <br />
        Name :{props.obj.name}
        <br />
        Age :{props.obj.age}
        <br />
        phone :{props.obj.phone}
        {props.func()}

      </ul>
    
    </div>
  );
}

export default Home;
