import React, { useState } from 'react';
import styles from './ContactForm.module.css';

export const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically send the data to your backend
        console.log('Form submitted:', formData);
        alert('Thanks for reaching out! We will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <section className={styles.contactContainer}>
            <div className={styles.card}>
                <form onSubmit={handleSubmit}>
                    <div className={styles.formGroup}>
                        <label className={styles.label} htmlFor="name">Your Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className={styles.input}
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="John Doe"
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label className={styles.label} htmlFor="email">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className={styles.input}
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="john@example.com"
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label className={styles.label} htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            className={styles.textarea}
                            value={formData.message}
                            onChange={handleChange}
                            required
                            placeholder="How can we help you?"
                        />
                    </div>

                    <button type="submit" className={styles.submitBtn}>
                        Send Message
                    </button>
                </form>

                <div className={styles.contactInfoRow}>
                    <div className={styles.infoItem}>
                        <div className={styles.infoTitle}>Email Us</div>
                        <div className={styles.infoDetail}>hello@vibesandco.com</div>
                    </div>
                    <div className={styles.infoItem}>
                        <div className={styles.infoTitle}>Call Us</div>
                        <div className={styles.infoDetail}>+1 (555) 123-4567</div>
                    </div>
                </div>
            </div>
        </section>
    );
};
