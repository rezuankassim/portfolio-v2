import {FC, useState} from 'react';
import {Card, CardDescription, CardHeader, CardTitle} from './ui/card';
import Image from 'next/image';
import {AnimatePresence, motion} from 'framer-motion';
import Link from 'next/link';

export type ShowcaseCardProps = {
  id: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  link: string;
};

const ShowcaseCard: FC<Omit<ShowcaseCardProps, 'id'>> = ({
  title,
  description,
  image,
  alt,
  link,
}) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <Link href={link} target="_blank">
      <Card
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="overflow-clip rounded-3xl bg-white"
      >
        <div className="relative flex h-96 items-center justify-center">
          <Image src={image} alt={alt} fill />

          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{scale: 0.5, opacity: 0}}
                animate={{scale: 1, opacity: 1}}
                exit={{scale: 0.5, opacity: 0}}
                transition={{duration: 0.3, ease: 'easeInOut'}}
                className="absolute flex h-36 w-36 items-center justify-center rounded-full bg-dark"
              >
                <span className="max-w-[90px] text-center text-lg text-white">View Website</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <CardHeader className="gap-y-2 p-12">
          <CardTitle className="text-2xl font-semibold tracking-[-0.009em] text-dark">
            {title}
          </CardTitle>
          <CardDescription className="text-lg text-gray">{description}</CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
};

export default ShowcaseCard;
