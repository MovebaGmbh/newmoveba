import Contact from "@/sections/Contact";
import Faq from "@/sections/Faq";
import Hero from "@/sections/Hero";
import Services from "@/sections/Services";
import { cookies } from "next/headers";
import { getLangFromCookies } from "@/lib/i18n";

export default async function Home() {
  const cookieStore = await cookies();
  const lang = getLangFromCookies(cookieStore);

  return (
    <main id="main" className="min-h-screen">
      <Hero lang={lang} />

      <div className="pt-12 space-y-20 pb-20 sm:pt-16 sm:space-y-28 sm:pb-28">
        <Services lang={lang} />
        <Faq lang={lang} />
        <Contact lang={lang} />
      </div>
    </main>
  );
}
