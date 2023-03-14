import style from '@/styles/ProjectSlide.module.scss';
import Link from 'next/link';

interface ProjectSlideProps {
  project: {
    id: number;
    name: string;
    description: string;
    banner: string;
  };
}

export const ProjectSlide = ({
  project: { name, description, banner },
}: ProjectSlideProps) => {
  return (
    <div
      className={style.projectSlide}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.6) 100%), url(${
          banner ? `/assets/img/${banner}` : ''
        }) `,
      }}>
      <h1>{name}</h1>
      <p>{description}</p>
      <Link href="#">Ver Projeto</Link>
    </div>
  );
};
