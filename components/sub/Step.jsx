'use client';
export default function Step({ number, title, desc }){
  return (
    <div className="bg-white rounded-xl shadow-sm p-3 border border-gray-50">
      <div className="flex gap-3">
        <div className="w-10 h-10 flex items-center justify-center bg-wallnut text-white rounded-lg font-bold">{number}</div>
        <div>
          <div className="font-semibold">{title}</div>
          <div className="text-sm text-gray-500 mt-1">{desc}</div>
        </div>
      </div>
    </div>
  );
}
