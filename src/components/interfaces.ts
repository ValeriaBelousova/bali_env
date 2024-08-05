import { Geometry } from "geojson";

type FeatureProperties = { [k: string]: any };

export interface IGeoJSONFeature {
  type: "Feature";
  id: string;
  geometry?: Geometry;
  properties: FeatureProperties;
}