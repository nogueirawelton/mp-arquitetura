import style from '@/styles/ProjectSlide.module.scss';
import Link from 'next/link';
import { useState } from 'react';

interface ProjectSlideProps {
  project: {
    id: number;
    name: string;
    description: string;
    banner: string;
  };
}

interface ProjectBanner {
  default: {
    src: string;
  };
}

export const ProjectSlide = ({
  project: { name, description, banner },
}: ProjectSlideProps) => {
  const [projectBanner, setProjectBanner] = useState<ProjectBanner | null>(
    null
  );

  import(`@/assets/${banner}.jpg`).then((image) => setProjectBanner(image));

  return (
    <div
      className={style.projectSlide}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.6) 100%), url(${
          projectBanner ? projectBanner.default.src : ''
        }) `,
      }}>
      <h1>{name}</h1>
      <p>{description}</p>
      <Link href="#">Ver Projeto</Link>
    </div>
  );
};
