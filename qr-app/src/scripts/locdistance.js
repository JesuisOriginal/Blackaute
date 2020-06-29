export const locdistance = (cord1, cord2) => {

    let loc1 = {...cord1}
    let loc2 = {...cord2}

    const toRadian = angle => (Math.PI / 180) * angle;
    const distance = (a, b) => (Math.PI / 180) * (a - b);
    const RADIUS_OF_EARTH_IN_M = 6371000;

    const dLat = distance(loc2.lat, loc1.lat);
    const dLon = distance(loc2.lng, loc1.lng);

    loc1.lat = toRadian(loc1.lat);
    loc2.lat = toRadian(loc2.lat);

      // Haversine
    const a = Math.pow(Math.sin(dLat / 2), 2) +
              Math.pow(Math.sin(dLon / 2), 2) * 
              Math.cos(loc1.lat) * Math.cos(loc2.lat);
    const c = 2 * Math.asin(Math.sqrt(a));

    let finalDistance = RADIUS_OF_EARTH_IN_M * c;

    return finalDistance;
}

