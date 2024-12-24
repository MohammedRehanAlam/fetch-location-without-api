import React, { useState, useEffect } from 'react';

const LocationUtilityComponent = () => {
    // State management
    const [location, setLocation] = useState(null);
    const [country, setCountry] = useState(null);
    const [error, setError] = useState(null);
    const [permissionStatus, setPermissionStatus] = useState('prompt');

    // Utility function to get country from coordinates
    const getCountryFromLatLng = async (latitude, longitude) => {
        try {
            const response = await fetch(
                `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
            );
            const data = await response.json();
            return {
                country: data.address.country,
                countryCode: data.address.country_code,
                state: data.address.state,
                city: data.address.city
            };
        } catch (error) {
            console.error('Error fetching country data:', error);
            throw error;
        }
    };

    // Example locations for testing (can be expanded in future)
    const exampleLocations = [
        { name: 'New York', lat: 40.7128, lng: -74.0060 },
        { name: 'London', lat: 51.5074, lng: -0.1278 },
        // Space for future location examples
        /* Add more locations here in the format:
        { name: 'City Name', lat: latitude, lng: longitude },
        */
    ];

    // Permission check
    const checkPermissionStatus = async () => {
        try {
            const permission = await navigator.permissions.query({ name: 'geolocation' });
            setPermissionStatus(permission.state);
            permission.addEventListener('change', () => {
                setPermissionStatus(permission.state);
            });
        } catch (err) {
            console.error('Error checking permission:', err);
        }
    };

    // Get current location
    const getCurrentLocation = () => {
        if (!navigator.geolocation) {
            setError('Geolocation is not supported by your browser');
            return;
        }

        navigator.geolocation.getCurrentPosition(
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
                handleLocationError(err);
            },
            { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
        );
    };

    // Error handler
    const handleLocationError = (err) => {
        switch (err.code) {
            case 1: // PERMISSION_DENIED
                setError('Location permission denied');
                break;
            case 2: // POSITION_UNAVAILABLE
                setError('Location unavailable');
                break;
            case 3: // TIMEOUT
                setError('Location request timed out');
                break;
            default:
                setError('Location error occurred');
        }
    };

    // Test example location
    const testExampleLocation = async (location) => {
        try {
            setLocation({ latitude: location.lat, longitude: location.lng });
            const countryInfo = await getCountryFromLatLng(location.lat, location.lng);
            setCountry(countryInfo);
            setError(null);
        } catch (err) {
            setError(`Error testing location: ${location.name}`);
        }
    };

    useEffect(() => {
        checkPermissionStatus();
    }, []);

    return (
        <div className="location-utility">
            <h2>Location Utility</h2>

            {/* Permission Status */}
            <div className="section">
                <h3>Permission Status</h3>
                <p>Current permission status: {permissionStatus}</p>
            </div>

            {/* Current Location */}
            <div className="section">
                <h3>Current Location</h3>
                <button onClick={getCurrentLocation}>
                    Get My Location
                </button>
            </div>

            {/* Example Locations */}
            <div className="section">
                <h3>Test Example Locations</h3>
                {exampleLocations.map((loc, index) => (
                    <button 
                        key={index}
                        onClick={() => testExampleLocation(loc)}
                    >
                        Test {loc.name}
                    </button>
                ))}
            </div>

            {/* Results Display */}
            {location && (
                <div className="section">
                    <h3>Location Details</h3>
                    <p>Latitude: {location.latitude}</p>
                    <p>Longitude: {location.longitude}</p>
                </div>
            )}

            {country && (
                <div className="section">
                    <h3>Location Information</h3>
                    <pre>{JSON.stringify(country, null, 2)}</pre>
                </div>
            )}

            {/* Error Display */}
            {error && (
                <div className="section error">
                    <h3>Error</h3>
                    <p>{error}</p>
                </div>
            )}

            {/* Basic Styling */}
            <style jsx>{`
                .location-utility {
                    padding: 20px;
                    max-width: 800px;
                    margin: 0 auto;
                }
                .section {
                    margin: 20px 0;
                    padding: 15px;
                    border: 1px solid #ddd;
                    border-radius: 5px;
                }
                .error {
                    color: red;
                    border-color: red;
                }
                button {
                    margin: 5px;
                    padding: 8px 16px;
                    cursor: pointer;
                }
                pre {
                    background: #f5f5f5;
                    padding: 10px;
                    border-radius: 4px;
                    overflow-x: auto;
                }
            `}</style>
        </div>
    );
};

export default LocationUtilityComponent;

// Usage Example:
/*
import LocationUtilityComponent from './LocationUtilityComponent';

function App() {
    return (
        <div>
            <h1>My Location App</h1>
            <LocationUtilityComponent />
        </div>
    );
}
*/ 