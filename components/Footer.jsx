'use client';
export default function Footer(){
  return (
    <footer className="bg-white border-t border-gray-100 mt-6 py-8">
      <div className="max-w-6xl mx-auto px-6 md:px-16 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <div className="font-bold text-lg">WallnutFlow.</div>
          <div className="text-sm text-gray-500 mt-1">Founder — Sachin G</div>
        </div>

        <div className="text-sm text-gray-500">© {new Date().getFullYear()} WallnutFlow. All rights reserved.</div>

        <div className="flex items-center gap-3">
          <a href="#" className="text-sm text-gray-600">Privacy</a>
          <a href="#" className="text-sm text-gray-600">Terms</a>
        </div>
      </div>
    </footer>
  );
}
