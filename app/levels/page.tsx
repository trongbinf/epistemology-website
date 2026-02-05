'use client';

import { motion } from 'framer-motion';
import ScrollAnimation from '@/components/ScrollAnimations';
import TopicNavigator from '@/components/TopicNavigator';
import styles from './page.module.css';
import { getSlidesByPage } from '@/lib/slides';

export default function LevelsPage() {
  const levelsSlides = getSlidesByPage('levels');
  return (
    <div className={styles.page}>
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className={styles.header}>
            <h1 className={styles.title}>Trình độ Nhận thức</h1>
            <p className={styles.subtitle}>Phân biệt nhận thức kinh nghiệm và lý luận, nhận thức thường thức và khoa học</p>
          </div>

          <div className={styles.content}>
            <ScrollAnimation variant="slideUp" delay={0.2}>
              <section className="glass-card hover-scale">
                <h2>Nhận thức kinh nghiệm và Nhận thức lý luận</h2>
                <div className={styles.comparisonGrid}>
                  <div className={styles.comparisonCard}>
                    <div className={styles.cardIcon}>🔍</div>
                    <h3>Nhận thức kinh nghiệm</h3>
                    <ul>
                      <li>Dựa trên kinh nghiệm trực tiếp</li>
                      <li>Phản ánh bề ngoài, hiện tượng</li>
                      <li>Mang tính cụ thể, đơn lẻ</li>
                      <li>Chưa có hệ thống</li>
                    </ul>
                  </div>
                  <div className={styles.comparisonCard}>
                    <div className={styles.cardIcon}>🧠</div>
                    <h3>Nhận thức lý luận</h3>
                    <ul>
                      <li>Dựa trên tư duy trừu tượng</li>
                      <li>Phản ánh bản chất, quy luật</li>
                      <li>Mang tính phổ biến, tổng quát</li>
                      <li>Có hệ thống logic</li>
                    </ul>
                  </div>
                </div>
                {levelsSlides[0] && (
                  <div className={styles.imageContainer}>
                    <img 
                      src={levelsSlides[0].path} 
                      alt={levelsSlides[0].title}
                      className={styles.slideImage}
                      onError={(e) => { e.currentTarget.style.display = 'none'; }}
                    />
                  </div>
                )}
              </section>
            </ScrollAnimation>

            <ScrollAnimation variant="slideUp" delay={0.3}>
              <section className="glass-card hover-scale">
                <h2>Nhận thức thường thức và Nhận thức khoa học</h2>
                <div className={styles.comparisonGrid}>
                  <div className={styles.comparisonCard}>
                    <div className={styles.cardIcon}>👥</div>
                    <h3>Nhận thức thường thức</h3>
                    <ul>
                      <li>Hình thành trong đời sống hàng ngày</li>
                      <li>Mang tính tự phát, không có hệ thống</li>
                      <li>Phản ánh bề ngoài, hiện tượng</li>
                      <li>Dễ hiểu, gần gũi với đời sống</li>
                    </ul>
                  </div>
                  <div className={styles.comparisonCard}>
                    <div className={styles.cardIcon}>🔬</div>
                    <h3>Nhận thức khoa học</h3>
                    <ul>
                      <li>Hình thành qua nghiên cứu khoa học</li>
                      <li>Mang tính tự giác, có hệ thống</li>
                      <li>Phản ánh bản chất, quy luật</li>
                      <li>Chính xác, có tính dự báo</li>
                    </ul>
                  </div>
                </div>
                {levelsSlides[1] && (
                  <div className={styles.imageContainer}>
                    <img 
                      src={levelsSlides[1].path} 
                      alt={levelsSlides[1].title}
                      className={styles.slideImage}
                      onError={(e) => { e.currentTarget.style.display = 'none'; }}
                    />
                  </div>
                )}
              </section>
            </ScrollAnimation>

            <ScrollAnimation variant="fadeIn" delay={0.4}>
              <div className={styles.quote}>
                <div className={styles.quoteIcon}>"</div>
                <p className={styles.quoteText}>
                  Khoa học là tri thức có hệ thống về thế giới khách quan
                </p>
                <p className={styles.quoteAuthor}>— V.I. Lenin</p>
              </div>
            </ScrollAnimation>
          </div>
        </motion.div>

        {/* Topic Navigation */}
        <TopicNavigator currentPath="/levels" />
      </div>
    </div>
  );
}
