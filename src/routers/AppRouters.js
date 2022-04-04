import { Routes, Route, BrowserRouter } from "react-router-dom";


export const AppRouters = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingScreen /> } />
            </Routes>
        </BrowserRouter>
    )
}