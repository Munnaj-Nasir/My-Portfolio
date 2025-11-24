import React from 'react';

const styles = {
    // 1. SCROLLING CONTAINER: Enforces the viewport size and snap behavior.
    galleryContainer: {
        width: '100%',
        height: '100vh', 
        overflowY: 'scroll',
        scrollSnapType: 'y mandatory', 
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
    },
    
    // 2. INDIVIDUAL ITEM CONTAINER: Acts as the 100vh-tall "slide."
    galleryItem: {
        width: '100%',
        height: 'auto', 
        scrollSnapAlign: 'start', // Ensures the scroll stops at the top of this item
        position: 'relative',
        
        // Flexbox aligns the image to the top of the 100vh space
        display: 'flex',
        flexDirection: 'column', 
        alignItems: 'center',    
        justifyContent: 'flex-start', // Puts the image at the top of the slide
        backgroundColor: '#1a1a1a', // Background color for the space below the image
        padding: 0,
        margin: 0,
    },
    
    // 3. IMAGE STYLING: Displays the image uncropped (16:9) and full width.
    galleryImage: {
        display: 'block',
        // The requested responsive, uncropped sizing
        width: '100%', 
        height: 'auto', 
        
        // Ensures no cropping occurs
        objectFit: 'contain', 
    },
};

/**
 * Reusable component for a vertical image gallery where images fill the width (100%)
 * and are not cropped, maintaining the 100vh scroll-snap slide effect.
 */
const VerticalGallery = ({ images }) => {
    
    if (!ArrayOfImages(images) || images.length === 0) {
        return <div>Loading images or no images available...</div>;
    }

    return (
        <div style={styles.galleryContainer}>
            {images.map((image) => (
                <div key={image.id} style={styles.galleryItem}>
                    <img
                        src={image.url}
                        alt={image.title}
                        style={styles.galleryImage}
                    />
                </div>
            ))}
        </div>
    );
};

export default VerticalGallery;

// Helper function (replace with your favorite array check)
function ArrayOfImages(arr) {
    return Array.isArray(arr) && arr.every(item => item.id && item.url);
}