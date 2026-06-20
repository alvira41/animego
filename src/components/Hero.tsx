export default function Hero() {
  return (
    <section
      id="about"
      className="relative min-h-screen overflow-hidden pt-9"
      style={{
        backgroundImage: "url('/bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-[#160129]/80 to-black/90" />

      {/* Glow Effect */}
      <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-purple-900/20 blur-3xl" />
      <div className="absolute bottom-20 right-10 h-72 w-72 rounded-full bg-fuchsia-900/20 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-8 py-24 flex items-center min-h-screen">

        <div className="max-w-3xl">

          <p className="uppercase tracking-[0.4em] text-purple-300 mb-4">
            Anime Universe
          </p>

          <h1 className="text-5xl md:text-7xl font-light leading-tight text-white mb-8">
            Explore the world
            <br />
            of <span className="text-purple-300">Anime Stories</span>
          </h1>

          <p className="text-lg md:text-xl leading-9 text-purple-100/80 max-w-2xl">
            Animego menghadirkan sinopsis lengkap, karakter ikonik,
            galeri visual berkualitas tinggi, dan cuplikan adegan terbaik
            dari berbagai anime populer. Temukan petualangan baru,
            pertarungan epik, dan cerita yang tak terlupakan dalam satu
            platform.
          </p>

          <div className="flex gap-4 mt-10">
            <a
              href="#menu"
              className="px-8 py-4 rounded-full bg-[#25012B] border border-purple-400 text-white hover:scale-105 duration-300"
            >
              Explore Anime
            </a>

            <a
              href="#faq"
              className="px-8 py-4 rounded-full border border-white/30 text-purple-100 hover:bg-white/10 duration-300"
            >
              Learn More
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}