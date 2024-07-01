import Button from "../Button";
import "./About.css";
function About() {
  return (
    <div id="about-flex">
      <div id="about">
        <h4 style={{ color: "blueviolet", fontSize: "20px" }}>Hello, I'm</h4>
        <h1 style={{ fontSize: "90px" }}>
          Alfredo <br /> Vetsera
        </h1>
        <h3>Full Stack Programmer</h3>
        <Button
          title={"Hire ME"}
          backgroundColor={"gray"}
          color={"white"}
          width={""}
          height={""}
        />
        <Button
          title={"Instagram"}
          backgroundColor={"transparent"}
          color={"gray"}
          width={""}
          height={""}
        />
      </div>
      <div style={{ width: "500px", height: "600px" }}>
        <img
          src="https://static.vecteezy.com/system/resources/previews/027/732/576/large_2x/futuristic-robot-cyborg-technology-science-men-one-person-black-background-generated-by-ai-free-photo.jpg"
          alt=""
          style={{ objectFit: "cover" }}
          width={"100%"}
          height={"100%"}
        />
      </div>
    </div>
  );
}

export default About;
//width container dan height container
