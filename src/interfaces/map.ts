import { Marker, Map } from "mapbox-gl";
// Generated by https://quicktype.io

export interface MapState {
  userLocation: [number, number] | null;
  isMapReady: boolean;
  map?: Map;
  markers: Marker[] | [];
  markerUser: Marker;
  reload: boolean;
  setRealod: (reload: boolean) => void;
  setMap: (map: Map) => void;
  setMarkers: (markers: Marker[]) => void;
  setUserLocation: (userLocation: [number, number]) => void;
  backToMyLocation: (userLocation: [number, number], radius: number) => void;
}

export interface MapBoxResponse {
  type: string;
  query: string[];
  features: Feature[];
  attribution: string;
}

export interface Feature {
  id: string;
  type: FeatureType;
  place_type: PlaceType[];
  relevance: number;
  properties: Properties;
  text: string;
  place_name: string;
  center: number[];
  geometry: Geometry;
  context: Context[];
}

export interface Context {
  id: string;
  text: string;
  wikidata?: Wikidata;
  short_code?: ShortCode;
}

export enum ShortCode {
  MX = "mx",
  MXNle = "MX-NLE",
}

export enum Wikidata {
  Q15282 = "Q15282",
  Q1782406 = "Q1782406",
  Q3308035 = "Q3308035",
  Q96 = "Q96",
  Q996738 = "Q996738",
}

export interface Geometry {
  coordinates: number[];
  type: GeometryType;
}

export enum GeometryType {
  Point = "Point",
}

export enum PlaceType {
  Poi = "poi",
}

export interface Properties {
  foursquare: string;
  landmark: boolean;
  address?: string;
  category: string;
}

export enum FeatureType {
  Feature = "Feature",
}