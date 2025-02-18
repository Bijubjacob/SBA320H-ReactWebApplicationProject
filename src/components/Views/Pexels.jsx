import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Pexels() {
    const [photos, setPhotos] = useState([]); // State to store photos
    const [loading, setLoading] = useState(true); // State to track loading
    const { id } = useParams(); // Access the `id` from the URL

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://api.pexels.com/v1/curated?page=${id}`, {
                    headers: {
                        Authorization: '9Wvzil3Wvo3BImH7vtopR12WFecrttUd5zSnB0prTB96wMYcLS46P4Kc'
                    }
                });

                setPhotos(response.data.photos); // Set photos to state
                setLoading(false); // Set loading to false after data is fetched
            } catch (error) {
                console.error("Error fetching photos:", error);
                setLoading(false);
            }
        };

        fetchData();
    }, [id]); // Re-run fetch when `id` changes

    return (
        <div>
            <h1>Pexels Photos (Page {id})</h1>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div className="photo-gallery">
                    {photos.map((photo) => (
                        <div key={photo.id} className="photo-item">
                            <img src={photo.src.medium} alt={photo.alt} />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Pexels;
