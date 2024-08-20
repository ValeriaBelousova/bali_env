import './App.css';
import { MapContainer, TileLayer} from "react-leaflet";
import { LatLngTuple } from 'leaflet';
import { ModalResult } from './components/modal';
import { useSelector } from 'react-redux';
import type { RootState } from './store';
import { HexLayer } from './components/layer';
import { Toolbox } from './components/toolbox';
import { FlowLayer } from './components/layer-flow';
import { Basemaps } from './components/basemaps';

function App() {
  //"https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
  const basemap_url = useSelector((state: RootState) => state.map.basemap);
  const showModal = useSelector((state: RootState) => state.modal.visible);
  const hex_data = useSelector((state: RootState) => state.hex.hex_data);
  const isHexVisible = useSelector((state: RootState) => state.switch.visible_hex);
  const isFlowVisible = useSelector((state: RootState) => state.switch.visible_flows);

  const defaultLatLng: LatLngTuple = [-8.250520579905221, 115.122983178349993];

  return (
    <div id="app">
        <div id="toolbox">
        { showModal ? <ModalResult /> : null}
          <Toolbox />
          </div>
        <MapContainer id="map" center={defaultLatLng} zoom={14}>
          { isHexVisible ? <HexLayer hex={hex_data} /> : null }
          { isFlowVisible ? <FlowLayer /> : null}
          <TileLayer url={basemap_url}/>
        </MapContainer>
        <Basemaps />
        
      </div>
  );
}

export default App;
