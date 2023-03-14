import styles from '@/styles/About.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { CloudArrowDown, EnvelopeSimple } from 'phosphor-react';

export const About = () => {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <Image
          className={styles.ornament}
          src="/assets/ornament/profile-leaf.svg"
          alt="Leaf"
          width={1280}
          height={2000}
        />
        <div className={styles.photo}>
          <div>
            <Image
              src="/assets/img/profile.jpg"
              alt="Mariana de Paula"
              width={450}
              height={450}
            />
          </div>
        </div>
        <div className={styles.info}>
          <h2>Mariana De P. Silva</h2>
          <strong>Maricá, Rio de Janeiro</strong>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            imperdiet sem tortor, eu auctor justo facilisis quis. Ut sit amet
            mattis massa.
          </p>
          <div className={styles.contact}>
            <Link href="#">
              <CloudArrowDown size={24} />
              Currículo
            </Link>
            <Link href="#">
              <EnvelopeSimple size={24} />
              E-mail
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
