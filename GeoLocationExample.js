import React, { useState, useEffect } from 'react';
import { getCountryFromLatLng } from './geoHelper';

const GeoLocationExample = () => {
    // State to store location-related information
    const [location, setLocation] = useState(null);
    const [country, setCountry] = useState(null);
    const [error, setError] = useState(null);
    const [permissionStatus, setPermissionStatus] = useState('prompt');

    // Function to check geolocation permission status
    const checkPermissionStatus = async () => {
        try {
            const permission = await navigator.permissions.query({ name: 'geolocation' });
            setPermissionStatus(permission.state);

            // Listen for permission changes
            permission.addEventListener('change', () => {
                setPermissionStatus(permission.state);
            });
        } catch (err) {
            console.error('Error checking permission:', err);
        }
    };

    // Function to get current location
    const getCurrentLocation = () => {
        if (!navigator.geolocation) {
            setError('Geolocation is not supported by your browser');
            return;
        }

        navigator.geolocation.getCurrentPosition(
            async (position) => {
                const { latitude, longitude } = position.coords;
                setLocation({ latitude, longitude });

                // Get country from coordinates
                try {
                    const countryInfo = await getCountryFromLatLng(latitude, longitude);
                    setCountry(countryInfo);
                } catch (err) {
                    setError('Error getting country information');
                }
            },
            (err) => {
                switch (err.code) {
                    case err.PERMISSION_DENIED:
                        setError('User denied the request for geolocation');
                        break;
                    case err.POSITION_UNAVAILABLE:
                        setError('Location information is unavailable');
                        break;
                    case err.TIMEOUT:
                        setError('The request to get user location timed out');
                        break;
                    default:
                        setError('An unknown error occurred');
                }
            },
            {
                enableHighAccuracy: true,
                timeout: 5000,
                maximumAge: 0
            }
        );
    };

    // Example of watching location updates
    const watchLocationExample = () => {
        const watchId = navigator.geolocation.watchPosition(
            async (position) => {
                const { latitude, longitude } = position.coords;
                setLocation({ latitude, longitude });
                
                try {
                    const countryInfo = await getCountryFromLatLng(latitude, longitude);
                    setCountry(countryInfo);
                } catch (err) {
                    setError('Error getting country information');
                }
            },
            (err) => {
                setError('Error watching location: ' + err.message);
            },
            {
                enableHighAccuracy: true,
                timeout: 5000,
                maximumAge: 0
            }
        );

        // Clean up function to stop watching location
        return () => navigator.geolocation.clearWatch(watchId);
    };

    useEffect(() => {
        checkPermissionStatus();
    }, []);

    return (
        <div>
            <h2>Geolocation Example</h2>
            
            {/* Permission Status */}
            <div>
                <h3>Permission Status</h3>
                <p>Current permission status: {permissionStatus}</p>
            </div>

            {/* Location Controls */}
            <div>
                <button onClick={getCurrentLocation}>
                    Get Current Location
                </button>
            </div>

            {/* Display Results */}
            {location && (
                <div>
                    <h3>Current Location</h3>
                    <p>Latitude: {location.latitude}</p>
                    <p>Longitude: {location.longitude}</p>
                </div>
            )}

            {country && (
                <div>
                    <h3>Country Information</h3>
                    <pre>{JSON.stringify(country, null, 2)}</pre>
                </div>
            )}

            {/* Error Display */}
            {error && (
                <div style={{ color: 'red' }}>
                    <h3>Error</h3>
                    <p>{error}</p>
                </div>
            )}
        </div>
    );
};

export default GeoLocationExample;

// Usage Example:
/*
import GeoLocationExample from './GeoLocationExample';

function App() {
    return (
        <div>
            <h1>My App</h1>
            <GeoLocationExample />
        </div>
    );
}
*/ 