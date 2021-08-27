import { useState } from "react";
import Paginations from "@flipride/components.ui.pagination";

const theme = {
  primary: "#2b4cf3",
  primaryLight: "#ECF0F4",
  secondary: "#fff",
  inactiveGray: "#dad8d8",
  error: "#E20044",
  success: "#00D870",
  warning: "#FF8A00",
  gray1: "#411a1a",
  fontSecondary: "Montserrat",
  fontPrimary: "Lato",
  textColor: "#ffffff",
};

export default function Pagination() {
  const [currentPage, setCurrentPage] = useState(1);

  const changePage = (page) => {
    setCurrentPage(page);
  };
  return (
    <Paginations
      theme={theme}
      currentPage={currentPage}
      pageCount={10}
      changePage={changePage}
    />
  );
}
