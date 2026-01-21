import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Search, Eye, MessageSquare } from "lucide-react";
import { Header } from "@/components/Header";
import { UserProfileCard } from "@/components/UserProfileCard";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { currentUser, mockForumPosts, mockCourses } from "@/data/mockData";

const Forum = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [searchQuery, setSearchQuery] = useState("");

  const course = mockCourses.find((c) => c.id === id) || mockCourses[0];

  const filteredPosts = mockForumPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.content.toLowerCase().includes(searchQuery.toLowerCase())
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
                <button
                  onClick={() => navigate(-1)}
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ArrowLeft className="w-5 h-5" />
                  <span className="text-xl font-bold text-foreground">Foro</span>
                </button>

                <Button className="bg-primary text-primary-foreground rounded-full px-6">
                  Hacer pregunta
                </Button>
              </div>

              {/* Course Title & Search */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-semibold">Curso {course.title.toLowerCase()}</h2>
                <div className="relative w-64">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    placeholder="Buscar"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              {/* Forum Posts */}
              <div className="space-y-6">
                {filteredPosts.map((post) => (
                  <div
                    key={post.id}
                    className="border-b border-border pb-6 last:border-0"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-1">
                        {/* Post Title */}
                        <div className="flex items-center gap-3 mb-2">
                          {post.isNew && (
                            <span className="badge-new">NUEVO</span>
                          )}
                          <h3 className="font-semibold text-foreground">
                            {post.title}
                          </h3>
                        </div>

                        {/* Post Content */}
                        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                          {post.content}
                        </p>

                        {/* Author */}
                        <div className="flex items-center gap-2">
                          <Avatar className="w-8 h-8">
                            <AvatarImage src={post.authorAvatar} />
                            <AvatarFallback>
                              {post.author.split(" ").map((n) => n[0]).join("")}
                            </AvatarFallback>
                          </Avatar>
                          <span className="text-sm text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                            {post.author}
                          </span>
                        </div>
                      </div>

                      {/* Stats */}
                      <div className="flex flex-col items-end gap-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          {post.views}
                        </div>
                        <div className="flex items-center gap-1">
                          <MessageSquare className="w-4 h-4" />
                          {post.comments}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Forum;
