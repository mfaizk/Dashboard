import { useLocation } from "react-router-dom";

function Breadcrumbs() {
  const location = useLocation().pathname.replace("/", " > ");

  return (
    <div className="container mx-auto m-5 text-lg sm:px-0 px-5">
      <h1>UI/UX {location}</h1>
    </div>
  );
}
export default Breadcrumbs;
