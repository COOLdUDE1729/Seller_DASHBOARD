import { useState } from "react";
import { motion } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";
import { NavLink, useLocation } from "react-router-dom";

const SubMenu = ({ data }) => {
  const { pathname } = useLocation();
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  return (
    <>
      <li
        className={` ${pathname.includes(data.name) && "text-white rounded-t-md bg-customPurple "}  `}
        onClick={() => setSubMenuOpen(!subMenuOpen)}
      >
 <NavLink className={`link`} to={`/${data.name}`}>
        <data.icon size={23} className="min-w-max" />
        <p className="flex-1 capitalize text-base">{data.name}</p>
        <IoIosArrowDown
          className={` ${subMenuOpen && "rotate-180 "} duration-200 `}
        />

</NavLink>
      </li>
      <motion.ul
        animate={
          subMenuOpen
            ? {
                height: "fit-content",
              }
            : {
                height: 0,
              }
        }
        className="flex flex-col text-[1.3rem] bg-customPurple rounded-b-md font-normal overflow-hidden"
      >
        {data.menus?.map((men) => (
          <li >
            {/* className= hover:font-medium" */}
            <NavLink
              to={`/${data.name}/${men.name}`}
              className="link capitalize"
            >
                {/* <men.icon size={23} className="min-w-max" /> */}
                <div className="min-w-max">{men.icon}</div>
                <p className="flex-1 capitalize text-base">{men.name}</p>
            </NavLink>
          </li>
        ))}
      </motion.ul>
    </>
  );
};

export default SubMenu;
