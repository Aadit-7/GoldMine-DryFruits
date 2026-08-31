import { Link } from "react-router";
import { ArrowRight } from "lucide-react";

function Hero() {
  return (
    <section className="relative h-[500px] overflow-hidden">
      {/* Background Image */}
      <div
        className="
          absolute
          inset-0
          bg-cover
          bg-center
        "
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1599599810694-b5c6e7c85a5e?auto=format&fit=crop&w=2000&q=80')",
        }}
      />

      {/* Overlay */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-primary-container/95
          via-primary-container/75
          to-transparent
        "
      />

      {/* Content */}
      <div
        className="
          relative
          z-10
          mx-auto
          flex
          h-full
          max-w-[1200px]
          flex-col
          justify-center
          px-4
        "
      >
        <h1
          className="
            max-w-2xl
            font-display
            text-4xl
            font-semibold
            leading-tight
            text-on-primary
            md:text-6xl
          "
        >
          Premium nutrition,
          <br />
          deliciously yours
        </h1>

        <p
          className="
            mt-5
            text-lg
            font-semibold
            text-secondary-fixed-dim
          "
        >
          Kholo, Khalo, Happilo!
        </p>

        <Link
          to="/products"
          className="
            mt-8
            flex
            w-fit
            items-center
            gap-2
            rounded-lg
            bg-secondary-container
            px-8
            py-3
            font-semibold
            text-text-ink
            transition
            hover:bg-secondary-fixed
          "
        >
          Shop Now
          <ArrowRight size={20} />
        </Link>
      </div>
    </section>
  );
}

export default Hero;
