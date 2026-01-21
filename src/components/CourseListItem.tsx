import { Star, Calendar, Users, Eye } from "lucide-react";
import { Course } from "@/data/mockData";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { Button } from "./ui/button";

interface CourseListItemProps {
  course: Course;
  showResponsibleInfo?: boolean;
  onClick?: () => void;
}

export const CourseListItem = ({ course, showResponsibleInfo = false, onClick }: CourseListItemProps) => {
  const getProgressColor = (progress: number) => {
    if (progress === 0) return "text-muted-foreground";
    if (progress === 100) return "text-success";
    if (progress >= 50) return "text-info";
    return "text-muted-foreground";
  };

  const getActionButton = (progress: number) => {
    if (progress === 0) return "Empezar";
    if (progress === 100) return "Repasar";
    return "Retomar";
  };

  return (
    <div
      onClick={onClick}
      className="flex items-center justify-between py-4 px-4 hover:bg-secondary/50 rounded-lg cursor-pointer transition-colors"
    >
      <div className="flex items-center gap-4 flex-1">
        {/* Status/Progress */}
        <div className="w-16 flex justify-center">
          {course.isNew ? (
            <span className="badge-new">NUEVO</span>
          ) : (
            <span className={`font-semibold ${getProgressColor(course.progress)}`}>
              {course.progress}%
            </span>
          )}
        </div>

        {/* Course Info */}
        <div className="flex-1">
          <h4 className="font-semibold text-foreground flex items-center gap-2">
            {course.title}
            {showResponsibleInfo && (
              <span className="flex items-center gap-1">
                <Star className="w-4 h-4 text-warning fill-warning" />
                <span className="text-sm text-muted-foreground">{course.rating}</span>
              </span>
            )}
          </h4>
          <p className="text-sm text-muted-foreground">{course.category}</p>
        </div>

        {/* Progress fraction */}
        <div className="text-sm text-muted-foreground">
          {course.completed}/{course.total}
        </div>

        {showResponsibleInfo && (
          <>
            {/* Date */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground w-32">
              <Calendar className="w-4 h-4" />
              {course.date}
            </div>

            {/* Avatars */}
            <div className="flex -space-x-2 w-24">
              {course.responsibleAvatars.slice(0, 4).map((avatar, idx) => (
                <Avatar key={idx} className="w-8 h-8 border-2 border-card">
                  <AvatarImage src={avatar} />
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
              ))}
            </div>

            {/* Participants */}
            <div className="flex items-center gap-1 text-sm text-muted-foreground w-16">
              <Users className="w-4 h-4" />
              {course.participants}
            </div>

            {/* Views */}
            <div className="flex items-center gap-1 text-sm text-muted-foreground w-16">
              <Eye className="w-4 h-4" />
              {course.views}
            </div>
          </>
        )}

        {/* Date for non-responsible view */}
        {!showResponsibleInfo && course.progress > 0 && (
          <div className="text-sm text-muted-foreground">
            {course.date}
          </div>
        )}
      </div>

      {/* Action Button */}
      {!showResponsibleInfo && (
        <Button variant="outline" size="sm" className="ml-4">
          {getActionButton(course.progress)}
        </Button>
      )}
    </div>
  );
};
