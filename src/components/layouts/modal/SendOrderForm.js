import { Component } from "react";
import { Row, Col, Form, Modal, Button } from "react-bootstrap";
import SimpleReactValidator from "simple-react-validator";

class SendOrderForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        deliveryUnitName: "GHN",
        payment_type_id: 1,
        service_type_id: 1,
        required_note: "KHONGCHOXEMHANG"
      },
      btnLoading: false,
    };
    SimpleReactValidator.addLocale("vi", {
      required: "Không được bỏ trống!"
    });
    this.validator = new SimpleReactValidator({
      autoForceUpdate: this,
      locale: "vi",
      element: (message) => (
        <div className="fv-plugins-bootstrap fv-plugins-message-container">
          <div className="fv-help-block">{message}</div>
        </div>
      ),
    });
  }

  handleOk = async () => {
    if (this.validator.allValid()) {
      this.setState({btnLoading: true});
      await this.props.handleOk(this.state.form, this.props.orderId);
      this.handleClose();
    } else {
      this.validator.showMessages();
    }
  }

  handleClose = () => {
    this.validator.hideMessages();
    this.validator.visibleFields.length = 0;
    this.props.handleClose();
    this.setState({
      btnLoading: false,
      form: {
        deliveryUnitName: "GHN",
        payment_type_id: 1,
        service_type_id: 1,
        required_note: "KHONGCHOXEMHANG"
      },
    })
  }

  handleInputChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.id;

    this.setState({
      form: {
        ...this.state.form,
        [name]: value
      }
    });
    this.validator.showMessageFor(name);
  }

  render() {
    const { btnLoading, form } = this.state;
    const { show } = this.props;
    return (
      <>
        <Modal show={show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Gửi vận đơn cho đơn vị vận chuyển</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Row>
                <Form.Group as={Col} className="mb-3">
                  <Form.Label className="required">Chọn đơn vị vận chuyển</Form.Label>
                  <select
                    className="form-control"
                    id="deliveryUnitName"
                    defaultValue={form.deliveryUnitName} onChange={this.handleInputChange}
                  >
                    <option value={"GHN"}>Giao hàng nhanh</option>
                    <option value={"VTP"}>Viettel Post</option>
                    <option value={"J&T"}>J&T</option>
                  </select>
                  {this.validator.message(
                    "deliveryUnitName",
                    this.state.form.deliveryUnitName,
                    "required"
                  )}
                </Form.Group>
              </Row>
              <Row>
                <Form.Group as={Col} className="mb-3 pr-0">
                  <Form.Label className="required">Bên trả phí</Form.Label>
                  <Row className="align-items-center" style={{height: '38.4px'}}>
                    <Col>
                      <Form.Check
                        custom className="pr-0" type="radio" label="Bên gửi" name="payment_type_id" id="payment_type_id_1"
                        checked = {this.state.form.payment_type_id === 1}
                        onChange={()=> this.setState({
                          form: {
                            ...this.state.form,
                            payment_type_id: 1
                          }
                        })}
                      />
                    </Col>
                    <Col>
                      <Form.Check
                        custom type="radio" label="Bên nhận" name="payment_type_id" id="payment_type_id_2"
                        checked = {this.state.form.payment_type_id === 2}
                        onChange={()=> this.setState({
                          form: {
                            ...this.state.form,
                            payment_type_id: 2
                          }
                        })}
                      />
                    </Col>
                  </Row>
                  {this.validator.message(
                    "payment_type_id",
                    this.state.form.payment_type_id,
                    "required"
                  )}
                </Form.Group>
                <Form.Group as={Col} className="mb-3 pl-0">
                  <Form.Label className="required">Loại dịch vụ</Form.Label>
                  <Row className="align-items-center" style={{height: '38.4px'}}>
                    <Col>
                      <Form.Check
                        custom type="radio" label="Giao nhanh" name="service_type_id" id="service_type_id_1"
                        checked = {this.state.form.service_type_id === 1}
                        onChange={()=> this.setState({
                          form: {
                            ...this.state.form,
                            service_type_id: 1
                          }
                        })}
                      />
                    </Col>
                    <Col>
                      <Form.Check
                        custom className="pl-0" type="radio" label="Giao thường" name="service_type_id" id="service_type_id_2"
                        checked = {this.state.form.service_type_id === 2}
                        onChange={()=> this.setState({
                          form: {
                            ...this.state.form,
                            service_type_id: 2
                          }
                        })}
                      />
                    </Col>
                  </Row>
                  {this.validator.message(
                    "service_type_id",
                    this.state.form.service_type_id,
                    "required"
                  )}
                </Form.Group>
              </Row>
              <Row>
                <Form.Group as={Col} className="mb-3">
                  <Form.Label className="required">Lưu ý giao hàng</Form.Label>
                  <select
                    className="form-control"
                    id="required_note"
                    defaultValue={form.required_note} onChange={this.handleInputChange}
                  >
                    <option value={"KHONGCHOXEMHANG"}>Không cho xem hàng</option>
                    <option value={"CHOXEMHANGKHONGTHU"}>Cho xem hàng không cho thử</option>
                    <option value={"CHOTHUHANG"}>Cho thử hàng</option>
                  </select>
                  {this.validator.message(
                    "required_note",
                    this.state.form.required_note,
                    "required"
                  )}
                </Form.Group>
              </Row>
              <Form.Text className="text-muted">
                Lưu ý: Trường có dấu <span style={{color: 'red'}}>*</span> là các trường bắt buộc.
              </Form.Text>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button
              autoFocus
              variant="secondary"
              onClick={this.handleClose}
            >
              Hủy bỏ
            </Button>
            <Button
              variant="primary"
              disabled={btnLoading ? true : false}
              onClick={this.handleOk}
            >
              {btnLoading && (
                <span className="spinner-border spinner-border-sm"></span>
              )}
              {!btnLoading && "Gửi vận đơn"}
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default SendOrderForm;
