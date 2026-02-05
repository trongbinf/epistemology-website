'use client';

import { motion } from 'framer-motion';
import ScrollAnimation from '@/components/ScrollAnimations';
import TopicNavigator from '@/components/TopicNavigator';
import styles from './page.module.css';
import { getSlidesByPage } from '@/lib/slides';

export default function DialecticalPathPage() {
  const dialecticalSlides = getSlidesByPage('dialectical-path');
  return (
    <div className={styles.page}>
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className={styles.header}>
            <h1 className={styles.title}>Con đường Biện chứng của Nhận thức Chân lý</h1>
            <p className={styles.subtitle}>Học, học nữa, học mãi - Chu trình nhận thức không ngừng</p>
          </div>

          <div className={styles.content}>
            <ScrollAnimation variant="slideUp" delay={0.2}>
              <section className="glass-card hover-scale">
              <h2>Tại sao phải "Học, học nữa, học mãi"?</h2>
              <p>Nhận thức là một quá trình vận động, phát triển không ngừng. Chân lý không phải là điều gì đó cố định, bất biến mà luôn phát triển, hoàn thiện qua thực tiễn.</p>
              {dialecticalSlides[0] && (
                <div className={styles.imageContainer}>
                  <img 
                    src={dialecticalSlides[0].path} 
                    alt={dialecticalSlides[0].title}
                    className={styles.slideImage}
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                </div>
              )}
              </section>
            </ScrollAnimation>

            <ScrollAnimation variant="slideUp" delay={0.3}>
              <section className="glass-card hover-scale">
              <h2>Chu trình nhận thức</h2>
              <div className={styles.cycleBox}>
                <div className={styles.cycleStep}>
                  <div className={styles.stepNumber}>1</div>
                  <h3>🌍 Thực tế khách quan</h3>
                  <p>Xuất phát từ thế giới vật chất khách quan</p>
                </div>
                <div className={styles.arrow}>↓</div>
                <div className={styles.cycleStep}>
                  <div className={styles.stepNumber}>2</div>
                  <h3>👁️ Nhận thức cảm tính</h3>
                  <p>Trực quan sinh động - Cảm giác, tri giác, biểu tượng</p>
                </div>
                <div className={styles.arrow}>↓</div>
                <div className={styles.cycleStep}>
                  <div className={styles.stepNumber}>3</div>
                  <h3>💭 Tư duy trừu tượng</h3>
                  <p>Nhận thức lý tính - Khái niệm, phán đoán, suy lý</p>
                </div>
                <div className={styles.arrow}>↓</div>
                <div className={styles.cycleStep}>
                  <div className={styles.stepNumber}>4</div>
                  <h3>⚙️ Thực tiễn</h3>
                  <p>Kiểm nghiệm chân lý và cải tạo thế giới</p>
                </div>
                <div className={styles.arrow}>↺</div>
                <div className={styles.cycleNote}>
                  <p><strong>Quay lại thực tế khách quan</strong> - Chu trình lặp lại ở trình độ cao hơn</p>
                </div>
              </div>
              {dialecticalSlides[1] && (
                <div className={styles.imageContainer}>
                  <img 
                    src={dialecticalSlides[1].path} 
                    alt={dialecticalSlides[1].title}
                    className={styles.slideImage}
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                </div>
              )}
              </section>
            </ScrollAnimation>

            <ScrollAnimation variant="slideUp" delay={0.4}>
              <section className="glass-card hover-scale">
              <h2>Sự thống nhất của các giai đoạn</h2>
              <div className={styles.unityList}>
                <div className={styles.unityItem}>
                  <h4>🔗 Liên kết chặt chẽ</h4>
                  <p>Nhận thức cảm tính, tư duy trừu tượng và thực tiễn không tách rời nhau mà có mối liên hệ hữu cơ, biện chứng.</p>
                </div>
                <div className={styles.unityItem}>
                  <h4>⚖️ Thực tiễn là tiêu chuẩn</h4>
                  <p>Thực tiễn là tiêu chuẩn kiểm nghiệm chân lý, làm cho nhận thức ngày càng hoàn thiện, chính xác hơn.</p>
                </div>
                <div className={styles.unityItem}>
                  <h4>🎯 Cảm tính là cơ sở</h4>
                  <p>Nhận thức cảm tính cung cấp nguyên liệu cho tư duy, là điểm xuất phát của quá trình nhận thức.</p>
                </div>
                <div className={styles.unityItem}>
                  <h4>💡 Lý tính định hướng</h4>
                  <p>Tư duy trừu tượng hướng dẫn nhận thức cảm tính và thực tiễn, giúp chúng có mục đích, hiệu quả hơn.</p>
                </div>
              </div>
              {(dialecticalSlides[2] || dialecticalSlides[3]) && (
                <div className={styles.imageContainer}>
                  {dialecticalSlides[2] && (
                    <img 
                      src={dialecticalSlides[2].path} 
                      alt={dialecticalSlides[2].title}
                      className={styles.slideImage}
                      onError={(e) => { e.currentTarget.style.display = 'none'; }}
                    />
                  )}
                  {dialecticalSlides[3] && (
                    <img 
                      src={dialecticalSlides[3].path} 
                      alt={dialecticalSlides[3].title}
                      className={styles.slideImage}
                      style={{ marginTop: '1rem' }}
                      onError={(e) => { e.currentTarget.style.display = 'none'; }}
                    />
                  )}
                </div>
              )}
              </section>
            </ScrollAnimation>

            <ScrollAnimation variant="fadeIn" delay={0.5}>
              <div className={styles.quote}>
                <div className={styles.quoteIcon}>"</div>
                <p className={styles.quoteText}>Từ trực quan sinh động đến tư duy trừu tượng, và từ đó đến thực tiễn - đó là con đường biện chứng của nhận thức chân lý, của nhận thức thực tại khách quan</p>
                <p className={styles.quoteAuthor}>— V.I. Lenin</p>
              </div>
            </ScrollAnimation>
          </div>
        </motion.div>

        {/* Topic Navigation */}
        <TopicNavigator currentPath="/dialectical-path" />
      </div>
    </div>
  );
}
