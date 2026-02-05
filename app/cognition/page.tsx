'use client';

import { motion } from 'framer-motion';
import ScrollAnimation from '@/components/ScrollAnimations';
import TopicNavigator from '@/components/TopicNavigator';
import styles from './page.module.css';
import { getSlidesByPage } from '@/lib/slides';

export default function CognitionPage() {
  const cognitionSlides = getSlidesByPage('cognition');
  return (
    <div className={styles.page}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.header}>
            <h1 className={styles.title}>Quá trình Nhận thức</h1>
            <p className={styles.subtitle}>
              Từ nhận thức cảm tính đến nhận thức lý tính
            </p>
          </div>

          <div className={styles.content}>
            <ScrollAnimation variant="slideUp" delay={0.2}>
              <section className="glass-card hover-scale">
              <h2>Nhận thức cảm tính (Sensuous Cognition)</h2>
              <p>
                Là giai đoạn đầu tiên của quá trình nhận thức, phản ánh trực tiếp các thuộc tính bên ngoài 
                của sự vật thông qua các giác quan.
              </p>
              
              <div className={styles.stagesGrid}>
                <div className={styles.stageCard}>
                  <div className={styles.stageNumber}>1</div>
                  <h3>👁️ Cảm giác (Sensation)</h3>
                  <p>
                    Là sự phản ánh các thuộc tính riêng biệt của sự vật tác động vào các giác quan. 
                    Ví dụ: màu sắc, âm thanh, mùi vị, nhiệt độ...
                  </p>
                </div>

                <div className={styles.stageCard}>
                  <div className={styles.stageNumber}>2</div>
                  <h3>👀 Tri giác (Perception)</h3>
                  <p>
                    Là sự phản ánh toàn bộ hình ảnh của sự vật khi nó tác động vào các giác quan. 
                    Ví dụ: nhìn thấy một cái cây với màu sắc, hình dáng, kích thước...
                  </p>
                </div>

                <div className={styles.stageCard}>
                  <div className={styles.stageNumber}>3</div>
                  <h3>🖼️ Biểu tượng (Representation)</h3>
                  <p>
                    Là hình ảnh của sự vật được lưu giữ trong trí nhớ khi sự vật không còn tác động trực tiếp. 
                    Ví dụ: nhớ lại hình ảnh một người bạn.
                  </p>
                </div>
              </div>

              {(cognitionSlides[0] || cognitionSlides[1]) && (
                <div className={styles.imageContainer}>
                  {cognitionSlides[0] && (
                    <img 
                      src={cognitionSlides[0].path} 
                      alt={cognitionSlides[0].title}
                      className={styles.slideImage}
                      onError={(e) => { e.currentTarget.style.display = 'none'; }}
                    />
                  )}
                  {cognitionSlides[1] && (
                    <img 
                      src={cognitionSlides[1].path} 
                      alt={cognitionSlides[1].title}
                      className={styles.slideImage}
                      style={{ marginTop: '1rem' }}
                      onError={(e) => { e.currentTarget.style.display = 'none'; }}
                    />
                  )}
                </div>
              )}
              </section>
            </ScrollAnimation>

            <ScrollAnimation variant="slideUp" delay={0.3}>
              <section className="glass-card hover-scale">
              <h2>Nhận thức lý tính (Rational Cognition)</h2>
              <p>
                Là giai đoạn cao hơn của quá trình nhận thức, phản ánh bản chất, quy luật của sự vật 
                thông qua tư duy trừu tượng.
              </p>
              
              <div className={styles.stagesGrid}>
                <div className={styles.stageCard}>
                  <div className={styles.stageNumber}>1</div>
                  <h3>💭 Khái niệm (Concept)</h3>
                  <p>
                    Là sự phản ánh những thuộc tính bản chất, chung nhất của một loại sự vật. 
                    Ví dụ: khái niệm "con người", "xã hội", "nhà nước"...
                  </p>
                </div>

                <div className={styles.stageCard}>
                  <div className={styles.stageNumber}>2</div>
                  <h3>⚖️ Phán đoán (Judgment)</h3>
                  <p>
                    Là hình thức tư duy khẳng định hoặc phủ định mối liên hệ giữa các sự vật, hiện tượng. 
                    Ví dụ: "Con người là động vật xã hội".
                  </p>
                </div>

                <div className={styles.stageCard}>
                  <div className={styles.stageNumber}>3</div>
                  <h3>🔗 Suy lý (Inference)</h3>
                  <p>
                    Là hình thức tư duy từ một hay nhiều phán đoán đã biết rút ra phán đoán mới. 
                    Ví dụ: Tam đoạn luận, quy nạp, diễn dịch...
                  </p>
                </div>
              </div>

              {(cognitionSlides[2] || cognitionSlides[3] || cognitionSlides[4]) && (
                <div className={styles.imageContainer}>
                  {cognitionSlides[2] && (
                    <img 
                      src={cognitionSlides[2].path} 
                      alt={cognitionSlides[2].title}
                      className={styles.slideImage}
                      onError={(e) => { e.currentTarget.style.display = 'none'; }}
                    />
                  )}
                  {cognitionSlides[3] && (
                    <img 
                      src={cognitionSlides[3].path} 
                      alt={cognitionSlides[3].title}
                      className={styles.slideImage}
                      style={{ marginTop: '1rem' }}
                      onError={(e) => { e.currentTarget.style.display = 'none'; }}
                    />
                  )}
                  {cognitionSlides[4] && (
                    <img 
                      src={cognitionSlides[4].path} 
                      alt={cognitionSlides[4].title}
                      className={styles.slideImage}
                      style={{ marginTop: '1rem' }}
                      onError={(e) => { e.currentTarget.style.display = 'none'; }}
                    />
                  )}
                </div>
              )}
              </section>
            </ScrollAnimation>

            <ScrollAnimation variant="slideUp" delay={0.4}>
              <section className="glass-card hover-scale">
              <h2>Mối quan hệ giữa nhận thức cảm tính và lý tính</h2>
              <div className={styles.relationshipBox}>
                <div className={styles.relationItem}>
                  <div className={styles.icon}>🔄</div>
                  <div>
                    <h4>Thống nhất biện chứng</h4>
                    <p>
                      Nhận thức cảm tính và lý tính là hai giai đoạn thống nhất trong quá trình nhận thức. 
                      Chúng không tách rời nhau mà có mối liên hệ chặt chẽ.
                    </p>
                  </div>
                </div>

                <div className={styles.relationItem}>
                  <div className={styles.icon}>📈</div>
                  <div>
                    <h4>Cảm tính là cơ sở của lý tính</h4>
                    <p>
                      Nhận thức lý tính phát sinh từ nhận thức cảm tính. Không có nhận thức cảm tính thì 
                      không thể có nhận thức lý tính. Cảm tính cung cấp nguyên liệu cho lý tính.
                    </p>
                  </div>
                </div>

                <div className={styles.relationItem}>
                  <div className={styles.icon}>💡</div>
                  <div>
                    <h4>Lý tính hướng dẫn cảm tính</h4>
                    <p>
                      Nhận thức lý tính hướng dẫn, định hướng cho nhận thức cảm tính. Lý tính giúp cảm tính 
                      có mục đích, có chọn lọc và sâu sắc hơn.
                    </p>
                  </div>
                </div>

                <div className={styles.relationItem}>
                  <div className={styles.icon}>🎯</div>
                  <div>
                    <h4>Lý tính cao hơn cảm tính</h4>
                    <p>
                      Nhận thức lý tính là bước phát triển cao hơn, sâu sắc hơn so với nhận thức cảm tính. 
                      Lý tính phản ánh bản chất, quy luật còn cảm tính chỉ phản ánh hiện tượng.
                    </p>
                  </div>
                </div>
              </div>
              </section>
            </ScrollAnimation>

            <ScrollAnimation variant="fadeIn" delay={0.5}>
              <div className={styles.quote}>
                <div className={styles.quoteIcon}>"</div>
                <p className={styles.quoteText}>
                  Từ sống động trực quan đến tư duy trừu tượng - đó là con đường biện chứng của nhận thức chân lý
                </p>
                <p className={styles.quoteAuthor}>— V.I. Lenin</p>
              </div>
            </ScrollAnimation>
          </div>
        </motion.div>

        {/* Topic Navigation */}
        <TopicNavigator currentPath="/cognition" />
      </div>
    </div>
  );
}
