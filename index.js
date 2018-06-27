let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

class Driver {

    constructor(name, startDate) {
      this.name = name;
      this.startDate = new Date(startDate)
    }

    yearsExperienceFromBeginningOf(year) {
      //let currentYear = new Date.getFullYear();
      return (year - this.startDate.getFullYear());
    }

}

class Route {

    //objects with attributes of horizontal and vertical
    constructor(beginningLocation, endingLocation) {
      this.beginningLocation = beginningLocation;
      this.endingLocation = endingLocation;
    }

    blocksTravelled () {

      //get all start and end info
      let startAve = this.beginningLocation["horizontal"]
      let startStreet = this.beginningLocation["vertical"]
      let endAve = this.endingLocation["horizontal"]
      let endStreet = this.endingLocation["vertical"]

      //find index of aves in eastWest
      let startAveIndex = eastWest.indexOf(startAve);
      let endAveIndex = eastWest.indexOf(endAve);

      //calculate street distance and ave distance, then add together
      let streetDistance = Math.abs(endStreet - startStreet);
      let aveDistance = Math.abs(endAveIndex - startAveIndex);

      return (streetDistance + aveDistance);
      //returns integer with num of blocks traveled
    }

    estimatedTime (isItPeak) {

      let distance = this.blocksTravelled();

      if (isItPeak) {
        return distance / 2;
      } else {
        return distance / 3;
      }



      //estimated time = number of blocks and peak vs offpeak hours
      //off-peak — three blocks in a minutes
      //peak — two blocks per minute
      //num of minutes for the trip
    }
}
