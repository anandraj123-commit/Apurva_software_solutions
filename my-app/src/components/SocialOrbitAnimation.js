"use client";

import useEmailSender from "../components/hooks/useEmailSender";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaTwitter,
  FaWhatsapp,
  FaGithub,
  FaTelegram,
} from "react-icons/fa";
import Subscribe from "../forms/subscribe";

const outerIcons = [
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
];

const middleIcons = [
  FaTwitter,
  FaWhatsapp,
  FaGithub,
  FaTelegram,
];

export default function SocialOrbitHero(props) {
    const { sendEmails } = useEmailSender();

    async function onSubmitFormRequest(formData, INFOTYPE) {
        return await sendEmails(formData, INFOTYPE);
      }
  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#f1f4fa]">
      <style jsx>{`
        @keyframes spinSlow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes spinReverse {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(-360deg);
          }
        }

        @keyframes pulseGlow {
          0%,
          100% {
            opacity: 0.5;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.1);
          }
        }

        .orbit-outer {
          animation: spinSlow 50s linear infinite;
        }

        .orbit-middle {
          animation: spinReverse 40s linear infinite;
        }

        .orbit-inner {
          animation: spinSlow 30s linear infinite;
        }

        .counter-outer {
          animation: spinReverse 50s linear infinite;
        }

        .counter-middle {
          animation: spinSlow 40s linear infinite;
        }

        .logo-glow {
          animation: pulseGlow 4s ease-in-out infinite;
        }
      `}</style>

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[#f1f4fa]" />

      {/* Perspective Container */}
      <div
        className="absolute inset-0"
        style={{
          perspective: "1400px",
          transform: "perspective(1400px) rotateX(15deg)",
          transformOrigin: "center bottom",
        }}
      >
        {/* OUTER ORBIT */}
        <div className="absolute inset-0 orbit-outer">
          <div className="absolute left-1/2 top-1/2 w-[1400px] h-[1400px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-orange-500/10">
            {outerIcons.map((Icon, index) => {
              const angle = (360 / outerIcons.length) * index;

              return (
                <div
                  key={index}
                  className="absolute left-1/2 top-1/2"
                  style={{
                    transform: `rotate(${angle}deg) translateY(-700px)`,
                  }}
                >
                  <div className="counter-outer">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full border border-orange-500/30 bg-zinc-900/80 backdrop-blur-md shadow-[0_0_30px_rgba(249,115,22,0.35)]">
                      <Icon className="text-3xl text-orange-400" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* MIDDLE ORBIT */}
        <div className="absolute inset-0 orbit-middle">
          <div className="absolute left-1/2 top-1/2 w-[850px] h-[850px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-500/15">
            {middleIcons.map((Icon, index) => {
              const angle = (360 / middleIcons.length) * index;

              return (
                <div
                  key={index}
                  className="absolute left-1/2 top-1/2"
                  style={{
                    transform: `rotate(${angle}deg) translateY(-425px)`,
                  }}
                >
                  <div className="counter-middle">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full border border-blue-500/30 bg-zinc-900/80 backdrop-blur-md shadow-[0_0_25px_rgba(59,130,246,0.35)]">
                      <Icon className="text-2xl text-blue-400" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* INNER ORBIT */}
        <div className="absolute inset-0 orbit-inner">
          <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10">
            {[0, 90, 180, 270].map((angle) => (
              <div
                key={angle}
                className="absolute left-1/2 top-1/2"
                style={{
                  transform: `rotate(${angle}deg) translateY(-250px)`,
                }}
              >
                <div className="h-4 w-4 rounded-full bg-orange-400 shadow-[0_0_20px_rgba(249,115,22,0.8)]" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Center Logo */}
      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <div className="relative">
          {/* Glow */}
          <div className="logo-glow absolute inset-0 scale-150 rounded-full bg-orange-500/20 blur-3xl" />

          <div className="relative flex h-48 w-48 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_0_80px_rgba(249,115,22,0.25)] md:h-56 md:w-56">
            <img
              src="/favicon1.png" // Put your logo inside public/logo.png
              alt="Apurva Software Solutions"
              width={180}
              height={180}
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="absolute bottom-5 left-0 right-0 z-30 text-center px-4 py-3">
        {/* <h1 className="text-sm font-bold text-black md:text-5xl">
          Subscribe
        </h1> */}

        <p className="mt-4 text-base text-sm text-black md:text-xl">
          Follow Apurva Software Solutions across all social platforms
        </p>

        <div className="flex justify-center mt-4">
  <div className="w-full max-w-sm">
    <Subscribe onSubmitFormRequest={onSubmitFormRequest} />
  </div>
</div>
        
      </div>

      {/* Dark Overlay */}
      <div className="pointer-events-none absolute inset-0" />
    </section>
  );
}