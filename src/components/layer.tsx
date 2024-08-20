import { FeatureGroup, GeoJSON } from "react-leaflet";
import { PopupTable } from '../components/popup-table';
import { IGeoJSONFeature } from "../components/interfaces";

export const HexLayer = (props: any) => {
    const lyrStyle = (f: IGeoJSONFeature) => {
        const N_acc = f.properties.N_acc;
        let opacity = 0.1;
        let color = "#ffffff";
        if (N_acc > 0 && N_acc <= 1) {
            color = '#ec3f13';
            opacity = 0.8;
        }
        if (N_acc > 1 && N_acc <= 10) {
            //color = '#b81702';
            color = '#ffff66';
            opacity = 0.8;
        }
        if (N_acc > 10 && N_acc <= 100) {
            //color = '#a50104';
            color = '#ff9900';
            opacity = 0.8;
        }
        if (N_acc > 100 && N_acc <= 1000) {
            color = '#8e0103';
            opacity = 0.8;
        }
        if (N_acc > 1000) {
            color = '#7a0103';
            opacity = 0.8;
        }
        return {
          color: '#dcdcdc',
          fillOpacity: opacity,
          fillColor: color,
        };
      };

    return(
    <FeatureGroup>
    {props.hex.features.map((f: IGeoJSONFeature) => {
      return (
        <GeoJSON key={f.properties.objectid} data={f} style={lyrStyle(f)}>
          <PopupTable properties={f.properties} />
        </GeoJSON>
      );
    })}
  </FeatureGroup>
    );
}