"use client";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { useEffect, useState } from "react";

import "swiper/css";
import "swiper/css/navigation";

interface Anime {
  slug: string;
  title: string;
  image: string;
  rating: string;
  genre: string;
}
export default function Menu() {
  const [animes, setAnimes] = useState<Anime[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/anime")
      .then((res) => res.json())
      .then((data) => {
        setAnimes(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <section id="menu" className="bg-[#05000B] py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-white text-center">
          Loading...
        </div>
      </section>
    );
  }

  return (
    <section
      id="menu"
      className="bg-[#05000B] py-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="mb-12">
          <p className="uppercase tracking-[0.3em] text-purple-300">
            Popular Anime
          </p>

          <h2 className="text-5xl text-white mt-3">
            Most Popular Series
          </h2>
        </div>

        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          spaceBetween={25}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
        >
          {animes.map((anime) => (
            <SwiperSlide key={anime.slug}>
              <div className="group overflow-hidden rounded-[30px] border border-purple-500/20 bg-[#160129]/80 backdrop-blur-xl">

                <div className="overflow-hidden">
                  <Image
                    src={anime.image}
                    alt={anime.title}
                    width={500}
                    height={700}
                    className="h-[420px] w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-center">
                    <h3 className="text-white text-2xl">
                      {anime.title}
                    </h3>

                    <div className="rounded-full bg-purple-700 px-3 py-1 text-sm text-white">
                      ⭐ {anime.rating}
                    </div>
                  </div>

                  <p className="mt-3 text-purple-200/70">
                    {anime.genre}
                  </p>

                  <Link
  href={`/anime/${anime.slug}`}
  className="mt-6 block text-center w-full rounded-full border border-purple-400/40 bg-[#25012B] py-3 text-white transition hover:bg-purple-900"
>
  Lihat Detail
</Link>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}