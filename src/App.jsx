import AppLayout from "./layouts/AppLayout";
import { Outlet } from "react-router";

function App() {
  return (
    <AppLayout>
      <Outlet></Outlet>
    </AppLayout>
  );
}

export default App;
