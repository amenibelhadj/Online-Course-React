import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Singlementordetails = React.lazy(() =>
  import("pages/Singlementordetails"),
);
const Allmentors = React.lazy(() => import("pages/Allmentors"));
const EduviJoinAsTeacher = React.lazy(() => import("pages/EduviJoinAsTeacher"));
const EduviCoursesPricing = React.lazy(() =>
  import("pages/EduviCoursesPricing"),
);
const EduviCourses = React.lazy(() => import("pages/EduviCourses"));
const EduviShop = React.lazy(() => import("pages/EduviShop"));
const Home1 = React.lazy(() => import("pages/Home1"));
const EduviCoursesDetails = React.lazy(() =>
  import("pages/EduviCoursesDetails"),
);
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<EduviCoursesDetails />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/home1" element={<Home1 />} />
          <Route path="/eduvishop" element={<EduviShop />} />
          <Route path="/eduvicourses" element={<EduviCourses />} />
          <Route
            path="/eduvicoursespricing"
            element={<EduviCoursesPricing />}
          />
          <Route path="/eduvijoinasteacher" element={<EduviJoinAsTeacher />} />
          <Route path="/allmentors" element={<Allmentors />} />
          <Route
            path="/singlementordetails"
            element={<Singlementordetails />}
          />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
