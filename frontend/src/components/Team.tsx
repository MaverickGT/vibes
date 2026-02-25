import React from 'react';
import styles from './Team.module.css';

interface TeamMember {
    name: string;
    role: string;
    bio: string;
    imageUrl: string;
}

const teamMembers: TeamMember[] = [
    {
        name: 'Team Member 1',
        role: 'Event Director',
        bio: 'Passionate about creating immersive experiences and bringing creative visions to life.',
        imageUrl: 'https://placehold.co/400x400/e2e8f0/1e293b?text=M1'
    },
    {
        name: 'Team Member 2',
        role: 'Community Manager',
        bio: 'Dedicated to fostering connections and ensuring everyone feels welcome at our events.',
        imageUrl: 'https://placehold.co/400x400/e2e8f0/1e293b?text=M2'
    },
    {
        name: 'Team Member 3',
        role: 'Creative Lead',
        bio: 'The eye behind our visual identity, turning ordinary spaces into extraordinary moments.',
        imageUrl: 'https://placehold.co/400x400/e2e8f0/1e293b?text=M3'
    },
    {
        name: 'Team Member 4',
        role: 'Logistics Coordinator',
        bio: 'Master of organization, making sure every event runs smoothly from start to finish.',
        imageUrl: 'https://placehold.co/400x400/e2e8f0/1e293b?text=M4'
    },
    {
        name: 'Team Member 5',
        role: 'Partnerships',
        bio: 'Building relationships with venues and sponsors to elevate our community offerings.',
        imageUrl: 'https://placehold.co/400x400/e2e8f0/1e293b?text=M5'
    }
];

export const Team: React.FC = () => {
    return (
        <section className={styles.teamContainer}>
            <div className={styles.header}>
                <div className={styles.label}>The Vibes Makers</div>
                <h2 className={styles.title}>Meet Our Team</h2>
                <p className={styles.subtitle}>The passionate individuals behind every unforgettable experience.</p>
            </div>
            <div className={styles.grid}>
                {teamMembers.map((member, index) => (
                    <div key={index} className={styles.card}>
                        <div className={styles.imageWrapper}>
                            <img src={member.imageUrl} alt={member.name} className={styles.image} />
                        </div>
                        <div className={styles.info}>
                            <h3 className={styles.name}>{member.name}</h3>
                            <div className={styles.role}>{member.role}</div>
                            <p className={styles.bio}>{member.bio}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
