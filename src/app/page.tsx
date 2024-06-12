import Link from "next/link";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { TbSend2 } from "react-icons/tb";

export default function Home() {
  return (
    <div className="items-center min-h-screen bg-gradient-to-b from-blue-100 to-yellow-100">
      <nav className="flex flex-row justify-center md:justify-between px-12 items-center py-8">
        <strong className="text-lg">Smartworka</strong>
        <button className="hidden md:flex items-center gap-3 border-[1px] border-black p-2 rounded-[16px]">
          <span>Notify Me</span>
          <span>
            <TbSend2 className="" />
          </span>
        </button>
      </nav>
      <main className="flex flex-col justify-center items-center px-4 md:px-0">
        <div className="flex flex-col gap-3 justify-center items-center">
          <div className="">
            <img
              src="/icon-sm.png"
              alt="icon"
              className="w-[200px] md:w-full"
            />
          </div>
          <h1 className="text-2xl md:text-4xl  font-bold mb-4">Coming Soon</h1>
          <p className="mb-4 text-sm md:text-lg flex flex-col text-center text-gray-500">
            <span>
            Transform Your Startup or Company Operations with SmartWorka.
            </span>
            <span>Get on the List Today!</span>
          </p>
          <div className="flex flex-col gap-2 md:gap-0 md:flex-row justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 border border-gray-300 shadow-sm shadow-gray-300 rounded-none md:rounded-l-md outline-none"
            />
            <button className="p-3 bg-[#0067FF] text-white rounded-none md:rounded-r-md font-bold">
              Subscribe
            </button>
          </div>
        </div>
        <footer className="pt-4 space-y-3">
          <div className="mt-6 flex text-[#0067FF] justify-center space-x-4">
            <Link href="">
              <FaFacebookF />
            </Link>
            <Link href="">
              <FaTwitter />
            </Link>

            <Link href="">
              <FaInstagram />
            </Link>
            <Link href="">
              <FaLinkedin />
            </Link>
            <Link href="">
              <FaGithub />
            </Link>
          </div>
          <p className="text-xs md:text-sm text-gray-500">
            © Copyrights smartworka | All Rights Reserved
          </p>
        </footer>
      </main>
    </div>
  );
}
