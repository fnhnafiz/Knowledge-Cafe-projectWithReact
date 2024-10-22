import "./App.css";
import Bookmarksblog from "./component/Blog/Bookmarksblog";
import Blogs from "./component/Blogs/Blogs";
import Header from "./component/Header/header";

function App() {
  return (
    <>
      <Header></Header>
      <main className="container mx-auto md:flex justify-between my-20 gap-5">
        <Blogs></Blogs>
        <Bookmarksblog></Bookmarksblog>
      </main>
    </>
  );
}

export default App;
