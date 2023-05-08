import HeroShapes from '@/components/HeroShapes';
import Navigation from '@/components/Navigation';
import {Separator} from '@/components/ui/separator';
import SlideTop from '@/components/SlideTop';
import ArrowRight from '@/components/icons/ArrowRight';
import DetailShapes from '@/components/DetailShapes';
import DetailCards from '@/components/DetailCards';
import WorkSection from '@/components/WorkSection';
import ShowcaseSection from '@/components/ShowcaseSection';
import Menu from '@/components/Menu';
import {Metadata} from 'next';

export const metadata: Metadata = {
  title: 'Rez.',
  description:
    'Dive into the world of Rez., a talented software developer showcasing an impressive portfolio of cutting-edge projects, ingenious solutions, and remarkable programming expertise.',
};

export default function Home() {
  return (
    <div>
      <main className="overflow-y-visible pb-12">
        <div className="bg-[url('/bg-main.jpg')] bg-cover bg-center">
          <section className="relative mx-auto h-screen w-full max-w-7xl overflow-x-hidden">
            <Navigation />

            <div className="mt-28 px-32">
              <div className="flex items-center gap-4">
                <div className="h-0.5 w-12 bg-primary"></div>

                <h2 className="text-xl font-semibold text-primary">Rezuan Kassim</h2>
              </div>

              <p className="mt-6 max-w-lg text-6xl font-semibold text-dark">
                Hello, my name&apos;s Rez.
                <br /> I&apos;m a Software Developer.
              </p>
            </div>

            <HeroShapes />
          </section>
        </div>

        <section className="relative mt-20 overflow-clip">
          <div className="mx-auto max-w-7xl px-32">
            <div className="max-w-2xl">
              <SlideTop>
                <div className="flex items-center gap-4">
                  <div className="h-0.5 w-12 bg-primary"></div>

                  <h2 className="text-xl font-semibold text-primary">What I Do</h2>
                </div>

                <p className="mt-6 text-4xl font-semibold text-dark">
                  I enjoy creating delightful, <br /> human-centered digital experiences.
                </p>
              </SlideTop>

              <SlideTop>
                <Separator className="my-16" />
              </SlideTop>

              <SlideTop>
                <p className="text-8xl font-semibold text-dark">Think. Make. Solve.</p>
              </SlideTop>
            </div>

            <SlideTop>
              <a
                href="#contact"
                className="mt-16 inline-flex items-center gap-x-4 rounded-2xl bg-primary px-14 py-6 text-white"
              >
                <span>Contact Me</span>
                <ArrowRight />
              </a>
            </SlideTop>
          </div>

          <DetailShapes />

          <DetailCards />
        </section>

        <WorkSection />

        <ShowcaseSection />
      </main>

      <Menu />
    </div>
  );
}
