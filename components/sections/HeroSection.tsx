import Button from "../ui/Button";
import BookingButton from "../ui/BookingButton";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      id="home"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC7zerTXWxGL5ZbFcGEcJFQfiK3LKUfGTjRCVlrfrzCnHZ_aw6DhZyleFMTw0sQ0RzgWrtuB7vU9tBJyRwIH5TMt7vvo0O7PY9TfCBW-WZMvWSaRVj8TH1XM-MzvtvQQ2vG_jpnZXbZ5p9vFkXAKMxsNHuSALbndi0PYjji_buYHTXOX5i3IUCdh7KRLVRXpTi48nHp2ErOBfz6_GQZKU81amtRx_8V_g7vSpbiRul-22pVsGVfcmqo0I87PfcD3UkOG_19n_IFZ255')",
          }}
        ></div>
      </div>
      <div className="relative z-20 max-w-[1280px] w-full mx-auto px-4 sm:px-6 lg:px-8 pt-20 text-center">
        <div className="flex flex-col items-center gap-8 animate-fade-in-up max-w-4xl mx-auto">
          <span className="inline-block px-4 py-1.5 border border-white/40 text-white text-[10px] font-bold tracking-[0.2em] uppercase rounded-sm backdrop-blur-sm">
            Luxury Bridal Services
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-light text-white leading-tight tracking-tight">
            Effortless Beauty
            <br />
            <span className="italic font-normal">For Your Day</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-lg mx-auto">
            Enhancing your natural radiance with a timeless, elegant aesthetic tailored
            specifically to you.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 pt-8">
            <BookingButton className="min-w-[180px]">
              Book Your Date
            </BookingButton>
            <Button href="#services" variant="outline" className="min-w-[180px]">
              Our Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
