import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function LoginForm() {
  const [activeTab, setActiveTab] = useState("username")
  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <Card className="w-full max-w-md p-6 rounded-xl shadow-md bg-white">
        <h2 className="text-2xl font-bold mb-6">登录</h2>

        {/* Tabs */}
        <div className="flex border-b mb-4 text-sm font-medium text-gray-500">
          <button
            onClick={() => setActiveTab("username")}
            className={`px-4 pb-2 ${activeTab === "username" ? "text-blue-600 border-b-2 border-blue-600" : ""}`}
          >
            用户名
          </button>
          <button
            onClick={() => setActiveTab("phone")}
            className={`px-4 pb-2 ${activeTab === "phone" ? "text-blue-600 border-b-2 border-blue-600" : ""}`}
          >
            手机号
          </button>
        </div>

        {/* Input Fields */}
        <div className="space-y-4">
          <Input placeholder={activeTab === "username" ? "请输入用户名" : "请输入手机号"} />
          <Input placeholder="请输入密码" type="password" />
        </div>

        {/* Links */}
        <div className="flex justify-between text-sm text-blue-600 mt-3">
          <span className="cursor-pointer hover:underline" onClick={() => navigate("/register")}>新用户注册</span>
          <span className="cursor-pointer hover:underline" onClick={() => navigate("/reset")}>忘记密码?</span>
        </div>

        {/* Login Button */}
        <Button className="w-full mt-5">
          登 录
        </Button>

        {/* 协议 */}
        <p className="text-xs text-center text-gray-500 mt-4">
          登录即同意
          <a href="#" className="text-blue-600 mx-1 hover:underline">《用户协议》</a>
          和
          <a href="#" className="text-blue-600 ml-1 hover:underline">《隐私政策》</a>
        </p>
      </Card>
    </div>
  )
}