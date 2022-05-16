import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Router from './Router';
import { store, persistor } from './Store';
import './App.css';


function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
       <div className='wrapper'>
        <Router />
       </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
