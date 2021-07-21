import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [headingText, setHeading] = useState("");
  const [headingId, setHeadingId] = useState("");
  const [headingSec, setHeadingSec] = useState("");
  const [id, setID] = useState("");
  const [sec, setSec] = useState("");

  function handleChangeName(event) {
    setName(event.target.value);
  }

  function handleChangeId(event) {
    setID(event.target.value);
  }

  function handleChangeSec(event) {
    setSec(event.target.value);
  }

  function handleClick(event) {
    setHeading(name);
    setHeadingId(id);
    setHeadingSec(sec);

    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>Hello {headingText}</h1>
      <p>
        {headingId} {headingSec}
      </p>

      <form onSubmit={handleClick}>
        <input
          onChange={handleChangeName}
          type="text"
          placeholder="What's your name?"
          value={name}
        />
        <input
          onChange={handleChangeId}
          type="text"
          placeholder="What's your Roll number?"
          value={id}
        />
        <input
          onChange={handleChangeSec}
          type="text"
          placeholder="What's your Section?"
          value={sec}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
