// src/App.tsx
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  RouteProps,
} from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Events from "./components/EventList";
import Login from "./pages/Login";
import Profile from "./components/Profile";
import { useAuth } from "./hooks/useAuth";

// تعریف تایپ‌های مورد نیاز
type ProtectedRouteProps = Omit<RouteProps, "element"> & {
  element: React.ReactElement;
};

type DashboardLayoutProps = {
  children: React.ReactNode;
};

// کامپوننت مسیر محافظت شده
const ProtectedRoute = ({
  element,
}: ProtectedRouteProps): React.ReactElement => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? element : <Navigate to="/" replace />;
};

// کامپوننت لایه داشبورد
const DashboardLayout = ({
  children,
}: DashboardLayoutProps): React.ReactElement => (
  <div className="flex">
    <Sidebar />
    <main className="flex-1 p-6">{children}</main>
  </div>
);

// مسیرهای داشبورد
const DashboardRoutes = (): React.ReactElement => (
  <Routes>
    <Route index element={<Navigate to="profile" replace />} />
    <Route path="profile" element={<Profile />} />
    <Route path="events" element={<Events />} />
  </Routes>
);

// کامپوننت اصلی برنامه
const App = (): React.ReactElement => {
  const { login } = useAuth();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login onLogin={login} />} />
        <Route
          path="/dashboard/*"
          element={
            <ProtectedRoute
              element={
                <DashboardLayout>
                  <DashboardRoutes />
                </DashboardLayout>
              }
            />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
