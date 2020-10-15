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
        let startPlace = null;

        this.trips.forEach(trip => {
            if (!startPlace) {
                startPlace = trip[0];
            }

            if (startPlace === trip[1]) {
                startPlace = trip[0];
            }
        });

        return startPlace;
    }
}

module.exports = {
    Trip
};
