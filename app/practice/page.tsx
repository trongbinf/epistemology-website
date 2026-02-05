'use client';

import { motion } from 'framer-motion';
import ScrollAnimation from '@/components/ScrollAnimations';
import TopicNavigator from '@/components/TopicNavigator';
import styles from './page.module.css';

export default function PracticePage() {
  return (
    <div className={styles.page}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.header}>
            <h1 className={styles.title}>Thực tiễn - Nền tảng của Nhận thức</h1>
            <p className={styles.subtitle}>
              Thực tiễn là cơ sở, động lực, mục đích và tiêu chuẩn duy nhất của chân lý
            </p>
          </div>

          <div className={styles.content}>
            <ScrollAnimation variant="slideUp" delay={0.2}>
              <section className="glass-card hover-scale">
              <h2>Thực tiễn là gì?</h2>
              <p>
                <strong>Thực tiễn</strong> là toàn bộ hoạt động vật chất có mục đích, có ý thức của con người 
                nhằm cải tạo tự nhiên và xã hội.
              </p>
              <p>
                Thực tiễn có tính chất khách quan, lịch sử - xã hội và mang tính sáng tạo. 
                Đây là hoạt động cơ bản nhất của con người, quyết định sự tồn tại và phát triển của xã hội loài người.
              </p>
              </section>
            </ScrollAnimation>

            <ScrollAnimation variant="slideUp" delay={0.3}>
              <section className="glass-card hover-scale">
              <h2>Ba hình thức cơ bản của thực tiễn</h2>
              <div className={styles.formsGrid}>
                <div className={styles.formCard}>
                  <div className={styles.formIcon}>🏭</div>
                  <h3>Sản xuất vật chất</h3>
                  <p>
                    Hoạt động sản xuất ra của cải vật chất để thoả mãn nhu cầu sống của con người. 
                    Đây là hình thức thực tiễn cơ bản nhất, quyết định sự tồn tại và phát triển của xã hội.
                  </p>
                  <div className={styles.examples}>
                    <strong>Ví dụ:</strong> Nông nghiệp, công nghiệp, xây dựng, giao thông vận tải
                  </div>
                </div>

                <div className={styles.formCard}>
                  <div className={styles.formIcon}>🏛️</div>
                  <h3>Hoạt động chính trị - xã hội</h3>
                  <p>
                    Hoạt động của con người nhằm thiết lập, duy trì và phát triển các quan hệ xã hội. 
                    Bao gồm hoạt động chính trị, pháp luật, quản lý nhà nước và các phong trào xã hội.
                  </p>
                  <div className={styles.examples}>
                    <strong>Ví dụ:</strong> Cách mạng, cải cách, xây dựng nhà nước, phong trào quần chúng
                  </div>
                </div>

                <div className={styles.formCard}>
                  <div className={styles.formIcon}>🔬</div>
                  <h3>Thí nghiệm khoa học</h3>
                  <p>
                    Hoạt động nghiên cứu khoa học thông qua thí nghiệm để khám phá các quy luật của tự nhiên và xã hội. 
                    Đây là hình thức thực tiễn đặc biệt, có tính chất có chủ đích cao.
                  </p>
                  <div className={styles.examples}>
                    <strong>Ví dụ:</strong> Thí nghiệm vật lý, hóa học, sinh học, nghiên cứu xã hội học
                  </div>
                </div>
              </div>
              </section>
            </ScrollAnimation>

            <ScrollAnimation variant="slideUp" delay={0.4}>
              <section className="glass-card hover-scale">
              <h2>Vai trò của thực tiễn đối với nhận thức</h2>
              <div className={styles.rolesList}>
                <div className={styles.roleItem}>
                  <div className={styles.roleNumber}>01</div>
                  <div className={styles.roleContent}>
                    <h3>Thực tiễn là cơ sở của nhận thức</h3>
                    <p>
                      Thực tiễn là nguồn gốc của nhận thức. Mọi nhận thức đều bắt nguồn từ thực tiễn. 
                      Không có thực tiễn thì không có nhận thức. Thực tiễn cung cấp đối tượng và phương tiện cho nhận thức.
                    </p>
                  </div>
                </div>

                <div className={styles.roleItem}>
                  <div className={styles.roleNumber}>02</div>
                  <div className={styles.roleContent}>
                    <h3>Thực tiễn là động lực của nhận thức</h3>
                    <p>
                      Nhu cầu của thực tiễn thúc đẩy nhận thức phát triển. Những vấn đề đặt ra trong thực tiễn 
                      là động lực để con người tìm tòi, nghiên cứu và phát triển nhận thức.
                    </p>
                  </div>
                </div>

                <div className={styles.roleItem}>
                  <div className={styles.roleNumber}>03</div>
                  <div className={styles.roleContent}>
                    <h3>Thực tiễn là mục đích của nhận thức</h3>
                    <p>
                      Mục đích cuối cùng của nhận thức là để phục vụ thực tiễn, cải tạo thế giới. 
                      Nhận thức không phải để trang trí mà để hướng dẫn hoạt động thực tiễn.
                    </p>
                  </div>
                </div>

                <div className={styles.roleItem}>
                  <div className={styles.roleNumber}>04</div>
                  <div className={styles.roleContent}>
                    <h3>Thực tiễn là tiêu chuẩn của chân lý</h3>
                    <p>
                      Chỉ có thực tiễn mới có thể kiểm nghiệm một nhận thức có đúng đắn hay không. 
                      Thực tiễn là tiêu chuẩn duy nhất, khách quan và toàn diện nhất để kiểm nghiệm chân lý.
                    </p>
                  </div>
                </div>
              </div>
              </section>
            </ScrollAnimation>

            <ScrollAnimation variant="slideUp" delay={0.5}>
              <section className="glass-card hover-scale">
              <h2>Mối quan hệ biện chứng giữa thực tiễn và nhận thức</h2>
              <div className={styles.dialectic}>
                <div className={styles.dialecticItem}>
                  <h4>🔄 Thực tiễn quyết định nhận thức</h4>
                  <p>
                    Thực tiễn là cơ sở, nguồn gốc, động lực và mục đích của nhận thức. 
                    Không có thực tiễn thì không có nhận thức.
                  </p>
                </div>
                <div className={styles.dialecticItem}>
                  <h4>💡 Nhận thức tác động trở lại thực tiễn</h4>
                  <p>
                    Nhận thức đúng đắn hướng dẫn thực tiễn thành công. Nhận thức sai lầm dẫn đến thực tiễn thất bại. 
                    Nhận thức có vai trò năng động, sáng tạo đối với thực tiễn.
                  </p>
                </div>
              </div>
              </section>
            </ScrollAnimation>

            <ScrollAnimation variant="fadeIn" delay={0.6}>
              <div className={styles.quote}>
                <div className={styles.quoteIcon}>"</div>
                <p className={styles.quoteText}>
                  Thực tiễn cao hơn nhận thức (lý luận), vì nó không chỉ có phẩm chất của tính phổ biến 
                  mà còn có phẩm chất của hiện thực trực tiếp
                </p>
                <p className={styles.quoteAuthor}>— V.I. Lenin</p>
              </div>
            </ScrollAnimation>
          </div>
        </motion.div>

        {/* Topic Navigation */}
        <TopicNavigator currentPath="/practice" />
      </div>
    </div>
  );
}
