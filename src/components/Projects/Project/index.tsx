import styles from '@/styles/Project.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'phosphor-react';
import exampleProjectImage from '@/assets/casa-moderna.jpg';

export const Project = () => {
  return (
    <div className={styles.project}>
      <Image
        src={exampleProjectImage}
        alt="Casa Moderna"
      />
      <Link
        className={styles.hover}
        href="">
        <div>
          <div>
            <h3>Casa Moderna</h3>
            <p>Criada com objetivo de demonstrar a beleza da simplicidade.</p>
          </div>
          <span>
            <ArrowRight size={32} />
          </span>
        </div>
      </Link>
    </div>
  );
};
