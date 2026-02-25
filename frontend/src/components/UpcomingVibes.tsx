import React, { useEffect, useState } from 'react';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import styles from './UpcomingVibes.module.css';
import { Event } from '../types';

export const UpcomingVibes: React.FC = () => {
    const [events, setEvents] = useState<Event[]>([]);

    useEffect(() => {
        fetch('http://localhost:3000/api/events')
            .then(res => res.json())
            .then(data => setEvents(data))
            .catch(err => console.error(err));
    }, []);

    return (
        <section className={styles.section}>
            <div className={styles.header}>
                <h2 className={styles.title}>Upcoming Vibes</h2>
                <a href="#" className={styles.viewAll}>View all <ArrowRight size={16} /></a>
            </div>
            <div className={styles.grid}>
                {events.map((event) => (
                    <div key={event.id} className={styles.card}>
                        <img src={event.imageUrl} alt={event.title} className={styles.image} />
                        <div className={styles.content}>
                            <div className={styles.cardHeader}>
                                <h3 className={styles.cardTitle}>{event.title}</h3>
                                {event.badge && (
                                    <span className={`${styles.badge} ${styles[event.badgeColor] || styles.blue}`}>
                                        {event.badge}
                                    </span>
                                )}
                            </div>
                            <p className={styles.desc}>{event.description}</p>
                            <div className={styles.meta}>
                                <div className={styles.metaItem}>
                                    <Calendar className={styles.metaIcon} style={{ color: 'var(--callout-bg)' }} />
                                    <span>{event.date}</span>
                                </div>
                                <div className={styles.metaItem}>
                                    <MapPin className={styles.metaIcon} style={{ color: 'var(--primary)' }} />
                                    <span>{event.location}</span>
                                </div>
                            </div>
                            <button className={styles.joinBtn}>Join the Fun</button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
