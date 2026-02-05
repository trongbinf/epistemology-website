'use client';

import { motion } from 'framer-motion';
import ScrollAnimation from '@/components/ScrollAnimations';
import TopicNavigator from '@/components/TopicNavigator';
import styles from './page.module.css';

export default function IntroductionPage() {
  return (
    <div className={styles.page}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.header}>
            <h1 className={styles.title}>Giới thiệu về Nhận thức luận</h1>
            <p className={styles.subtitle}>
              Tìm hiểu về vai trò và vị trí của nhận thức luận trong hệ thống triết học Mác-Lênin
            </p>
          </div>

          <div className={styles.content}>
            <ScrollAnimation variant="slideUp" delay={0.2}>
              <section className="glass-card hover-scale">
                <h2>Nhận thức luận là gì?</h2>
                <p>
                  <strong>Nhận thức luận</strong> (Epistemology) là một bộ phận quan trọng của triết học Mác-Lênin, 
                  nghiên cứu về nguồn gốc, bản chất, quá trình và khả năng nhận thức của con người.
                </p>
                <p>
                  Nhận thức luận Mác-Lênin khẳng định rằng nhận thức là quá trình phản ánh tích cực, sáng tạo 
                  thế giới vật chất khách quan vào bộ não con người thông qua thực tiễn.
                </p>
              </section>
            </ScrollAnimation>

            <ScrollAnimation variant="slideUp" delay={0.3}>
              <section className="glass-card hover-scale">
                <h2>Vị trí trong hệ thống triết học</h2>
                <div className={styles.philosophyGrid}>
                  <div className={styles.philosophyItem}>
                    <div className={styles.itemNumber}>1</div>
                    <h3>Chủ nghĩa duy vật biện chứng</h3>
                    <p>Nghiên cứu những quy luật vận động, phát triển phổ biến nhất của tự nhiên, xã hội và tư duy</p>
                  </div>
                  <div className={styles.philosophyItem}>
                    <div className={styles.itemNumber}>2</div>
                    <h3>Chủ nghĩa duy vật lịch sử</h3>
                    <p>Nghiên cứu những quy luật vận động và phát triển của xã hội loài người</p>
                  </div>
                  <div className={`${styles.philosophyItem} ${styles.highlighted}`}>
                    <div className={styles.itemNumber}>3</div>
                    <h3>Nhận thức luận</h3>
                    <p>Nghiên cứu nguồn gốc, bản chất, quá trình và khả năng nhận thức của con người</p>
                  </div>
                </div>
              </section>
            </ScrollAnimation>

            <ScrollAnimation variant="slideUp" delay={0.4}>
              <section className="glass-card hover-scale">
                <h2>Các vấn đề cơ bản</h2>
                <div className={styles.issuesList}>
                  <div className={styles.issue}>
                    <div className={styles.issueIcon}>🌱</div>
                    <div>
                      <h4>Nguồn gốc của nhận thức</h4>
                      <p>Nhận thức bắt nguồn từ đâu? Mối quan hệ giữa chủ thể và khách thể nhận thức?</p>
                    </div>
                  </div>
                  <div className={styles.issue}>
                    <div className={styles.issueIcon}>🧩</div>
                    <div>
                      <h4>Bản chất của nhận thức</h4>
                      <p>Nhận thức là gì? Đặc điểm và tính chất của quá trình nhận thức?</p>
                    </div>
                  </div>
                  <div className={styles.issue}>
                    <div className={styles.issueIcon}>🔄</div>
                    <div>
                      <h4>Quá trình nhận thức</h4>
                      <p>Nhận thức diễn ra như thế nào? Các giai đoạn và hình thức của nhận thức?</p>
                    </div>
                  </div>
                  <div className={styles.issue}>
                    <div className={styles.issueIcon}>💎</div>
                    <div>
                      <h4>Chân lý và tiêu chuẩn của chân lý</h4>
                      <p>Chân lý là gì? Làm thế nào để kiểm nghiệm chân lý?</p>
                    </div>
                  </div>
                </div>
              </section>
            </ScrollAnimation>

            <ScrollAnimation variant="slideUp" delay={0.5}>
              <section className="glass-card hover-scale">
                <h2>Ý nghĩa của nhận thức luận</h2>
                <div className={styles.significance}>
                  <div className={styles.sigItem}>
                    <h4>📚 Về lý luận</h4>
                    <p>
                      Cung cấp cơ sở lý luận vững chắc cho hoạt động nhận thức khoa học, 
                      giúp con người hiểu đúng về thế giới và bản thân.
                    </p>
                  </div>
                  <div className={styles.sigItem}>
                    <h4>⚙️ Về thực tiễn</h4>
                    <p>
                      Hướng dẫn con người trong hoạt động thực tiễn, giúp cải tạo thế giới 
                      một cách có ý thức và hiệu quả.
                    </p>
                  </div>
                  <div className={styles.sigItem}>
                    <h4>🎯 Về phương pháp luận</h4>
                    <p>
                      Cung cấp phương pháp luận khoa học cho mọi hoạt động nghiên cứu và 
                      thực tiễn của con người.
                    </p>
                  </div>
                </div>
              </section>
            </ScrollAnimation>

            <ScrollAnimation variant="fadeIn" delay={0.6}>
              <div className={styles.quote}>
                <div className={styles.quoteIcon}>"</div>
                <p className={styles.quoteText}>
                  Không có lý luận cách mạng thì không thể có phong trào cách mạng
                </p>
                <p className={styles.quoteAuthor}>— V.I. Lenin</p>
              </div>
            </ScrollAnimation>
          </div>
        </motion.div>

        {/* Topic Navigation */}
        <TopicNavigator currentPath="/introduction" />
      </div>
    </div>
  );
}
