'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import styles from './Navigation.module.css';

const navItems = [
  { href: '/', label: 'Trang chủ' },
  { href: '/introduction', label: 'Giới thiệu' },
  { href: '/origin', label: 'Nguồn gốc' },
  { href: '/levels', label: 'Trình độ' },
  { href: '/practice', label: 'Thực tiễn' },
  { href: '/cognition', label: 'Nhận thức' },
  { href: '/dialectical-path', label: 'Con đường biện chứng' },
  { href: '/truth', label: 'Chân lý' },
];

export default function Navigation() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoIcon}>🧠</span>
          <span className={styles.logoText}>Nhận thức luận</span>
        </Link>

        <ul className={styles.navList}>
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`${styles.navLink} ${
                  pathname === item.href ? styles.active : ''
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
