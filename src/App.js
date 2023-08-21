import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Certifications from './pages/Certifications';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={<Home />}
                />
                <Route
                    path="/certifications"
                    element={<Certifications />}
                />
                <Route
                    path="/projects"
                    element={<Projects />}
                />
                <Route
                    path="/contact"
                    element={<Contact />}
                />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
