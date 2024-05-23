import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<h1>Main page</h1>} />
                <Route path="/login" element={<h1>Login</h1>} />
                <Route path="/register" element={<h1>Register</h1>} />
                <Route path="/task" element={<h1>Task page</h1>} />
                <Route path="/add-task" element={<h1>New task</h1>} />
                <Route path="/task/:id" element={<h1>Update task</h1>} />
                <Route path="/profile" element={<h1>Profile page</h1>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
