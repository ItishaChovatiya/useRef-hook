import React from "react";
import { useState } from "react";
import { useRef } from "react";

export default function App() {
  const fname = useRef();
  const lname = useRef();
  const email = useRef();
  const [data, setdata] = useState({
    fname: "Name",
    lname: "LastName",
    email: "Email",
  });
  const handleClick = () => {
    const input_ = {
      firstname: fname.current.value,
      lastname: lname.current.value,
      emailadree: email.current.value,
    };

    console.log(input_);
    setdata(input_);
  };
  return (
    <div>
      <form className="m-2 border border-success w-50 ">
        <input ref={fname} className="m-2"  placeholder="firstname" onChange={handleClick} />
        <input ref={lname} className="m-2" placeholder="lastname" onChange={handleClick} />
        <input ref={email} className="m-2" placeholder="email" onChange={handleClick} />
        <h2>{data.firstname}</h2>
        <h2>{data.lastname}</h2>
        <h2>{data.emailadree}</h2>
      </form>
    </div>
  );
}
