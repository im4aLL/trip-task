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
        // let startPlace = null;

        // this.trips.forEach(trip => {
        //     if (!startPlace) {
        //         startPlace = trip[0];
        //     }

        //     if (startPlace === trip[1]) {
        //         startPlace = trip[0];
        //     }
        // });

        // return startPlace;

        if (this.trips.length === 0) {
            return null;
        }
        
        const startingPlaces = this.trips.map(trip => trip[0]);
        const destinationPlaces = this.trips.map(trip => trip[1]);
        const result = startingPlaces.filter(startingPlace => !destinationPlaces.includes(startingPlace));
        
        return result.length ? result[0] : "Doesn't matter, anywhere!";
    }
}

module.exports = {
    Trip
};
