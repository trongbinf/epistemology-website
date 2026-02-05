'use client';

import { motion } from 'framer-motion';
import ScrollAnimation from '@/components/ScrollAnimations';
import TopicNavigator from '@/components/TopicNavigator';
import styles from './page.module.css';
import { getSlidesByPage } from '@/lib/slides';

export default function OriginPage() {
  const originSlides = getSlidesByPage('origin');
  return (
    <div className={styles.page}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.header}>
            <h1 className={styles.title}>Nguồn gốc và Bản chất của Nhận thức</h1>
            <p className={styles.subtitle}>
              Mối quan hệ biện chứng giữa chủ thể và khách thể nhận thức
            </p>
          </div>

          <div className={styles.content}>
            <ScrollAnimation variant="slideUp" delay={0.2}>
              <section className="glass-card hover-scale">
                <h2>Nguồn gốc của nhận thức</h2>
                <p>
                  Nhận thức bắt nguồn từ <strong>thực tiễn</strong> - hoạt động vật chất có mục đích của con người 
                  nhằm cải tạo tự nhiên và xã hội. Không có thực tiễn thì không có nhận thức.
                </p>
                <p>
                  Trong quá trình thực tiễn, con người tiếp xúc với thế giới khách quan, tác động lên nó và 
                  nhận được phản tác động. Đây chính là cơ sở để hình thành nhận thức.
                </p>
                {/* Slide image */}
                <div className={styles.imageContainer}>
                  {originSlides[0] && (
                    <>
                      <img 
                        src={originSlides[0].path} 
                        alt={originSlides[0].title}
                        className={styles.slideImage}
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.nextElementSibling?.classList.remove(styles.hidden);
                        }}
                      />
                      <div className={`${styles.imagePlaceholder} ${styles.hidden}`}>
                        <p>📊 {originSlides[0].title}</p>
                        <small>Chưa có ảnh - Thêm vào: {originSlides[0].path}</small>
                      </div>
                    </>
                  )}
                </div>
              </section>
            </ScrollAnimation>

            <ScrollAnimation variant="slideUp" delay={0.3}>
              <section className="glass-card hover-scale">
              <h2>Chủ thể và Khách thể nhận thức</h2>
              <div className={styles.dialecticGrid}>
                <div className={styles.dialecticCard}>
                  <div className={styles.cardIcon}>👤</div>
                  <h3>Chủ thể nhận thức</h3>
                  <p>
                    Là con người hoặc cộng đồng người có hoạt động nhận thức. Chủ thể nhận thức có tính 
                    năng động, sáng tạo, có khả năng phản ánh và cải tạo thế giới.
                  </p>
                  <ul>
                    <li>Cá nhân con người</li>
                    <li>Tập thể, cộng đồng</li>
                    <li>Giai cấp, dân tộc</li>
                    <li>Nhân loại</li>
                  </ul>
                </div>

                <div className={styles.dialecticCard}>
                  <div className={styles.cardIcon}>🌍</div>
                  <h3>Khách thể nhận thức</h3>
                  <p>
                    Là thế giới vật chất khách quan, là đối tượng của hoạt động nhận thức. Khách thể tồn tại 
                    độc lập với ý thức con người.
                  </p>
                  <ul>
                    <li>Tự nhiên</li>
                    <li>Xã hội</li>
                    <li>Tư duy</li>
                    <li>Bản thân con người</li>
                  </ul>
                </div>
              </div>
              {/* Slide image */}
              <div className={styles.imageContainer}>
                {originSlides[1] && (
                  <>
                    <img 
                      src={originSlides[1].path} 
                      alt={originSlides[1].title}
                      className={styles.slideImage}
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.nextElementSibling?.classList.remove(styles.hidden);
                      }}
                    />
                    <div className={`${styles.imagePlaceholder} ${styles.hidden}`}>
                      <p>📊 {originSlides[1].title}</p>
                      <small>Chưa có ảnh - Thêm vào: {originSlides[1].path}</small>
                    </div>
                  </>
                )}
              </div>
              </section>
            </ScrollAnimation>

            <ScrollAnimation variant="slideUp" delay={0.4}>
              <section className="glass-card hover-scale">
              <h2>Bản chất của nhận thức</h2>
              <div className={styles.essenceList}>
                <div className={styles.essenceItem}>
                  <div className={styles.essenceNumber}>01</div>
                  <div>
                    <h4>Nhận thức là sự phản ánh</h4>
                    <p>
                      Nhận thức là quá trình phản ánh thế giới vật chất khách quan vào bộ não con người. 
                      Đây là sự phản ánh có tính chất khách quan, phù hợp với thực tại.
                    </p>
                  </div>
                </div>

                <div className={styles.essenceItem}>
                  <div className={styles.essenceNumber}>02</div>
                  <div>
                    <h4>Phản ánh tích cực, sáng tạo</h4>
                    <p>
                      Nhận thức không phải là sự phản ánh thụ động, máy móc mà là quá trình tích cực, 
                      sáng tạo. Con người không chỉ phản ánh thế giới mà còn cải tạo nó.
                    </p>
                  </div>
                </div>

                <div className={styles.essenceItem}>
                  <div className={styles.essenceNumber}>03</div>
                  <div>
                    <h4>Gắn liền với thực tiễn</h4>
                    <p>
                      Nhận thức luôn gắn liền với thực tiễn, bắt nguồn từ thực tiễn và phục vụ thực tiễn. 
                      Thực tiễn vừa là nguồn gốc vừa là tiêu chuẩn của nhận thức.
                    </p>
                  </div>
                </div>
              </div>
              {/* Slide images */}
              <div className={styles.imageContainer}>
                {originSlides[2] && (
                  <img 
                    src={originSlides[2].path} 
                    alt={originSlides[2].title}
                    className={styles.slideImage}
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                )}
                {originSlides[3] && (
                  <img 
                    src={originSlides[3].path} 
                    alt={originSlides[3].title}
                    className={styles.slideImage}
                    style={{ marginTop: '1rem' }}
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                )}
                {(!originSlides[2] && !originSlides[3]) && (
                  <div className={styles.imagePlaceholder}>
                    <p>📊 Slide 15-16: Bản chất của nhận thức</p>
                    <small>Chưa có ảnh - Thêm vào: /slides/slide_15.png, slide_16.png</small>
                  </div>
                )}
              </div>
              </section>
            </ScrollAnimation>

            <ScrollAnimation variant="slideUp" delay={0.5}>
              <section className="glass-card hover-scale">
              <h2>Mối quan hệ biện chứng</h2>
              <p>
                Chủ thể và khách thể nhận thức có mối quan hệ biện chứng với nhau:
              </p>
              <div className={styles.relationshipBox}>
                <div className={styles.arrow}>→</div>
                <p>
                  <strong>Khách thể quyết định chủ thể:</strong> Thế giới khách quan quyết định nội dung 
                  của nhận thức. Nhận thức phải phản ánh đúng thực tại khách quan.
                </p>
              </div>
              <div className={styles.relationshipBox}>
                <div className={styles.arrow}>←</div>
                <p>
                  <strong>Chủ thể tác động lên khách thể:</strong> Con người với nhận thức của mình có thể 
                  cải tạo thế giới, biến khả năng thành hiện thực.
                </p>
              </div>
              </section>
            </ScrollAnimation>

            <ScrollAnimation variant="fadeIn" delay={0.6}>
              <div className={styles.quote}>
                <div className={styles.quoteIcon}>"</div>
                <p className={styles.quoteText}>
                  Ý thức con người không chỉ phản ánh thế giới khách quan mà còn sáng tạo ra nó
                </p>
                <p className={styles.quoteAuthor}>— V.I. Lenin</p>
              </div>
            </ScrollAnimation>
          </div>
        </motion.div>

        {/* Topic Navigation */}
        <TopicNavigator currentPath="/origin" />
      </div>
    </div>
  );
}
