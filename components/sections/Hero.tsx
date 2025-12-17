import Image from "next/image";
import Link from "next/link";
import { Linkedin, Twitter } from "lucide-react";
import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex flex-col items-center justify-center text-center px-4 py-20 min-h-[80vh]"
    >
      {/* Portrait Image */}
      <div className="mb-0 relative">
        <div className="w-48 h-48 md:w-64 md:h-64 overflow-hidden mx-auto relative z-10 rounded-full">
          <Image
            src="/assets/images/miguel/miguel-bonifaz.png"
            alt="Miguel Bonifaz"
            width={500}
            height={500}
            className="w-full h-full object-cover grayscale-img"
            priority
          />
        </div>
      </div>

      {/* Horizontal line */}
      <div className="w-full max-w-xs border-t border-gray-400 my-8"></div>

      {/* Intro Text */}
      <div className="space-y-1">
        <p className="text-sm md:text-base text-gray-600">¡Hola! Soy</p>
        <h1 className="text-5xl md:text-7xl text-gray-800 serif-font tracking-wide mb-6">
          Miguel Bonifaz
        </h1>
      </div>

      {/* Links and Info Grid */}
      <div className="w-full max-w-2xl mt-8 px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-4 space-y-4 md:space-y-0">
          {/* Left: LinkedIn & Badge */}
          <div className="flex items-center space-x-3">
            <Link
              href="https://www.linkedin.com/in/miguelbonifaz126/"
              target="_blank"
              className="text-gray-600 hover:text-black"
            >
              <Linkedin className="w-5 h-5" />
            </Link>
            <Link
              href="https://x.com/MBonifaz126"
              target="_blank"
              className="text-gray-600 hover:text-black"
            >
              <Twitter className="w-5 h-5" />
            </Link>
            <Link href="#contact" className="pill-badge hover:no-underline">
              Disponible para Trabajar
            </Link>
          </div>

          {/* Right: Email */}
          <a
            href="mailto:miguelbonifaz126@gmail.com"
            className="text-gray-500 text-sm hover:text-black transition-colors"
          >
            miguelbonifaz126@gmail.com
          </a>
        </div>

        {/* Bottom Details */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs md:text-sm text-gray-500 mt-2">
          <div>Laravel Developer</div>
          <div className="mt-2 md:mt-0">Guayaquil, Ecuador 🇪🇨</div>
        </div>
      </div>
    </section>
  );
}
