import React, { useRef, useEffect, useState } from 'react';

interface GoogleMapComponentProps {
    apiKey: string;
    onLocationSelect: (location: google.maps.LatLng) => void;
}

const GoogleMapComponent: React.FC<GoogleMapComponentProps> = ({ apiKey, onLocationSelect }) => {
    const mapContainerRef = useRef<HTMLDivElement>(null);
    const [map, setMap] = useState<google.maps.Map | null>(null);

    useEffect(() => {
        if (!apiKey) {
        console.error('API key is missing for Google Maps');
        return;
        }
    const loadMap = () => {
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
        script.onload = initMap;
        document.head.appendChild(script);
    };

    const initMap = () => {
        if (mapContainerRef.current) {
            const mapOptions: google.maps.MapOptions = {
                center: { lat: 0, lng: 0 },
                zoom: 13,
            };

            const mapInstance = new window.google.maps.Map(mapContainerRef.current, mapOptions);
            setMap(mapInstance);

            // Manejar clics en el mapa
            mapInstance.addListener('click', (event: google.maps.MapMouseEvent) => {
                if (event.latLng) {
                    onLocationSelect(event.latLng);
                }
            });
        }
    };

    loadMap();
}, [apiKey, onLocationSelect]);

    return <div ref={mapContainerRef} style={{ height: '100%', width: '100%' }} />;
};

export{GoogleMapComponent}; 