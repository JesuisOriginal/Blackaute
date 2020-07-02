export function fetchBarrels() {
    return {
        type: "market/FETCH_BARREL",
        payload: []
    }
}

export function addToOrder(barrel) {
    return {
        type: "market/ADD_ORDER",
        payload: barrel
    }
}