import MainLayout from "./compunents/layout/MainLayout";
import ProtectedRoute from "./compunents/layout/ProtectedRoute";

function App() {
  return (
    <>
      <ProtectedRoute>
        <MainLayout></MainLayout>
      </ProtectedRoute>
    </>
  );
}

export default App;
