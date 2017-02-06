/*
 * A BikeInfo object is comprised of a executionTime (aka time the data
 * was retrieved) and an array of StationBeanEntry objects. Each
 * StationBeanEntry object holds information about a Citi Bike station.
*/
import { StationBeanEntry } from './station-bean-entry'

export class BikeInfo {
    executionTime: string;
    stationBeanList: StationBeanEntry[];
}
