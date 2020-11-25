import logo from './logo.svg';
import './App.css';
import { Button, FormGroup, InputGroup } from '@blueprintjs/core';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <img src={logo} className="App-logo" alt="logo" />
            <code>
              <h2>
               Pop up list in LA
              </h2>
            </code>
          <div className="itemsWrapper">
            <FormGroup>
                <InputGroup 
                  id="text-input" 
                  placeholder="me@mail.com" 
                  style={{ height: '2.5em', width: '20em'}}
                  className="item"
                  large
                />
                <Button
                  className="item"
                  style={{ width: '5em', height: '3em', backgroundColor: '#1DA1F2'}}
                >
                  <b>Get list</b>
                </Button>

            </FormGroup>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
