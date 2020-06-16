import React from 'react';
import PropTypes from 'prop-types';
import{Button, Modal, Col, Container, Row} from 'react-bootstrap';



class Modal1 extends React.Component {
 

  render() {
    const {first_name, last_name, position, id, height_feet} = this.props.jugador;

   // const {full_name} = this.props.jugador.team;
    // Render nothing if the "show" prop is false
    if(!this.props.show) {
      return null;  
    }
    return (
      <Modal show={this.props.show} onHide={this.props.onClose} onClose={()=>{}} animation={false}>
        <Modal.Header closeButton>
        <Modal.Title>{last_name} {first_name}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid">
        <Container>
          <Row>
            <Col>
                  <h5 class="card-title">Card title</h5>
                  <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
            </Col>
            <Col>2 of 2</Col>
          </Row>
          <Row>
            <Col>1 of 3</Col>
            <Col>2 of 3</Col>
            <Col>3 of 3</Col>
          </Row>
        </Container>
      </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.onClose}>
            Salir
          </Button>
        </Modal.Footer>
      </Modal>

    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
};

export default Modal1;