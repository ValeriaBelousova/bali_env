import { FeatureGroup, GeoJSON } from "react-leaflet";
import { IGeoJSONFeature } from "../components/interfaces";
import { flows } from "../flows";

export const FlowLayer = () => {
    const lyrStyle = (f: IGeoJSONFeature) => {
        let opacity = 1;

        return {
          color: "#082d8a",
          fillOpacity: opacity,
        };
      };

    return(
    <FeatureGroup>
    {flows.features.map((f: IGeoJSONFeature) => {
      return (
        <GeoJSON key={f.properties.objectid} data={f} style={lyrStyle(f)}>
        </GeoJSON>
      );
    })}
  </FeatureGroup>
    );
}