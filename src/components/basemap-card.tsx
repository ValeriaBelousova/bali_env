import { Card } from "react-bootstrap";
import { useDispatch } from 'react-redux';
import { setBasemap } from '../reducers/map';
import "../index.css";

interface IBasemapCard {
  name: string;
  imgUrl: string;
  url: string;
  setBasemap?: any;
  setLevel?: any;
}

export const BasemapCard = (props: IBasemapCard) => {

    const dispatch = useDispatch();

    const handleClick = (e: any) => {
        console.log(e.target.id);
        dispatch(setBasemap(e.target.id));
      };
    
    return (
        <div style={{ width: "100%", margin: "5px" }} onClick={handleClick}>
          <Card.Img variant="top" src={props.imgUrl} id={props.url} />
          <p className="basemapTitle" id={props.url}>
            {props.name}
          </p>
        </div>
      );    
}