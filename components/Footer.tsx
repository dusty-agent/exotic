export default function Footer() {
  return (
    <footer
      className="
      border-t
      border-[#D8C7BD]
      bg-[#F8F2EE]
      "
    >
      <div
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

          <p className="mt-4 italic text-[#8A7A72]">
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
          <a href="/silvlin" className="hover:opacity-70 transition">
            SILVLIN →
          </a>

          <a href="/stonin" className="hover:opacity-70 transition">
            STONIN →
          </a>

          <a href="/studio" className="hover:opacity-70 transition">
            Studio →
          </a>

          <a href="/voutiq" className="hover:opacity-70 transition">
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

{/* Connect */}

<div className="mt-24 pt-12 border-t border-[#E3D0CC]">

  <p className="text-sm uppercase tracking-[0.2em] text-[#B49A8D]">
    CONNECT
  </p>

  <div className="mt-6 flex flex-col gap-3">

    <a
      href="https://pf.kakao.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:opacity-70 transition"
    >
      KakaoTalk →
    </a>

    <a
      href="https://www.instagram.com/exoticordinary_official"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:opacity-70 transition"
    >
      Instagram →
    </a>

    <a
      href="mailto:exoticordinary@gmail.com"
      className="hover:opacity-70 transition"
    >
      exoticordinary@gmail.com
    </a>

  </div>

</div>



{/* Company */}

<div className="mt-24 pt-12 border-t border-[#E3D0CC]">

  <p className="text-sm uppercase tracking-[0.2em] text-[#B49A8D]">
    COMPANY
  </p>

  <div
    className="
    mt-6
    flex
    flex-col
    gap-2
    text-sm
    leading-7
    text-[#8A7A72]
    "
  >

    <p>
      Company Name : DRAFT House®
    </p>

    <p>
      CEO : So Young Jang
    </p>

    <p>
      Business Registration No : 756-66-00303
    </p>

    <p>
      Mail-order License : 2020-서울양천-0014
    </p>

    <p>
      Personal Information Manager : So Young Jang
    </p>

    <div className="pt-2">

      <p>Address :</p>

      <p>114, A Arcade</p>

      <p>340 Mokdongseo-ro</p>

      <p>Yangcheon-gu, Seoul</p>

      <p>Republic of Korea</p>

    </div>

    <p>
      Email : exoticordinary@gmail.com
    </p>

    <p>
      Customer Support : KakaoTalk Channel
    </p>

  </div>

</div>



{/* Policy */}

<div className="mt-24 pt-12 border-t border-[#E3D0CC]">

  <p className="text-sm uppercase tracking-[0.2em] text-[#B49A8D]">
    POLICY
  </p>

  <div className="mt-6 flex flex-col gap-3">

    <a
      href="/terms"
      className="hover:opacity-70 transition"
    >
      Terms of Service →
    </a>

    <a
      href="/privacy"
      className="hover:opacity-70 transition"
    >
      Privacy Policy →
    </a>

    <a
      href="/shipping"
      className="hover:opacity-70 transition"
    >
      Shipping & Returns →
    </a>

  </div>

</div>



{/* Creative Direction */}

<div className="mt-24 pt-12 border-t border-[#E3D0CC]">

  <p className="text-xs tracking-[0.3em] text-[#B08A73]">
    CREATIVE DIRECTION
  </p>

  <p className="mt-6 font-medium">
    So Young Jang
  </p>

  <p className="mt-2 text-[#8A7A72]">
    Founder & Creative Director
  </p>

</div>



{/* DRAFT House */}

<div className="mt-24 pt-12 border-t border-[#E3D0CC]">

  <p className="text-sm uppercase tracking-[0.2em] text-[#B49A8D]">
    DRAFT HOUSE
  </p>

  <p
    className="
    mt-6
    max-w-xl
    text-[#8A7A72]
    leading-8
    "
  >
    경험, 기술, 큐레이션을 연구하는 독립 프로젝트 그룹.
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

<div className="mt-24 pt-12 border-t border-[#E3D0CC]">

  <p className="text-sm text-[#9A8D85]">
    © 2019–2026 EXOTIC ORDINARY®
  </p>

  <p
    className="
    mt-4
    text-sm
    text-[#9A8D85]
    leading-7
    "
  >
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