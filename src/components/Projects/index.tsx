import styles from '@/styles/Projects.module.scss';

export const Projects = () => {
  return (
    <section className={styles.projects}>
      <div className={styles.projectsControls}>
        <h2>Meus Projetos</h2>
        <button>Pessoais</button>
        <button>Acadêmicos</button>
      </div>
      <div className={styles.projectsContainer}></div>
    </section>
  );
};
