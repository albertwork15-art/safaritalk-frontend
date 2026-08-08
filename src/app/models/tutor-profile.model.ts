export interface TutorProfile {
    id: number;
    userId: number; // reference to the user account
    bio: string;
    videoIntroUrl: string;
    hourlyRate: number;
    rating: number;
    isCertified: boolean;
}
