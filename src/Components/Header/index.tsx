import NavLinks from './NavLinks';

const Header = () => {
  return (
    <header className="flex flex-col">
      <div className="bg-gray-100 p-3 flex flex-wrap">
        <NavLinks routs={[{ id: 1, text: 'home', to: '/' }]} />
      </div>
    </header>
  );
};

export default Header;
