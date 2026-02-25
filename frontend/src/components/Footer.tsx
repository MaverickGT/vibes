import React from 'react';
import { Send } from 'lucide-react';
import styles from './Footer.module.css';

export const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.grid}>
                <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700, fontSize: '1.25rem' }}>
                        <img src="/vibes_logo.svg" alt="Vibes&Co. Logo" style={{ height: '32px', filter: 'hue-rotate(180deg)', objectFit: 'cover', objectPosition: 'center', width: '32px' }} />
                        <span>Vibes&Co.</span>
                    </div>
                    <p className={styles.desc}>
                        Making office life more than just a desk and a chair. We're here for the fun part of work.
                    </p>
                </div>
                <div>
                    <h4 className={styles.title}>Quick Links</h4>
                    <div className={styles.links}>
                        <a href="#" className={styles.link}>Safety Rules</a>
                        <a href="#" className={styles.link}>Event FAQ</a>
                        <a href="#" className={styles.link}>Team Leaders</a>
                    </div>
                </div>
                <div>
                    <h4 className={styles.title}>Community</h4>
                    <div className={styles.links}>
                        <a href="#" className={styles.link}>Wall of Fame</a>
                        <a href="#" className={styles.link}>Photo Stream</a>
                        <a href="#" className={styles.link}>Join Slack</a>
                    </div>
                </div>
                <div>
                    <h4 className={styles.title}>Newsletter</h4>
                    <form className={styles.newsletterForm} onSubmit={e => e.preventDefault()}>
                        <input type="email" placeholder="Your email" className={styles.input} />
                        <button type="submit" className={styles.submitBtn}>
                            <Send size={16} />
                        </button>
                    </form>
                </div>
            </div>
            <div className={styles.bottom}>
                <div>© 2024 Vibes&Co. All rights reserved.</div>
                <div className={styles.bottomLinks}>
                    <a href="#" className={styles.link}>Privacy Policy</a>
                    <a href="#" className={styles.link}>Terms of Play</a>
                </div>
            </div>
        </footer>
    );
};
