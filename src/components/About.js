import UserClass from "./UserClass";

const About = () => {
  return (
    <div className="p-2 m-2">
      <h1>About Page</h1>
      <h3>This is About us page</h3>
      <UserClass name="Keshav" location="jharkhand" email="abc@gmail.com" />
    </div>
  );
};

export default About;
