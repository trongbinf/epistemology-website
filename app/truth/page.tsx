'use client';

import { motion } from 'framer-motion';
import styles from './page.module.css';
import { getSlidesByPage } from '@/lib/slides';

export default function TruthPage() {
  const truthSlides = getSlidesByPage('truth');
  return (
    <div className={styles.page}>
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className={styles.header}>
            <h1 className={styles.title}>Chân lý trong Chủ nghĩa Duy vật Biện chứng</h1>
            <p className={styles.subtitle}>Tính khách quan, tương đối, tuyệt đối và cụ thể của chân lý</p>
          </div>

          <div className={styles.content}>
            <section className="glass-card">
              <h2>Chân lý là gì?</h2>
              <p><strong>Chân lý</strong> là tri thức phản ánh đúng đắn thực tại khách quan, được kiểm nghiệm bằng thực tiễn.</p>
              <p>Chân lý không phải là điều gì đó cố định, bất biến mà là một quá trình vận động, phát triển không ngừng.</p>
              {truthSlides[0] && (
                <div className={styles.imageContainer}>
                  <img 
                    src={truthSlides[0].path} 
                    alt={truthSlides[0].title}
                    className={styles.slideImage}
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                </div>
              )}
            </section>

            <section className="glass-card">
              <h2>Ba tính chất cơ bản của chân lý</h2>
              <div className={styles.propertiesGrid}>
                <div className={styles.propertyCard}>
                  <div className={styles.propertyIcon}>🎯</div>
                  <h3>1. Tính khách quan</h3>
                  <p>Chân lý phải phản ánh đúng thực tại khách quan, không phụ thuộc vào ý chí chủ quan của con người.</p>
                  <div className={styles.explanation}>
                    <p><strong>Ý nghĩa:</strong> Chân lý tồn tại độc lập với ý thức con người. Nội dung của chân lý do thế giới khách quan quyết định.</p>
                  </div>
                </div>

                <div className={styles.propertyCard}>
                  <div className={styles.propertyIcon}>⚖️</div>
                  <h3>2. Tính tương đối và tuyệt đối</h3>
                  <p>Chân lý vừa có tính tương đối vừa có tính tuyệt đối, thống nhất biện chứng với nhau.</p>
                  <div className={styles.explanation}>
                    <p><strong>Tương đối:</strong> Chân lý phản ánh đúng nhưng chưa đầy đủ, chưa trọn vẹn thực tại.</p>
                    <p><strong>Tuyệt đối:</strong> Chân lý phản ánh đúng một phần thực tại, là bước tiến đến chân lý hoàn toàn.</p>
                  </div>
                </div>

                <div className={styles.propertyCard}>
                  <div className={styles.propertyIcon}>📍</div>
                  <h3>3. Tính cụ thể</h3>
                  <p>Chân lý luôn gắn liền với điều kiện, hoàn cảnh cụ thể về không gian, thời gian và mối liên hệ.</p>
                  <div className={styles.explanation}>
                    <p><strong>Ý nghĩa:</strong> Không có chân lý trừu tượng. Chân lý luôn cụ thể. Rời khỏi điều kiện cụ thể, chân lý có thể biến thành sai lầm.</p>
                  </div>
                </div>
              </div>
              {truthSlides[1] && (
                <div className={styles.imageContainer}>
                  <img 
                    src={truthSlides[1].path} 
                    alt={truthSlides[1].title}
                    className={styles.slideImage}
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                </div>
              )}
            </section>

            <section className="glass-card">
              <h2>Thực tiễn - Tiêu chuẩn của chân lý</h2>
              <div className={styles.criterionBox}>
                <div className={styles.criterionItem}>
                  <h4>✅ Tại sao thực tiễn là tiêu chuẩn?</h4>
                  <p>Chỉ có thực tiễn mới có thể chứng minh một nhận thức có phản ánh đúng thực tại hay không. Thực tiễn là cầu nối giữa chủ thể và khách thể.</p>
                </div>
                <div className={styles.criterionItem}>
                  <h4>🎯 Thực tiễn là tiêu chuẩn duy nhất</h4>
                  <p>Không có tiêu chuẩn nào khác ngoài thực tiễn có thể kiểm nghiệm chân lý một cách khách quan và toàn diện.</p>
                </div>
                <div className={styles.criterionItem}>
                  <h4>⚖️ Tính tuyệt đối và tương đối</h4>
                  <p>Thực tiễn vừa là tiêu chuẩn tuyệt đối (duy nhất, khách quan) vừa có tính tương đối (phát triển, hoàn thiện không ngừng).</p>
                </div>
              </div>
            </section>

            <div className={styles.quote}>
              <div className={styles.quoteIcon}>"</div>
              <p className={styles.quoteText}>Thực tiễn cao hơn nhận thức lý luận vì nó không chỉ có phẩm chất của tính phổ biến mà còn có phẩm chất của hiện thực trực tiếp</p>
              <p className={styles.quoteAuthor}>— V.I. Lenin</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
