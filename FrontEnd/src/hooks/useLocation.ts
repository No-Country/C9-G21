import  { useEffect, useState } from 'react'

export const useLocation = () => {
    const [status, setStatus] = useState("")
    const [lat, setLat] = useState(0);
    const [lng, setLng] = useState(0);

    useEffect(() => {
        const geoLocation = () => {
            if (!navigator.geolocation) {
                setStatus('Geolocation is not supported by your browser');
            } else {
                setStatus('Locating...');
                navigator.geolocation.getCurrentPosition((position) => {
                    setStatus("");
                    setLat(position.coords.latitude);
                    setLng(position.coords.longitude);
                }, () => {
                    setStatus('Unable to retrieve your location');
                })
            }
        }
        geoLocation();
    }, [])

    return { lat,lng, status}
}
