import logo from "./logo.svg";
import { FaTimes } from "react-icons/fa";
import { links, social } from "./data";
import { useGlobalContext } from "./context";
const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  return (
    <div className={isSidebarOpen ? `sidebar show-sidebar` : `show-sidebar`}>
      <div className="sidebar-header">
        <img src={logo} alt="Coding Addict" className="logo" />
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>
      <ul className="links">
        {links.map((item) => {
          const { id, url, text, icon } = item;
          return (
            <li key={id}>
              <a href={url}>
                {icon}
                {text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="social">
        {social.map((item) => {
          const { id, url, icon } = item;
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
