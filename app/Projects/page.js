import BlogsListing from "components/BlogsListing";
import Feature from "components/Features";

export default function page() {
  return (
    <div>
      <Feature />
      <BlogsListing all={true} category={"PROJECTS"} />
    </div>
  );
}
