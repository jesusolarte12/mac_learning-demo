import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/Header";
import { UserProfileCard } from "@/components/UserProfileCard";
import { CourseListItem } from "@/components/CourseListItem";
import { Button } from "@/components/ui/button";
import { currentUser, mockCourses, mockCourseFolders } from "@/data/mockData";

const CourseDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const folder = mockCourseFolders.find((f) => f.id === id) || mockCourseFolders[0];

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
                <button
                  onClick={() => navigate("/dashboard")}
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ArrowLeft className="w-5 h-5" />
                  <span className="text-xl font-bold text-foreground">
                    {folder.name}
                  </span>
                </button>

                <div className="flex gap-3">
                  <Button variant="destructive" className="rounded-full px-6">
                    Eliminar
                  </Button>
                  <Button variant="outline" className="bg-primary text-primary-foreground rounded-full px-6">
                    Editar
                  </Button>
                  <Button className="bg-primary text-primary-foreground rounded-full px-6">
                    Crear curso
                  </Button>
                </div>
              </div>

              {/* Course Info */}
              <div className="flex gap-8 mb-8">
                <div className="w-80 flex-shrink-0">
                  <img
                    src={folder.image}
                    alt={folder.name}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>

                <div className="flex-1">
                  <p className="text-muted-foreground mb-6">
                    Los recursos humanos de una empresa (RRHH) o human resources (HR) en
                    inglés, es una función y / o departamento del área de 'Gestión y
                    administración de empresas' El término gerente denomina a quien está a
                    cargo de la dirección o coordinación de una organización, institución o
                    empresa, o de una parte de ella, o un grupo de trabajo.
                  </p>

                  <div className="flex items-center gap-2 mb-6">
                    <span className="font-semibold">Cursos disponibles</span>
                    <span className="text-primary font-bold">{folder.coursesCount}</span>
                  </div>

                  {/* Stats */}
                  <div className="flex gap-8">
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground mb-2">Por iniciar</p>
                      <div className="progress-stat progress-stat-pending">2</div>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground mb-2">En gestión</p>
                      <div className="progress-stat progress-stat-inprogress">1</div>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground mb-2">Terminados</p>
                      <div className="progress-stat progress-stat-complete">28</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Courses List */}
              <div>
                <h2 className="text-xl font-bold mb-4">Cursos</h2>
                <div className="space-y-2">
                  {mockCourses.map((course) => (
                    <CourseListItem
                      key={course.id}
                      course={course}
                      onClick={() => navigate(`/forum/${course.id}`)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CourseDetail;
