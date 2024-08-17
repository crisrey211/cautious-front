import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import { AuthProvider } from './context/AuthContext'
import TaskPage from './pages/TaskPage'
import TaskFormPage from './pages/TaskFormPage'
import ProfilePage from './pages/ProfilePage'
import ProtectedRoute from './ProtectedRoute'
import { TaskProvider } from './context/TasksContext'
import NavbarCustom from '@components/Navbar'
import HomePage from './pages/HomePage'
function App() {
    return (
        <AuthProvider>
            <TaskProvider>
                <BrowserRouter>
                    <main className="container mx-auto">
                        <Routes>
                            {/* Public routes */}
                            <Route path="/" element={<HomePage />} />
                            <Route path="/login" element={<LoginPage />} />
                            <Route path="/register" element={<RegisterPage />} />

                            {/* Private routes */}
                            <Route element={<ProtectedRoute />}>
                                <Route path="/tasks" element={<TaskPage />} />
                                <Route path="/add-task" element={<TaskFormPage />} />
                                <Route path="/tasks/:id" element={<TaskFormPage />} />
                                <Route path="/profile" element={<ProfilePage />} />
                            </Route>
                        </Routes>
                    </main>
                </BrowserRouter>
            </TaskProvider>
        </AuthProvider>
    )
}

export default App
