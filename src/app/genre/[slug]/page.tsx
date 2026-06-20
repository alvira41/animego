import Link from "next/link";
import Image from "next/image";
import { db } from "@/lib/db";

const genreInfo: Record<string, { name: string; gradient: string; description: string }> = {
  action: {
    name: "Action",
    gradient: "from-red-900/40 to-orange-900/20",
    description: "Pertarungan epik dan aksi tanpa henti.",
  },
  fantasy: {
    name: "Fantasy",
    gradient: "from-purple-900/40 to-blue-900/20",
    description: "Dunia sihir, monster, dan petualangan.",
  },
  romance: {
    name: "Romance",
    gradient: "from-pink-900/40 to-rose-900/20",
    description: "Kisah cinta yang menghangatkan hati.",
  },
  horror: {
    name: "Horror",
    gradient: "from-slate-900/60 to-zinc-900/40",
    description: "Cerita misteri dan ketegangan yang mencekam.",
  },
  supernatural: {
    name: "Supernatural",
    gradient: "from-indigo-900/40 to-violet-900/20",
    description: "Kekuatan di luar nalar dan misteri.",
  },
  drama: {
    name: "Drama",
    gradient: "from-amber-900/40 to-yellow-900/20",
    description: "Kisah emosional yang mendalam.",
  },
  adventure: {
    name: "Adventure",
    gradient: "from-emerald-900/40 to-teal-900/20",
    description: "Petualangan seru di dunia yang menakjubkan.",
  },
  comedy: {
    name: "Comedy",
    gradient: "from-lime-900/40 to-green-900/20",
    description: "Humor ringan yang menghibur.",
  },
  sport: {
    name: "Sport",
    gradient: "from-sky-900/40 to-cyan-900/20",
    description: "Semangat juang dan kompetisi olahraga.",
  },
};

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function GenrePage({
  params,
}: PageProps) {
  const { slug } = await params;
  const genre = genreInfo[slug] || {
    name: slug,
    gradient: "from-purple-900/40 to-purple-900/20",
    description: `Koleksi anime genre ${slug}.`,
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [rows]: any = await db.query(
    "SELECT slug, title, poster AS image, rating FROM anime WHERE FIND_IN_SET(?, REPLACE(LOWER(genre), ' ', ''))",
    [slug]
  );
  const animes = rows as { slug: string; title: string; image: string; rating: string }[];

  return (
    <section className="min-h-screen bg-[#05000B]">

      <div className={`relative h-[400px] overflow-hidden bg-gradient-to-br ${genre.gradient}`}>
        <div className="absolute inset-0 bg-gradient-to-t from-[#05000B] via-[#05000B]/30 to-transparent" />

        <div className="absolute bottom-10 left-6 md:left-20 max-w-4xl">
          <p className="uppercase tracking-[0.3em] text-purple-300">
            Genre Collection
          </p>
          <h1 className="text-6xl md:text-8xl font-serif text-white mt-3 capitalize">
            {genre.name}
          </h1>
          <p className="mt-4 text-purple-200/70 text-lg max-w-xl">
            {genre.description}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16">
        {animes.length === 0 ? (
          <p className="text-purple-200/60 text-center py-24">
            Belum ada anime untuk genre ini
          </p>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {animes.map((anime) => (
              <div
                key={anime.slug}
                className="
                  overflow-hidden
                  rounded-3xl
                  border
                  border-purple-500/20
                  bg-[#160129]
                  backdrop-blur-xl
                  transition
                  hover:-translate-y-2
                  hover:border-purple-400/40
                "
              >
                <div className="overflow-hidden">
                  <Image
                    src={anime.image}
                    alt={anime.title}
                    width={500}
                    height={700}
                    className="
                      h-[420px]
                      w-full
                      object-cover
                      transition
                      duration-700
                      hover:scale-110
                    "
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl text-white">
                      {anime.title}
                    </h2>

                    <span className="rounded-full bg-purple-700 px-3 py-1 text-sm text-white">
                      ⭐ {anime.rating}
                    </span>
                  </div>

                  <Link
                    href={`/anime/${anime.slug}`}
                    className="
                      mt-6
                      block
                      rounded-full
                      border
                      border-purple-400/30
                      bg-[#25012B]
                      py-3
                      text-center
                      text-white
                      transition
                      hover:bg-purple-900
                    "
                  >
                    Lihat Detail
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-16 pb-24 text-center">
          <Link
            href="/"
            className="
              rounded-full
              border
              border-purple-400/30
              bg-[#25012B]
              px-8
              py-4
              text-white
              transition
              hover:bg-purple-900
            "
          >
            ← Kembali ke Homee
          </Link>
        </div>
      </div>
    </section>
  );
}