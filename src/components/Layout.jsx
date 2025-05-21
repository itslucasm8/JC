import NavBar from './NavBar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow container mx-auto p-4 pb-20 animate-fade">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
