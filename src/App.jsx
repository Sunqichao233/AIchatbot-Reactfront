import { Routes, Route, Navigate } from "react-router-dom"
import LoginForm from "@/components/LoginForm"
import RegisterForm from "@/components/RegisterForm"
import ResetPassword from "@/components/ResetPassword"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/register" element={<RegisterForm />} />
      <Route path="/reset" element={<ResetPassword />} />
    </Routes>
  )
}

export default App