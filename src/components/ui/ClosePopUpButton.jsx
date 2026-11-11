import { useEffect, useCallback } from 'react';

function ProjectPopup() {
    const handleKeyDown = useCallback((event) => {
        if (event.key === 'Escape') {
            window.history.back();
        }
    }, []);

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [handleKeyDown]);

    return (
        <button
            className="close-project-btn"
            onClick={() => window.history.back()}
            aria-label="Chiudi progetto"
        ></button>
    );
}

export default ProjectPopup;