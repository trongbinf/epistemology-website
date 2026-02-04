'use client';

import { motion } from 'framer-motion';
import styles from './page.module.css';
import { getSlidesByPage } from '@/lib/slides';

export default function LevelsPage() {
  const levelsSlides = getSlidesByPage('levels');
  return (
    <div className={styles.page}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.header}>
            <h1 className={styles.title}>Các trình độ của Nhận thức</h1>
            <p className={styles.subtitle}>
              Phân biệt nhận thức kinh nghiệm và lý luận, nhận thức thường thức và khoa học
            </p>
          </div>

          <div className={styles.content}>
            <section className="glass-card">
              <h2>Nhận thức kinh nghiệm và Nhận thức lý luận</h2>
              <div className={styles.comparisonGrid}>
                <div className={styles.comparisonCard}>
                  <div className={styles.cardIcon}>🔍</div>
                  <h3>Nhận thức kinh nghiệm</h3>
                  <p>
                    Là trình độ nhận thức ban đầu, phản ánh hiện tượng bên ngoài của sự vật. 
                    Dựa trên kinh nghiệm trực tiếp, cảm tính.
                  </p>
                  <div className={styles.features}>
                    <h4>Đặc điểm:</h4>
                    <ul>
                      <li>Trực quan, cụ thể</li>
                      <li>Phản ánh bề ngoài</li>
                      <li>Mang tính cá biệt</li>
                      <li>Chưa có hệ thống</li>
                    </ul>
                  </div>
                </div>

                <div className={styles.comparisonCard}>
                  <div className={styles.cardIcon}>🧬</div>
                  <h3>Nhận thức lý luận</h3>
                  <p>
                    Là trình độ nhận thức cao hơn, phản ánh bản chất, quy luật của sự vật. 
                    Dựa trên tư duy trừu tượng, lý tính.
                  </p>
                  <div className={styles.features}>
                    <h4>Đặc điểm:</h4>
                    <ul>
                      <li>Trừu tượng, khái quát</li>
                      <li>Phản ánh bản chất</li>
                      <li>Mang tính phổ biến</li>
                      <li>Có hệ thống logic</li>
                    </ul>
                  </div>
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

            <section className="glass-card">
              <h2>Nhận thức thường thức và Nhận thức khoa học</h2>
              <div className={styles.comparisonGrid}>
                <div className={styles.comparisonCard}>
                  <div className={styles.cardIcon}>👥</div>
                  <h3>Nhận thức thường thức</h3>
                  <p>
                    Là nhận thức hình thành trong đời sống hàng ngày, dựa trên kinh nghiệm trực tiếp 
                    và truyền thống văn hóa.
                  </p>
                  <div className={styles.features}>
                    <h4>Đặc điểm:</h4>
                    <ul>
                      <li>Tự phát, không có hệ thống</li>
                      <li>Dựa vào kinh nghiệm cá nhân</li>
                      <li>Mang tính địa phương, dân tộc</li>
                      <li>Ít chính xác, thiếu sâu sắc</li>
                    </ul>
                  </div>
                </div>

                <div className={styles.comparisonCard}>
                  <div className={styles.cardIcon}>🔬</div>
                  <h3>Nhận thức khoa học</h3>
                  <p>
                    Là nhận thức có hệ thống, được kiểm nghiệm bằng thực tiễn, phản ánh đúng đắn 
                    bản chất và quy luật của sự vật.
                  </p>
                  <div className={styles.features}>
                    <h4>Đặc điểm:</h4>
                    <ul>
                      <li>Có hệ thống, logic chặt chẽ</li>
                      <li>Dựa vào nghiên cứu khoa học</li>
                      <li>Mang tính phổ biến, khách quan</li>
                      <li>Chính xác, sâu sắc</li>
                    </ul>
                  </div>
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

            <section className="glass-card">
              <h2>Mối quan hệ giữa các trình độ nhận thức</h2>
              <div className={styles.relationshipList}>
                <div className={styles.relationItem}>
                  <div className={styles.relationIcon}>🔄</div>
                  <div>
                    <h4>Kinh nghiệm → Lý luận</h4>
                    <p>
                      Nhận thức kinh nghiệm là cơ sở cho nhận thức lý luận. Không có kinh nghiệm 
                      thì không thể có lý luận.
                    </p>
                  </div>
                </div>

                <div className={styles.relationItem}>
                  <div className={styles.relationIcon}>💡</div>
                  <div>
                    <h4>Lý luận hướng dẫn Kinh nghiệm</h4>
                    <p>
                      Nhận thức lý luận hướng dẫn, định hướng cho việc tích lũy kinh nghiệm một cách 
                      có ý thức và hiệu quả hơn.
                    </p>
                  </div>
                </div>

                <div className={styles.relationItem}>
                  <div className={styles.relationIcon}>🌱</div>
                  <div>
                    <h4>Thường thức → Khoa học</h4>
                    <p>
                      Nhận thức thường thức là tiền đề, là nguồn gốc của nhận thức khoa học. 
                      Khoa học phát triển từ thường thức.
                    </p>
                  </div>
                </div>

                <div className={styles.relationItem}>
                  <div className={styles.relationIcon}>🎯</div>
                  <div>
                    <h4>Khoa học làm giàu Thường thức</h4>
                    <p>
                      Nhận thức khoa học khi được phổ biến rộng rãi sẽ làm giàu thêm cho nhận thức 
                      thường thức, nâng cao trình độ nhận thức của quần chúng.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <div className={styles.quote}>
              <div className={styles.quoteIcon}>"</div>
              <p className={styles.quoteText}>
                Từ sống động trực quan đến tư duy trừu tượng, và từ tư duy trừu tượng đến thực tiễn, 
                đó là con đường biện chứng của nhận thức chân lý
              </p>
              <p className={styles.quoteAuthor}>— V.I. Lenin</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
