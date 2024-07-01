import Button from "../Button";

function Contact() {
  return (
    <div>
      <h1 id="h1-about">CONTACT</h1>
      <div
        style={{
          display: "flex",
          gap: 200,
        }}
      >
        <div>
          <h2 style={{ paddingLeft: "10px" }}>Just say Hello</h2>
          <div>
            <textarea
              placeholder="Your Name"
              style={{
                height: "30px",
                width: "500px",
                outline: "none",
                resize: "none",
                paddingTop: "10px",
                paddingLeft: "10px",
              }}
            />
          </div>
          <div style={{ marginTop: "-20px" }}>
            <textarea
              placeholder="Your Email"
              style={{
                height: "30px",
                width: "500px",
                outline: "none",
                resize: "none",
                paddingTop: "10px",
                paddingLeft: "10px",
              }}
            />
          </div>
          <div style={{ marginTop: "-20px" }}>
            <textarea
              placeholder="Your Subject"
              style={{
                height: "30px",
                width: "500px",
                outline: "none",
                resize: "none",
                paddingTop: "10px",
                paddingLeft: "10px",
              }}
            />
          </div>
          <div style={{ marginTop: "-20px" }}>
            <textarea
              placeholder="Your Message"
              style={{
                height: "70px",
                width: "500px",
                outline: "none",
                resize: "none",
                paddingTop: "10px",
                paddingLeft: "10px",
              }}
            />
          </div>
          <div>
            <Button
              title={"Send Message"}
              backgroundColor={"gray"}
              color={"white"}
              width={"150px"}
              height={""}
            />
          </div>
        </div>
        <div>
          <h2 style={{ paddingLeft: "10px" }}>Contact Info</h2>
          <div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel
              mollitia distinctio alias ab dolorem facere aut inventore in
              libero iusto, eius, doloribus nisi, sequi ut quas? Autem culpa
              nostrum sint!
            </p>
          </div>
          <div style={{ display: "flex" }}>
            <div
              style={{
                width: "50px",
                height: "50px",
                backgroundColor: "rgba(128, 128, 128, 0.2)",
                marginTop: "30px",
              }}
            >
              <img
                src="/icons8-email-48.png"
                style={{ backgroundColor: "rgba(128, 128, 128, 0.2)" }}
                alt=""
                width={"60%"}
                height={"60%"}
              />
            </div>
            <div>
              <h3>Email</h3>
              <p>
                zestvetz@gmail.com <br />
                info@support.com
              </p>
              <p></p>
            </div>
          </div>
          <div style={{ display: "flex", marginTop: "-30px" }}>
            <div
              style={{
                width: "50px",
                height: "50px",
                backgroundColor: "rgba(128, 128, 128, 0.2)",
                marginTop: "30px",
              }}
            >
              <img
                src="/icons8-phone-64.png"
                style={{ backgroundColor: "rgba(128, 128, 128, 0.2)" }}
                alt=""
                width={"60%"}
                height={"60%"}
              />
            </div>
            <div>
              <h3>Phone</h3>
              <p>
                +6282145904940 <br />
                +6281234590958
              </p>
              <p></p>
            </div>
          </div>
          <div style={{ display: "flex", marginTop: "-30px" }}>
            <div
              style={{
                width: "50px",
                height: "50px",
                backgroundColor: "rgba(128, 128, 128, 0.2)",
                marginTop: "30px",
              }}
            >
              <img
                src="/icons8-address-48.png"
                style={{ backgroundColor: "rgba(128, 128, 128, 0.2)" }}
                alt=""
                width={"60%"}
                height={"60%"}
              />
            </div>
            <div>
              <h3>Address</h3>
              <p>
                2602 Meadow Lane Bear Creek <br />
                North Vancouver, BC V7R 4J1, Canada
              </p>
              <p></p>
            </div>
          </div>
          <h3 style={{ marginTop: "-20px" }}>
            Visit my social profile and get connected
          </h3>
          <div style={{ display: "flex", marginTop: "-10px" }}>
            <div
              style={{
                width: "50px",
                height: "50px",
                backgroundColor: "rgba(128, 128, 128, 0.2)",
                marginTop: "30px",
              }}
            >
              <img
                src="/icons8-twitterx-60.png"
                style={{ backgroundColor: "rgba(128, 128, 128, 0.2)" }}
                alt=""
                width={"60%"}
                height={"60%"}
              />
            </div>
            <div
              style={{
                width: "50px",
                height: "50px",
                backgroundColor: "rgba(128, 128, 128, 0.2)",
                marginTop: "30px",
              }}
            >
              <img
                src="/icons8-linkedin-48.png"
                style={{ backgroundColor: "rgba(128, 128, 128, 0.2)" }}
                alt=""
                width={"60%"}
                height={"60%"}
              />
            </div>
            <div
              style={{
                width: "50px",
                height: "50px",
                backgroundColor: "rgba(128, 128, 128, 0.2)",
                marginTop: "30px",
              }}
            >
              <img
                src="/icons8-insta-48.png"
                style={{ backgroundColor: "rgba(128, 128, 128, 0.2)" }}
                alt=""
                width={"60%"}
                height={"60%"}
              />
            </div>
            <div
              style={{
                width: "50px",
                height: "50px",
                backgroundColor: "rgba(128, 128, 128, 0.2)",
                marginTop: "30px",
              }}
            >
              <img
                src="/icons8-dribble-48.png"
                style={{ backgroundColor: "rgba(128, 128, 128, 0.2)" }}
                alt=""
                width={"60%"}
                height={"60%"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
