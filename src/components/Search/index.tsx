"use client";

import { useState } from "react";
import Input from "../Input";

const Search = () => {
  const [keySearch, setKeySearch] = useState("");
  return (
    <Input
      type="text"
      placeholder="Tìm kiếm"
      value={keySearch}
      setValue={setKeySearch}
      className="text-[#FFC8A8] border-[#FFE5D4] placeholder:text-[#FFC8A8]"
      icon={{ url: "/images/searchIcon.svg", pos: "FRONT" }}
    />
  );
};

export default Search;
