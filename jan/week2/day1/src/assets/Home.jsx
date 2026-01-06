import React, { useRef } from 'react';

function Home() {

    let nameRef = useRef();
    let ageref = useRef();
    let phRef = useRef();

    function handleSubmit(e) {
        e.preventDefault();

       let name = nameRef.current.value;
        let age = ageref.current.value;
         let number = phRef.current.value;

        localStorage.setItem("name", nameRef.current.value)
         localStorage.setItem("age", ageref.current.value)
          localStorage.setItem("number", phRef.current.value)
    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="">name</label>
                <input type="text" ref={nameRef} />
                <label htmlFor="">Age</label>
                <input type="number" ref={ageref} />
                <label htmlFor="">ph no</label>
                <input type="number" ref={phRef} />
                <button>submit</button>
            </form>
        </div>
    );
}

export default Home;
