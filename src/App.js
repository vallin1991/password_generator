import Checkbox from "./components/Checkbox";
import {useState} from 'react';
import './App.css';


function App() {

  //set state
  const [password, setPassword] = useState({
    length: 5,
    uppercase: false,
    lowercase: false,
    numbers: false,
    symbols: false

  });

  const handelChangeUppercase = () => {

  }

  return (
    <div className="wrapper">
      <div className="container wrapper-box">
        <h2>Password Generator</h2>
        <div className="passwrod-box">
          <input type="text" value="" placeholder="" autoComplete="off"/>
          <button className="copy-button">Copy text</button>
        </div>
        <br />
        <div className="word-criteria__box">
          <div>
            <label>Password length</label>
          </div>
          <div>
            <input type="number" value=""/>
          </div>
        </div>
        <div className="word-criteria__box">
          <div>
            <label>Include uppercase letters</label>
          </div>
          <div>
          <Checkbox value={password.uppercase} onChange={handleChangeUppercase}/>
          </div>
        </div>
        <div className="word-criteria__box">
          <div>
            <label>Include lowercase letters</label>
          </div>
          <div>
          <Checkbox value={password.lowercase} onChange={handleChangeLowercase}/>
          </div>
        </div>
        <div className="word-criteria__box">
          <div>
            <label>Include Numbers</label>
          </div>
          <div>
          <Checkbox value={password.numbers} onChange={handleChangeNumbers}/>
          </div>
        </div>
        <div className="word-criteria__box">
          <div>
            <label>Include symbols</label>
          </div>
          <div>
          <Checkbox value={password.symbols} onChange={handleChangeSymbols}/>
          </div>
        </div>
        <div>
          <button className="generate-button">Generate Password</button>
        </div>
      </div>
    </div>
  );
}

export default App;
