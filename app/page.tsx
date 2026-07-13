import MainLayout from "@/layouts/MainLayout";
import {
  AboutSection,
  BlogSection,
  ContactSection,
  CoursesSection,
  ExperiencesSection,
  PeopleSection,
  ServicesSection,
  TestimonialsSection,
  ValuesSection,
  WhyChooseUsSection,
} from "@/components/sections";

// The whole site lives on this page. Every navbar link is an anchor into one of
// these sections; the only routes that leave it are the "Read more" detail
// pages linked from within the Services, People, Courses and Blog sections.
export default function Home() {
  return (
    <MainLayout>
      <AboutSection />
      <ValuesSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <ExperiencesSection />
      <PeopleSection />
      <CoursesSection />
      <BlogSection />
      <ContactSection />
    </MainLayout>
  );
}
