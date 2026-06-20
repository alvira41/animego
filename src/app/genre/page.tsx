import Link from "next/link";
import { db } from "@/lib/db";

const genreMeta: Record<string, { gradient: string; description: string }> = {
  action: {
    gradient: "from-red-900/40 to-orange-900/20",
    description: "Pertarungan epik dan aksi tanpa henti.",
  },
  fantasy: {
    gradient: "from-purple-900/40 to-blue-900/20",
    description: "Dunia sihir, monster, dan petualangan.",
  },
  romance: {
    gradient: "from-pink-900/40 to-rose-900/20",
    description: "Kisah cinta yang menghangatkan hati.",
  },
  horror: {
    gradient: "from-slate-900/60 to-zinc-900/40",
    description: "Cerita misteri dan ketegangan yang mencekam.",
  },
  supernatural: {
    gradient: "from-indigo-900/40 to-violet-900/20",
    description: "Kekuatan di luar nalar dan misteri.",
  },
  drama: {
    gradient: "from-amber-900/40 to-yellow-900/20",
    description: "Kisah emosional yang mendalam.",
  },
  adventure: {
    gradient: "from-emerald-900/40 to-teal-900/20",
    description: "Petualangan seru di dunia yang menakjubkan.",
  },
  comedy: {
    gradient: "from-lime-900/40 to-green-900/20",
    description: "Humor ringan yang menghibur.",
  },
  sport: {
    gradient: "from-sky-900/40 to-cyan-900/20",
    description: "Semangat juang dan kompetisi olahraga.",
  },
};

function slugify(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

export default async function GenreListing() {
  const [rows]: any = await db.query("SELECT DISTINCT genre FROM anime WHERE genre IS NOT NULL AND genre != ''");

  const genreSet = new Set<string>();
  for (const row of rows) {
    const parts = row.genre.split(",").map((g: string) => g.trim()).filter(Boolean);
    for (const part of parts) {
      genreSet.add(part);
    }
  }

  const genres = Array.from(genreSet).map((name) => {
    const slug = slugify(name);
    const meta = genreMeta[slug] || { gradient: "from-purple-900/40 to-purple-900/20", description: `Koleksi anime genre ${name}.` };
    return { name, slug, gradient: meta.gradient, description: meta.description };
  });

  return (
    <section className="min-h-screen bg-[#05000B] py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <p className="uppercase tracking-[0.3em] text-purple-300">
            Anime Collection
          </p>

          <h1 className="text-5xl text-white mt-4">
            Browse By Genre
          </h1>

          <p className="text-purple-200/70 mt-4">
            Temukan anime favoritmu berdasarkan genre.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {genres.map((genre) => (
            <Link
              key={genre.slug}
              href={`/genre/${genre.slug}`}
              className="block rounded-3xl overflow-hidden bg-[#160129] border border-purple-500/20 transition hover:-translate-y-2 hover:border-purple-400/40"
            >
              <div className={`h-48 bg-gradient-to-br ${genre.gradient} flex items-center justify-center`}>
                <span className="text-7xl font-serif text-white/20">
                  {genre.name[0]}
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-2xl text-white">
                  {genre.name}
                </h3>

                <p className="text-purple-200/70 mt-3">
                  {genre.description}
                </p>

                <div className="mt-5 block text-center w-full rounded-full bg-[#25012B] border border-purple-400/30 py-3 text-white transition hover:bg-purple-900">
                  Explore
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
