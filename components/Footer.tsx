export default function Footer() {
  return ( <footer
    className="
    border-t
    border-[#D8C7BD]
    bg-[#F8F2EE]
    "
  > <div
       className="
       max-w-6xl
       mx-auto
       px-8
       py-16
       "
     >
  {/* Brand */}
  
      <div>
        <h3
          className="
          font-semibold
          text-[#2A2321]
          tracking-[0.2em]
          "
        >
          EXOTIC ORDINARY®
        </h3>
  
        <p
          className="
          mt-4
          italic text-[#8A7A72]
          "
        >
          Beauty in the Mirror.
        </p>
  
      </div>
  
      {/* Navigation */}
  
      <div
        className="
        mt-8
        flex
        flex-wrap
        gap-8
        text-sm
        "
      >
        <a
          href="/silvlin"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-70 transition"
        >
          SILVLIN →
        </a>

        <a
          href="/stonin"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-70 transition"
        >
          STONIN →
        </a>

        <a
          href="/studio"
          className="hover:opacity-70 transition"
        >
          Studio →
        </a>

        <a
          href="/voutiq"
          className="hover:opacity-70 transition"
        >
          Voutiq™ →
        </a>

        <a
          href="https://draft.best/#/exotic"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-70 transition"
        >
          About →
        </a>
      </div>
  
      {/* Creative Direction */}
  
      <div
        className="
        mt-16
        pt-12
        border-t
        border-[#E6D8D0]
        "
      >
        <p
          className="
          text-xs
          tracking-[0.3em]
          text-[#B08A73]
          "
        >
          CREATIVE DIRECTION
        </p>
  
        <p
          className="
          mt-6
          font-medium
          "
        >
          So Young Jang
        </p>
  
        <p
          className="
          mt-2
          text-[#8A7A72]
          "
        >
          Founder & Creative Director
        </p>
  
      </div>
  
      {/* Draft House */}
  
      <div className="mt-24 pt-12 border-t border-[#E3D0CC]">

<p
  className="
  text-sm
  uppercase
  tracking-[0.2em]
  text-[#B49A8D]
  "
>
  DRAFT House
</p>

<p
  className="
  mt-6
  max-w-xl
  text-[#8A7A72]
  leading-8
  "
>
  경험, 기술, 큐레이션을 연구하는
  독립 프로젝트 그룹.
</p>

<div className="mt-10 flex flex-col gap-3">

  <a
    href="https://draft.best/#/exotic"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:opacity-70 transition"
  >
    Exotic Ordinary →
  </a>

  <a
    href="https://draft.best/#/dusty"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:opacity-70 transition"
  >
    Dusty Draft →
  </a>

  <a
    href="https://draft.best/#/assetpicker"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:opacity-70 transition"
  >
    ASSETPICKER →
  </a>

</div>

</div>
  
      {/* Copyright */}
  
      <div className="mt-16 pt-12 border-t border-[#E3D0CC]">

  <p className="text-sm text-[#8A7A72]">
    © 2019–2026 EXOTIC ORDINARY®
  </p>

  <p className="mt-4 text-sm text-[#8A7A72] leading-7">
    Part of
    <a
      href="https://draft.best"
      target="_blank"
      rel="noopener noreferrer"
      className="
      ml-1
      font-medium
      hover:text-[#DDBB6A]
      transition
      "
    >
      DRAFT House
    </a>
  </p>

</div>
    </div>
  </footer>
  
  );
  }
  