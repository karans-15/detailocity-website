export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black text-white">
      
      <div className="text-center">

        <img 
          src="/logo.png"
          alt="Detailocity logo"
          className="w-40 mx-auto mb-8"
        />

        <h1 className="text-5xl font-semibold mb-2">
          Detailocity
        </h1>

        <p className="text-gray-400 text-lg mb-6">
          Premium Car Detailing
        </p>

        <div className="border border-gray-700 px-5 py-2 rounded-full text-sm text-gray-300 inline-block">
          Website Launching Soon
        </div>

        <div className="mt-8 text-gray-400">
          📍 Mumbai
          <br />
          📞 +91 XXXXX XXXXX
        </div>

      </div>

    </main>
  );
}