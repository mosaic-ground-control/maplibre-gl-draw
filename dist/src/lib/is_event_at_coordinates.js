export function isEventAtCoordinates(event, coordinates) {
    if (!event.lngLat)
        return false;
    return (event.lngLat.lng === coordinates[0] && event.lngLat.lat === coordinates[1]);
}
//# sourceMappingURL=is_event_at_coordinates.js.map