export interface Event {
    id: number;
    title: string;
    description: string;
    badge: string;
    badgeColor: 'mint' | 'coral' | 'blue' | string;
    date: string;
    location: string;
    imageUrl: string;
}

export interface Stats {
    eventsHosted: string;
    activeMembers: string;
    teamsConnected: string;
}
