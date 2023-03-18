import styles from '@/styles/Contact.module.scss';
import emailjs from '@emailjs/browser';
import Image from 'next/image';
import Link from 'next/link';

import { Envelope, InstagramLogo, LinkedinLogo, Phone } from 'phosphor-react';
import { FormEvent, useRef } from 'react';

export const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  function handleSubmitForm(e: FormEvent) {
    e.preventDefault();
    emailjs.sendForm(
      'service_yvkfoe9',
      'template_7f453nb',
      form.current || '',
      'Wr02dEwNeXeh-psM8'
    );
  }

  return (
    <section className={styles.contact}>
      <div className={styles.container}>
        <h2>Contato</h2>
        <div className={styles.gridContainer}>
          <div className={styles.form}>
            <form
              ref={form}
              onSubmit={handleSubmitForm}>
              <div>
                <input
                  type="text"
                  placeholder="Nome"
                  name="name"
                />
                <input
                  type="text"
                  placeholder="Telefone ou e-mail"
                  name="contact-method"
                />
              </div>
              <textarea
                name="message"
                placeholder="Mensagem"></textarea>
              <button type="submit">Enviar</button>
            </form>
            <div className={styles.contactInfo}>
              <strong>Informações</strong>
              <address>
                <Link href="mailto:email@dominio.com.br">
                  <strong>Email: </strong>
                  email@dominio.com.br
                </Link>
              </address>
              <address>
                <Link href="tel:9999999999">
                  <strong>Telefone: </strong>
                  (99) 99999 - 9999
                </Link>
              </address>
            </div>
            <div className={styles.icons}>
              <Link href="#">
                <Envelope
                  size={24}
                  color="#ffffff"
                />
              </Link>
              <Link href="#">
                <Phone
                  size={24}
                  color="#ffffff"
                />
              </Link>
              <Link href="#">
                <LinkedinLogo
                  size={24}
                  color="#ffffff"
                />
              </Link>
              <Link href="#">
                <InstagramLogo
                  size={24}
                  color="#ffffff"
                />
              </Link>
            </div>
          </div>
          <div className={styles.social}>
            <Image
              src="/assets/img/logo-alt.svg"
              alt="Logo Alternativa"
              width={300}
              height={300}
            />
            <div className={styles.links}>
              <strong>Redes Sociais</strong>
              <div>
                <Link href="#">
                  <LinkedinLogo
                    size={24}
                    color="#ffffff"
                  />
                </Link>
                <Link href="#">
                  <InstagramLogo
                    size={24}
                    color="#ffffff"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
