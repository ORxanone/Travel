import AboutSection from "~/components/home/AboutSection";
import HeroCarusel from "~/components/home/HeroCarusel";
import OurPackageSection from "~/components/home/OurPackageSection";
import WhyChooseUs from "~/components/home/WhyChooseUs";

export default function HomePage() {
  return (
    <main className="">
      <HeroCarusel />
      <AboutSection
        title="Azerbaycan Haqqinda"
        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda,
        minus! Cumque, officia dolores! Error veritatis, reiciendis enim,
        eveniet doloremque vitae voluptatibus velit libero perspiciatis cumque
        eius animi hic sequi harum? Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Assumenda, minus! Cumque, officia dolores! Error
        veritatis, reiciendis enim, eveniet doloremque vitae voluptatibus velit
        libero perspiciatis cumque eius animi hic sequi harum?"
      />
      <AboutSection
        title="Who We Are?"
        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda,
        minus! Cumque, officia dolores! Error veritatis, reiciendis enim,
        eveniet doloremque vitae voluptatibus velit libero perspiciatis cumque
        eius animi hic sequi harum? Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Assumenda, minus! Cumque, officia dolores! Error
        veritatis, reiciendis enim, eveniet doloremque vitae voluptatibus velit
        libero perspiciatis cumque eius animi hic sequi harum?"
      />
      <OurPackageSection />
      <WhyChooseUs />
    </main>
  );
}
