const { Trip } = require('./../trip.js');

describe("Trips", () => {
    let tripsInstance;

    beforeEach(() => {
        tripsInstance = new Trip();
    });

    afterEach(() => {
        tripsInstance = null;
    });

    it("should get starting place", () => {
        tripsInstance.add([
            ['Cologne', 'Berlin'],
            ['Munich', 'Cologne'],
            ['Dhaka', 'Munich'],
        ]);

        expect(tripsInstance.getStartingPlace()).toBe('Dhaka');

        tripsInstance.add([
            ['A', 'B'],
            ['B', 'C'],
            ['C', 'D'],
        ]);

        expect(tripsInstance.getStartingPlace()).toBe('A');

        tripsInstance.add([
            ['D', 'E'],
            ['F', 'D'],
            ['E', 'X'],
        ]);

        expect(tripsInstance.getStartingPlace()).toBe('F');
    });

    it("should get starting place for single item", () => {
        tripsInstance.add([
            ['A', 'B'],
        ]);

        expect(tripsInstance.getStartingPlace()).toBe('A');
    });

    it("should get starting place null for no trips", () => {
        expect(tripsInstance.getStartingPlace()).toBe(null);
    });
});
