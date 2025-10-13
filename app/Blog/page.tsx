import Link from "next/link";
import Image from "next/image";

const blogPosts = [
  {
    title: "How Automated Outreach Boosts Your Sales Calls",
    excerpt: "Learn how a fully automated LinkedIn + Email system fills your calendar with qualified leads.",
    slug: "/blog/automated-outreach",
    image: "/blog1.jpg",
  },
  {
    title: "Case Study: 15 Qualified Calls in 30 Days",
    excerpt: "See how we helped a marketing agency get 15 pre-qualified client calls in just one month.",
    slug: "/blog/case-study-15-calls",
    image: "/blog2.jpg",
  },
  {
    title: "Why Email + LinkedIn Outreach is a Game-Changer",
    excerpt: "Discover why combining LinkedIn and Email automation beats traditional cold calling.",
    slug: "/blog/email-linkedin-outreach",
    image: "/blog3.jpg",
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 font-sans text-black">
      {/* Navbar (same as main page) */}
      <header className="flex justify-between items-center px-10 md:px-20 py-6 border-b border-gray-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">
          Wallnut<span className="text-orange-500">.</span>
        </h1>

        <nav className="flex items-center space-x-8 text-sm md:text-base font-medium">
          <Link href="/" className="hover:text-orange-500 transition-colors">Home</Link>
          <Link href="https://calendar.app.google/utoRhRPhPQFRAqKd8" className="bg-orange-500 text-white px-5 py-2 rounded-lg hover:bg-orange-600 transition-all shadow-sm">
            Book a Call
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="px-10 md:px-20 py-24 text-center">
        <h2 className="text-5xl md:text-6xl font-extrabold mb-6">
          Insights & Strategies for <span className="text-orange-500">Digital Marketing Agencies</span>
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-12">
          Our blog is dedicated to helping agencies understand and leverage automated client acquisition systems,
          combining LinkedIn and Email outreach to generate predictable booked calls every month.
        </p>
      </section>

      {/* Blog Posts Grid */}
      <section className="px-10 md:px-20 py-16 grid md:grid-cols-3 gap-12">
        {blogPosts.map((post, idx) => (
          <div key={idx} className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100">
            <div className="relative h-52 w-full">
              <Image src={post.image} alt={post.title} fill className="object-cover"/>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2 text-orange-500">{post.title}</h3>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <Link
                href={post.slug}
                className="inline-block bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-all shadow-sm"
              >
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </section>

      {/* CTA Section */}
      <section className="px-10 md:px-20 py-20 bg-orange-50 text-center rounded-3xl my-16">
        <h3 className="text-3xl md:text-4xl font-extrabold mb-6 text-gray-900">
          Want Us to Build Your Automated Outreach System?
        </h3>
        <p className="text-gray-700 max-w-2xl mx-auto mb-8">
          Stop wasting time chasing leads. Let us set up a proven system that delivers 10–20 qualified calls every month.
        </p>
        <a
          href="https://calendar.app.google/utoRhRPhPQFRAqKd8"
          target="_blank"
          className="inline-block bg-orange-500 text-white font-semibold px-8 py-4 rounded-lg hover:bg-orange-600 transition-all shadow-md"
        >
          Book a Call →
        </a>
      </section>

      {/* Footer */}
      <footer className="text-center py-10 text-gray-400 text-sm border-t border-gray-100">
        © {new Date().getFullYear()} Wallnut Outreach — All rights reserved.
      </footer>
    </div>
  );
}
