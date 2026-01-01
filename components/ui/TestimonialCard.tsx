import { TestimonialCardProps } from "@/lib/types";

export default function TestimonialCard({ quote, author, date, avatar }: TestimonialCardProps) {
  return (
    <div className="flex flex-col gap-6 text-center">
      <p className="text-mahogany italic font-light leading-loose">{quote}</p>
      <div className="mt-auto pt-4">
        <div
          className="w-12 h-12 mx-auto rounded-full bg-gray-200 bg-cover bg-center mb-3 grayscale"
          style={{ backgroundImage: `url('${avatar}')` }}
        ></div>
        <p className="font-serif text-lg text-mahogany">{author}</p>
        <p className="text-[10px] text-mountain uppercase tracking-widest mt-1">{date}</p>
      </div>
    </div>
  );
}
