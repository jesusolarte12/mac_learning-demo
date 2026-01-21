import { Home, Bell, LogOut } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Logo } from "./Logo";
import { Badge } from "./ui/badge";

interface HeaderProps {
  notificationCount?: number;
}

export const Header = ({ notificationCount = 30 }: HeaderProps) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <header className="bg-card border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/dashboard">
          <Logo variant="dark" />
        </Link>

        <nav className="flex items-center gap-8">
          <Link
            to="/dashboard"
            className="flex items-center gap-2 text-foreground hover:text-primary transition-colors font-medium"
          >
            <Home className="w-5 h-5" />
            Home
          </Link>

          <button className="flex items-center gap-2 text-foreground hover:text-primary transition-colors font-medium relative">
            <Bell className="w-5 h-5" />
            Notificaciones
            {notificationCount > 0 && (
              <Badge className="absolute -top-2 -right-6 bg-destructive text-destructive-foreground text-xs px-1.5 py-0.5 rounded-full min-w-[20px] h-5 flex items-center justify-center">
                {notificationCount}
              </Badge>
            )}
          </button>

          <button
            onClick={handleLogout}
            className="flex items-center gap-2 text-foreground hover:text-destructive transition-colors font-medium"
          >
            Salir
          </button>
        </nav>
      </div>
    </header>
  );
};
