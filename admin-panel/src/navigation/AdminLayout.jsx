import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const AdminLayout = () => {
  return (
    <div className="flex min-h-screen overflow-hidden" >
      <Sidebar />
      <main className="w-full p-6 overflow-x-auto min-h-screen" >
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
