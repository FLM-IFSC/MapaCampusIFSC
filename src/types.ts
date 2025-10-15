
export interface Location {
  id: number;
  name: string;
  region: string;
  description: string;
  position: {
    top: string;
    left: string;
  };
  googleMapsUrl?: string;
}