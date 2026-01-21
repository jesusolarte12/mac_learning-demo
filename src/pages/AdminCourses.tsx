import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar } from "lucide-react";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { mockCourseFolders } from "@/data/mockData";

const AdminCourses = () => {
  const navigate = useNavigate();
  const [selectedFolders, setSelectedFolders] = useState<string[]>([]);

  const toggleFolder = (id: string) => {
    setSelectedFolders((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-6 py-8">
        <div className="card-elevated">
          {/* Header */}
          <div className="p-6 border-b border-border flex items-center justify-between">
            <button
              onClick={() => navigate("/dashboard")}
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="text-xl font-bold text-foreground">
                Administrar cursos
              </span>
            </button>

            <Button className="bg-primary text-primary-foreground">
              Crear carpeta
            </Button>
          </div>

          {/* Grading Criteria */}
          <div className="p-6 border-b border-border">
            <div className="flex items-center justify-between p-4 bg-secondary/30 rounded-lg">
              <span className="text-foreground">Criterios de calificación</span>
              <Button variant="outline" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Configurar
              </Button>
            </div>
          </div>

          {/* Course Folders Grid */}
          <div className="p-6">
            <div className="grid grid-cols-3 gap-6">
              {mockCourseFolders.map((folder) => (
                <div
                  key={folder.id}
                  onClick={() => navigate(`/course/${folder.id}`)}
                  className="card-elevated overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300 group relative"
                >
                  {/* Selection checkbox */}
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFolder(folder.id);
                    }}
                    className="absolute top-4 right-4 z-10 flex gap-2"
                  >
                    <div
                      className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                        selectedFolders.includes(folder.id)
                          ? "bg-accent border-accent text-accent-foreground"
                          : "border-white bg-white/50"
                      }`}
                    >
                      {selectedFolders.includes(folder.id) && (
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                    </div>
                    <div className="w-5 h-5 rounded border-2 border-white bg-white/50" />
                  </div>

                  {/* Image */}
                  <div className="h-48 overflow-hidden">
                    <img
                      src={folder.image}
                      alt={folder.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <h3 className="font-semibold text-foreground mb-2 line-clamp-1">
                      {folder.name}
                    </h3>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>Cursos {folder.coursesCount}</span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {folder.date}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminCourses;
