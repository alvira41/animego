import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0d001a] border-t border-purple-500/20 text-white mt-24">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">

        <div>
          <h3 className="text-2xl font-serif text-white mb-4">AnimeVerse</h3>
          <p className="text-purple-200/60 text-sm leading-relaxed">
            Platform streaming anime terbaik dengan koleksi terlengkap. 
            Temukan dan nikmati anime favoritmu kapan saja.
          </p>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-4 text-white">Genre</h4>
          <ul className="space-y-2 text-purple-200/60 text-sm">
            <li><Link href="/genre/action" className="hover:text-purple-300 transition">Action</Link></li>
            <li><Link href="/genre/fantasy" className="hover:text-purple-300 transition">Fantasy</Link></li>
            <li><Link href="/genre/romance" className="hover:text-purple-300 transition">Romance</Link></li>
            <li><Link href="/genre/horror" className="hover:text-purple-300 transition">Horror</Link></li>
            <li><Link href="/genre/comedy" className="hover:text-purple-300 transition">Comedy</Link></li>
            <li><Link href="/genre/drama" className="hover:text-purple-300 transition">Drama</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-4 text-white">Navigasi</h4>
          <ul className="space-y-2 text-purple-200/60 text-sm">
            <li><Link href="/" className="hover:text-purple-300 transition">Beranda</Link></li>
            <li><Link href="/#menu" className="hover:text-purple-300 transition">Popular Anime</Link></li>
            <li><Link href="/genre" className="hover:text-purple-300 transition">Genre</Link></li>
            <li><Link href="/#genres" className="hover:text-purple-300 transition">Koleksi</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-4 text-white">Ikuti Kami</h4>
          <p className="text-purple-200/60 text-sm mb-4">
            Dapatkan info terbaru tentang anime dan update platform.
          </p>
          <div className="flex space-x-3">
            {["IG", "FB", "TW", "YT", "TT"].map((s) => (
              <span
                key={s}
                className="w-10 h-10 rounded-full bg-purple-900/40 border border-purple-500/20 flex items-center justify-center text-xs text-purple-300 hover:bg-purple-700 transition cursor-pointer"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

      </div>

      <div className="border-t border-purple-500/10 py-6 text-center text-purple-200/40 text-xs">
        © 2024 AnimeVerse. All rights reserved.
      </div>
    </footer>
  );
}
