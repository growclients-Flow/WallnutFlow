// app/components/Footer.tsx
import Link from "next/link";

const footerLinks = {
  Product: [
    { name: "Features", href: "/features" },
    { name: "Use Cases", href: "/use-cases" },
    { name: "Why Us", href: "/why-us" },
    { name: "Pricing", href: "/pricing" },
  ],
  Resources: [
    { name: "Help Center", href: "/help" },
    { name: "How it Works", href: "/how-it-works" },
    { name: "Tutorials", href: "/tutorials" },
    { name: "FAQs", href: "/faq" },
  ],
  Company: [
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Feedback", href: "/feedback" },
  ],
  Legal: [
    { name: "Terms of Service", href: "/terms" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Cookie Policy", href: "/cookie" },
    { name: "Refund Policy", href: "/refund" },
    { name: "Security", href: "/security" },
  ],
  Community: [
    { name: "Twitter / X", href: "https://twitter.com" },
    { name: "LinkedIn", href: "https://linkedin.com" },
    { name: "Feature Request", href: "/feature-request" },
    { name: "Report a Bug", href: "/bug-report" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-white text-black mt-25">
      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-6 gap-10">
        {/* Brand Section */}
        <div>
          <h3 className="text-xl font-bold">Wallnut</h3>
          <p className="mt-2 text-sm text-gray-600">
            Find leads, Turn them into clients, Grow.
          </p>
        </div>

        {/* Each footer section */}
        {["Product", "Resources", "Company", "Legal", "Community"].map((section) => (
          <div key={section}>
            <h4 className="text-sm font-semibold text-gray-700 mb-3">{section}</h4>
            <ul className="space-y-2 text-sm">
              {footerLinks[section].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-blue-600 transition"
                    target={link.href.startsWith("http") ? "_blank" : "_self"}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="text-center py-4 text-xs text-gray-500">
        © 2025 SheetGix. All rights reserved.
      </div>
    </footer>
  );
}

