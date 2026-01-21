import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Search, Users } from "lucide-react";
import { Header } from "@/components/Header";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { mockUsers, User } from "@/data/mockData";

const AdminUsers = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedUser, setSelectedUser] = useState<User | null>(mockUsers[1]);

  const filteredUsers = mockUsers.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Group users by first letter
  const groupedUsers = filteredUsers.reduce((acc, user) => {
    const letter = user.name[0].toUpperCase();
    if (!acc[letter]) acc[letter] = [];
    acc[letter].push(user);
    return acc;
  }, {} as Record<string, User[]>);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-6 py-8">
        <div className="card-elevated">
          {/* Header */}
          <div className="p-6 border-b border-border">
            <button
              onClick={() => navigate("/dashboard")}
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-4"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="text-xl font-bold text-foreground">
                administrar usuarios
              </span>
            </button>
          </div>

          <div className="flex">
            {/* Left Side - User List */}
            <div className="w-1/3 border-r border-border p-6">
              <Button
                variant="outline"
                className="w-full mb-6 rounded-full"
              >
                Crear usuario
              </Button>

              {/* Search */}
              <div className="relative mb-6">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Buscar"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* User List */}
              <div className="space-y-4 max-h-[500px] overflow-y-auto">
                {Object.entries(groupedUsers).map(([letter, users]) => (
                  <div key={letter}>
                    <div className="text-sm font-medium text-muted-foreground mb-2">
                      {letter}
                    </div>
                    {users.map((user) => (
                      <div
                        key={user.id}
                        onClick={() => setSelectedUser(user)}
                        className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer transition-colors ${
                          selectedUser?.id === user.id
                            ? "bg-secondary"
                            : "hover:bg-secondary/50"
                        }`}
                      >
                        <Avatar className="w-10 h-10">
                          <AvatarImage src={user.avatar} />
                          <AvatarFallback>
                            {user.name.split(" ").map((n) => n[0]).join("")}
                          </AvatarFallback>
                        </Avatar>
                        <span className="flex-1 text-sm font-medium">
                          {user.name}
                        </span>
                        {user.isAdmin && (
                          <Badge variant="outline" className="text-xs">
                            Admin
                          </Badge>
                        )}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - User Details */}
            {selectedUser && (
              <div className="flex-1 p-6">
                {/* Actions */}
                <div className="flex justify-end gap-4 mb-6">
                  <Button variant="destructive" className="rounded-full px-8">
                    Eliminar
                  </Button>
                  <Button className="bg-primary text-primary-foreground rounded-full px-8">
                    Editar
                  </Button>
                </div>

                {/* User Info */}
                <div className="flex gap-8 mb-8">
                  <Avatar className="w-32 h-32">
                    <AvatarImage src={selectedUser.avatar} />
                    <AvatarFallback className="text-3xl">
                      {selectedUser.name.split(" ").map((n) => n[0]).join("")}
                    </AvatarFallback>
                  </Avatar>

                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-2">
                      <h2 className="text-xl font-bold">{selectedUser.name}</h2>
                      {selectedUser.isAdmin && (
                        <Badge variant="outline">Admin</Badge>
                      )}
                    </div>
                    <p className="text-muted-foreground">{selectedUser.role}</p>
                    <p className="text-muted-foreground">{selectedUser.age} años</p>
                    
                    <div className="mt-4 text-sm text-muted-foreground">
                      <p>Fecha de vinculación: 12 / dic / 2015</p>
                      <p>{selectedUser.email}</p>
                    </div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {selectedUser.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="rounded-full">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Permissions & Courses */}
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold mb-4">Permisos para</h3>
                    <ul className="space-y-2">
                      <li className="font-medium text-primary">Configurar sistema</li>
                      <li className="font-medium text-primary">Administrar usuarios</li>
                      <li className="font-medium text-primary">Administrar carpetas</li>
                    </ul>

                    <h3 className="font-semibold mt-6 mb-4">Responsable de curso</h3>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between p-2 border border-border rounded-lg">
                        <span className="text-sm">Gerencia ocupacional 2021</span>
                        <span className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Users className="w-4 h-4" />
                          (5)
                        </span>
                      </div>
                      <div className="flex items-center justify-between p-2 border border-border rounded-lg">
                        <span className="text-sm">Misión de la empresa</span>
                        <span className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Users className="w-4 h-4" />
                          (1)
                        </span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-4">Cursos</h3>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between p-2 border border-border rounded-lg">
                        <span className="text-sm">Gerencia ocupacional 2021</span>
                        <span className="flex items-center gap-2 text-sm">
                          <Users className="w-4 h-4 text-muted-foreground" />
                          50%
                        </span>
                      </div>
                      <div className="flex items-center justify-between p-2 border border-border rounded-lg">
                        <span className="text-sm">Misión de la empresa</span>
                        <span className="flex items-center gap-2 text-sm">
                          <Users className="w-4 h-4 text-muted-foreground" />
                          35%
                        </span>
                      </div>
                      <div className="flex items-center justify-between p-2 border border-border rounded-lg">
                        <span className="text-sm">Misión de la empresa</span>
                        <span className="flex items-center gap-2 text-sm">
                          <Users className="w-4 h-4 text-muted-foreground" />
                          0%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminUsers;
