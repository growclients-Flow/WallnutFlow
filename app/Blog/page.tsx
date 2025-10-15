import Link from "next/link";
import Image from "next/image";

const blogPosts = [
  {
    title: "How Automated Outreach Boosts Your Sales Calls",
    excerpt: "Learn how a fully automated LinkedIn + Email system fills your calendar with qualified leads.",
    slug: "/blog/automated-outreach",
    image: "/blog1.jpg",
    author: "Sachi",
    date: "Oct 13, 2025",
    readingTime: "5 min read",
    category: "Case studies",
  },
  {
    title: "Case Study: 15 Qualified Calls in 30 Days",
    excerpt: "See how we helped a marketing agency get 15 pre-qualified client calls in just one month.",
    slug: "/blog/case-study-15-calls",
    image: "/blog2.jpg",
    author: "Sachi",
    date: "Oct 10, 2025",
    readingTime: "6 min read",
    category: "Case Studies",
  },
  {
    title: "Why Email + LinkedIn Outreach is a Game-Changer",
    excerpt: "Discover why combining LinkedIn and Email automation beats traditional cold calling.",
    slug: "/blog/email-linkedin-outreach",
    image: "/blog3.jpg",
    author: "Sachi",
    date: "Oct 8, 2025",
    readingTime: "7 min read",
    category: "Case Studies",
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 font-sans text-black">
      {/* Navbar */}
      <header className="flex justify-between items-center px-10 md:px-20 py-6 border-b border-gray-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">
          WallnutFlow<span className="text-orange-500">.</span>
        </h1>

        <nav className="flex items-center space-x-8 text-sm md:text-base font-medium">
          <Link href="/" className="hover:text-orange-500 transition-colors">Home</Link>
          <Link href="https://calendar.app.google/utoRhRPhPQFRAqKd8" className="bg-orange-500 text-white px-5 py-2 rounded-lg hover:bg-orange-600 transition-all shadow-sm">
            Book a Call
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="px-10 md:px-20 py-32 text-center bg-gradient-to-r from-orange-50 via-white to-orange-50 rounded-b-3xl relative overflow-hidden">
        <h2 className="text-5xl md:text-6xl font-extrabold mb-6">
          Insights & Strategies for <span className="text-orange-500">Digital Marketing Agencies</span>
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-12 text-lg md:text-xl">
          Explore our deep dives, case studies, and actionable strategies to boost your client acquisition and scale faster.
        </p>
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-orange-200 opacity-30 rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-orange-300 opacity-20 rounded-full filter blur-3xl"></div>
      </section>

      {/* Blog Grid */}
      <section className="px-10 md:px-20 py-24 grid md:grid-cols-3 gap-12">
        {blogPosts.map((post, idx) => (
          <div key={idx} className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
            <div className="relative h-64 w-full group overflow-hidden">
              <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500"/>
            </div>
            <div className="p-6">
              <span className="text-sm text-orange-500 font-semibold uppercase">{post.category}</span>
              <h3 className="text-2xl font-bold mb-2 mt-2 text-gray-900">{post.title}</h3>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <div className="flex items-center justify-between text-gray-500 text-sm mb-4">
                <span>By {post.author}</span>
                <span>{post.date} · {post.readingTime}</span>
              </div>
              <Link
                href={post.slug}
                className="inline-block bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-all shadow-sm font-semibold"
              >
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </section>

      {/* CTA Section */}
      <section className="px-10 md:px-20 py-24 bg-orange-50 text-center rounded-3xl my-16 relative overflow-hidden">
        <h3 className="text-3xl md:text-4xl font-extrabold mb-6 text-gray-900">
          Ready to Automate Your Outreach & Get 10–20 Qualified Calls Monthly?
        </h3>
        <p className="text-gray-700 max-w-2xl mx-auto mb-8 text-lg">
          Stop chasing leads manually. Our system sets up a fully automated pipeline that consistently delivers results.
        </p>
        <a
          href="https://calendar.app.google/utoRhRPhPQFRAqKd8"
          target="_blank"
          className="inline-block bg-orange-500 text-white font-semibold px-10 py-4 rounded-lg hover:bg-orange-600 transition-all shadow-lg text-lg"
        >
          Book a Call →
        </a>
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-orange-200 opacity-20 rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-orange-300 opacity-15 rounded-full filter blur-3xl"></div>
      </section>

      {/* Footer */}
      <footer className="text-center py-12 text-gray-500 border-t border-gray-100">
        <p>© {new Date().getFullYear()} Wallnut Outreach — All rights reserved.</p>
        <p className="mt-2 text-sm">
          Follow us on 
          <Link href="#" className="text-orange-500 ml-1 hover:underline">LinkedIn</Link>, 
          <Link href="#" className="text-orange-500 ml-1 hover:underline">Twitter</Link>
        </p>
      </footer>
    </div>
  );
}

