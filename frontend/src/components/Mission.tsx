import React from 'react';
import styles from './Mission.module.css';

export const Mission: React.FC = () => {
    return (
        <section className={styles.missionContainer}>
            <div className={styles.contentBox}>
                <div className={styles.label}>Our Mission</div>
                <h2 className={styles.title}>Connecting People Through Shared Experiences</h2>
                <p className={styles.description}>
                    At Vibes&Co, we believe that the best moments in life are the ones we share with others. Our mission is to curate, organize, and host events that go beyond the ordinary.
                </p>
                <p className={styles.description}>
                    Whether it's a team-building retreat, a grand celebration, or a casual Friday night meetup, we ensure every detail is perfect so you can focus on what matters most: enjoying the vibe.
                </p>
            </div>
            <div className={styles.imagePlaceholder}>
                <div style={{ zIndex: 1 }}>Inspiring Team Moments</div>
            </div>
        </section>
    );
};
