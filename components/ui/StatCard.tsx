import { StatCardProps } from "@/lib/types";

export default function StatCard({ number, label }: StatCardProps) {
  return (
    <div>
      <span className="block text-4xl font-serif text-mahogany mb-1">{number}</span>
      <span className="text-xs text-mountain uppercase tracking-widest">{label}</span>
    </div>
  );
}
