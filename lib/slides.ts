import slidesConfig from '../slides-config.json';

export interface Slide {
    id: string;
    path: string;
    title: string;
    page: string;
}

/**
 * Get all slides from the configuration
 */
export function getAllSlides(): Slide[] {
    return Object.entries(slidesConfig.slides).map(([id, slide]) => ({
        id,
        ...slide,
    }));
}

/**
 * Get slides filtered by page name
 * @param pageName - The page identifier (e.g., 'origin', 'introduction')
 */
export function getSlidesByPage(pageName: string): Slide[] {
    return getAllSlides().filter(slide => slide.page === pageName);
}

/**
 * Get a specific slide by its ID
 * @param slideId - The slide identifier (e.g., 'slide_13')
 */
export function getSlideById(slideId: string): Slide | undefined {
    const slideData = slidesConfig.slides[slideId as keyof typeof slidesConfig.slides];
    if (!slideData) return undefined;

    return {
        id: slideId,
        ...slideData,
    };
}

/**
 * Get slide IDs for a specific page in order
 * @param pageName - The page identifier
 */
export function getSlideIdsByPage(pageName: string): string[] {
    return getSlidesByPage(pageName).map(slide => slide.id);
}
