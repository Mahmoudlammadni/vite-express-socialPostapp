import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './LogIn.jsx'
import { Provider } from 'react-redux'
import { legacy_createStore } from 'redux'
import redux from './redux.jsx'
const store = legacy_createStore(redux)
createRoot(document.getElementById('root')).render(
<Provider store={store}>  <App /></Provider>
  

)
