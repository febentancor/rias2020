import React from 'react';
import PropTypes from 'prop-types';
import{Button, Modal, Col, Container, Row} from 'react-bootstrap';



class Modal1 extends React.Component {
 

  render() {
    const {first_name, last_name, position, id, height_feet, weight_pounds, height_inches} = this.props.jugador;

   // const {full_name} = this.props.jugador.team;
    // Render nothing if the "show" prop is false
    if(!this.props.show) {
      return null;  
    }
    return (
      <Modal show={this.props.show} onHide={this.props.onClose} onClose={()=>{}} animation={false}>
        <Modal.Header closeButton>
        <Modal.Title> {first_name} {last_name}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid">
        <Container>
          <Row>
            <Col>
                  <h5 class="card-title">{this.props.jugador.team.full_name}</h5>
                  <h6 class="card-subtitle mb-2 text-muted">Conferencia: {this.props.jugador.team.conference}</h6>
            </Col>
            
          </Row>
          <Row>
            <Col>Posición: {position} </Col>
            <Col>Altura: {height_feet},{height_inches} (pies) </Col>
            
            <Col>Peso: {weight_pounds} (libras): </Col>
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
