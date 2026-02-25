import express from 'express';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Mock data for events
const mockEvents = [
    {
        id: 1,
        title: 'Team Karaoke Night',
        description: 'Unleash your inner rockstar',
        badge: 'HOT',
        badgeColor: 'mint',
        date: 'Oct 24',
        location: 'Main Hall',
        imageUrl: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: 2,
        title: 'Friday Rooftop Social',
        description: 'Drinks, music, and sunset views',
        badge: 'TRENDING',
        badgeColor: 'coral',
        date: 'Oct 27',
        location: 'Level 12',
        imageUrl: 'https://images.unsplash.com/photo-1543807535-eceef0bc6599?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: 3,
        title: 'Sports Day',
        description: 'Friendly competition & spirit',
        badge: 'NEW',
        badgeColor: 'mint',
        date: 'Nov 02',
        location: 'Sports Park',
        imageUrl: 'https://images.unsplash.com/photo-1526676037777-05a232554f77?auto=format&fit=crop&q=80&w=800'
    }
];

// Mock data for stats
const mockStats = {
    eventsHosted: '150+',
    activeMembers: '2,400+',
    teamsConnected: '45+'
};

app.get('/api/events', (req, res) => {
    res.json(mockEvents);
});

app.get('/api/stats', (req, res) => {
    res.json(mockStats);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
