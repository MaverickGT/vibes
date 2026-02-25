import React from 'react';
import styles from './AboutHero.module.css';

export const AboutHero: React.FC = () => {
    return (
        <div style={{ padding: '0 1.5rem' }}>
            <section className={styles.hero}>
                <div className={`${styles.pill} animate-fade-in`}>OUR STORY</div>
                <h1 className={`${styles.title} animate-fade-in`} style={{ animationDelay: '0.1s' }}>
                    We Create <br />
                    <span className={styles.teal}>Unforgettable</span> <span className={styles.coral}>Vibes.</span>
                </h1>
                <p className={`${styles.subtitle} animate-fade-in`} style={{ animationDelay: '0.2s' }}>
                    We are a passionate team dedicated to bringing people together through exceptional events, fostering community, and making every moment count.
                </p>
            </section>
        </div>
    );
};
