import * as React from "react";
import Image from "next/image";
import { Button } from "./button";

type Facility = {
  title: string;
  description: string;
  imageUrl: string;
  details: {
    label: string;
    content: string;
  }[];
};

type FacilitySectionProps = {
  facilities: Facility[];
};

export function FacilitySection({ facilities }: FacilitySectionProps) {
  return (
    <section>
      <h2 className="text-3xl font-bold uppercase mb-5 text-center">
        Our Facilities
      </h2>
      <p className="my-3">
        Looking for a creative, centrally located venue in KL? Sustain;ed KL
        offers <span className="text-primary font-playful">flexible</span>{" "}
        rental spaces designed for impact-focused gatherings. Our facilities are
        fully equipped and available for short-term bookings, with the option to
        customise the setup to suit your needs.
      </p>

      <div className="space-y-8">
        {facilities.map((facility, index) => (
          <div
            key={index}
            className="bg-[#70C1CA] shadow-[0px_4px_0px_0px_#9B4994] rounded-3xl py-8 pl-16"
          >
            <div className="grid grid-cols-12">
              <div className="col-span-7">
                <h3 className="text-2xl uppercase font-light mb-3">
                  {facility.title}
                </h3>
                <p className="my-2">{facility.description}</p>
                <p>
                  {facility.details.map(({ label, content }, i) => (
                    <React.Fragment key={i}>
                      <strong>{label} </strong>
                      {content}
                      <br />
                    </React.Fragment>
                  ))}
                </p>
                <div className="mt-6">
                  <Button>Book Now</Button>
                </div>
              </div>
              <div className="col-span-5 flex items-center">
                <Image
                  className="w-full object-cover object-center aspect-[4/3] ring-2 ring-[#D9DF50] rounded-3xl translate-x-8"
                  unoptimized
                  src={facility.imageUrl}
                  alt={facility.title}
                  height={720}
                  width={1280}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FacilitySection;
