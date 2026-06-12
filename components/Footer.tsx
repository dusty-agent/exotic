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
  
        <p
          className="
          mt-8
          max-w-xl
          leading-8
          text-[#8A7A72]
          "
        >
          Craftsmanship.
          <br />
          Storytelling.
          <br />
          Sound.
          <br />
          Digital Experiences.
        </p>
      </div>
  
      {/* Navigation */}
  
      <div
        className="
        mt-12
        flex
        flex-wrap
        gap-8
        text-sm
        "
      >
        <a
          href="https://smartstore.naver.com/exoticordinary"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-70 transition"
        >
          Boutique →
        </a>
  
        <a
          href="https://blog.naver.com/assetpick1"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-70 transition"
        >
          Archive →
        </a>
  
        <a
          href="https://draft.best/#/exotic"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-70 transition"
        >
          About →
        </a>
  
        <a
          href="/voutique"
          className="hover:opacity-70 transition"
        >
          Voutiq™ →
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
  
        <p
          className="
          mt-6
          max-w-xl
          leading-8
          text-[#8A7A72]
          "
        >
          Storytelling,
          <br />
          Sound Curation,
          <br />
          Future Experiences.
        </p>
      </div>
  
      {/* Draft House */}
  
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
          PART OF DRAFT HOUSE
        </p>
  
        <p
          className="
          mt-6
          leading-8
          text-[#8A7A72]
          "
        >
          Exotic Ordinary explores beauty.
          <br />
          Dusty Draft builds technology.
          <br />
          ASSETPICKER researches value.
        </p>
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

    <br />

    An independent ecosystem of
    experiences, technology and intelligence.
  </p>

</div>
    </div>
  </footer>
  
  );
  }
  