export const routes = {
  home: "/",
  login: "/login",
  register: "/register",
  dashboard: "/dashboard",
  quizzes: "/quizzes",
  quizz: (quizzId) =>
    quizzId ? `/quizzes/:${quizzId}` : "/quizzes/:quizzesid",
  admin: {
    users: "/admin/users",
  },
};
