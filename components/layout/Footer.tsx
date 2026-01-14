import Icon from "../ui/Icon";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-sand py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3">
        <div className="flex items-center gap-2">
          <Icon
            name="brush"
            className="text-mahogany text-xl sm:text-2xl font-light"
          />
          <span className="text-mahogany font-serif text-lg sm:text-xl tracking-widest uppercase">
            BY LIA MAKEUP
          </span>
        </div>
        <a
          href="/terms-and-conditions"
          className="text-tobacco hover:text-mahogany transition-colors text-sm"
        >
          Terms & Conditions
        </a>
        <div className="flex flex-col items-center">
          <p className="text-sm text-mountain/70 text-center flex items-center justify-center gap-1">
            © {new Date().getFullYear()} By Lia Makeup. All rights reserved.
          </p>
          <div className="flex items-center gap-1 max-h-12.5">
            <div className="text-sm text-mountain/70">Designed by</div>
            <div className="relative w-25 h-10">
              <Image
                src="/assets/logos/logo-black-removebg.png"
                alt="Shafstudio Logo"
                fill
                className="object-cover opacity-40"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
