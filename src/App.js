import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Budget from "./pages/Budget";

const App = (_) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/budget" element={<Budget />}>
                    <Route
                        path="?paginaWeb=:boolean&consultoriaSeo=:boolean&campanyaAds=:boolean&pagines=:num&idiomes=:num"
                        element={<Budget />}
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
