
import React, { useState } from "react";
import { Button, OverlayTrigger, Popover, Row, Col } from "react-bootstrap";
import { useDispatch } from 'react-redux';
import { BasemapsIcon } from "./basemaps-icon";
import { BasemapCard } from "./basemap-card";
import "./basemaps.css";


export const Basemaps = (props: any) => {
    const [visible, setVisible] = useState(false);

    const onButtonClick = () => {
      setVisible(!visible);
    };
  
  const dispatch = useDispatch();

  const popover = (
    <Popover id="popover-basic" className="basemapPopoverW">
      <div className="popoverTitle">
        <h6>Basemaps</h6>
      </div>
      <div className="popoverGrid">
        <BasemapCard
          name="OSM"
          imgUrl="https://raw.githubusercontent.com/ValeriaBelousova/json_data/master/osm.png"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <BasemapCard
          name="Google"
          imgUrl="https://raw.githubusercontent.com/ValeriaBelousova/json_data/master/google.png"
          url="https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}&hl=ru"
        />
        <BasemapCard
          name="Esri Img"
          imgUrl="https://raw.githubusercontent.com/ValeriaBelousova/json_data/master/yandex_satt.png"
          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
        />
      </div>
    </Popover>
  );

  return (
    <OverlayTrigger trigger="click" placement="right" overlay={popover}>
      <Button className="basemapButton" variant="light" size="sm">
        <BasemapsIcon />
      </Button>
    </OverlayTrigger>
  );
};
