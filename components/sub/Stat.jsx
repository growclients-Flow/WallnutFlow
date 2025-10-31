'use client';
export default function Stat({ label, value }){
  return (
    <div className="flex items-center justify-between bg-gray-50 px-3 py-2 rounded-lg">
      <div className="text-sm text-gray-500">{label}</div>
      <div className="font-semibold">{value}</div>
    </div>
  );
}
