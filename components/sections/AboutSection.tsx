export default function AboutSection() {
  return (
    <section className="py-32 bg-vanilla" id="about">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="aspect-3/4 overflow-hidden bg-gray-100 relative z-10">
              <div
                className="w-full h-full bg-cover bg-center grayscale-20"
                style={{
                  backgroundImage: "url('/assets/images/profile-pic.jpg')",
                }}
              ></div>
            </div>
            <div className="absolute top-8 -left-8 w-full h-full border border-tobacco/30 z-0 hidden lg:block"></div>
            <div className="absolute -bottom-12 -right-12 w-2/5 aspect-4/5 overflow-hidden shadow-xl z-20 hidden md:block">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDyLLD-ioX5IyJzQ-P5KOIT1n6jLhO_mqiOVUjzOk6XSyUFFVH3QYdYepriL5-FYlyMTGcGuorVaY13mWaeryBWuh7E6J04DjSmMTwr4_5Nd7tsdmT5xu1JAkV3hNRIuVOnsopt5-8uDHruQx-XgsatI-vKhlaOLgBXdXi_keXoXA5sPqnYrEmbxDdDNWZLRHb23gYo4fg0a7JeSa6OyIqF6yUF-Wr7n-QVNC1s_RAcp7rSHJ0e0edX3j4Nm4vHh3tjzRPsZwBQ2FRX')",
                }}
              ></div>
            </div>
          </div>
          <div className="flex flex-col gap-10 order-1 lg:order-2">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="text-tobacco text-md font-bold tracking-[0.2em] uppercase">
                  The Artist
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-serif text-mahogany leading-none">
                Refined Artistry & <br />
                Calming Presence
              </h2>
              <div className="space-y-6 text-mountain font-light leading-relaxed text-lg">
                <p>
                  Hi! I’m Lia, and I’m honoured to be considered as part of your
                  special day.
                </p>
                <p>
                  With a focus on enhancing natural beauty, I specialise in
                  creating skin-focused, radiant looks that last beautifully. I
                  work closely with each client to understand their vision and
                  ensure your makeup feels like a seamless, elegant extension of
                  yourself.
                </p>
                <p>
                  My approach is calm, collected, and centred on creating a
                  serene, enjoyable experience, so you feel comfortable during
                  your appointment and confident afterwards. Whether it’s your
                  wedding day or a special occasion, my goal is to help you feel
                  radiant, confident, and like the best version of yourself.
                </p>
                <p>
                  Thank you for considering me for your special occasion, I
                  can’t wait to bring your vision to life.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="h-px w-6 bg-tobacco"></span>
              <div className="text-2xl lg:text-3xl font-serif text-tobacco leading-none">
                Lia XO
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
