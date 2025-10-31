'use client';
export default function Tools(){
  const logos = ["Apollo.io","Instantly.ai","Google Workspace","ChatGPT","NeverBounce","Calendly"];
  return (
    <section className="max-w-5xl mx-auto px-6 md:px-16 mt-14 text-center">
      <p className="text-gray-700 text-sm md:text-base">We build our systems using industry-standard tools trusted by thousands of agencies worldwide.</p>
      <div className="mt-8 grid grid-cols-3 md:grid-cols-6 gap-4 items-center justify-center">
        {logos.map((l,i)=>(
          <div key={i} className="bg-white border border-gray-100 rounded-xl py-3 px-4 text-sm font-medium shadow-sm">{l}</div>
        ))}
      </div>
    </section>
  );
}
