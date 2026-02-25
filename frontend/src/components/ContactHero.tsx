import React from 'react';
import styles from './ContactHero.module.css';

export const ContactHero: React.FC = () => {
    return (
        <div style={{ padding: '0 1.5rem' }}>
            <section className={styles.hero}>
                <div className={`${styles.pill} animate-fade-in`}>GET IN TOUCH</div>
                <h1 className={`${styles.title} animate-fade-in`} style={{ animationDelay: '0.1s' }}>
                    Let's Chat About <br />
                    <span className={styles.teal}>Your Next</span> <span className={styles.coral}>Vibe.</span>
                </h1>
                <p className={`${styles.subtitle} animate-fade-in`} style={{ animationDelay: '0.2s' }}>
                    Have a question, an idea for an event, or just want to say hi? We'd love to hear from you. Drop us a message below.
                </p>
            </section>
        </div>
    );
};
