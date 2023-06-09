// Main App component, where all the component will be displayed

// imports
import React, { Fragment, useEffect } from 'react';
import SearchBar from './Components/Layouts/SearchBar';
import Logs from './Components/logs/Logs';
import Addbtn from './Components/Layouts/Addbtn';
import AddLogModal from './Components/logs/AddLogModal';
import EditLogModal from './Components/logs/EditLogModal';
import AddDevModal from './Components/Developers/AddDevModal';
import DevListModal from './Components/Developers/DevListModal';
import store from './store';
import { Provider } from 'react-redux';

import './App.css';

// materialize default css and js
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

const App = () => {

  // useEffect is a hook that runs after the component is rendered
  useEffect(() => {
      
    // initialize materialize js
    M.AutoInit();
  });

  return (
    <Provider store={store}> 
      <Fragment>

        {/* search bar Component */}
        <SearchBar/>
        <div className='container'>
          <Addbtn/>
          <AddLogModal/>
          <EditLogModal />
          <AddDevModal/>
          <DevListModal/>
          <Logs/>
        </div>
        
      </Fragment>
    </Provider>
  );
}

export default App;
