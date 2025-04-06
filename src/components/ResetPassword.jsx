import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useNavigate } from "react-router-dom"

export default function ResetPassword() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <Card className="w-full max-w-md p-6 rounded-xl shadow-md bg-white">
        <h2 className="text-2xl font-bold mb-6">找回密码</h2>
        <div className="space-y-4">
          <Input placeholder="请输入邮箱 / 手机号" />
          <Button className="w-full">发送重置链接</Button>
          <p className="text-sm text-center text-gray-500 mt-4">
            想起密码了？<span className="text-blue-600 cursor-pointer" onClick={() => navigate("/login")}>返回登录</span>
          </p>
        </div>
      </Card>
    </div>
  )
}