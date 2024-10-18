import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [Username, setIsUserName] = useState("");
  useEffect(() => {
    setIsUserName("Ayush");
  }, []);

  return (
    <div className="  mt-[47px] ml-55 flex items-center justify-between px-11">
      <img className="text-5xl" src="/logo.png" />
      <ul className="flex gap-x-4 text-2xl">
        <li>contact</li>
        <li>{Username ? Username : ""}</li>
      </ul>
    </div>
  );
};

export default Navbar;
