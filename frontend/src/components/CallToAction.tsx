import React from 'react';
import styles from './CallToAction.module.css';

export const CallToAction: React.FC = () => {
    return (
        <section className="container">
            <div className={styles.cta}>
                <div className={styles.content}>
                    <h2 className={styles.title}>Got a vibe in mind?</h2>
                    <p className={styles.desc}>
                        Whether it's a board game cafe trip or a skydiving adventure, we'll help you organize it!
                    </p>
                </div>
                <button className="btn-coral">Suggest an Event</button>
            </div>
        </section>
    );
};
