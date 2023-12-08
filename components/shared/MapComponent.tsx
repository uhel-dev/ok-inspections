"use client"

import React, { useEffect, useState } from "react";
import { Circle, GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

import locs from "../../locations.json";

const locations = locs.LOCATIONS

interface IProps {
    radiusMiles: number;
    loc?: any;
    radiusTrue?: boolean;
    singleLoc?: any;
    pathPrefix?: string;
    isClickable?: boolean;
}

interface ICoordinate {
    lat: number;
    lng: number;
}


const MapComponent: React.FC<IProps> = ({ radiusMiles , loc, radiusTrue, singleLoc, pathPrefix, isClickable = true}) => {

    const [showSingleLocation, setShowSingleLocation] = useState(singleLoc ?? true)
    const prefix = pathPrefix ?? `/tyres/tyre-services-in-}`

    const coordinates: ICoordinate = { lat: 51.4736, lng: -0.3270 }; // Coordinates for TW7 6LX, UK

    const [windowHeight, setWindowHeight] = useState(() => {
        try {
            return window.matchMedia("(max-width: 768px)").matches ? "40vh" : "55vh"
        }
        catch (err) {
            return "40vh"
        }
    });

    useEffect(() => {

        const handleResize = () => {
            setWindowHeight(window.matchMedia("(max-width: 768px)").matches ? "40vh" : "55vh");
        };

        window.addEventListener('resize', handleResize);
        // Cleanup function
        return () => window.removeEventListener('resize', handleResize);
    }, []); // Empty dependency array means this effect runs once on mount and cleanup on unmount


    const mapStyles = {
        height: windowHeight,
        width: "100%",
        borderRadius: "25px",
        map: [
            {
                featureType: "all",
                elementType: "geometry",
                stylers: [
                    {
                        color: "#202c3e",
                    },
                ],
            },
            {
                featureType: "all",
                elementType: "labels.text.stroke",
                stylers: [
                    {
                        color: "#202c3e",
                    },
                ],
            },
            {
                featureType: "all",
                elementType: "labels.text.fill",
                stylers: [
                    {
                        color: "#746855",
                    },
                ],
            },
            {
                featureType: "poi",
                elementType: "all",
                stylers: [
                    {
                        visibility: "off",
                    },
                ],
            },
            {
                featureType: "road",
                elementType: "all",
                stylers: [
                    {
                        color: "#38414e",
                    },
                ],
            },
            {
                featureType: "transit",
                elementType: "all",
                stylers: [
                    {
                        color: "#2f3948",
                    },
                ],
            },
            {
                featureType: "water",
                elementType: "all",
                stylers: [
                    {
                        color: "#17263c",
                    },
                ],
            },
        ],
    };


    const radiusMeters = radiusMiles * 1609.34; // convert miles to meters


    return (
        <>
            <LoadScript
                googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''}
            >
                <GoogleMap
                    mapContainerStyle={{
                        height: mapStyles.height,
                        width: mapStyles.width,
                        borderTopRightRadius: windowHeight === "40vh" ? "0px" : "0.75rem",
                        borderBottomRightRadius: windowHeight === "40vh" ? "0.75rem" : "0px",
                        borderBottomLeftRadius: windowHeight === "40vh" ? "0.75rem" : "0px"
                    }}
                    zoom={windowHeight === "40vh" ? 8 : 9}
                    center={coordinates}
                    options={{ styles: mapStyles.map }}
                >
                    { radiusTrue === true && (
                        <Circle
                            center={coordinates}
                            radius={radiusMeters}
                            options={{
                                fillColor: 'lightblue',
                                fillOpacity: 0.2,
                                strokeColor: '#feea12'
                            }}
                        />
                    )}

                    {/* Map through the major areas and place a marker on each */}
                    {!showSingleLocation && locations.map((loc) => (
                        <Marker
                            key={loc.location}
                            position={loc.coords}
                            onClick={() => window.location.href = `${pathPrefix}/${loc.location.toLowerCase()}`}
                        />
                    ))}

                    { showSingleLocation && isClickable && (
                        <Marker
                            key={loc?.location}
                            position={loc?.coords}
                            onClick={() => window.location.href = `${pathPrefix}/${loc.location.toLowerCase()}`}
                        />
                    )}

                    { showSingleLocation && !isClickable && (
                      <Marker
                        key={loc?.location}
                        position={loc?.coords}
                      />
                    )}
                </GoogleMap>
            </LoadScript>
        </>
    );
};

export default MapComponent;
