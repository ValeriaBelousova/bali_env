import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../store';
import { setFlowsVisible, setHexVisible } from '../reducers/switch-reducer';

export const Toolbox = () => {
  const dispatch = useDispatch()

  const isHexVisible = useSelector((state: RootState) => state.switch.visible_hex);
  const isFlowsVisible = useSelector((state: RootState) => state.switch.visible_flows);

  return (
    <Card >
      <Card.Header>Layers</Card.Header>
      <ListGroup variant="flush">
      <ListGroup.Item>
      <Form>
      <Form.Check 
        type="switch"
        label="Flows"
        id="flows-switch"
        checked={isFlowsVisible}
        onChange={() => dispatch(setFlowsVisible())}
      />
    </Form>
    </ListGroup.Item>
    <ListGroup.Item>
    <Form>
      <Form.Check 
        type="switch"
        id="hex-switch"
        label="Hex"
        checked={isHexVisible}
        onChange={() => dispatch(setHexVisible())}
      />
      
    </Form>
    </ListGroup.Item>
    </ListGroup>
      

    </Card>
  );
}