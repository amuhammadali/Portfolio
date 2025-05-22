import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaReact,
  FaGithub,
} from "react-icons/fa";
import { SiPostgresql, SiBootstrap } from "react-icons/si";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { GiGamepad, GiMuscleUp, GiCookingPot } from "react-icons/gi";
import { BsHeadphones } from "react-icons/bs";
import { SiTelegram } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";

export default function Portfolio() {
  return (
    <div className="portfolio">
      <header className="header">
        <h1>MuhammadAli Adhamov</h1>
        <p>Frontend Developer</p>
      </header>

      <section className="grid-section">
        <div className="card">
          <h2>Contact</h2>
          <p>
            <MdPhone /> +998 90 057 43 88
          </p>
          <p>
            <MdEmail /> muhammadaliadhamov92@gmail.com
          </p>
          <p>
            <MdLocationOn /> Toshkent sh.
          </p>
          <p>
            <FaGithub /> github.com/amuhammadali
          </p>
        </div>

        <div className="card">
          <h2>About Me</h2>
          <p>Men Muhammadali Adhamov, 20 yoshdaman.</p>
          <p>
            Hozirda Pdp Universityda Software (Frontend) yonalishida tahsil
            olyapman
          </p>
          <p>Hozir portfolio loyihalarim ustida ishlayapman.</p>{" "}
        </div>
      </section>

      <section className="grid-section">
        <div className="card">
          <h2>Work Experience</h2>
          <p>
            <strong>2023 – 2025 • Full Stack Developer</strong>
          </p>
          <p>
            Hali haqiqiy tajriba yo'q, lekin men o'z loyihalarimni qurmoqdaman..
          </p>
        </div>

        <div className="card">
          <h2>Education</h2>
          <p>
            <strong>2023 – 2025 • PDP University</strong>
          </p>
          <p>Software(Frontend)</p>
          <p className="highlight">GPA: 3.90</p>
        </div>
      </section>

      <section className="card">
        <h2>Skills</h2>
        <div className="icons">
          <FaHtml5 title="HTML" />
          <FaCss3Alt title="CSS" />
          <FaJs title="JavaScript" />
          <FaNodeJs title="Node.js" />
          <SiPostgresql title="PostgreSQL" />
          <FaReact title="React" />
          <SiBootstrap title="Bootstrap" />
        </div>
      </section>

      <section className="grid-section">
        <div className="card">
          <h2>Language</h2>
          <p>
            English: B1<span className="bar"></span>
          </p>
        </div>

        <div className="card">
          <h2>Hobbies</h2>
          <div className="icons">
            <GiGamepad title="Gaming" />
            <BsHeadphones title="Music" />
            <GiMuscleUp title="Fitness" />
            <GiCookingPot title="Cooking" />
          </div>
        </div>
      </section>
      <footer className="footer">
        <p>© 2025 MuhammadAli Adhamov. All rights reserved.</p>
        <div className="footer-links">
          <a
            href="https://github.com/amuhammadali"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub /> GitHub
          </a>
          <a
            href="https://t.me/AdhamovMuhammadali"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiTelegram /> Telegram (Shaxsiy)
          </a>
          <a
            href="https://t.me/adkhamov_dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiTelegram /> Telegram Kanal
          </a>
          <a
            href="https://www.instagram.com/adkhamovv_000"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram /> Instagram
          </a>
        </div>
      </footer>
    </div>
  );
}
