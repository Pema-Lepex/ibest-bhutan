"use client";
import MainLayout from "../layouts/MainLayout";
import {
  AboutSection,
  ServicesSection,
  ContactSection,
} from "@/components/sections";

export default function Home() {
  return (
    <MainLayout>
      <AboutSection />
      <ServicesSection />
      <ContactSection />
    </MainLayout>
  );
}
