import { useEffect, useState } from "react";
import coverImage from "./assets/cover.jpg";
import zohoLogo from "../assets/zoho.svg";
import superopsLogo from "../assets/SuperOps.svg";

export default function Cover() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <section className="wrap pt-2">
      <div
        className={`text-center transition-[opacity,transform] duration-700 ease-out ${
          visible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
        }`}
      >
        {/* EDIT: your name */}
        <h1 className="m-0 text-[40px] font-bold tracking-[-0.02em] text-accent sm:text-[56px]">
          Hi, I'm Your Name!
        </h1>
        {/* EDIT: your one-line intro */}
        <p className="mx-auto mt-4 max-w-[560px] text-[15px] leading-[1.6] text-muted">
          I'm a product designer crafting calm, clear experiences for
          complex, enterprise-scale products.
        </p>
        <div className="mt-6 flex items-center justify-center gap-8">
          <img
            src={zohoLogo}
            alt="Zoho Corp"
            className="h-5 w-auto object-contain opacity-70"
          />
          <img
            src={superopsLogo}
            alt="SuperOps"
            className="h-5 w-auto object-contain opacity-70"
          />
        </div>
      </div>

      <div
        className={`mt-10 overflow-hidden rounded-[28px] border border-border shadow-md transition-[opacity,transform] duration-700 ease-out ${
          visible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
        }`}
      >
        <img
          src={coverImage}
          alt="Illustrated green mountain range beneath a dark teal sky"
          className="aspect-[16/8] w-full object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
        />
      </div>
    </section>
  );
}
