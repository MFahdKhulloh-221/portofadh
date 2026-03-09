"use client";

import Lanyard from "./components/lanyard";
import RotatingText from "./components/RotatingText";
import SplitText from "./components/SplitText";
import BlurText from "./components/BlurText";
import AnimatedContent from "./components/AnimatedContent";
import ProfileCard from "./components/ProfileCard";
import CountUp from "./components/CountUp";
import LightRays from "./components/LightRays";
import ChromaGrid from "./components/ChromaGrid"
import { FiExternalLink, FiGithub } from "react-icons/fi";
import Footer from "./components/Footer";
import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiMysql,
  SiGit,
  SiPhp,
  SiLaravel,
  SiFirebase,
  SiPostman,
  SiFigma,
  SiCanva
} from "react-icons/si";


const items = [
  {
    image: "/npcfood.png",
    title: "Restaurant App",
    subtitle: "HTML, CSS, JS",
    handle: "Web Aplication",
    borderColor: "#06D001",
    gradient: "linear-gradient(145deg,#06D001,#000)",
    url: "https://fabulous-medovik-c88fa0.netlify.app/"
  },
  {
    image: "/portofad.png",
    title: "My Portofolio",
    subtitle: "Next.Js",
    handle: "Web Aplication",
    borderColor: "#06D001",
    gradient: "linear-gradient(145deg,#06D001,#000)",
    url: "#"
  },
  {
    image: "comvis.png",
    title: "Air Canvas AI",
    subtitle: "Python,Computer Vision",
    handle: "Gesture Drawing",
    borderColor: "#06D001",
    gradient: "linear-gradient(145deg,#06D001,#000)",
    url: "#"
  },
  {
    image: "/fninja.png",
    title: "GameWeb Aplication",
    subtitle: " HTML, CSS, JS, c++, Esp32",
    handle: "Web + IoT",
    borderColor: "#06D001",
    gradient: "linear-gradient(145deg,#06D001,#000)",
    url: "#"
  },
  {
    image: "/image.png",
    title: "Dasai Mochi Robot",
    subtitle: "Esp32",
    handle: "IoT",
    borderColor: "#06D001",
    gradient: "linear-gradient(145deg,#06D001,#000)",
    url: "#"
  },
  {
    image: "/mbg.png",
    title: "Pendeteksi Basi (MBG)",
    subtitle: "Java Console App",
    handle: "Web + IoT",
    borderColor: "#06D001",
    gradient: "linear-gradient(145deg,#06D001,#000)",
    url: "#"
  },
  {
    image: "/ecomers.png",
    title: "Ecommerce Web",
    subtitle: "Laravel, Html, css, js",
    handle: "Website Aplication",
    borderColor: "#06D001",
    gradient: "linear-gradient(145deg,#06D001,#000)",
    url: "#"
  },
  {
    image: "/lms.png",
    title: "LMS Website App",
    subtitle: "Laravel, Html, css, js",
    handle: "Website Aplication",
    borderColor: "#06D001",
    gradient: "linear-gradient(145deg,#06D001,#000)",
    url: "#"
  },
];



