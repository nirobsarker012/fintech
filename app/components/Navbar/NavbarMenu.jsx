import useData from "@/app/data/useData";
import Link from "next/link";
import React from "react";

const NavbarMenu = () => {
  const { menu } = useData();
  return (
    <div>
      <ul className="flex items-center gap-x-8 text-paragraph font-urbanist font-semibold text-[18px]">
        {menu.map((menu) => {
          return (
            <Link href={"/"} key={menu.id}>
              {menu.item}
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default NavbarMenu;
