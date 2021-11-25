import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Form from "./pages/Form";

const App = (_) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/form" element={<Form />}></Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
