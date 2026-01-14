"use client";

import ContactForm from "../ui/ContactForm";
import Icon from "../ui/Icon";

export default function ContactSection() {
  return (
    <section className="py-32 bg-vanilla" id="contact">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-20">
          <div className="flex flex-col gap-10">
            <div className="space-y-6">
              <span className="text-tobacco text-xs font-bold tracking-[0.2em] uppercase">
                Contact
              </span>
              <h2 className="text-4xl md:text-5xl font-serif text-mahogany">
                Let&apos;s Discuss Your Vision
              </h2>
              <p className="text-mountain text-lg font-light leading-relaxed">
                Please fill out the form with your wedding details. I aim to
                respond to all inquiries within 48 hours.
              </p>
            </div>
            <div className="space-y-8 pt-4">
              <div className="flex items-start gap-6">
                <Icon
                  name="mail"
                  className="text-tobacco font-light text-2xl mt-1"
                />
                <div>
                  <p className="text-xs text-mountain uppercase tracking-widest mb-1">
                    Email
                  </p>
                  <p className="text-lg text-mahogany font-serif">
                    bylia.makeup@gmail.com
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <Icon
                  name="location_on"
                  className="text-tobacco font-light text-2xl mt-1"
                />
                <div>
                  <p className="text-xs text-mountain uppercase tracking-widest mb-1">
                    Studio
                  </p>
                  <p className="text-lg text-mahogany font-serif">
                    Guildford, Sydney, NSW
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <Icon
                  name="photo_camera"
                  className="text-tobacco font-light text-2xl mt-1"
                />
                <div>
                  <p className="text-xs text-mountain uppercase tracking-widest mb-1">
                    Follow
                  </p>
                  <p className="text-lg text-mahogany font-serif">
                    @bylia.makeup
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white p-10 border border-sand shadow-sm">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
