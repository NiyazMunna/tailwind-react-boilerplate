import React from "react";
import menu from "../images/menu.png";

function Sidebar({ isNavOpen }) {
  const SideBar = [
    {
      id: 1,
      image: menu,
      title: "Menu",
    },
    {
      id: 2,
      image: menu,
      title: "Menu",
    },
    {
      id: 3,
      image: menu,
      title: "Menu",
    },

    {
      id: 4,
      image: menu,
      title: "Menu",
    },
    {
      id: 5,
      image: menu,
      title: "Menu",
    },
    {
      id: 6,
      image: menu,
      title: "Menu",
    },
    {
      id: 7,
      image: menu,
      title: "Menu",
    },
    {
      id: 8,
      image: menu,
      title: "Menu",
    },
    {
      id: 9,
      image: menu,
      title: "Menu",
    },
  ];
  return (
    <div>
      <div
        style={{ top: "80px" }}
        className={`${
          isNavOpen ? "w-64" : "w-20"
        }  left-0 bottom-0 bg-light-purple  pt-6 fixed overflow-y-scroll`}
      >
        {SideBar.map((sidebar) => (
          <div className="p-2">
            <div className={`${isNavOpen ? "flex p-5 " : "block px-5 py-3"} `}>
              <img src={sidebar.image} />
              <div>
                {isNavOpen ? (
                  <p className="pl-6 text-light-gray">{sidebar.title}</p>
                ) : (
                  <p
                    style={{ fontSize: "10px" }}
                    className="pl-0 text-light-gray"
                  >
                    {sidebar.title}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
