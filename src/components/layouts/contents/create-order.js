import React, { Component } from "react";

import { Card, Form, Col, Row, Dropdown, InputGroup, Button } from "react-bootstrap";
import { orderProductColumns } from "../../../config/configTable";
import { addressData } from "../../../config/dvhcvn";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, { CSVExport } from "react-bootstrap-table2-toolkit";

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <div
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
    {children}
  </div>
));

class CreateOrderContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cod: true,
      shipFee: 28000,
      priceType: "retailPrice",
      provinceId: null,
      districtId: null,
      wardId: null,
      entities: [
        {
          recordId: 1,
          id: "123",
          productName: "ABC",
          retailPrice: 120000,
          wholesalePrice: 100000,
          quantity: 1,
          totalMoney: null,
        },
      ],
    };
    this.prices = this.prices.bind(this);
  }

  componentDidMount() {
    this.prices({ actionType: "calTotal" });
  }

  handlePriceType = (e) => {
    this.state.entities.forEach((entity) => {
      entity.totalMoney = entity[e.target.value] * entity.quantity;
    });
    this.setState({
      priceType: e.target.value,
      entities: [...this.state.entities],
    });
  };

  prices = (action) => {
    if (!action) {
      return this.state.entities;
    } else {
      switch (action.actionType) {
        case "calTotal":
          this.state.entities.forEach((order) => {
            order.totalMoney = order[this.state.priceType] * order.quantity;
          });
          this.setState({ entities: [...this.state.entities] });

          return this.state.entities;
        case "changeRow":
          this.state.entities.forEach((order) => {
            if (order.id === action.row) {
              order.quantity = action.quantity;
              order.totalMoney = order[this.state.priceType] * action.quantity;
            }
          });
          this.setState({ entities: [...this.state.entities] });

          return this.state.entities;
        case "deleteRow":
          let new_state = this.state.entities.filter(
            (row) => row.id !== action.row
          );
          this.setState({ entities: [...new_state] });

          return this.state.entities;
        default:
          return this.state.entities;
      }
    }
  };

  handleAddress = (e) => {
    switch (e.target.id) {
      case "addressProvince":
        document.getElementById("addressDistrict").value = "-1";
        this.setState({
          provinceId: e.target.value,
          districtId: null,
          wardId: null,
        });
        break;
      case "addressDistrict":
        document.getElementById("addressWard").value = "-1";
        this.setState({
          districtId: e.target.value,
          wardId: null,
        });
        break;
      case "addressWard":
        this.setState({
          wardId: e.target.value,
        });
        break;
      default: break;
    }
  }

  render() {
    let entities = this.state.entities;
    let columns = [
      ...orderProductColumns(this),
    ];
    return (
      <Form id="123form">
        <Row>
          <Col md={8}>
            <Card className="gutter-b">
              <Card.Header>
                <Card.Title className="mb-0">Thông tin khách hàng</Card.Title>
              </Card.Header>
              <Card.Body>
                <Row>
                  <Form.Group
                    as={Col}
                    className="mb-2"
                  >
                    <Form.Label>Tên khách hàng</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Nguyễn Văn A"
                      autoComplete="off"
                    />
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    className="mb-2"
                  >
                    <Form.Label>Số điện thoại</Form.Label>
                    <Form.Control
                      type="phone"
                      placeholder="0123456789"
                      autoComplete="off"
                    />
                  </Form.Group>
                </Row>
                <Form.Text muted style={{ fontSize: "100%" }}>
                  Nhập ô để tìm kiếm hoặc tạo mới khách hàng.
                </Form.Text>
              </Card.Body>
            </Card>
            <Card className="gutter-b">
              <Card.Header>
                <div className="w-100 d-flex justify-content-between flex-row align-items-center">
                  <Card.Title className="mb-0">Sản phẩm</Card.Title>
                  <select
                    className="form-control"
                    style={{ width: "100px" }}
                    onChange={this.handlePriceType}
                  >
                    <option value={"retailPrice"}>Giá lẻ</option>
                    <option value={"wholesalePrice"}>Giá sỉ</option>
                  </select>
                </div>
              </Card.Header>
              <Card.Body>
                <div className="w-100 d-flex justify-content-between flex-row align-items-center">
                  <Dropdown focusFirstItemOnShow className="w-100">
                    <Dropdown.Toggle as={CustomToggle}>
                      <div className="input-icon">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Tìm theo tên sản phẩm"
                          autoComplete="off"
                        />
                        <span>
                          <i className="flaticon2-search-1 text-muted" />
                        </span>
                      </div>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Header>Chọn sản phẩm</Dropdown.Header>
                      <Dropdown.Item eventKey="1">Red</Dropdown.Item>
                      <Dropdown.Item eventKey="2">Blue</Dropdown.Item>
                      <Dropdown.Item eventKey="3">Orange</Dropdown.Item>
                      <Dropdown.Item eventKey="1">Red-Orange</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                <ToolkitProvider
                  keyField="id"
                  data={entities}
                  columns={columns}
                  exportCSV
                >
                  {(props) => (
                    <BootstrapTable
                      {...props.baseProps}
                      wrapperClasses="table-responsive"
                      bordered={false}
                      classes="table table-head-custom table-vertical-center overflow-scroll"
                      bootstrap4
                      // remote
                    />
                  )}
                </ToolkitProvider>
                <Form.Text muted style={{ fontSize: "100%" }}>
                  Chọn và nhập số lượng để thay đổi.
                </Form.Text>
              </Card.Body>
            </Card>
            <Card className="gutter-b">
              <Card.Header>
                <Card.Title className="mb-0">Địa chỉ giao hàng</Card.Title>
              </Card.Header>
              <Card.Body>
                <Row>
                  <Form.Group
                    as={Col}
                    controlId="addressProvince"
                    className="mb-2"
                    onChange={this.handleAddress}
                  >
                    <Form.Label>Tỉnh/Thành phố</Form.Label>
                    <Form.Control as="select">
                      <option value={"-1"}>Chọn</option>
                      {addressData.map((province) => (
                        <option value={province.level1_id}>
                          {province.name}
                        </option>
                      ))}
                    </Form.Control>
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    controlId="addressDistrict"
                    className="mb-2"
                    onChange={this.handleAddress}
                  >
                    <Form.Label>Quận/Huyện</Form.Label>
                    <Form.Control as="select">
                      <option value={"-1"}>Chọn</option>
                      {this.state.provinceId !== null &&
                        this.state.provinceId !== "-1" &&
                        addressData
                          .find((el) => el.level1_id === this.state.provinceId)
                          .level2s.map((district) => (
                            <option value={district.level2_id}>
                              {district.name}
                            </option>
                          ))}
                    </Form.Control>
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    controlId="addressWard"
                    className="mb-2"
                    onChange={this.handleAddress}
                  >
                    <Form.Label>Xã/Phường</Form.Label>
                    <Form.Control as="select">
                      <option value={"-1"}>Chọn</option>
                      {this.state.districtId !== null &&
                        this.state.districtId !== "-1" &&
                        addressData
                          .find((el) => el.level1_id === this.state.provinceId)
                          .level2s.find(
                            (el) => el.level2_id === this.state.districtId
                          )
                          .level3s.map((ward) => (
                            <option value={ward.level3_id}>{ward.name}</option>
                          ))}
                    </Form.Control>
                  </Form.Group>
                </Row>
                <Row>
                  <Form.Group
                    as={Col}
                    controlId="addressDetail"
                    className="mb-2"
                  >
                    <Form.Label>Địa chỉ cụ thể</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Số nhà, tên tòa nhà, tên đường, tên khu vực"
                      autoComplete="off"
                    />
                  </Form.Group>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="position-fixed" style={{ marginRight: "25px" }}>
              <Card.Header>
                <Card.Title className="mb-0">Thông tin thanh toán</Card.Title>
              </Card.Header>
              <Card.Body>
                <InputGroup className="mb-5">
                  <InputGroup.Prepend style={{ width: "30%" }}>
                    <InputGroup.Text className="w-100">
                      Chiết khấu:
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control defaultValue={0} type="number" />
                  <InputGroup.Append style={{ width: "10%" }}>
                    <InputGroup.Text className="w-100">%</InputGroup.Text>
                  </InputGroup.Append>
                </InputGroup>
                <select
                    className="form-control mb-5"
                    // onChange={this.handlePriceType}
                  >
                    <option value="-1">Chọn đơn vị vận chuyển</option>
                    <option value={"j&T"}>J&T</option>
                    <option value={"GHN"}>GHN</option>
                  </select>
                <InputGroup className="mb-5">
                  <InputGroup.Prepend style={{ width: "30%" }}>
                    <InputGroup.Text className="w-100">
                      Phí ship:
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control value={this.state.shipFee} disabled />
                  <InputGroup.Append style={{ width: "10%" }}>
                    <InputGroup.Text className="w-100">đ</InputGroup.Text>
                  </InputGroup.Append>
                </InputGroup>
                <Form className="mb-5" onChange={this.handleShipFee}>
                  <Form.Label>Hình thức thanh toán:</Form.Label>
                  <div key="custom-inline-radio" className="mb-3 d-flex justify-content-center">
                    <Form.Check
                      inline
                      custom
                      defaultChecked
                      onChange={()=> this.setState({cod: true})}
                      className="mr-10"
                      label="Tiền mặt"
                      name="shipFee"
                      type="radio"
                      id="cod"
                      />
                    <Form.Check
                      inline
                      custom
                      onChange={()=> this.setState({cod: false})}
                      label="Chuyển khoản"
                      name="shipFee"
                      type="radio"
                      id="notCod"
                    />
                  </div>
                </Form>

                <div className="d-flex justify-content-between mb-5">
                  <span>Tổng tiền:</span>
                  <span>{(entities.length > 0)? entities[0].totalMoney + this.state.shipFee : this.state.shipFee} đ</span>
                </div>
                <div className="d-flex justify-content-between mb-5">
                  <span>Khách trả:</span>
                  <span>{(this.state.cod && entities.length > 0)? entities[0].totalMoney + this.state.shipFee : this.state.shipFee} đ</span>
                </div>
                
                <div className="d-flex justify-content-center">
                  <Button variant="primary" onClick={() => {
                    let myForm = document.getElementById("123form");
                    let formData = new FormData(myForm);
                    console.log(formData);
                  }}>Tạo đơn</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Form>
    );
  }
}

export default CreateOrderContent;
