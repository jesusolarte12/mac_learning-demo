import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { Logo, LogoSoluciones } from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Este campo es obligatorio");
      return;
    }
    // Demo login - just navigate to dashboard
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen gradient-hero flex">
      {/* Left Side - Branding */}
      <div className="flex-1 flex flex-col items-center justify-center p-12">
        <div className="text-center">
          {/* Big Book Logo */}
          <div className="mb-8">
            <svg
              viewBox="0 0 120 120"
              className="w-48 h-48 text-white mx-auto"
              fill="currentColor"
            >
              {/* Open book shape */}
              <path d="M60 25 L20 35 L20 95 L60 85 L100 95 L100 35 Z" fill="none" stroke="currentColor" strokeWidth="3" />
              <line x1="60" y1="25" x2="60" y2="85" stroke="currentColor" strokeWidth="3" />
              {/* Book pages left */}
              <line x1="28" y1="45" x2="52" y2="40" stroke="currentColor" strokeWidth="2" />
              <line x1="28" y1="55" x2="52" y2="50" stroke="currentColor" strokeWidth="2" />
              <line x1="28" y1="65" x2="52" y2="60" stroke="currentColor" strokeWidth="2" />
              <line x1="28" y1="75" x2="52" y2="70" stroke="currentColor" strokeWidth="2" />
              {/* Book pages right */}
              <line x1="68" y1="40" x2="92" y2="45" stroke="currentColor" strokeWidth="2" />
              <line x1="68" y1="50" x2="92" y2="55" stroke="currentColor" strokeWidth="2" />
              <line x1="68" y1="60" x2="92" y2="65" stroke="currentColor" strokeWidth="2" />
              <line x1="68" y1="70" x2="92" y2="75" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>
          
          <h1 className="text-white text-4xl font-bold mb-2">MAC LEARNING</h1>
          
          <h2 className="text-white text-3xl font-light mb-4">
            Bienvenido al E-learning MAC
          </h2>
          
          <p className="text-white/80 text-lg max-w-md mx-auto">
            Actualice y refuerce sus conocimientos sobre nuestros servicios
          </p>
        </div>

        {/* Footer Logo */}
        <div className="absolute bottom-8 left-8">
          <div className="flex items-center gap-2">
            <svg viewBox="0 0 40 40" className="w-10 h-10 text-white" fill="currentColor">
              <path d="M10 30 Q5 15 20 10 Q25 8 28 15 Q35 10 35 20 Q35 35 20 35 Q8 35 10 30" />
            </svg>
            <span className="text-white font-bold">
              <span className="text-warning">MEGA</span>ARCHIVO
            </span>
          </div>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="flex items-center justify-center p-12">
        <div className="bg-card rounded-2xl shadow-2xl p-10 w-[420px]">
          <div className="text-center mb-8">
            <LogoSoluciones />
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-muted-foreground">
                Correo
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError("");
                }}
                className="border-border"
                placeholder="correo@empresa.com"
              />
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="password"
                className={error ? "text-destructive" : "text-muted-foreground"}
              >
                Contraseña
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setError("");
                  }}
                  className={error ? "border-destructive bg-destructive/10" : "border-border"}
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              {error && (
                <p className="text-destructive text-sm">{error}</p>
              )}
            </div>

            <div className="text-right">
              <button
                type="button"
                className="text-muted-foreground hover:text-foreground text-sm"
              >
                Olvidé mi contraseña
              </button>
            </div>

            <Button
              type="submit"
              variant="outline"
              className="w-full rounded-full border-2 border-border hover:bg-primary hover:text-primary-foreground transition-all"
            >
              Iniciar sesión
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
