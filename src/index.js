import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Dashboard from './Dashboard';
import Sidebars from './Sidebars';
import PumpManagement from './PumpManagement';
import PumpStatus from './PumpStatus';
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function Page_Routing(){
	return (
		<BrowserRouter>
			<Routes>
				<Route index element={<Dashboard />} />
				<Route path="/App" element={<App />} />
				<Route path="/PumpManagement" element={<PumpManagement />} />
			</Routes>
		</BrowserRouter>
	);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <Page_Routing/>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
