import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import RootLayout from "./layout/RootLayout"
import { Course, Home, Login } from "./pages"
import { loginAction } from "./components/LoginForm/LoginForm"
const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<RootLayout />}>
    <Route index element={<Home />} />
    <Route path="login" element={<Login />} action={loginAction} />
    <Route path="courses" element={<Course />} />
  </Route>
))
const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App