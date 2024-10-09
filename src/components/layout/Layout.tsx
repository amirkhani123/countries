import Footer from "./Footer";
import Header from "./Header"

function Layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <>
    <Header/>
    <div className="h-screen dark:text-white dark:bg-gray-900">{children}</div>
    <Footer/>
    </>
  )
}

export default Layout