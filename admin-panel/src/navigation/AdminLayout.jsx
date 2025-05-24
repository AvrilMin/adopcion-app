import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const AdminLayout = () => {
  return (
    <div className="flex min-h-screen overflow-hidden" >
      <Sidebar />
      <main className="w-full min-h-screen ml-70 p-16 min-h-screen overflow-hidden " >
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
