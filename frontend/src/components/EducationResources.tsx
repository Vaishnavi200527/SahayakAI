import React from 'react';
import { BookOpen, Laptop, FileText, Target, Lightbulb } from 'lucide-react';
import styles from './EducationResources.module.css';

const EducationResources: React.FC = () => {
  const resources = [
    { title: 'Free NCERT Books', sub: 'Books', icon: <BookOpen color="#3b82f6" /> },
    { title: 'Online Coaching', sub: 'Coaching', icon: <Laptop color="#a21caf" /> },
    { title: 'Previous Papers', sub: 'Papers', icon: <FileText color="#64748b" /> },
    { title: 'Career Guidance', sub: 'Career', icon: <Target color="#ef4444" /> },
  ];

  return (
    <section className={styles.section}>
      {/* Study Resources Title */}
      <div className={styles.sectionTitle}>
        <BookOpen size={20} color="#2563eb" />
        <span>Study Resources</span>
      </div>

      {/* Grid of 4 Resources */}
      <div className={styles.resourceGrid}>
        {resources.map((res, index) => (
          <div key={index} className={styles.resourceCard}>
            <div className={styles.resourceIcon}>{res.icon}</div>
            <p className={styles.resourceName}>{res.title}</p>
            <p className={styles.resourceSub}>{res.sub}</p>
          </div>
        ))}
      </div>

      {/* Need Help? / AI Assistant Box */}
      <div className={styles.helpBox}>
        <div className={styles.helpHeader}>
          <Lightbulb size={24} color="#f59e0b" fill="#fef3c7" />
          <div className={styles.helpText}>
            <p className={styles.helpTitle}>Need Help?</p>
            <p className={styles.helpSub}>Ask AI Assistant</p>
          </div>
        </div>
        <button className={styles.careerButton}>
          Get Career Guidance
        </button>
      </div>
    </section>
  );
};

export default EducationResources;