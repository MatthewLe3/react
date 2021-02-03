import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.css'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom'
import store from './redux/store'
import { Provider } from 'react-redux'
// import './mock/mock'

// console.log(process.env.REACT_APP_MOCK_ENV,'nmmnmnmn')


ReactDOM.render(
	
		<Provider store={store}>
			<Router>
			{/* <React.StrictMode> */}
				<App />
			{/* </React.StrictMode> */}
			</Router>
		</Provider>,
	document.getElementById('root')
);
reportWebVitals();
