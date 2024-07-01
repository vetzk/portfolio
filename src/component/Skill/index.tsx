function Skills() {
  let percentage;
  return (
    <div>
      <h1 id="h1-about">SKILLS</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <h3>
            All the skills that i have in that field of work are mentioned
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            possimus, maiores deserunt architecto sed quia assumenda odio
            beatae, sint suscipit ex cupiditate quo quod animi! Illo aspernatur
            minus animi a?
          </p>
        </div>
        <div
          style={{
            width: "1500px",
            height: "300px",
            border: "solid 1px rgba(255, 255, 255, 0.2)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "-20px",
            }}
          >
            <p>HTML</p>{" "}
            <p style={{ color: "blueviolet" }}>{(percentage = 75)}%</p>
          </div>
          <div
            style={{
              marginTop: "-10px",
              marginLeft: "20px",
              marginRight: "20px",
              background: "blueviolet",
              height: "6px",
              width: `${percentage}%`,
            }}
          ></div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "-20px",
            }}
          >
            <p>CSS</p>{" "}
            <p style={{ color: "blueviolet" }}>{(percentage = 60)}%</p>
          </div>
          <div
            style={{
              marginTop: "-10px",
              marginLeft: "20px",
              marginRight: "20px",
              background: "blueviolet",
              height: "6px",
              width: `${percentage}%`,
            }}
          ></div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "-20px",
            }}
          >
            <p>Javascript</p>{" "}
            <p style={{ color: "blueviolet" }}>{(percentage = 50)}%</p>
          </div>
          <div
            style={{
              marginTop: "-10px",
              marginLeft: "20px",
              marginRight: "20px",
              background: "blueviolet",
              height: "6px",
              width: `${percentage}%`,
            }}
          ></div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "-20px",
            }}
          >
            <p>React</p>{" "}
            <p style={{ color: "blueviolet" }}>{(percentage = 30)}%</p>
          </div>
          <div
            style={{
              marginTop: "-10px",
              marginLeft: "20px",
              marginRight: "20px",
              background: "blueviolet",
              height: "6px",
              width: `${percentage}%`,
            }}
          ></div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "-20px",
            }}
          >
            <p>Flutter</p>{" "}
            <p style={{ color: "blueviolet" }}>{(percentage = 60)}%</p>
          </div>
          <div
            style={{
              marginTop: "-10px",
              marginLeft: "20px",
              marginRight: "20px",
              background: "blueviolet",
              height: "6px",
              width: `${percentage}%`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
