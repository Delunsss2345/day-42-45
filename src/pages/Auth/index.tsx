import LoginForm from "@/components/LoginForm";
import RegisterForm from "@/components/ResigterForm";
import { useState } from "react";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="bg-white shadow-lg rounded-2xl w-full max-w-md p-8">
        <h1 className="text-2xl font-bold text-center mb-6">
          {isLogin ? "Đăng nhập" : "Đăng ký"}
        </h1>

        {isLogin ? <LoginForm /> : <RegisterForm />}

        <p className="text-center text-sm text-gray-600 mt-4">
          {isLogin ? "Chưa có tài khoản?" : "Đã có tài khoản?"}{" "}
          <button
            type="button"
            onClick={() => setIsLogin(!isLogin)}
            className="text-blue-600 hover:underline font-medium"
          >
            {isLogin ? "Đăng ký ngay" : "Đăng nhập"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthPage;
