import React from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';

const NAV_ITEMS = [
    { name: 'Home', path: '/' },
    { name: 'Events', path: '/events' },
    { name: 'About Vibes', path: '/about' },
    { name: 'Contact Us', path: '/contact' }
];

export const Navbar: React.FC = () => {
    const location = useLocation();

    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <img src="/vibes_logo.svg" alt="Vibes&Co. Logo" style={{ height: '32px', filter: 'hue-rotate(180deg)', objectFit: 'cover', objectPosition: 'center', width: '32px' }} />
                <span>Vibes&Co.</span>
            </div>
            <div className={styles.navLinks}>
                {NAV_ITEMS.map((item) => {
                    const isActive = location.pathname === item.path || (location.pathname === '/' && item.path === '/');
                    return (
                        <Link
                            key={item.name}
                            to={item.path}
                            className={`${styles.navLink} ${isActive ? styles.active : ''}`}
                            style={{ position: 'relative' }}
                        >
                            {isActive && (
                                <motion.div
                                    layoutId="nav-pill"
                                    className={styles.pill}
                                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                                />
                            )}
                            <span className={styles.navText}>{item.name}</span>
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
};
