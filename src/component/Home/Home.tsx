import Button from "../Button";
import "./Home.css";
function Home() {
  return (
    <div>
      <div>
        <h1 id="h1-about">ABOUT ME</h1>
      </div>
      <div id="flex-about">
        <div id="img-about" style={{ width: "1500px", height: "600px" }}>
          <img
            src="https://static.vecteezy.com/system/resources/previews/027/732/576/large_2x/futuristic-robot-cyborg-technology-science-men-one-person-black-background-generated-by-ai-free-photo.jpg"
            alt=""
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
          />
        </div>
        <div id="text-flex">
          <h3>Hi There! I'm Alfredo Vetsera</h3>
          <h4 style={{ color: "blueviolet", marginTop: "30px" }}>
            Full Stack Programmer
          </h4>
          <p>
            I am a full stack programmer with a strong focus on HTML, CSS, and
            Javascript. Web development is a tool to make our Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Mollitia laudantium
            exercitationem, officia modi nulla neque quidem aliquam ipsam in ea
            id illum cumque atque, esse fugit porro maiores fugiat veritatis.
          </p>
          <p>
            Birthday: 05<sup>th</sup>May 1994
          </p>
          <p>Phone: +6282143790913</p>
          <p>Email: zestvetz@gmail.com</p>
          <p>Address: Surabaya, East Java, Indonesia</p>
          <p>Language: Indonesia, English</p>
          <p>Freelance: Available</p>
          <Button
            title={"Download CV"}
            backgroundColor={"gray"}
            color={"white"}
            width={"150px"}
            height={""}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
