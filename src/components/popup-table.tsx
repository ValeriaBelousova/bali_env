import { Popup } from "react-leaflet";
import { Table, Button, InputGroup } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { setModalVisible } from "../reducers/modal-reducer";

interface IGeoserverLyr {
  properties: any;
}

export const PopupTable = (props: IGeoserverLyr) => {
  const [hasPercentage, setButtonDisable] = useState(false);
  const setPercentage = () => {
    setButtonDisable(true);
  }
  const dispatch = useDispatch();
  return (
    <Popup>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Property</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(props.properties).map((propertie: any) => {
            const usePropertie =
              propertie === "COLORS" ||
              propertie === "match_fiel" ||
              propertie === "Index" ||
              propertie === "OBJECTID" ||
              propertie === "Objectid" ||
              propertie === "SHAPE_Area" ||
              propertie === "SHAPE_Leng";
            if (usePropertie === false) {
              return (
                <tr>
                  <td>{propertie}</td>
                  <td>{props.properties[propertie]}</td>
                </tr>
              );
            } else {
              return null;
            }
          })}
        </tbody>
      </Table>
      <InputGroup className="mb-3" size="sm">
        <Form.Control
          placeholder="percentage reduction"
          aria-label="percentage reduction"
          aria-describedby="basic-addon2"
          onChange={setPercentage}
        />
        <InputGroup.Text id="basic-addon2">%</InputGroup.Text>
      </InputGroup>
      {
        hasPercentage ? (<Button size="sm" onClick={() => dispatch(setModalVisible())}>Reduce</Button>) : (<Button size="sm" disabled>Reduce</Button>)
      }
      
    </Popup>
  );
};
