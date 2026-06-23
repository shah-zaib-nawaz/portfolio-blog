import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Shahzaib Nawaz",
  description: "Get in touch for front-end development opportunities, collaborations, or just to say hi.",
};

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-24 sm:py-32">
      {/* Page Header */}
      <div className="max-w-2xl">
        <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
          Contact
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Let's build something fast, responsive, and visually striking. Reach out through any of the channels below to discuss full-stack projects, system architecture, or web optimization.
        </p>
      </div>

      {/* Grid Layout for Direct & Social Channels */}
      <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Left Card: Direct Communication */}
        <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm flex flex-col justify-between">
          <div>
            <h2 className="font-display text-xl font-semibold">Direct Channels</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              For formal proposals, freelance availability, or software architectural consultations:
            </p>
            
            <div className="mt-6">
              <h3 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">Email</h3>
              <a 
                href="mailto:shahzaibnawazoffical@example.com" 
                className="mt-1 inline-block font-medium text-primary hover:underline"
              >
                shahzaibnawazoffical@example.com →
              </a>
            </div>
          </div>

          <div className="mt-8 text-xs text-muted-foreground">
            Typically responding within 24 hours.
          </div>
        </div>

        {/* Right Card: Digital Footprint */}
        <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
          <h2 className="font-display text-xl font-semibold">Digital Footprint</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Find me on open source platforms, professional ecosystems, and tech spaces:
          </p>
          
          <div className="mt-6 flex flex-col space-y-4 text-sm">
            <a 
              href="https://github.com/shah-zaib-nawaz" 
              target="_blank" 
              rel="noreferrer" 
              className="group flex flex-col rounded-md border border-transparent p-2 -mx-2 hover:bg-muted transition-colors"
            >
              <span className="font-medium group-hover:text-primary transition-colors">GitHub</span>
              <span className="text-xs text-muted-foreground">Explore production source code and active repositories</span>
            </a>

            <a 
              href="https://www.linkedin.com/in/shahzaibnawaz/" 
              target="_blank" 
              rel="noreferrer" 
              className="group flex flex-col rounded-md border border-transparent p-2 -mx-2 hover:bg-muted transition-colors"
            >
              <span className="font-medium group-hover:text-primary transition-colors">LinkedIn</span>
              <span className="text-xs text-muted-foreground">Connect professionally and review industry history</span>
            </a>

            <a 
              href="https://x.com/Shahzaib_Nawaz_" 
              target="_blank" 
              rel="noreferrer" 
              className="group flex flex-col rounded-md border border-transparent p-2 -mx-2 hover:bg-muted transition-colors"
            >
              <span className="font-medium group-hover:text-primary transition-colors">Twitter / X</span>
              <span className="text-xs text-muted-foreground">Follow public builds and technical reflections</span>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}