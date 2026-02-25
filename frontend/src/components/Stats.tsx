import React, { useEffect, useState } from 'react';
import styles from './Stats.module.css';
import { Stats as StatsType } from '../types';

export const Stats: React.FC = () => {
    const [stats, setStats] = useState<StatsType | null>(null);

    useEffect(() => {
        fetch('http://localhost:3000/api/stats')
            .then(res => res.json())
            .then(data => setStats(data))
            .catch(err => console.error(err));
    }, []);

    if (!stats) return null;

    return (
        <section className={styles.statsContainer}>
            <div className={styles.statCard}>
                <div className={styles.label}>Events Hosted</div>
                <div className={styles.value}>{stats.eventsHosted}</div>
                <div className={styles.desc}>Memorable moments created</div>
            </div>
            <div className={styles.statCard}>
                <div className={styles.label}>Happy Humans</div>
                <div className={styles.value}>{stats.activeMembers}</div>
                <div className={styles.desc}>Active community members</div>
            </div>
            <div className={styles.statCard}>
                <div className={styles.label}>Teams Connected</div>
                <div className={styles.value}>{stats.teamsConnected}</div>
                <div className={styles.desc}>Cross-departmental bonds</div>
            </div>
        </section>
    );
};
