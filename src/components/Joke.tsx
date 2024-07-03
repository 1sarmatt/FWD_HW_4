// src/components/Joke.tsx
import React, { useState } from 'react';
import Comic from './Comic';

const Joke: React.FC = () => {
    const [showComic, setShowComic] = useState(false);
    const email = 's.lutfullin@innopolis.university';

    const handleFindJokeClick = () => {
        setShowComic(true);
    };

    return (
        <section>
            <h2>Find Joke</h2>
            <button onClick={handleFindJokeClick}>Click Me</button>
            {showComic && <Comic email={email} />}
        </section>
    );
};

export default Joke;

