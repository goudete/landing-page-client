import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import { Button, FormGroup, InputGroup } from '@blueprintjs/core';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51H39zhHghzEwbJh6ffD4puoh6W3Hq4iiwcojkcOmSADuOCrcytX8KjcbwG3w20G5V7n7vqNoTfyUenEnrboUacAd008RwwuCD3');


function App() {
  const handleClick = async (event) => {
    // Get Stripe.js instance
    const stripe = await stripePromise;

    // Call your backend to create the Checkout Session
    const response = await fetch('/create-checkout-session', { method: 'POST' });

    const session = await response.json();

    // When the customer clicks on the button, redirect them to Checkout.
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      // If `redirectToCheckout` fails due to a browser or network
      // error, display the localized error message to your customer
      // using `result.error.message`.
    }
  };
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
            <button role="link" onClick={handleClick}>
              Checkout
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
