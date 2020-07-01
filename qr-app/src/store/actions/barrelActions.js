export function fetchBarrels() {
    return {
        type: "FETCH_BARREL",
        payload: []
    }
}

export function addToOrder(barrel) {
    return {
        type: "ADD_BARREL",
        barrel
    }
}