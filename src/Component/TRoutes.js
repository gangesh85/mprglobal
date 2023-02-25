import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TableBasics } from "./TableBasic";
import { TableSorting } from "./TableSorting";
import { TableFiltering } from './TableFiltering'
import { TablePagination } from './TablePagination'
import { Navigation } from "./Navigation";

const TRoutes = () => {
  return (
    <div>
      <BrowserRouter>
      <Navigation />
        <Routes>
          <Route path="/" element={<TableBasics />} />
          <Route path="sorting" element={<TableSorting />}/>
          <Route path="filtering" element={<TableFiltering />} />
          <Route path="pagination" element={<TablePagination />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
 };

export default TRoutes;
