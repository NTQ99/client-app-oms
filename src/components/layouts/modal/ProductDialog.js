import { Component } from "react";
import { Modal, Button } from "react-bootstrap";

class ProductDialog extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      btnLoading: false
    })
  }
  
  handleOk = async () => {
    this.setState({btnLoading: true});
    await this.props.handleOk();
    console.log(this.props.handleOk);
    this.setState({btnLoading: false});
  }
  render() {
    const props = this.props;
    const { btnLoading }  = this.state;
    const handleOk = this.handleOk;
    return (
      <Modal show={props.show} onHide={props.handleClose || props.handleOk}>
        <Modal.Header closeButton>
          <Modal.Title>Thông báo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <span className="mr-3">
            {props.variant === "success" && (
              <i className={`bi bi-check-circle-fill text-${props.variant}`}></i>
            )}
            {props.variant === "error" && (
              <i className={`bi bi-x-circle-fill text-danger`}></i>
            )}
            {props.variant === "danger" && (
              <i className={`bi bi-exclamation-circle-fill text-${props.variant}`}></i>
            )}
          </span>
          {props.message}
        </Modal.Body>
        <Modal.Footer>
          {props.handleClose && (<>
            <Button variant="secondary" onClick={props.handleClose}>
              Hủy bỏ
            </Button>
            <Button
              autoFocus
              variant={props.variant}
              disabled={btnLoading ? true : false}
              onClick={handleOk}
            >
              {btnLoading && (
                <span className="spinner-border spinner-border-sm"></span>
              )}
              {!btnLoading && "Đồng ý"}
            </Button>
          </>)}
          {!props.handleClose && (
            <Button variant={props.variant==="error"? "danger": props.variant} onClick={props.handleOk}>
              Đồng ý    
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    );
  }
}

export default ProductDialog;
