// Mock data for MAC Learning E-learning Platform

export interface User {
  id: string;
  name: string;
  role: string;
  age: number;
  yearsAtCompany: number;
  email: string;
  avatar: string;
  isAdmin: boolean;
  tags: string[];
  stats: {
    courses: number;
    inProgress: number;
    responsible: number;
  };
}

export interface Course {
  id: string;
  title: string;
  category: string;
  rating: number;
  date: string;
  participants: number;
  views: number;
  progress: number;
  isNew: boolean;
  image: string;
  completed: number;
  total: number;
  responsibleAvatars: string[];
}

export interface CourseFolder {
  id: string;
  name: string;
  coursesCount: number;
  date: string;
  image: string;
}

export interface ForumPost {
  id: string;
  title: string;
  content: string;
  author: string;
  authorAvatar: string;
  views: number;
  comments: number;
  isNew: boolean;
}

// Mock Users
export const mockUsers: User[] = [
  {
    id: "1",
    name: "María Antonia Celles",
    role: "Secretaria administrativa",
    age: 32,
    yearsAtCompany: 1.3,
    email: "maria.celles@empresa.com",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face",
    isAdmin: false,
    tags: [],
    stats: {
      courses: 12,
      inProgress: 7,
      responsible: 4,
    },
  },
  {
    id: "2",
    name: "Marcos Aurelio Gutierrez",
    role: "Secretario administrativo",
    age: 32,
    yearsAtCompany: 9,
    email: "marcos.gutierrez@empresa.com",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
    isAdmin: true,
    tags: ["Administrativo", "Hombre", "Participante encuestas", "Grupo investigativo", "Gerencia", "Turno nocturno", "Equipo de emergencia", "Vocalista"],
    stats: {
      courses: 8,
      inProgress: 3,
      responsible: 2,
    },
  },
  {
    id: "3",
    name: "Antoni Guerrero",
    role: "Diseñador gráfico",
    age: 28,
    yearsAtCompany: 2.5,
    email: "antoni.guerrero@empresa.com",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
    isAdmin: false,
    tags: ["Diseño", "Creatividad"],
    stats: {
      courses: 5,
      inProgress: 2,
      responsible: 0,
    },
  },
  {
    id: "4",
    name: "Brian Mesro",
    role: "Desarrollador senior",
    age: 35,
    yearsAtCompany: 4,
    email: "brian.mesro@empresa.com",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face",
    isAdmin: true,
    tags: ["Tecnología", "Desarrollo"],
    stats: {
      courses: 15,
      inProgress: 5,
      responsible: 8,
    },
  },
  {
    id: "5",
    name: "Sol Almeida",
    role: "Recursos Humanos",
    age: 30,
    yearsAtCompany: 3,
    email: "sol.almeida@empresa.com",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
    isAdmin: true,
    tags: ["RRHH", "Capacitación"],
    stats: {
      courses: 10,
      inProgress: 4,
      responsible: 6,
    },
  },
  {
    id: "6",
    name: "Rosa Suarez",
    role: "Contadora",
    age: 40,
    yearsAtCompany: 7,
    email: "rosa.suarez@empresa.com",
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&h=200&fit=crop&crop=face",
    isAdmin: false,
    tags: ["Finanzas"],
    stats: {
      courses: 6,
      inProgress: 1,
      responsible: 0,
    },
  },
];

// Mock Courses
export const mockCourses: Course[] = [
  {
    id: "1",
    title: "Entrevistas para nuevo personal",
    category: "Cursos para recursos humanos",
    rating: 3,
    date: "24 / Ene / 2021",
    participants: 24,
    views: 240,
    progress: 0,
    isNew: true,
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400&h=250&fit=crop",
    completed: 0,
    total: 4,
    responsibleAvatars: [
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&h=50&fit=crop&crop=face",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face",
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face",
    ],
  },
  {
    id: "2",
    title: "Entrevistas para nuevo personal",
    category: "Recursos humanos",
    rating: 4,
    date: "24 / Ene / 2019",
    participants: 3,
    views: 32,
    progress: 0,
    isNew: false,
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400&h=250&fit=crop",
    completed: 0,
    total: 3,
    responsibleAvatars: [
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face",
    ],
  },
  {
    id: "3",
    title: "Mejoramiento del ambiente laboral",
    category: "Recursos humanos",
    rating: 5,
    date: "25 / Feb / 2020",
    participants: 104,
    views: 54,
    progress: 50,
    isNew: false,
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=250&fit=crop",
    completed: 4,
    total: 8,
    responsibleAvatars: [
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&h=50&fit=crop&crop=face",
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=50&h=50&fit=crop&crop=face",
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=50&h=50&fit=crop&crop=face",
    ],
  },
  {
    id: "4",
    title: "Conoce la empresa",
    category: "Filosofía laboral",
    rating: 4,
    date: "01 / Ene / 2021",
    participants: 12,
    views: 1012,
    progress: 100,
    isNew: false,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=250&fit=crop",
    completed: 4,
    total: 4,
    responsibleAvatars: [
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face",
    ],
  },
];

// Mock Course Folders
export const mockCourseFolders: CourseFolder[] = [
  {
    id: "1",
    name: "Cursos de recurso humano",
    coursesCount: 7,
    date: "25/Feb/2021",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400&h=250&fit=crop",
  },
  {
    id: "2",
    name: "Cursos de gerencia institucional",
    coursesCount: 7,
    date: "25/Feb/2021",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=250&fit=crop",
  },
  {
    id: "3",
    name: "Empresa",
    coursesCount: 7,
    date: "25/Feb/2021",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=250&fit=crop",
  },
  {
    id: "4",
    name: "Cursos de ilustración institucional",
    coursesCount: 7,
    date: "25/Feb/2021",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400&h=250&fit=crop",
  },
  {
    id: "5",
    name: "Cursos de gerencia y administración",
    coursesCount: 7,
    date: "25/Feb/2021",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=250&fit=crop",
  },
  {
    id: "6",
    name: "C1",
    coursesCount: 7,
    date: "25/Feb/2021",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=250&fit=crop",
  },
];

// Mock Forum Posts
export const mockForumPosts: ForumPost[] = [
  {
    id: "1",
    title: "¿El personal debe compartir su orientación sexual en el momento de la entrevista?",
    content: "Los recursos humanos de una empresa (RRHH) o human resources (HR) en inglés, es una función y / o departamento del área de 'Gestión y administración de empresas'...",
    author: "Laura Mejía",
    authorAvatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=50&h=50&fit=crop&crop=face",
    views: 18,
    comments: 3,
    isNew: true,
  },
  {
    id: "2",
    title: "¿Qué sucede cuando se termina el proceso de captación de prospectos?",
    content: "Los recursos humanos de una empresa (RRHH) o human resources (HR) en inglés, es una función y / o departamento del área de 'Gestión y administración de empresas' El término...",
    author: "Jason Ming",
    authorAvatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=50&h=50&fit=crop&crop=face",
    views: 7,
    comments: 0,
    isNew: true,
  },
  {
    id: "3",
    title: "El ítem de seguridad laboral no me quiso abrir",
    content: "Los recursos humanos de una empresa (RRHH) o human resources (HR) en inglés, es una función y / o departamento del área de 'Gestión y administración de empresas'...",
    author: "Marina Reyes",
    authorAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=50&h=50&fit=crop&crop=face",
    views: 18,
    comments: 1,
    isNew: false,
  },
];

// Current logged-in user (for demo)
export const currentUser = mockUsers[0];
