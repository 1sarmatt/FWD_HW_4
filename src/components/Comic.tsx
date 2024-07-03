import React, { useState, useEffect } from 'react';
import { ComicData, ComicIdResponse } from '../types';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

interface ComicProps {
    email: string;
}

const Comic: React.FC<ComicProps> = ({ email }) => {
    const [comic, setComic] = useState<ComicData | null>(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchComicData();
    }, []);

    const fetchComicData = async () => {
        setLoading(true);
        try {
            const comicId = await getComicId(email);
            if (comicId) {
                const comicData = await getComicData(comicId.id);
                setComic(comicData);
            }
        } catch (error) {
            console.error('Error fetching comic data:', error);
        } finally {
            setLoading(false);
        }
    };

    const getComicId = async (email: string): Promise<ComicIdResponse | null> => {
        try {
            const response = await fetch(`https://fwd.innopolis.university/api/hw2?email=${email}`);
            const data: ComicIdResponse = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching comic ID:', error);
            return null;
        }
    };

    const getComicData = async (id: number): Promise<ComicData | null> => {
        try {
            const response = await fetch(`https://fwd.innopolis.university/api/comic?id=${id}`);
            const data: ComicData = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching comic data:', error);
            return null;
        }
    };

    const cleanTranscript = (text: string): string => {
        let cleanedText = text.replace(/[\[\]\{\}]/g, '');
        cleanedText = cleanedText.replace(/\.\)\)\s?\(\([^)]+\.\)\)/g, '');
        cleanedText = cleanedText.replace(/\(\([^)]+\)\)/g, '');
        return cleanedText;
    };

    useEffect(() => {
        if (comic) {
            console.log('Comic loaded:', comic);
        }
    }, [comic]);

    if (loading) {
        return <p>Loading comic...</p>;
    }

    if (!comic) {
        return <p>No comic loaded.</p>;
    }

    const date = new Date(parseInt(comic.year), parseInt(comic.month) - 1, parseInt(comic.day));

    return (
        <div id="comic-container">
            <img src={comic.img} alt={comic.alt} title={comic.title} />
            <h2>{comic.safe_title}</h2>
            <p>Published: {date.toLocaleDateString()}, {dayjs(date).fromNow()}</p>
            {comic.transcript && <p id="transcript">{cleanTranscript(comic.transcript)}</p>}
        </div>
    );
};

export default Comic;



