import "./App.css";
import About from "./component/About/About.tsx";
import Contact from "./component/Contact/index.tsx";
import Home from "./component/Home/Home.tsx";
import Navbar from "./component/Navbar";
import Resume from "./component/Resume/index.tsx";
import Review from "./component/Review/index.tsx";
import Services from "./component/Services/index.tsx";
import Skills from "./component/Skill/index.tsx";
function App() {
  return (
    <>
      <div>
        <Navbar />
        <About />
        <Home />
        <Services />
        <Skills />
        <Resume />
        <Review />
        <Contact />
      </div>
    </>
    // class component: berisi banyak sekali fungsi dan method yang disiapkan, harus melakukan extends pada fungsi-fungsi react
    //functional component:tidak perlu melakukan pewarisan, tinggal import dan panggil fungsi yg dibutuhkan saja, lebih dipilih dari class karena bisa opsional
    //atomic ui design: buat tampilan harus dari komponen yg terkecil jadi harus ada file nya tersendiri
    //index.css utk semua komponen
    //hooks bisa melakukan class component tapi tidak seribet class component
  );
}

export default App;
