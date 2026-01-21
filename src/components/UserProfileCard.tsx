import { Settings } from "lucide-react";
import { User } from "@/data/mockData";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";

interface UserProfileCardProps {
  user: User;
  onSettings?: () => void;
}

export const UserProfileCard = ({ user, onSettings }: UserProfileCardProps) => {
  return (
    <div className="card-elevated p-6 relative">
      {/* Settings Button */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
        onClick={onSettings}
      >
        <Settings className="w-5 h-5" />
      </Button>

      {/* Avatar */}
      <div className="flex justify-center mb-6">
        <Avatar className="w-40 h-40 border-4 border-border">
          <AvatarImage src={user.avatar} alt={user.name} className="object-cover" />
          <AvatarFallback className="text-3xl">
            {user.name.split(" ").map(n => n[0]).join("")}
          </AvatarFallback>
        </Avatar>
      </div>

      {/* User Info */}
      <div className="text-center mb-6">
        <h2 className="text-lg font-bold text-foreground mb-1">{user.name}</h2>
        <p className="text-muted-foreground text-sm">{user.role}</p>
        <p className="text-muted-foreground text-sm">{user.age} años</p>
        <p className="text-muted-foreground text-sm mt-2">vinculación a la compañía:</p>
        <p className="text-muted-foreground text-sm">{user.yearsAtCompany} años</p>
        <p className="text-muted-foreground text-sm mt-2">{user.email}</p>
      </div>

      {/* Stats */}
      <div className="border-t border-border pt-4 space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-muted-foreground">Cursos</span>
          <span className="font-semibold text-foreground">{user.stats.courses}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-muted-foreground">Cursos en proceso</span>
          <span className="font-semibold text-foreground">{user.stats.inProgress}</span>
        </div>
        <div className="flex justify-between items-center border-t border-border pt-3">
          <span className="text-muted-foreground">Responsable de</span>
          <span className="font-semibold text-foreground">{user.stats.responsible}</span>
        </div>
      </div>
    </div>
  );
};
