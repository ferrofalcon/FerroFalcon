import TitleText from "./TitleText"
import Image from "next/image"
import frameLeft from "../../public/Frame 97470.avif"
import frameMid from "../../public/Frame 97479.avif"
import frameRight from "../../public/Frame 97485.avif"

const HeroSection = () => {
  return (
    <>
      <section className="w-full h-[80vh] grid grid-cols-7">
        <div className="col-span-1 border-r-2 border-[#faf0ea]" />
        <div className="col-span-5 grid grid-rows-12">
          <div className="row-span-6 border-b-2 border-[#faf0ea]">
            <div className="flex h-full justify-center items-center">
              <TitleText />
            </div>
          </div>
          <div className="row-span-6">
            <div className="h-full grid grid-cols-12">
              <div className="col-span-4 border-r-2 border-[#faf0ea]">
                <div className="flex flex-col gap-3 w-full items-center text-center mt-[5vh] px-10">
                  <Image className="w-24 max-h-16" src={frameLeft} alt="" />
                  <p className="font-SharpSemiBoldItalic15 italic text-[#555555] text-xl">
                    noun.
                  </p>
                  <h4 className="font-SharpBook20 text-[#444346] text-2xl">
                    product designer, visual storyteller
                  </h4>
                </div>
              </div>
              <div className="col-span-4 border-r-2 border-[#faf0ea]">
                <div className="flex flex-col gap-3 w-full items-center text-center mt-[5vh] px-10">
                  <Image className="w-24 max-h-16" src={frameMid} alt="" />
                  <p className="font-SharpSemiBoldItalic15 italic text-[#555555] text-xl">
                    adj.
                  </p>
                  <h4 className="font-SharpBook20 text-[#444346] text-2xl">
                    curious, caring, detail-oriented
                  </h4>
                </div>
              </div>
              <div className="col-span-4">
                <div className="flex flex-col gap-3 w-full items-center text-center mt-[5vh] px-10">
                  <Image className="w-24 max-h-16" src={frameRight} alt="" />
                  <p className="font-SharpSemiBoldItalic15 italic text-[#555555] text-xl">
                    verb.
                  </p>
                  <h4 className="font-SharpBook20 text-[#444346] text-2xl">
                    raises thoughtful questions to challenge norms
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1 border-l-2 border-[#faf0ea]" />
      </section>
    </>
  )
}

export default HeroSection
