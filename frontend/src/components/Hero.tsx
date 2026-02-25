import React from 'react';
import styles from './Hero.module.css';

export const Hero: React.FC = () => {
    return (
        <div style={{ padding: '0 1.5rem' }}>
            <section className={styles.hero}>
                <div className={`${styles.pill} animate-fade-in`}>CONNECT • HAVE FUN • CELEBRATE</div>
                <h1 className={`${styles.title} animate-fade-in`} style={{ animationDelay: '0.1s' }}>
                    Out of Office.<br />
                    <span className={styles.teal}>Even When</span> <span className={styles.coral}>We're In.</span>
                </h1>
                <p className={`${styles.subtitle} animate-fade-in`} style={{ animationDelay: '0.2s' }}>
                    We handle the fun. You just show up and enjoy the best events our team has to offer.
                </p>
                <div className={`${styles.actions} animate-fade-in`} style={{ animationDelay: '0.3s' }}>
                    <button className="btn-primary">Check out events</button>
                    <button className="btn-outline">About the team</button>
                </div>
            </section>
        </div>
    );
};
