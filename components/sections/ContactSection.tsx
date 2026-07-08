"use client";

import Image from "next/image";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import {
  CommonParagraph2,
  CommonParagraph3,
  CommonParagraph4,
  Heading2,
} from "@/components";
import Reveal from "@/components/common/Reveal";
import { ContactContent } from "@/assets/content/contact/ContactContent";
import { ContactImage } from "@/assets";

const { form, map } = ContactContent;

// Contact section — company details, a location image and an embedded map.
export default function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-24 bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl 5xl:max-w-[3200px] px-4 sm:px-6 lg:px-20">
        <Reveal className="mx-auto max-w-3xl 5xl:max-w-5xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent-500">
            {form.eyebrow}
          </span>
          <Heading2 className="mt-3 text-primary-500">{form.heading}</Heading2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 items-stretch gap-10 lg:mt-16 lg:grid-cols-2 lg:gap-16">
          {/* Contact Info Card */}
          <Reveal className="h-full">
            <div className="h-full rounded-4xl border border-slate-200 bg-white p-8 shadow-sm md:p-10 lg:p-12">
              <CommonParagraph4 className="mb-8 font-bold text-accent-500">
                Get In Touch
              </CommonParagraph4>

              <div className="space-y-8">
                {/* Visit Us */}
                <div className="group flex gap-4">
                  <div className="h-fit rounded-full bg-blue-50 p-3 transition-colors duration-300 group-hover:bg-primary-500">
                    <MapPin className="h-5 w-5 text-[#1b364d] transition-colors duration-300 group-hover:text-white 4xl:h-10 4xl:w-10 5xl:h-14 5xl:w-14" />
                  </div>
                  <div>
                    <CommonParagraph2 className="font-bold text-gray-900">
                      Visit Our Office
                    </CommonParagraph2>
                    <CommonParagraph3 className="text-gray-600">
                      Changzamtog, Thimphu
                    </CommonParagraph3>
                    <CommonParagraph3 className="text-gray-600">
                      Bhutan
                    </CommonParagraph3>
                  </div>
                </div>

                {/* Call Us */}
                <div className="group flex gap-4">
                  <div className="h-fit rounded-full bg-blue-50 p-3 transition-colors duration-300 group-hover:bg-primary-500">
                    <Phone className="h-5 w-5 text-[#1b364d] transition-colors duration-300 group-hover:text-white 4xl:h-10 4xl:w-10 5xl:h-14 5xl:w-14" />
                  </div>
                  <div>
                    <CommonParagraph2 className="font-bold text-gray-900">
                      Call Us
                    </CommonParagraph2>
                    <CommonParagraph3 className="text-gray-600">
                      Toll free number: <span className="font-bold">2016</span>
                    </CommonParagraph3>
                    <CommonParagraph3 className="text-gray-600">
                      Mobile number:{" "}
                      <span className="font-bold">+975 77718721</span>
                    </CommonParagraph3>
                  </div>
                </div>

                {/* Email Us */}
                <div className="group flex gap-4">
                  <div className="h-fit rounded-full bg-blue-50 p-3 transition-colors duration-300 group-hover:bg-primary-500">
                    <Mail className="h-5 w-5 text-[#1b364d] transition-colors duration-300 group-hover:text-white 4xl:h-10 4xl:w-10 5xl:h-14 5xl:w-14" />
                  </div>
                  <div>
                    <CommonParagraph2 className="font-bold text-gray-900">
                      Email Us
                    </CommonParagraph2>
                    <CommonParagraph3 className="text-gray-600">
                      support@educareskill.com
                    </CommonParagraph3>
                    <CommonParagraph3 className="text-sm text-gray-400">
                      We&apos;ll respond as soon as possible.
                    </CommonParagraph3>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="group flex gap-4">
                  <div className="h-fit rounded-full bg-blue-50 p-3 transition-colors duration-300 group-hover:bg-primary-500">
                    <Clock className="h-5 w-5 text-[#1b364d] transition-colors duration-300 group-hover:text-white 4xl:h-10 4xl:w-10 5xl:h-14 5xl:w-14" />
                  </div>
                  <div>
                    <CommonParagraph2 className="font-bold text-gray-900">
                      Office Hours
                    </CommonParagraph2>
                    <CommonParagraph3 className="text-gray-600">
                      Monday - Friday: 9:30 AM - 5:30 PM
                    </CommonParagraph3>
                    <CommonParagraph3 className="text-gray-600">
                      Saturday: 9:30 AM - 1:00 PM
                    </CommonParagraph3>
                    <CommonParagraph3 className="text-gray-600">
                      Sunday: Closed
                    </CommonParagraph3>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Location image */}
          <Reveal delay={150} className="h-full">
            <div className="group h-full overflow-hidden rounded-4xl shadow-sm">
              <Image
                src={ContactImage}
                alt="iBEST Institute Building"
                className="h-full min-h-100 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
          </Reveal>
        </div>

        {/* Map */}
        <Reveal className="w-full pt-10">
          <iframe
            src={map}
            title="Our location"
            width="100%"
            height="480"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="block w-full rounded-4xl border-0 grayscale-30 transition-all duration-500 hover:grayscale-0"
            allowFullScreen
          />
        </Reveal>
      </div>
    </section>
  );
}
