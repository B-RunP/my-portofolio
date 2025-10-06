import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";
import SlideUp from "./SlideUp";

const projects = [
  {
    name: "Bookshelf",
    description:
      "This project is a bookshelf application. This application can help you to record books that you have not read and have read. This application implements local storage",
    image: "/project1.png",
    github: "#",
    link: "https://bookshelf-code1.web.app/",
  },
  {
    name: "Expense Tracker",
    description:
      "This project is a financial application to record income and expenses",
    image: "/project2.png",
    github: "#",
    link: "https://poernama-expense-trecker.web.app/",
  },
  {
    name: "Limosien",
    description:
      "Aplikasi perizinan penelitian dan magang mahasiswa/dosen/masyarakat/lainya di Dinas Kesehatan, Puskesmas, Instalasi Farmasi dan Laboratorium Kesehatan. Mahasiswa dapat mengunggah surat permohonan magang, melakukan pemantauan proses perizinan dan mendownload surat balasan/surat pengantar secara mandiri.",
    image: "/limisun.png",
    github: "#",
    link: "https://limosien.dinkes.semarangkota.go.id/",
  },
  {
    name: "SIM UHC",
    description:
      "Aplikasi Sistem Informasi untuk pendaftaran dan manajemen pelayanan UHC (Universal Health Coverage) di Kota Semarang. Aplikasi ini memfasilitasi pendaftaran peserta, penjadwalan layanan kesehatan, dan pelacakan riwayat medis peserta UHC.",
    image: "/uhuc.png",
    github: "#",
    link: "#",
  },
  {
    name: "Sayang Beta",
    description:
      "Simplifikasi Layanan dan Pendampingan Kesehatan Remaja dan Dewasa Terintegrasi Berbasis ELektronik Kota Semarang (SAYANG BETA), merupakan platform digital yang memiliki tujuan untuk membantu peningkatan kualitas layanan Kesehatan (berupa skrening Kesehatan) di masyarakat dalam rangka mendukung program Integrasi Layanan Primer Kementrian Kesehatan.",
    image: "/sayang_beta.png",
    github: "#",
    link: "https://sayangbeta.dinkes.semarangkota.go.id/",
  },
  {
    name: "Dashboard Hipertensi Kota Semarang (On Development)",
    description:
      "Simplifikasi Layanan dan Pendampingan Kesehatan Remaja dan Dewasa Terintegrasi Berbasis ELektronik Kota Semarang (SAYANG BETA), merupakan platform digital yang memiliki tujuan untuk membantu peningkatan kualitas layanan Kesehatan (berupa skrening Kesehatan) di masyarakat dalam rangka mendukung program Integrasi Layanan Primer Kementrian Kesehatan.",
    image: "/hipertensi.png",
    github: "#",
    link: "#",
  },
  {
    name: "PKG Sekolah",
    description:
      "Simplifikasi Layanan dan Pendampingan Kesehatan Remaja dan Dewasa Terintegrasi Berbasis ELektronik Kota Semarang (SAYANG BETA), merupakan platform digital yang memiliki tujuan untuk membantu peningkatan kualitas layanan Kesehatan (berupa skrening Kesehatan) di masyarakat dalam rangka mendukung program Integrasi Layanan Primer Kementrian Kesehatan.",
    image: "/sayang_beta.png",
    github: "#",
    link: "https://sayangbeta.dinkes.semarangkota.go.id/",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;
