import Image from "next/image"
import logo from "../../public/logo.svg"
import Link from "next/link"

const NavbarSection = () => {
  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between pt-[3.75vh] ps-[5vw] pe-[2.5vw]">
      <div className="">
        <Image className="w-[37.25px] h-[50.16px]" src={logo} alt="Logo" />
      </div>
      <ul className="flex flex-col font-SharpSemiBold15 leading-none uppercase text-center">
        <li className="px-2 pb-[0.675rem] pt-[0.335rem]">
          <Link href={"/"}>Work</Link>
        </li>
        <li className="px-2 py-[0.675rem] border-t border-[#827e7d]">
          <Link href={"/"}>About</Link>
        </li>
        <li className="px-2 py-[0.675rem] border-t border-[#827e7d]">
          <Link href={"/"}>Resume</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavbarSection
