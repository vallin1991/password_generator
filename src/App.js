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

  const [handelText, sethandelText] = useState("");
  const [copied, setCopied] = useState(false);

  const handelChangeUppercase = () => {
    setPassword({
      ...password,
      uppercase: !password.uppercase,
    });
  };

  const handelChangeLowercase = () => {
    setPassword({
      ...password,
      lowercase: !password.lowercase,
    });
  };

  const handelChangeNumbers = () => {
    setPassword({
      ...password,
      numbers: !password.numbers,
    })
  };

  const handelChangeSymbols = () => {
    sethandelText({
      ...password,
      symbols: !password.symbols,
    });
  };

  const setPasswordLength = (val) => {
    setPassword({
      ...password,
      length: val,
    });
  };

  return (
    <div className="wrapper">
      <div className="container wrapper-box">
        <h2>Password Generator</h2>
        <div className="passwrod-box">
          <input type="text" value={handelText} onChange={(e)=> sethandelText(e.target.value)}/>
          <button className="copy-button" onClick={()=>{
            if(handelText.legth > 0){
              navigator.clipboard.writeTest(handelText);
              setCopied(true);
              setInvernal(()=>{
                setCopied(false);
              }, 2000)
            }
          }}>{copied ? 'Copied!' : 'Copy text'}</button>
        </div>
        <br />
        <div className="word-criteria__box">
          <div>
            <label>Password length</label>
          </div>
          <div>
            <input type="number" value={handelText} onChange={(e) => setPasswordLength(e.target.value)}/>
          </div>
        </div>
        <div className="word-criteria__box">
          <div>
            <label>Include uppercase letters</label>
          </div>
          <div>
          <Checkbox value={password.uppercase} onChange={handelChangeUppercase}/>
          </div>
        </div>
        <div className="word-criteria__box">
          <div>
            <label>Include lowercase letters</label>
          </div>
          <div>
          <Checkbox value={password.lowercase} onChange={handelChangeLowercase}/>
          </div>
        </div>
        <div className="word-criteria__box">
          <div>
            <label>Include Numbers</label>
          </div>
          <div>
          <Checkbox value={password.numbers} onChange={handelChangeNumbers}/>
          </div>
        </div>
        <div className="word-criteria__box">
          <div>
            <label>Include symbols</label>
          </div>
          <div>
          <Checkbox value={password.symbols} onChange={handelChangeSymbols}/>
          </div>
        </div>
        <div>
          <button className="generate-button">Generate Password</button>
        </div>
      </div>
    </div>
  );
}

export default App
