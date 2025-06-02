import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useState } from "react";
import "remixicon/fonts/remixicon.css";

const App = () => {
  let [showContent, setShowContent] = useState(false);
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".vi-mask-group", {
      rotate: 10,
      duration: 2,
      ease: "power4.inOut",
      transformOrigin: "50% 50%",
    }).to(".vi-mask-group", {
      scale: 10,
      duration: 2,
      delay: -1.8,
      ease: "Expo.easeInOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onUpdate: function () {
        if (this.progress() >= 0.9) {
          document.querySelector(".svg").remove();
          setShowContent(true);
          this.kill();
        }
      },
    });
  });

  useGSAP(() => {
    if (!showContent) return;

    gsap.to(".main", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: -1,
      ease: "Expo.easeInOut",
    });
    gsap.to(".sky", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: -0.8,
      ease: "Expo.easeInOut",
    });
    gsap.to(".bg", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: -0.8,
      ease: "Expo.easeInOut",
    });

    gsap.to(".character", {
      scale: 1,
      x: "-50%",
      bottom: "-60%",
      rotate: 0,
      duration: 2,
      delay: -0.8,
      ease: "Expo.easeInOut",
    });

    gsap.to(".text", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: -0.8,
      ease: "Expo.easeInOut",
    });

    const main = document.querySelector(".main");

    main?.addEventListener("mousemove", (e) => {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
      gsap.to(".main .text", {
        x: `${xMove * 0.5}`,
      });
      gsap.to(".sky", {
        x: xMove,
      });
      gsap.to(".bg", {
        x: xMove,
      });
    });
  }, [showContent]);

  return (
    <>
      <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./public\bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>
      {showContent && (
        <div className="main w-full rotate-[-10deg] scale-[1.7]">
          <div className="landing overflow-hidden relative w-full h-screen bg-black">
            <div className="navbar absolute top-0 left-0 z-[10] w-full py-10 px-10 ">
              <div className="logo flex gap-7">
                <div className="lines flex flex-col gap-[5px]">
                  <div className="line w-15 h-1.5 bg-white"></div>
                  <div className="line w-8 h-1.5 bg-white"></div>
                  <div className="line w-5 h-1.5 bg-white"></div>
                </div>
                <h2 className="text-4xl mt-[-8px] leading-none font-black text-white">
                  Rockstar
                </h2>
              </div>
            </div>
            <div className="imagesdiv relative overflow-hidden w-full h-screen">
              <img
                className="sky rotate-[-20deg] absolute scale-[1.5] top-0 left-0 w-full h-full object-cover"
                src="/sky.png"
                alt=""
              />
              <img
                className=" absolute bg scale-[1.8] rotate-[-3deg] top-0 left-0  w-full h-full object-cover"
                src="/bg.png"
                alt=""
              />
              <div className="text absolute text-white top-20 flex flex-col gap-3 left-1/2 -translate-x-1/2 scale-[1.4] rotate-[-10deg]">
                <h1 className="text-9xl leading-none -ml-40">grand</h1>
                <h1 className="text-9xl leading-none ml-20">theft</h1>
                <h1 className="text-9xl leading-none -ml-40">auto</h1>
              </div>
              <img
                className="absolute character rotate-[-20deg] scale-[2] -bottom-[150%]  left-1/2 -translate-x-1/2"
                src="/girlbg.png"
                alt=""
              />
            </div>
            <div className="btmbar text-white w-full py-10 px-15 absolute bottom-0 left-0 bg-gradient-to-t from-black to-transparent">
              <div className="flex gap-4 items-center">
                <i className="text-4xl ri-arrow-down-s-line"></i>
                <h1 className="text-xl font-mono">Scroll Down</h1>
              </div>
              <img
                className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 left-1/2 h-[55px]"
                src="/ps5.png"
                alt=""
              />
            </div>
          </div>
          <div className="w-full min-h-screen overflow-hidden bg-black text-white flex items-center justify-center">
            <div className="flex w-[90%] max-w-[1200px] mx-auto gap-12 items-center">
              {/* Left: Big Hero Image */}
              <div className="w-1/2 flex justify-center">
                <img
                  src="/imag.png"
                  alt="hero"
                  className="transform scale-[1.3] w-full max-w-md object-contain"
                />
              </div>

              {/* Right: Text Content */}
              <div className="w-1/2 text-left">
                <h1 className="hero-text text-9xl font-extrabold leading-none">
                  MAY
                </h1>
                <h2 className="hero-text text-7xl font-bold mt-2">26 2026</h2>
                <p className="mt-8 font-mono text-xl text-gray-300">
                  GTA VI catapults you into the neon-soaked streets of{" "}
                  <span className="text-[#4fd1c5]">Leonida...</span>
                </p>
                <p className="mt-4 font-mono text-xl text-gray-300">
                  Experience the most immersive open-world adventure Rockstar
                  Games has ever created. GTA VI catapults you into the
                  neon-soaked streets and sun-drenched coastlines of Leonida, a
                  state inspired by modern-day Florida, packed with vibrant city
                  life, untamed wilderness, and raw criminal underworlds.
                </p>
                <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-4 px-8 text-2xl rounded-xl shadow-md transition-all mt-5 duration-300 ease-in-out">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
