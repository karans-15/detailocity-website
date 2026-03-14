"use client";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full text-white overflow-hidden">

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center hero-bg"
        style={{ backgroundImage: "url('/hero.png')" }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6">

        {/* Brand */}
        <h1 className="text-6xl md:text-7xl font-semibold tracking-tight mb-6 animate-fade-up">
          Detailocity
        </h1>

        <p className="text-lg md:text-xl text-gray-200 mb-14 animate-fade-up delay-200">
          Premium Car Detailing
        </p>

        <div className="text-3xl md:text-4xl font-light tracking-wide mb-20 text-white/90">
          Coming Soon<span className="dots"></span>
        </div>

      </div>

    </main>
  );
}