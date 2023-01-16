import {useState } from "react";
import "./App.css";

function App() {
  const prevNoteValue = localStorage.getItem("note") ?? "";
  const [note, setNote] = useState(prevNoteValue);

  function eventHandler(e) {
    setNote(e.target.value);
    
  }


  function save() {
    localStorage.setItem("note", note);
  }

  function clear() {
    localStorage.removeItem("note");
  }

  return (
    <div className="App">
      <div className="box">
        <div className="field">
          <div className="control">
            <textarea
              onChange={eventHandler}
              className="textarea is-large"
              placeholder="Notes..."
              value={note}
            />
          </div>
        </div>
        <button onClick={save} className="button is-large is-primary is-active">
          Save
        </button>
        <button onClick={clear} className="button is-large">
          Clear
        </button>
      </div>
    </div>
  );
}

export default App;
