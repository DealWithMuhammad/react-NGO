import BlogsListing from "components/BlogsListing";

export default function page() {
  return (
    <div>
      <BlogsListing all={true} category={"PROJECTS"} />
    </div>
  );
}
