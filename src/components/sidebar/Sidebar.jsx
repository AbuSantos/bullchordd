import classNames from "classnames";
import React, { useState } from "react";
import "./style.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import HomeIcon from "@mui/icons-material/Home";
import GroupIcon from "@mui/icons-material/Group";
import EmailIcon from "@mui/icons-material/Email";
import { Link } from "react-router-dom";

const menuData = [
  { id: 1, label: "Home", icon: HomeIcon, link: "/" },
  { id: 2, label: "Manage User", icon: GroupIcon, link: "/users" },
  { id: 3, label: "Manage Post", icon: EmailIcon, link: "/posts" },
];

const Sidebar = () => {
  const [toggleCollapse, setToggleCollapse] = useState(false);
  const [isCollapsible, setIsCollapsible] = useState(false);

  const onMouseOver = () => {
    setIsCollapsible(!isCollapsible);
  };

  const wrapperClasses = classNames("sidebar", {
    ["w-60"]: !toggleCollapse,
    ["w-20"]: toggleCollapse,
  });

  const collapseClasses = classNames("collapseClass", {
    ["icon-rotate"]: toggleCollapse,
  });

  const handleSidebarToggle = () => {
    setToggleCollapse(!toggleCollapse);
  };

  return (
    <div
      className={wrapperClasses}
      onMouseEnter={onMouseOver}
      onMouseLeave={onMouseOver}
    >
      <div className="flex-col">
        <div className="flex-between">
          <div className="flex-center">
            Icon
            <span
              className={classNames("logospan", {
                ["hidden"]: toggleCollapse,
              })}
            >
              logo
            </span>
          </div>
          {isCollapsible && (
            <ArrowBackIcon
              className={collapseClasses}
              onClick={handleSidebarToggle}
            />
          )}
        </div>
        <div>
          <div className="side_nav">
            {menuData.map(({ icon: Icon, ...menu }) => {
              return (
                <Link to={menu.link}>
                  <Icon />
                  <span
                    className={classNames({
                      ["hidden"]: toggleCollapse,
                    })}
                  >
                    {menu.label}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
