/*
 * A BikeInfo object is comprised of a executionTime (aka time the data
 * was retrieved) and an array of StationBeanEntry objects. Each
 * StationBeanEntry object holds information about a Citi Bike station.
 *
 * Notes:
 * Why is this a class? Shouldn't it be an interface?
 *  Possible answer:
 *  http://stackoverflow.com/questions/37652801/when-to-use-interface-and-model-in-typescript-angular2
 * Where is the constructor?
 *  Answer: http://stackoverflow.com/questions/15620612/does-a-class-need-a-constructor-in-typescript
*/
export class StationBeanEntry {
    id: number;
    stationName: string;
    availableDocks: number;
    totalDocks: number;
    latitude: number;
    longitude: number;
    statusValue: string;
    statusKey: number;
    availableBikes: number;
    stAddress1: string;
    stAddress2: string;
    city: string;
    postalCode: string;
    location: string;
    altitude: string;
    testStation: boolean;
    lastCommunicationTime: string;
    landMark: string;
}
