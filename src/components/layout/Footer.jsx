import { Link } from "react-router";

function Footer() {
  return (
    <footer className="mt-8 bg-primary text-on-primary">
      <div
        className="
          mx-auto
          grid
          max-w[1200px]
          grid-cols-1
          gap-8
          px-4
          py-12
          md:grid-cols-4
        "
      >
        {/* Brand */}
        <div>
          <Link to="/" className="font-display text-3xl text-secondary-fixed">
            Happilo
          </Link>

          <p className="mt-4 text-sm text-on-primary/80">
            The Art of Snacking.
          </p>
        </div>

        {/* Company */}
        <div>
          <h4 className="mb-3 font-semibold">Company</h4>

          <div className="flex flex-col gap-2 text-sm text-on-primary/80">
            <Link to="/">Brand Story</Link>
            <Link to="/">Sustainability</Link>
          </div>
        </div>

        {/* Support */}
        <div>
          <h4 className="mb-3 font-semibold">Support</h4>

          <div className="flex flex-col gap-2 text-sm text-on-primary/80">
            <Link to="/">Wholesale</Link>
            <Link to="/">Contact Us</Link>
          </div>
        </div>

        {/* Legal */}
        <div>
          <h4 className="mb-3 font-semibold">Legal</h4>

          <div className="flex flex-col gap-2 text-sm text-on-primary/80">
            <Link to="/">Privacy Policy</Link>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-fixed-dim/20">
        <div
          className="
            mx-auto
            max-w[1200px]
            px-4
            py-6
            text-center
            text-sm
            text-on-primary/60
          "
        >
          © 2026 Happilo International. The Art of Snacking.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
