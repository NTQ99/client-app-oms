import React, { Component } from "react";

import BootstrapTable from "react-bootstrap-table-next";
import {deliveryColumns} from '../../../config/configTable';

class DeliveryContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deliveryName: "",
    };
  }
  
  entities = [
    {
      id: '1',
      recordId: 1,
      deliveryName: "Viettel Post",
      deliveryToken: "1234",
    },
    {
      id: '2',
      recordId: 2,
      deliveryName: "Giao hàng nhanh",
      deliveryToken: "4321",
    },
  ];

  showDelivery = (e) => {
    this.setState({
      deliveryName: e.target.value,
    });
  };

  render() {
    return (
      <div className="row">
        <div className="col-lg-6 col-md-6">
          <div className="card card-custom">
            <div className="card-header">
              <div className="card-title">
                <h3 className="card-label">Quản lý kết nối</h3>
              </div>
            </div>
            <div className="card-body">
              <BootstrapTable
                wrapperClasses="table-responsive"
                bordered={false}
                classes="table table-head-custom table-vertical-center overflow-hidden"
                bootstrap4
                remote
                keyField="id"
                data={this.entities === null ? [] : this.entities}
                columns={deliveryColumns}
              >
                <>{this.entities === null && <div>Please wait...</div>}</>
                <>
                  {(this.entities === null ? [] : this.entities).length === 0 &&
                    this.entities !== null && <div>No records found</div>}
                </>
              </BootstrapTable>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6">
          {/*begin::Card*/}
          <div className="card card-custom">
            <div className="card-header">
              <div className="card-title">
                <h3 className="card-label">Kết nối mới</h3>
              </div>
            </div>
            <div className="card-body">
              {/*begin: Select Input*/}
              <div className="mb-7">
                <div className="align-items-center">
                  <div className="w-100 d-flex flex-row align-items-center">
                    <label
                      className="mr-3 mb-0 d-none d-md-block"
                      style={{ width: "300px" }}
                    >
                      Chọn đơn vị vận chuyển
                    </label>
                    <select
                      className="form-control"
                      id="selcect_delivery"
                      onChange={this.showDelivery}
                    >
                      <option value={""}>Chọn</option>
                      <option value={"GHN"}>Giao hàng nhanh</option>
                      <option value={"VTP"}>Viettel Post</option>
                      <option value={"J&T"}>J&T</option>
                    </select>
                  </div>
                </div>
              </div>
              {/*end::Select Input*/}
              {this.state.deliveryName == "GHN" && (
                <div className="mb-7">
                  <div className="flex-column">
                    <div className="text-muted" style={{ textAlign: "right" }}>
                      Bạn chưa có mã?&nbsp;
                      <a
                        href="https://khachhang.ghn.vn"
                        target="_blank"
                        rel="noreferrer"
                        className="text-primary"
                      >
                        Đăng ký
                      </a>
                    </div>
                    <div className="w-100 d-flex flex-row align-items-center">
                      <label
                        className="mr-3 mb-0 d-none d-md-block"
                        style={{ width: "300px" }}
                      >
                        Nhập mã bí mật
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Mã do đơn vị vận chuyển cung cấp"
                        id="token_code"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          {/*end::Card*/}
        </div>
      </div>
    );
  }
}

export default DeliveryContent;
