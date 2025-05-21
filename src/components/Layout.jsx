import NavBar from './NavBar';
import Footer from './Footer';

function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow container mx-auto p-4 pb-20 animate-fade">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
