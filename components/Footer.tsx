export default function Footer() {
    return (
      <footer
        className="
        border-t
        border-[#E3D0CC]
        mt-24
        "
      >
        <div
          className="
          max-w-6xl
          mx-auto
          px-8
          py-12
          "
        >
          <p
            className="
            font-semibold
            tracking-wide
            "
          >
            EXOTIC ORDINARY®
          </p>
  
          <p
            className="
            mt-2
            italic
            text-[#8A7A72]
            "
          >
            Beauty in the Mirror.
          </p>
  
          <div
            className="
            mt-8
            flex
            flex-wrap
            gap-6
            text-sm
            "
          >
            <a
              href="https://smartstore.naver.com/exoticordinary"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Boutique →
            </a>
  
            <a
              href="https://blog.naver.com/assetpick1"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Archive →
            </a>
  
            <a
              href="https://draft.best/#/exotic"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              About →
            </a>
  
            <a
              href="https://youtu.be/tKdXWK6GbQA?si=eeLMp_f5HdylIkVd"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Voutique™ →
            </a>
          </div>
  
          <p
            className="
            mt-8
            text-sm
            text-[#8A7A72]
            "
          >
            © 2019–2026 EXOTIC ORDINARY.
          </p>
  
          <p
            className="
            mt-1
            text-sm
            text-[#8A7A72]
            "
          >
            Founded in Seoul. Part of DRAFT House.
          </p>
        </div>
      </footer>
    );
  }