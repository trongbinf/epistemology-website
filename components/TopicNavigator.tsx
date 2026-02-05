'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { getPreviousTopic, getNextTopic, getTopicProgress } from '@/lib/topicConfig';
import styles from './TopicNavigator.module.css';

interface TopicNavigatorProps {
  currentPath: string;
}

export default function TopicNavigator({ currentPath }: TopicNavigatorProps) {
  const previousTopic = getPreviousTopic(currentPath);
  const nextTopic = getNextTopic(currentPath);
  const progress = getTopicProgress(currentPath);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={styles.navigator}
    >
      {/* Progress Indicator */}
      <div className={styles.progressSection}>
        <div className={styles.progressText}>
          Tiến độ học tập: <strong>{progress.current}/{progress.total}</strong>
        </div>
        <div className={styles.progressBar}>
          <motion.div
            className={styles.progressFill}
            initial={{ width: 0 }}
            whileInView={{ width: `${(progress.current / progress.total) * 100}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
          />
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className={styles.buttons}>
        {previousTopic ? (
          <Link href={previousTopic.href} className={styles.navButton}>
            <motion.div
              className={styles.buttonContent}
              whileHover={{ scale: 1.05, x: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className={styles.arrow}>←</span>
              <div className={styles.buttonText}>
                <span className={styles.label}>Chủ đề trước</span>
                <span className={styles.title}>{previousTopic.icon} {previousTopic.title}</span>
              </div>
            </motion.div>
          </Link>
        ) : (
          <div className={styles.placeholder} />
        )}

        {nextTopic ? (
          <Link href={nextTopic.href} className={`${styles.navButton} ${styles.next}`}>
            <motion.div
              className={styles.buttonContent}
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className={styles.buttonText}>
                <span className={styles.label}>Tiếp tục đến</span>
                <span className={styles.title}>{nextTopic.icon} {nextTopic.title}</span>
              </div>
              <span className={styles.arrow}>→</span>
            </motion.div>
          </Link>
        ) : (
          <Link href="/" className={`${styles.navButton} ${styles.home}`}>
            <motion.div
              className={styles.buttonContent}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className={styles.buttonText}>
                <span className={styles.label}>Hoàn thành!</span>
                <span className={styles.title}>🏠 Quay về trang chủ</span>
              </div>
            </motion.div>
          </Link>
        )}
      </div>
    </motion.div>
  );
}
