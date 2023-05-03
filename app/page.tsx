import Image from 'next/image';
import HeroShapes from '@/components/HeroShapes';
import Navigation from '@/components/Navigation';
import {Separator} from '@/components/ui/separator';
import SlideTop from '@/components/SlideTop';
import ArrowRight from '@/components/icons/ArrowRight';
import DetailShapes from '@/components/DetailShapes';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import DetailCards from '@/components/DetailCards';
import WorkShapes from '@/components/WorkShapes';
import WorkSection from '@/components/WorkSection';

export default function Home() {
  return (
    <main className="pb-[1080px]">
      <section className="relative h-screen w-full overflow-x-hidden">
        <Navigation />

        <Image className="-z-50 object-cover" src="/bg-main.jpg" alt="Background Image" fill />

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

      <section className="relative mt-20 overflow-clip px-32">
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

        <DetailShapes />

        <DetailCards />
      </section>

      <WorkSection />
    </main>
  );
}
