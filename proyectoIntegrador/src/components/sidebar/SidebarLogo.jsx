import logo from "../../assets/logo-renca-blanco.png";

const SidebarLogo = () => {
  return (
    <div className="d-flex">
      <div className="sidebar-logo">
        <a href="/">
          <img src={logo} href="/" alt="Logo Renca Blanco" />
        </a>
      </div>
    </div>
  );
};

export default SidebarLogo;
