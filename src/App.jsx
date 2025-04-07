import { Routes, Route, Navigate } from "react-router-dom"
import LoginForm from "@/components/LoginForm"
import RegisterForm from "@/components/RegisterForm"
import ResetPassword from "@/components/ResetPassword"
import LandingPage from "@/components/LandingPage";

function App() {
  return (
    <Routes>
      {/* 首页显示落地页 */}
      <Route path="/" element={<LandingPage />} />

      {/* 其他功能页 */}
      <Route path="/login" element={<LoginForm />} />
      <Route path="/register" element={<RegisterForm />} />
      <Route path="/reset" element={<ResetPassword />} />

      {/* 兜底路径跳转到 / */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;