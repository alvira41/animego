import Image from "next/image";

interface PageProps {
  params: {
    slug: string;
  };
}

export default function AnimeDetail({ params }: PageProps) {
  const anime = {
    title: "Solo Leveling",
    year: "2024",
    duration: "24 Episodes",
    genre: "Fantasy",
    language: "Japanese",
    rating: "9.4",

    banner: "/solo-banner.jpg",
    poster: "/solevp.jpg",

    writer: "Chugong",
    cast: "Taito Ban, Reina Ueda",

    synopsis:
      "Sung Jin-Woo adalah hunter terlemah yang memperoleh kemampuan misterius untuk meningkatkan kekuatannya tanpa batas. Setelah selamat dari Double Dungeon, ia mendapatkan sistem unik yang memungkinkannya terus berkembang hingga menjadi hunter terkuat di dunia.",

    gallery: [
      "/gallery1.jpg",
      "/gallery2.jpg",
      "/gallery3.jpg",
      "/gallery4.jpg",
      "/gallery5.jpg",
      "/gallery6.jpg",
      "/gallery7.jpg",
      "/gallery8.jpg",
      "/gallery9.jpg",
    ],

    screenshots: [
      "/ss1.jpg",
      "/ss2.jpg",
      "/ss3.jpg",
      "/ss4.jpg",
    ],
  };

  return (
    <section className="min-h-screen bg-[#05000B] pb-24">

      {/* HERO */}
      <div className="relative h-[750px] overflow-hidden">

        <Image
          src={anime.banner}
          alt={anime.title}
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#05000B] via-[#05000B]/50 to-transparent" />

        <div
          className="
            absolute
            bottom-10
            left-6
            md:left-20
            max-w-4xl
            rounded-[32px]
            border
            border-purple-500/20
            bg-[#160129]/40
            backdrop-blur-xl
            p-8
          "
        >
          <h1 className="text-6xl md:text-8xl font-serif text-white">
            {anime.title}
          </h1>

          <p className="mt-5 text-white/80 text-lg">
            {anime.year} | {anime.genre} | {anime.duration} |
            Anime | {anime.language}
          </p>

          <div className="flex gap-4 mt-6">

            <span
              className="
                px-5 py-2
                rounded-full
                bg-purple-700
                text-white
                font-medium
              "
            >
              ⭐ {anime.rating}
            </span>

            <span
              className="
                px-5 py-2
                rounded-full
                bg-[#25012B]
                border
                border-purple-400/20
                text-white
              "
            >
              {anime.genre}
            </span>

          </div>

          <p className="mt-5 text-purple-200/70">
            Slug: {params.slug}
          </p>
        </div>

      </div>

      {/* INFO */}
      <div className="max-w-6xl mx-auto px-6 mt-16">

        <div className="border-t border-purple-500/20 pt-12 grid lg:grid-cols-[280px_1fr] gap-12">

          <Image
            src={anime.poster}
            alt={anime.title}
            width={280}
            height={420}
            className="
              rounded-[30px]
              border
              border-purple-500/20
              shadow-[0_0_40px_rgba(168,85,247,0.2)]
            "
          />

          <div>

            <h2 className="text-4xl text-white mb-8">
              Synopsis
            </h2>

            <p className="text-purple-100/80 leading-9 text-lg">
              {anime.synopsis}
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-10">

              <div
                className="
                  bg-[#160129]/80
                  backdrop-blur-xl
                  border
                  border-purple-500/20
                  rounded-[24px]
                  p-6
                "
              >
                <h3 className="text-purple-300 text-lg">
                  Writer
                </h3>

                <p className="text-white mt-3">
                  {anime.writer}
                </p>
              </div>

              <div
                className="
                  bg-[#160129]/80
                  backdrop-blur-xl
                  border
                  border-purple-500/20
                  rounded-[24px]
                  p-6
                "
              >
                <h3 className="text-purple-300 text-lg">
                  Cast
                </h3>

                <p className="text-white mt-3">
                  {anime.cast}
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* GALLERY */}
      <div className="max-w-6xl mx-auto px-6 mt-24">

        <h2 className="text-4xl text-white mb-10">
          Gallery
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

          {anime.gallery.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-[24px]"
            >
              <Image
                src={img}
                alt={`gallery-${index}`}
                width={500}
                height={300}
                className="
                  w-full
                  h-[220px]
                  md:h-[250px]
                  object-cover
                  hover:scale-110
                  hover:brightness-110
                  transition-all
                  duration-700
                "
              />
            </div>
          ))}

        </div>

      </div>

      {/* QUOTE */}
      <div
        className="
          max-w-4xl
          mx-auto
          mt-24
          px-8
        "
      >
        <div
          className="
            rounded-[40px]
            border
            border-purple-500/20
            bg-[#160129]/70
            backdrop-blur-xl
            p-10
            text-center
          "
        >
          <p className="text-3xl text-white italic leading-relaxed">
            The weak who survive become the strong.
            Every battle makes me stronger.
          </p>
        </div>
      </div>

      {/* SCREENSHOTS */}
      <div className="max-w-6xl mx-auto px-6 mt-24">

        <h2 className="text-4xl text-white mb-10">
          Best Moments
        </h2>

        <div className="grid md:grid-cols-4 gap-4">

          {anime.screenshots.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-[24px]"
            >
              <Image
                src={img}
                alt={`screenshot-${index}`}
                width={500}
                height={300}
                className="
                  h-[250px]
                  w-full
                  object-cover
                  hover:scale-110
                  transition-all
                  duration-700
                "
              />
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}