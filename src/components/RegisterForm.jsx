import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useNavigate } from "react-router-dom"

export default function RegisterForm() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <Card className="w-full max-w-md p-6 rounded-xl shadow-md bg-white">
        <h2 className="text-2xl font-bold mb-6">注册账号</h2>
        <div className="space-y-4">
          <Input placeholder="请输入用户名" />
          <Input placeholder="请输入密码" type="password" />
          <Input placeholder="确认密码" type="password" />
          <Button className="w-full">注 册</Button>
          <p className="text-sm text-center text-gray-500 mt-4">
            已有账号？<span className="text-blue-600 cursor-pointer" onClick={() => navigate("/login")}>去登录</span>
          </p>
        </div>
      </Card>
    </div>
  )
}