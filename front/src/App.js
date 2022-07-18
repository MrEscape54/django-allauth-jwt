import { Provider } from 'react-redux'
import store from './store'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './containers/Home'
import Error404 from './containers/errors/Error404'

import Signup from './containers/Auth/Signup'
import Login from './containers/Auth/Login'
import Activate from './containers/Auth/Activate'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {/* Error display */}
          <Route path="*" element={<Error404 />} />

          {/* Authentication */}
          <Route exact path="/" element={<Home />} />
          <Route exact path='/signup' element={<Signup />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/registration/account-confirm-email/:token' element={<Activate />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
