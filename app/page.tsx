"use client";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full text-white overflow-hidden">

      {/* Hero background */}
      <div
        className="hero-bg absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero.webp')" }}
      />

      {/* Cinematic overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/90" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6">

        <div className="max-w-3xl">

          {/* Brand */}
          <h1 className="text-6xl md:text-7xl font-semibold tracking-tight mb-6 animate-fade-up">
            Detailocity
          </h1>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-gray-200 mb-16 animate-fade-up delay-200">
            Premium Car Detailing
          </p>

          {/* Launch text */}
          <div className="text-3xl md:text-4xl font-light tracking-wide text-white/90 animate-fade-up delay-300">
            Coming Soon<span className="dots"></span>
          </div>

        </div>

      </div>

      {/* bottom fade for large screens */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/80 to-transparent" />

    </main>
  );
}
