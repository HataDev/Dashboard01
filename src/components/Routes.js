import Dashboard from "../pages/Dashboard";
import Sales from "../pages/Sales";


const authRoutes = [];

const adminRoutes = [
  { path: "/Dashboard", component: Dashboard },
  { path: "/Sales", component: Sales },

];

export { authRoutes, adminRoutes };
