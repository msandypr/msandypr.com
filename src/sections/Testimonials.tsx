import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import grainImage from "@/assets/images/grain.jpg";
import { Card } from "@/components/Card";

const testimonials = [
  {
    name: "Dr. Much Ridho Hidayat",
    position: "Business Owner",
    text: "Sandy was instrumental in transforming our website into a powerful marketing tool. His attention to detail and ability to understand our brand is exceptional. We're thrilled with the results!",
    avatar: memojiAvatar1,
  },
  {
    name: "Suhendra Anjar Dinata, M.Kom.",
    position: "Lecturer at El Rahma University",
    text: "Sandy was instrumental in transforming our website into a powerful marketing tool. His attention to detail and ability to understand our brand is exceptional. We're thrilled with the results!",
    avatar: memojiAvatar1,
  },
  {
    name: "Ilham Aristanto, M.Kom.",
    position: "Lecturer at El Rahma University",
    text: "Sandy was instrumental in transforming our website into a powerful marketing tool. His attention to detail and ability to understand our brand is exceptional. We're thrilled with the results!",
    avatar: memojiAvatar1,
  },
];

export const TestimonialsSection = () => {
  return (
    <div className="py-16">
      <div className="container">
        <SectionHeader
          eyebrow="Testimonials"
          title="What People Say About Me?"
          description="Don't just take my word for it, read what people have to say about me." />
        <div className="mt-16 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex gap-8 flex-none">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="max-w-xs">
                <div className="flex gap-4 items-center">
                  <div className="size-14 bg-gray-700 inline-flex items-center justify-center rounded-full flex-shrink-0">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="max-h-full" />
                  </div>
                  <div className="">
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-white/40">{testimonial.position}</div>
                  </div>
                </div>
                <p className="mt-4 text-sm">{testimonial.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
