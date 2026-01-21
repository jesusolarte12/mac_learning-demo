import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LayoutGrid, List, Search } from "lucide-react";
import { Header } from "@/components/Header";
import { UserProfileCard } from "@/components/UserProfileCard";
import { CourseCard } from "@/components/CourseCard";
import { CourseListItem } from "@/components/CourseListItem";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { currentUser, mockCourses, mockCourseFolders } from "@/data/mockData";

const Dashboard = () => {
  const navigate = useNavigate();
  const [viewMode, setViewMode] = useState<"grid" | "list">("list");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("mis-cursos");

  const filteredCourses = mockCourses.filter(
    (course) =>
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-6 py-8">
        <div className="flex gap-8">
          {/* Left Sidebar - User Profile */}
          <aside className="w-80 flex-shrink-0">
            <UserProfileCard user={currentUser} />
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            <div className="card-elevated p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h1 className="text-2xl font-bold text-foreground">Home</h1>
                <Button
                  onClick={() => navigate("/admin/courses")}
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Crear carpeta
                </Button>
              </div>

              {/* Tabs */}
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <div className="flex items-center justify-between border-b border-border pb-4 mb-6">
                  <TabsList className="bg-transparent p-0 h-auto">
                    <TabsTrigger
                      value="mis-cursos"
                      className="data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:text-foreground data-[state=active]:shadow-none rounded-none px-4 pb-2 bg-transparent"
                    >
                      Mis cursos
                    </TabsTrigger>
                    <TabsTrigger
                      value="responsable"
                      className="data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:text-foreground data-[state=active]:shadow-none rounded-none px-4 pb-2 bg-transparent"
                    >
                      Responsable
                    </TabsTrigger>
                    <TabsTrigger
                      value="configurar"
                      className="data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:text-foreground data-[state=active]:shadow-none rounded-none px-4 pb-2 bg-transparent"
                    >
                      Configurar
                    </TabsTrigger>
                  </TabsList>

                  {/* View Toggle */}
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-muted-foreground">
                      Vista {viewMode === "grid" ? "mosaico" : "en lista"}
                    </span>
                    <div className="flex gap-1">
                      <Button
                        variant={viewMode === "grid" ? "secondary" : "ghost"}
                        size="icon"
                        onClick={() => setViewMode("grid")}
                      >
                        <LayoutGrid className="w-4 h-4" />
                      </Button>
                      <Button
                        variant={viewMode === "list" ? "secondary" : "ghost"}
                        size="icon"
                        onClick={() => setViewMode("list")}
                      >
                        <List className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Tab: Mis Cursos */}
                <TabsContent value="mis-cursos" className="mt-0">
                  {viewMode === "list" && (
                    <div className="mb-4">
                      <div className="relative max-w-md ml-auto">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input
                          placeholder="Buscar"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="pl-10"
                        />
                      </div>
                    </div>
                  )}

                  {viewMode === "grid" ? (
                    <div className="grid grid-cols-3 gap-6">
                      {mockCourseFolders.map((folder) => (
                        <CourseCard
                          key={folder.id}
                          course={{
                            id: folder.id,
                            title: folder.name,
                            image: folder.image,
                            completed: Math.floor(Math.random() * folder.coursesCount),
                            total: folder.coursesCount,
                            category: "",
                            rating: 0,
                            date: folder.date,
                            participants: 0,
                            views: 0,
                            progress: 0,
                            isNew: false,
                            responsibleAvatars: [],
                          }}
                          onClick={() => navigate(`/course/${folder.id}`)}
                        />
                      ))}
                    </div>
                  ) : (
                    <div className="space-y-2">
                      {/* Course Group */}
                      <div className="bg-secondary/30 rounded-lg p-2 mb-4">
                        <div className="flex items-center justify-between px-4 py-2">
                          <span className="font-medium text-foreground">
                            Cursos de recurso humano
                          </span>
                          <span className="text-muted-foreground">1/4</span>
                        </div>
                      </div>

                      {filteredCourses.map((course) => (
                        <CourseListItem
                          key={course.id}
                          course={course}
                          onClick={() => navigate(`/course/${course.id}`)}
                        />
                      ))}
                    </div>
                  )}
                </TabsContent>

                {/* Tab: Responsable */}
                <TabsContent value="responsable" className="mt-0">
                  <div className="space-y-2">
                    <div className="px-4 py-2 text-sm font-medium text-muted-foreground border-b border-border">
                      Curso
                    </div>
                    {filteredCourses.map((course) => (
                      <CourseListItem
                        key={course.id}
                        course={course}
                        showResponsibleInfo
                        onClick={() => navigate(`/course/${course.id}`)}
                      />
                    ))}
                  </div>
                </TabsContent>

                {/* Tab: Configurar */}
                <TabsContent value="configurar" className="mt-0">
                  <div className="text-center py-12 text-muted-foreground">
                    <p>Opciones de configuración del sistema</p>
                    <div className="mt-6 flex justify-center gap-4">
                      <Button
                        variant="outline"
                        onClick={() => navigate("/admin/users")}
                      >
                        Administrar usuarios
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => navigate("/admin/courses")}
                      >
                        Administrar cursos
                      </Button>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
