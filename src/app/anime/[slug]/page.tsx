import Image from "next/image";
import { db } from "@/lib/db";

export const dynamic = "force-dynamic";

interface PageProps {
  params: {
    slug: string;
  };
}

export default async function AnimeDetail({ params }: PageProps) {

  // 1. Ambil anime berdasarkan slug
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [animeRows]: any = await db.query(
    "SELECT * FROM anime WHERE slug = ?",
    [params.slug]
  );

  const anime = animeRows[0];

  if (!anime) {
    return (
      <div className="text-white p-10">
        Anime tidak ditemukan
      </div>
    );
  }

  // 2. Ambil gallery berdasarkan anime_id (langsung pakai id & image, tanpa di-map jadi string)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [galleryRows]: any = await db.query(
    "SELECT id, image FROM anime_galleries WHERE anime_id = ?",
    [anime.id]
  );

  const gallery = galleryRows as { id: number; image: string }[];

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

        <div className="
          absolute bottom-10 left-6 md:left-20 max-w-4xl
          rounded-[32px] border border-purple-500/20
          bg-[#160129]/40 backdrop-blur-xl p-8
        ">
          <h1 className="text-6xl md:text-8xl font-serif text-white">
            {anime.title}
          </h1>

          <p className="mt-5 text-white/80 text-lg">
            {anime.year} | {anime.genre} | {anime.duration} | Anime | {anime.language}
          </p>

          <div className="flex gap-4 mt-6">

            <span className="px-5 py-2 rounded-full bg-purple-700 text-white font-medium">
              ⭐ {anime.rating}
            </span>

            <span className="px-5 py-2 rounded-full bg-[#25012B] border border-purple-400/20 text-white">
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
            className="rounded-[30px] border border-purple-500/20"
          />

          <div>

            <h2 className="text-4xl text-white mb-8">
              Synopsis
            </h2>

            <p className="text-purple-100/80 leading-9 text-lg">
              {anime.synopsis}
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-10">

              <div className="bg-[#160129]/80 backdrop-blur-xl border border-purple-500/20 rounded-[24px] p-6">
                <h3 className="text-purple-300 text-lg">Writer</h3>
                <p className="text-white mt-3">{anime.writer}</p>
              </div>

              <div className="bg-[#160129]/80 backdrop-blur-xl border border-purple-500/20 rounded-[24px] p-6">
                <h3 className="text-purple-300 text-lg">Cast</h3>
                <p className="text-white mt-3">{anime.cast}</p>
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

        {gallery.length === 0 ? (
          <p className="text-purple-200/60">
            Tidak ada gambar gallery
          </p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

            {gallery
              .filter((img) => img?.image)
              .map((img) => (
                <div
                  key={img.id}
                  className="overflow-hidden rounded-[24px]"
                >
                  <img
                    src={img.image}
                    alt={`anime_galleries-${img.id}`}
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
        )}

      </div>

    </section>
  );
}