'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './page.module.css';

const sections = [
  {
    title: 'Giới thiệu',
    href: '/introduction',
    description: 'Nhận thức luận là gì? Tìm hiểu về vai trò và vị trí của nhận thức luận trong triết học Mác-Lênin.',
    icon: '📚',
    gradient: 'linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)',
  },
  {
    title: 'Nguồn gốc & Bản chất',
    href: '/origin',
    description: 'Khám phá nguồn gốc và bản chất của nhận thức. Mối quan hệ biện chứng giữa chủ thể và khách thể.',
    icon: '🌱',
    gradient: 'linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)',
  },
  {
    title: 'Trình độ nhận thức',
    href: '/levels',
    description: 'Phân biệt nhận thức kinh nghiệm và lý luận, nhận thức thường thức và khoa học.',
    icon: '📊',
    gradient: 'linear-gradient(135deg, #06b6d4 0%, #8b5cf6 100%)',
  },
  {
    title: 'Thực tiễn',
    href: '/practice',
    description: 'Thực tiễn là nền tảng, động lực, mục đích và tiêu chuẩn của nhận thức.',
    icon: '⚙️',
    gradient: 'linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)',
  },
  {
    title: 'Quá trình nhận thức',
    href: '/cognition',
    description: 'Từ nhận thức cảm tính đến nhận thức lý tính: Cảm giác, tri giác, biểu tượng, khái niệm, phán đoán, suy lý.',
    icon: '🧩',
    gradient: 'linear-gradient(135deg, #fbbf24 0%, #ec4899 100%)',
  },
  {
    title: 'Con đường biện chứng',
    href: '/dialectical-path',
    description: 'Chu trình nhận thức: Từ thực tiễn đến lý luận và từ lý luận đến thực tiễn.',
    icon: '🔄',
    gradient: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
  },
  {
    title: 'Chân lý',
    href: '/truth',
    description: 'Chân lý trong chủ nghĩa duy vật biện chứng: Tính khách quan, tương đối, tuyệt đối và cụ thể.',
    icon: '💎',
    gradient: 'linear-gradient(135deg, #06b6d4 0%, #fbbf24 100%)',
  },
];

export default function Home() {
  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={styles.heroContent}
          >
            <div className={styles.heroIcon}>🧠</div>
            <h1 className={styles.heroTitle}>
              Nhận thức luận
            </h1>
            <p className={styles.heroSubtitle}>
              Triết học Mác-Lênin về Nguồn gốc, Bản chất và Quá trình Nhận thức
            </p>
            <div className={styles.heroQuote}>
              <div className={styles.quoteIcon}>"</div>
              <p className={styles.quoteText}>
                Học, học nữa, học mãi
              </p>
              <p className={styles.quoteAuthor}>— V.I. Lenin</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className={styles.overview}>
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <h2 className={styles.sectionTitle}>Khám phá các chủ đề</h2>
            <p className={styles.sectionDescription}>
              Tìm hiểu sâu về lý thuyết nhận thức luận Mác-Lênin qua 7 chủ đề chính
            </p>
          </motion.div>

          <div className={styles.grid}>
            {sections.map((section, index) => (
              <motion.div
                key={section.href}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.6 }}
              >
                <Link href={section.href} className={styles.card}>
                  <div 
                    className={styles.cardGradient}
                    style={{ background: section.gradient }}
                  />
                  <div className={styles.cardContent}>
                    <div className={styles.cardIcon}>{section.icon}</div>
                    <h3 className={styles.cardTitle}>{section.title}</h3>
                    <p className={styles.cardDescription}>{section.description}</p>
                    <div className={styles.cardArrow}>→</div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Concepts Section */}
      <section className={styles.concepts}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={styles.conceptsContent}
          >
            <h2 className={styles.sectionTitle}>Những khái niệm cốt lõi</h2>
            <div className={styles.conceptsList}>
              <div className={styles.conceptItem}>
                <div className={styles.conceptNumber}>01</div>
                <div>
                  <h4>Nhận thức là sự phản ánh</h4>
                  <p>Nhận thức là sự phản ánh tích cực, sáng tạo thế giới vật chất khách quan vào bộ não con người.</p>
                </div>
              </div>
              <div className={styles.conceptItem}>
                <div className={styles.conceptNumber}>02</div>
                <div>
                  <h4>Thực tiễn là nền tảng</h4>
                  <p>Thực tiễn là cơ sở, động lực, mục đích và tiêu chuẩn duy nhất của chân lý.</p>
                </div>
              </div>
              <div className={styles.conceptItem}>
                <div className={styles.conceptNumber}>03</div>
                <div>
                  <h4>Quá trình biện chứng</h4>
                  <p>Nhận thức vận động từ cảm tính đến lý tính, từ thực tiễn đến lý luận và ngược lại.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
