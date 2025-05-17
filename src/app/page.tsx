import Link from "next/link";
import Slideshow from "@/components/Slideshow";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <Slideshow />

      {/* Features Section */}
      <section className="py-16 bg-gradient-to-b from-white to-yellow-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-yellow-600">Why Choose YUMMZ FOODS?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 border border-yellow-200 rounded-lg bg-white hover:shadow-xl transition-shadow transform hover:scale-105 duration-300">
              <div className="bg-yellow-100 p-3 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-amber-600">Quality Assurance</h3>
              <p className="text-amber-700">ISO 22000:2005 certified and FSSAI registered manufacturer ensuring the highest quality standards.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 border border-yellow-200 rounded-lg bg-white hover:shadow-xl transition-shadow transform hover:scale-105 duration-300">
              <div className="bg-yellow-100 p-3 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-amber-600">Advanced Facilities</h3>
              <p className="text-amber-700">2500 MT multipurpose cold storage with pre-cooling, ripening, and temperature-controlled chambers.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 border border-yellow-200 rounded-lg bg-white hover:shadow-xl transition-shadow transform hover:scale-105 duration-300">
              <div className="bg-yellow-100 p-3 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-amber-600">Global Reach</h3>
              <p className="text-amber-700">Serving local and global markets as an exporter, importer, stockist, and wholesale trader.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 bg-gradient-to-r from-yellow-100 to-amber-100">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-yellow-600">Our Product Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Fresh Produce", desc: "Farm-fresh fruits and vegetables sourced directly from farmers" },
              { title: "Processed Foods", desc: "Canned goods, pickles, sauces, and more with authentic flavors" },
              { title: "Dried Items", desc: "Dried fruits, vegetables, and spices with extended shelf life" },
              { title: "Pulses & Grains", desc: "High-quality pulses and grains cleaned and packaged to perfection" },
              { title: "Bottled Products", desc: "From mango pickle to tomato ketchup – we bottle your taste" },
              { title: "Custom Solutions", desc: "Tailor-made food processing solutions for businesses" }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow transform hover:scale-105 duration-300 border-2 border-yellow-300">
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-amber-600">{item.title}</h3>
                  <p className="text-amber-700 mb-4">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-yellow-400 to-amber-500 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
            <defs>
              <pattern id="food-pattern" patternUnits="userSpaceOnUse" width="80" height="80" patternTransform="rotate(45)">
                <circle cx="10" cy="10" r="5" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#food-pattern)" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to partner with a legacy of quality since the 1920s?</h2>
          <p className="text-lg text-white mb-8 max-w-2xl mx-auto">
            Join us for an unforgettable business relationship. We&apos;re excited to serve you!
          </p>
          <Link href="/contact" className="inline-block bg-white text-yellow-600 font-semibold px-8 py-4 rounded-lg hover:bg-yellow-50 transition-colors transform hover:scale-105 duration-300">
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
}
