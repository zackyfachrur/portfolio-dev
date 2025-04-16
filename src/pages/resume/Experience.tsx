import Timeline from "@/components/Timeline";

export default function Experience() {
  return (
    <section className="flex justify-center pt-32">
      <div className="containers">
        <h2 className="text-4xl font-title mb-4 max-sm:text-2xl">Profesional Experience</h2>
        <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-4">
          <Timeline
            company="Gunadarma University"
            timeline="October 2024 - Present"
            jobTitle="Information System Laboratory Assistant - Part Time"
            description="
Teach and guided 40 students in understanding the basics of web programming using PHP through clear and practical teaching methods
Provided fair assessment of students' practical results and ensured good understanding, resulting in satisfactory practical exam results"
          />
          <Timeline
            company="PT Hastek Indoraya Cipta"
            timeline="June 2024 - July 2024"
            jobTitle="PHP Web Developer - Freelance"
            description="Developed the Hastek website with a modular structure for maintainability, integrating a dynamic company profile, YouTube video, product showcase, and interactive features like Fancybox and Owl Carousel
Built with Bootstrap for fast, responsive development and jQuery for interactivity"
          />
          <Timeline
            company="PT Pring Astula Indonesia"
            timeline="September 2023 - October 2023"
            jobTitle="PHP Web Developer - Freelance"
            description="Develop and design website using Bootstrap, AOS, Glightbox, Swiper, and Leaflet (OpenStreetMap) to create responsive and interactive UI/UX
Responsible for website performance optimization, animation implementation, gallery and slider display, and interactive map integration with custom markers and popups"
          />
          <Timeline
            company="Clinic Medika Plaza"
            timeline="March 2022 - April 2022"
            jobTitle="ICT Staff - Internship"
            description="Installed various laptops and IP phones, and documented the company's asset handover process
Resolved issues in asset handover through direct interviews with previous asset holders
Diagnosed and addressed employee hardware and software issues through in-depth problem analysis"
          />
        </div>
      </div>
    </section>
  );
}
