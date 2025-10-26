
import Image from "next/image";

export default function Home() {
  return (
    <main className="font-sans text-gray-800 bg-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 md:px-16 py-5 text-sm font-medium">
        <div className="text-xl font-extrabold text-[#FF4B2B]">WallnutFlow.</div>
        <div className="space-x-6 hidden md:flex">
          <a href="#" className="hover:text-[#FF4B2B] transition">Home</a>
          <a href="#" className="hover:text-[#FF4B2B] transition">Work</a>
          <a href="#" className="hover:text-[#FF4B2B] transition">Process</a>
          <a href="#" className="hover:text-[#FF4B2B] transition">Contact</a>
        </div>
        <button className="bg-[#FF4B2B] hover:bg-[#ff694f] text-white px-5 py-2 rounded-full transition-all duration-300">
          Book a Free Call
        </button>
      </nav>

      {/* Hero Section */}
      <section className="text-center mt-12 md:mt-24">
        <h1 className="text-2xl md:text-4xl font-bold leading-snug">
          Get <span className="text-[#FF4B2B]">Qualified</span> 15+ sales calls per month<br />
          without lifting your finger
        </h1>

        <button className="mt-6 bg-[#FF4B2B] text-white px-8 py-3 rounded-full hover:scale-105 transition-transform">
          Book a Free Call
        </button>

        <div className="mt-16 flex justify-center">
          <div className="relative w-[320px] h-[220px] md:w-[480px] md:h-[300px]">
            <Image
              src="/placeholder.svg"
              alt="Illustration"
              fill
              className="object-contain animate-fade-in"
            />
          </div>
        </div>
      </section>

      {/* What we serve */}
      <section className="text-center mt-28 px-4">
        <h2 className="text-2xl font-bold">
          What we <span className="text-[#FF4B2B]">serves</span> you
        </h2>
        <div className="mt-10 grid md:grid-cols-2 gap-10 justify-center items-center">
          <div className="bg-white shadow-xl rounded-xl p-6 hover:-translate-y-1 transition-transform">
            <Image src="/placeholder.svg" alt="Service 1" width={300} height={200} className="mx-auto" />
          </div>
          <div className="bg-white shadow-xl rounded-xl p-6 hover:-translate-y-1 transition-transform">
            <Image src="/placeholder.svg" alt="Service 2" width={300} height={200} className="mx-auto" />
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="mt-28 px-4 text-center">
        <h2 className="text-2xl font-bold">
          How we <span className="text-[#FF4B2B]">works</span>
        </h2>

        <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-10">
          <Image src="/placeholder.svg" alt="Work illustration" width={400} height={300} className="rounded-lg" />

          <div className="space-y-6 text-left">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center space-x-4">
                <span className="bg-[#7C3AED] text-white w-8 h-8 flex items-center justify-center rounded-lg font-bold">
                  {step}
                </span>
                <p className="text-lg font-medium">Step {step} description goes here.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="mt-28 px-6 md:px-16 text-center">
        <h2 className="text-2xl font-bold">
          Our <span className="text-[#FF4B2B]">Process</span>
        </h2>

        <div className="mt-10 grid md:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="p-6 shadow-md rounded-lg hover:shadow-lg transition-all duration-300">
              <Image src="/placeholder.svg" alt={`Process ${i}`} width={80} height={80} className="mx-auto mb-4" />
              <p className="font-medium">Process step {i}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Founder Section */}
      <section className="mt-28 text-center px-6 md:px-16">
        <h3 className="text-sm text-gray-400 tracking-wide mb-6">OUR FOUNDER</h3>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <Image
            src="/founder.jpg"
            alt="Founder"
            width={200}
            height={200}
            className="rounded-lg shadow-lg"
          />
          <div className="text-left md:w-1/2">
            <p className="font-bold text-lg mb-2">@founder_handle</p>
            <p className="text-gray-600">
              Im the Founder of WallnutFlow, a digital marketing agency. We help you get
              qualified sales calls while you focus on scaling your business.
            </p>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="mt-28 text-center px-6 md:px-16 pb-24">
        <p className="text-gray-700">
          We build our systems using industry-standard tools<br />
          trusted by <span className="font-bold text-[#FF4B2B]">10,000+ agencies</span> worldwide.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-6">
          {["apollo.io", "instantly.ai", "google-workspace", "chatGPT", "google-meet", "payoneer"].map((tool, idx) => (
            <div
              key={idx}
              className="px-4 py-2 border rounded-full shadow-sm text-gray-600 hover:text-[#FF4B2B] transition-colors"
            >
              {tool}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

     