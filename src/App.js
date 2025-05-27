import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import './lib/i18n';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/pages/HomePage';
import FatSeparatorsPage from './components/pages/FatSeparatorsPage';
import SewerCleaningPage from './components/pages/SewerCleaningPage';
import BiomethaneProductionPage from './components/pages/BiomethaneProductionPage';
import AboutPage from './components/pages/AboutPage';
import ContactPage from './components/pages/ContactPage';
import MunicipalitiesPage from './components/pages/MunicipalitiesPage';
import EnergyPage from './components/pages/EnergyPage';
import NotFoundPage from './components/pages/NotFoundPage';
function App() {
    useEffect(() => {
        // Initialize any global scripts or tracking here
    }, []);
    return (_jsx(Router, { children: _jsxs("div", { className: "flex flex-col min-h-screen", children: [_jsx(Header, {}), _jsx("main", { className: "flex-grow", children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(HomePage, {}) }), _jsx(Route, { path: "/fat-separators", element: _jsx(FatSeparatorsPage, {}) }), _jsx(Route, { path: "/sewer-cleaning", element: _jsx(SewerCleaningPage, {}) }), _jsx(Route, { path: "/biomethane-production", element: _jsx(BiomethaneProductionPage, {}) }), _jsx(Route, { path: "/about", element: _jsx(AboutPage, {}) }), _jsx(Route, { path: "/contact", element: _jsx(ContactPage, {}) }), _jsx(Route, { path: "/municipalities", element: _jsx(MunicipalitiesPage, {}) }), _jsx(Route, { path: "/energy-companies", element: _jsx(EnergyPage, {}) }), _jsx(Route, { path: "*", element: _jsx(NotFoundPage, {}) })] }) }), _jsx(Footer, {})] }) }));
}
export default App;
