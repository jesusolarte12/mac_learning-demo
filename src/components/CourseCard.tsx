import { Course } from "@/data/mockData";
import { Progress } from "./ui/progress";

interface CourseCardProps {
  course: Course;
  onClick?: () => void;
}

export const CourseCard = ({ course, onClick }: CourseCardProps) => {
  const progressPercentage = (course.completed / course.total) * 100;

  return (
    <div
      onClick={onClick}
      className="card-elevated overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300 group"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-semibold text-foreground mb-3 line-clamp-2">
          {course.title}
        </h3>

        {/* Progress */}
        <div className="flex items-center gap-3">
          <Progress value={progressPercentage} className="flex-1 h-2" />
          <span className="text-sm text-muted-foreground">
            {course.completed}/{course.total}
          </span>
        </div>
      </div>
    </div>
  );
};
