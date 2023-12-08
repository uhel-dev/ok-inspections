export interface TyreBrand {
  brand: string;
}

export interface Location {
  tyreServicesInLocationUrl: string;
  location: string;
  coords: {
    lat: number;
    lng: number;
  }
}

export interface CarMake {
  make: string;
  imgSrc: string;
}