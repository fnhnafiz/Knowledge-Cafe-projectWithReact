import NavImg from "../../../images/profile.png";

const Header = () => {
  return (
    <header className="flex items-center justify-between container mx-auto border-b-2 p-3">
      <h1 className="text-4xl font-bold">Knowledge Cafe</h1>
      <img className="cursor-pointer" src={NavImg} alt="" />
    </header>
  );
};

export default Header;
