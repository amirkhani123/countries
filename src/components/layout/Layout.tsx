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
    <div className="min-h-screen">{children}</div>
    <Footer/>
    </>
  )
}

export default Layout