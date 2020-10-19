class Trip {
    constructor(trips) {
        this.trips = [];

        if (trips) {
            this.add(trips);
        }
    }

    /**
     * Add trips
     * 
     * @param trips array
     */
    add(trips) {
        this.trips = [...trips];

        return this;
    }

    /**
     * Get starting place
     * 
     * @return string
     */
    getStartingPlace() {
        const startingPlaces = this.trips.map(trip => trip[0]);
        const destinationPlaces = this.trips.map(trip => trip[1]);
        const result = startingPlaces.filter(startingPlace => !destinationPlaces.includes(startingPlace));
        
        return result.length ? result[0] : null;
    }
}

module.exports = {
    Trip
};
