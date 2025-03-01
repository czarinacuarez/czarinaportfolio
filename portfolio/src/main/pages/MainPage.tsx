import AboutSection from "./components/AboutSection";
import AchievementsSection from "./components/AchievementsSection";
import ContactSection from "./components/ContactSection";
import FooterSection from "./components/FooterSection";
import HomeSection from "./components/HomeSection";
import ProjectsSection from "./components/ProjectsSection";

const MainPage = () =>{
  return(
    <div>
         <section id="home" className="min-h-screen">
        <HomeSection />
      </section>

      <section id="about" className="min-h-screen">
        <AboutSection />
      </section>

      <section id="projects" className="min-h-screen">
        <ProjectsSection />
      </section>

      <section id="achievement" className="min-h-screen">
        <AchievementsSection />
      </section>

      <section id="contact" className="min-h-screen">
        <ContactSection />
      </section>


      <section id="footer" className="min-h-screen">
        <FooterSection />
      </section>
    </div>
  )
}

export default MainPage;