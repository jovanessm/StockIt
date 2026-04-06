import {useCallback, useEffect, useState} from "react";
import {Map, MapControls, useMap} from "@/components/ui/map";
import {Button} from "@/components/ui/button";
import {Layers, X} from "lucide-react";
import {geojsonData} from "@/components/dashboard/geojson-data";
import {MapMouseEvent} from "maplibre-gl";

function CustomLayer() {
    const {map, isLoaded} = useMap();
    const [isLayerVisible, setIsLayerVisible] = useState(true);
    const [hoveredCities, setHoveredCities] = useState<string | null>(null);

    const addLayers = useCallback(() => {
        if (!map) return;
        // Add source if it doesn't exist
        if (!map.getSource("cities")) {
            map.addSource("cities", {
                type: "geojson",
                data: geojsonData,
            });
        }

        // Add fill layer if it doesn't exist
        if (!map.getLayer("cities-fill")) {
            map.addLayer({
                id: "cities-fill",
                type: "fill",
                source: "cities",
                paint: {
                    "fill-color": "#22c55e",
                    "fill-opacity": 0.4,
                },
                layout: {
                    visibility: isLayerVisible ? "visible" : "none",
                },
            });
        }

        // Add outline layer if it doesn't exist
        if (!map.getLayer("cities-outline")) {
            map.addLayer({
                id: "cities-outline",
                type: "line",
                source: "cities",
                paint: {
                    "line-color": "#16a34a",
                    "line-width": 2,
                },
                layout: {
                    visibility: isLayerVisible ? "visible" : "none",
                },
            });
        }
    }, [map, isLayerVisible]);

    useEffect(() => {
        if (!map || !isLoaded) return;

        // Add layers on mount
        addLayers();

        // Hover effect
        const handleMouseEnter = () => {
            map.getCanvas().style.cursor = "pointer";
        };

        const handleMouseLeave = () => {
            map.getCanvas().style.cursor = "";
            setHoveredCities(null);
        };

        const handleMouseMove = (e: MapMouseEvent) => {
            const features = map.queryRenderedFeatures(e.point, {
                layers: ["cities-fill"],
            });
            if (features.length > 0) {
                setHoveredCities(features[0].properties?.name || null);
            }
        };

        map.on("mouseenter", "cities-fill", handleMouseEnter);
        map.on("mouseleave", "cities-fill", handleMouseLeave);
        map.on("mousemove", "cities-fill", handleMouseMove);

        return () => {
            map.off("mouseenter", "cities-fill", handleMouseEnter);
            map.off("mouseleave", "cities-fill", handleMouseLeave);
            map.off("mousemove", "cities-fill", handleMouseMove);
        };
    }, [map, isLoaded, isLayerVisible]);

    const toggleLayer = () => {
        if (!map) return;

        const visibility = isLayerVisible ? "none" : "visible";
        map.setLayoutProperty("cities-fill", "visibility", visibility);
        map.setLayoutProperty("cities-outline", "visibility", visibility);
        setIsLayerVisible(!isLayerVisible);
    };

    return (
        <>
            <div className="absolute top-3 left-3 z-10">
                <Button
                    size="sm"
                    variant={isLayerVisible ? "default" : "secondary"}
                    onClick={toggleLayer}
                >
                    {isLayerVisible ? (
                        <X className="mr-1.5 size-4"/>
                    ) : (
                        <Layers className="mr-1.5 size-4"/>
                    )}
                    {isLayerVisible ? "Hide Cities" : "Show Cities"}
                </Button>
            </div>

            {hoveredCities && (
                <div
                    className="bg-background/90 absolute bottom-3 left-3 z-10 rounded-md border px-3 py-2 text-sm font-medium backdrop-blur">
                    {hoveredCities}
                </div>
            )}
        </>
    );
}

export function CustomLayerExample() {
    return (
        <div className="h-[420px] min-h-[100px] w-full 2xl:h-full">
            <Map center={[          106.77636327050021,
                -6.215758313522315]} zoom={9.7}>
                <MapControls/>
                <CustomLayer/>
            </Map>
        </div>
    );
}
