import leafImage from '@/assets/profile-leaf.svg';
import profileImg from '@/assets/profile.jpg';
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
          src={leafImage}
          alt="Leaf"
        />
        <div className={styles.photo}>
          <div>
            <Image
              src={profileImg}
              alt="Mariana de Paula"
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