export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">

      {/* GLOBAL BACKGROUND */}
      <div className="fixed inset-0 -z-10">
        <LightRays
          raysOrigin="top-center"
          raysColor="#215e28"
          raysSpeed={1}
          lightSpread={0.8}
          rayLength={1.1}
          pulsating={false}
          fadeDistance={1.6}
          saturation={1}
          followMouse
          mouseInfluence={0.1}
          noiseAmount={0}
          distortion={0}
        />
      </div>


      {/* HERO SECTION */}
      <section className="h-screen flex items-center">
        <div className="container mx-auto px-6 md:px-20 h-full">
          <div className="grid grid-cols-12 h-full items-center">

            {/* LEFT */}
            <div className="col-span-6 flex items-center">

              <div className="flex flex-col gap-3 text-left">

                <AnimatedContent>
                  <div className="flex items-center gap-2 ml-3">
                    <h1 className="text-2xl text-white font-bold">
                      I'm Ready For Job
                    </h1>

                    <RotatingText
                      texts={[
                        "Web Developer",
                        "Game Project",
                        "Mobile Application",
                        "IoT Project",
                      ]}
                      mainClassName="px-3 bg-[#06D001] text-black py-1 rounded-lg text-2xl font-bold inline-flex"
                      rotationInterval={2000}
                    />
                  </div>
                </AnimatedContent>

                <SplitText
                  text="I'm M. Fadh Khulloh"
                  className="text-6xl font-semibold text-white -ml-3"
                />

                <SplitText
                  text="Full Stack Developer"
                  className="text-6xl font-semibold text-white"
                />

                <BlurText
                  text="Saya membantu bisnis dan individu membangun website serta solusi digital yang cepat, modern, dan mudah digunakan."
                  delay={70}
                  animateBy="words"
                  direction="top"
                  className="text-[20px] text-gray-300 max-w-xl"
                />

                {/* SOCIAL */}
                <AnimatedContent>

                  <div className="social-media">
                    <a href="https://www.instagram.com/ffaddhh?igsh=aHByZDNmbWZlcGR1" target="_blank"> <i className="bx bxl-instagram-alt"></i> </a> <a href="https://wa.me/6285194564214" target="_blank"> <i className="bx bxl-whatsapp"></i> </a> <a href="#" target="_blank"> <i className="bx bxl-github"></i> </a> <a href="https://www.tiktok.com/@f.tulo" target="_blank"> <i className="bx bxl-tiktok"></i> </a> </div>

                </AnimatedContent>

                {/* BUTTON */}
                <AnimatedContent>
                  <div className="mt-4">
                    <a
                      href="/CV_IT_fadh.pdf"
                      target="_blank"
                      className="btn-social"
                    >
                      Download CV
                    </a>
                  </div>
                </AnimatedContent>
              </div>
            </div>

            {/* RIGHT */}
            <div className="col-span-6 flex items-center justify-center">
              <Lanyard />
            </div>

          </div>
        </div>
      </section>


      {/* ABOUT SECTION */}

      <section className="py-32">
        <div className="container mx-auto px-6 md:px-20">

          {/* CARD WRAPPER */}
          <AnimatedContent>
            <div className="grid grid-cols-12 gap-10 items-center bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-12">

              {/* LEFT - PROFILE CARD */}
              <div className="col-span-5 flex justify-center">
                <ProfileCard
                  name="M. Fadh K"
                  title="Software Engineer"
                  handle="ffaddhh"
                  status="Online"
                  contactText="Contact Me"
                  avatarUrl="/tuloo.png"
                  showUserInfo
                  enableTilt
                  enableMobileTilt
                  behindGlowEnabled
                  iconUrl="/urakan.png"
                  behindGlowColor="hsla(149, 100%, 70%, 0.6)"
                  innerGradient="linear-gradient(145deg,hsla(149, 40%, 45%, 0.55) 0%,hsla(236, 60%, 70%, 0.27) 100%)"
                />
              </div>

              {/* RIGHT - ABOUT TEXT */}
              <div className="col-span-7 text-white">

                <h2 className="text-4xl font-bold mb-6">
                  About Me
                </h2>

                <p className="text-gray-400 leading-relaxed mb-6">
                  Saya adalah mahasiswa Teknik Informatika yang memiliki minat besar
                  dalam pengembangan website dan aplikasi digital. Saya terbiasa
                  mengembangkan aplikasi menggunakan teknologi modern seperti
                  JavaScript, React, dan Next.js.
                </p>

                <p className="text-gray-400 leading-relaxed">
                  Dalam beberapa proyek, saya berperan sebagai full-stack developer
                  yang menangani pengembangan frontend dan backend sekaligus.
                </p>

                <div className="grid grid-cols-3 gap-8 mt-10 border-t border-white/10 pt-8">

                  <div>
                    <h3 className="text-4xl font-bold text-[#06D001]">
                      <CountUp from={0} to={2} duration={2} />+
                    </h3>
                    <p className="text-gray-400 text-sm tracking-wider">
                      TAHUN PENGALAMAN
                    </p>
                  </div>

                  <div>
                    <h3 className="text-4xl font-bold text-[#06D001]">
                      <CountUp from={0} to={15} duration={1.5} />+
                    </h3>
                    <p className="text-gray-400 text-sm tracking-wider">
                      PROYEK SELESAI
                    </p>
                  </div>

                  <div>
                    <h3 className="text-4xl font-bold text-[#06D001]">
                      <CountUp from={0} to={10} duration={1.5} />+
                    </h3>
                    <p className="text-gray-400 text-sm tracking-wider">
                      CLIENT PUAS
                    </p>
                  </div>

                </div>

                {/* BUTTONS */}
                <div className="flex gap-4 mt-10">

                  <a
                    href="#projects"
                    className="px-6 py-3 rounded-full bg-[#06D001] text-black font-semibold transition hover:shadow-[0_0_20px_#06D001]"
                  >
                    Lihat Project
                  </a>

                  <a
                    href="https://wa.me/6285194564214"
                    target="_blank"
                    className="px-6 py-3 rounded-full border border-[#06D001] text-[#06D001] font-semibold transition hover:bg-[#06D001] hover:text-black"
                  >
                    Contact Me
                  </a>

                </div>

              </div>

            </div>
          </AnimatedContent>

        </div>
      </section>

      {/* TOOLS & STACK SECTION */}

      <section className="py-32" id="skills">
        <div className="container mx-auto px-6 md:px-20">

          <AnimatedContent>
            <div className="text-center mb-16">

              <h2 className="text-4xl font-bold text-white">
                Tools & Tech Stack
              </h2>

              <p className="text-gray-400 mt-4 max-w-xl mx-auto">
                Teknologi dan tools yang saya gunakan untuk membangun aplikasi dan solusi digital.
              </p>

            </div>
          </AnimatedContent>

          <AnimatedContent>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">

              {/* ICON DARI REACT ICONS */}

              <div className="skill-card">
                <SiReact size={40} className="text-[#61DAFB]" />
                <p>React</p>
              </div>

              <div className="skill-card">
                <SiNextdotjs size={40} />
                <p>Next.js</p>
              </div>

              <div className="skill-card">
                <SiJavascript size={40} className="text-yellow-400" />
                <p>JavaScript</p>
              </div>

              <div className="skill-card">
                <SiTailwindcss size={40} className="text-cyan-400" />
                <p>Tailwind</p>
              </div>

              <div className="skill-card">
                <SiNodedotjs size={40} className="text-green-500" />
                <p>Node.js</p>
              </div>

              <div className="skill-card">
                <SiMysql size={40} className="text-blue-400" />
                <p>MySQL</p>
              </div>

              <div className="skill-card">
                <SiGit size={40} className="text-orange-500" />
                <p>Git</p>
              </div>

              <div className="skill-card">
                <SiPhp size={40} className="text-indigo-400" />
                <p>PHP</p>
              </div>

              <div className="skill-card">
                <SiLaravel size={40} className="text-red-500" />
                <p>Laravel</p>
              </div>

              <div className="skill-card">
                <SiFirebase size={40} className="text-yellow-500" />
                <p>Firebase</p>
              </div>

              <div className="skill-card">
                <SiPostman size={40} className="text-orange-500" />
                <p>Postman</p>
              </div>

              <div className="skill-card">
                <SiFigma size={40} />
                <p>Figma</p>
              </div>

              <div className="skill-card">
                <SiCanva size={40} />
                <p>Canva</p>
              </div>



              {/* ICON GAMBAR MANUAL */}

              <div className="skill-card">
                <img src="/javalogo.png" className="w-10 h-10 object-contain" />
                <p>Java</p>
              </div>

              <div className="skill-card">
                <img src="vscodelogo.png" className="w-10 h-10 object-contain" />
                <p>VS Code</p>
              </div>

              <div className="skill-card">
                <img src="/githublogo.jpg" className="w-10 h-10 object-contain" />
                <p>GitHub</p>
              </div>

              <div className="skill-card">
                <img src="/logogemini.jpg" className="w-10 h-10 object-contain" />
                <p>Google Gemini</p>
              </div>

              <div className="skill-card">
                <img src="/antigravity.png" className="w-10 h-10 object-contain" />
                <p>Antigravity</p>
              </div>

            </div>
          </AnimatedContent>
        </div>


      </section >

      {/* PROJECTS SECTION */}

      <section className="py-40" id="projects">
        <AnimatedContent>
          <div className="max-w-[1400px] mx-auto px-6">

            <AnimatedContent>
              <div className="text-center mb-20">

                <h2 className="text-4xl font-bold text-white">
                  My <span className="text-[#06D001]">Projects</span>
                </h2>

                <p className="text-gray-400 mt-4">
                  Beberapa project yang pernah saya kerjakan.
                </p>

              </div>
            </AnimatedContent>


            {/* GRID */}

            <AnimatedContent>

              <div
                className="
        grid
        grid-cols-1
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        gap-10
        justify-items-center
        "
              >

                {items.map((item, index) => (

                  <div
                    key={index}
                    className="
            relative
            w-[320px]
            h-[240px]
            flex
            items-center
            justify-center
            overflow-hidden
            rounded-xl
            "
                  >

                    <ChromaGrid
                      items={[item]}
                      radius={260}
                      damping={0.45}
                      fadeOut={0.6}
                      ease="power3.out"
                    />

                  </div>

                ))}

              </div>

            </AnimatedContent>

          </div>
        </AnimatedContent>
      </section>


      <Footer />



    </div >
  );
}