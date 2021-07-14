import { useState } from 'react';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Grid/>
      </header>
    </div>
  );
}


function Grid() {
  const [calculated_text, setText] = useState('');
  let appendText=(str) => {setText(calculated_text+str)}
  let clearText=() => {setText('')}
  let deleteChar=() => {setText(calculated_text.substring(0,calculated_text.length-1))}
  let calculate=() => {setText(eval(calculated_text))}

  return (
    <center>
    <div class='grid'>
      <div class='row'>
        <div>
          <Button text='1' setState={appendText}>
          </Button>
        </div>

        <div>
          <Button text='2' setState={appendText}>
          </Button>
        </div>

        <div>
          <Button text='3'  setState={appendText}>
          </Button>
        </div>
    </div>
    
    <div class='row'>
      <div>
        <Button text='4'  setState={appendText}>
        </Button>
      </div>

      <div>
        <Button text='5'  setState={appendText}>
        </Button>
      </div>

      <div>
        <Button text='6'  setState={appendText}>
        </Button>
      </div>
    </div>

    <div class='row'>
      <div>
        <Button text='7'  setState={appendText}>
        </Button>
      </div>

      <div>
        <Button text='8'  setState={appendText}>
        </Button>
      </div>

      <div>
        <Button text='9'  setState={appendText}>
        </Button>
      </div>
    </div>
    
    <div class='row'>
      <div>
        <Button text='0'  setState={appendText}>
        </Button>
      </div>

      <div>
        <Button text='+'  setState={appendText}>
        </Button>
      </div>

      <div>
        <Button text='-'  setState={appendText}>
        </Button>
      </div>
    </div>

    <div class='row'>
      <div>
        <Button text='*'  setState={appendText}>
        </Button>
        </div>
      <div>
        <Button text='/'  setState={appendText}>
        </Button>
      </div>

      <div>
        <Button text='C'  setState={clearText}>
        </Button>
      </div>
    </div>

    <div>
      <div>
        <Button text='DEL' setState={deleteChar}>
        </Button>
      </div>

      <div>
        <Button text='Calculate' setState={calculate}>
        </Button>
      </div>
    </div>

    <div>
      <Label text={calculated_text}>

      </Label>
    </div>
</div>
</center>


  );
}

function Button(props) {
  return (
    <div>
      <button onClick = {() => props.setState(props.text)}>
        {props.text}
      </button>
    </div>
  );
}

function Label(props) {
  return (
    <div>
      <label>
        {props.text}
      </label>
    </div>
  )
}

function Calculate() {

}

export default App;
