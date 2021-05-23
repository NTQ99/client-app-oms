import React, { Component } from "react";

import BootstrapTable from "react-bootstrap-table-next";
import {deliveryColumns} from '../../../config/configTable';
import axios from 'axios';
import DeliveryService from '../../../service/delivery.service';
import DeliveryDialog from "../modal/DeliveryDialog";
import DeliveryEditForm from "../modal/DeliveryEditForm";

const BASE_DELIVERY_URL="https://dev-online-gateway.ghn.vn";

class DeliveryContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      showEdit: false,
      entities: []
    };
  }

  componentDidMount() {
    this.initDeliveryBoard();
  }

  initDeliveryBoard() {
    DeliveryService.getDeliveryBoard().then(res => {
      this.setState({entities: res.data.data});
    })
  }
  
  showDelivery = (e) => {
    this.setState({
      deliveryUnitName: e.target.value,
    });
  };

  tokenHandle = (e) => {
    const el = document.getElementById("validate_token");
    if (el.classList.contains('disabled')) {
      el.classList.remove('btn-success', 'btn-danger', 'disabled');
      el.classList.add('btn-secondary');
    }
    this.setState({
      token: e.target.value,
      shops: null
    });
  }

  getShops = (e) => {
    const el = e.currentTarget;
    this.setState({isLoading: true});
    axios.get(BASE_DELIVERY_URL + "/shiip/public-api/v2/shop/all",{
      headers: {
        token: this.state.token
      }
    }).then(res => {
      this.setState({
        isLoading: false,
        shops: res.data.data.shops,
        shopId: res.data.data.shops[0]._id
      });
      el.classList.remove('btn-secondary');
      el.classList.add('btn-success', 'disabled');
    }).catch(() => {
      this.setState({isLoading: false});
      el.classList.remove('btn-secondary');
      el.classList.add('btn-danger', 'disabled');
    })
  }

  shopIdHandle = (e) => {
    this.setState({shopId: e.target.value});
  }
  
  createDelivery = () => {
    DeliveryService.createDelivery({
      deliveryUnitName: this.state.deliveryUnitName,
      token: this.state.token,
      shopId: this.state.shopId
    }).then(res => {
      this.setState({
        showModal: true,
        modalMessage: res.data.error.message,
        handleOkModal: () => {
          this.setState({
            deliveryUnitName: null,
            showModal: false,
            shops: null
          });
          document.getElementById('select_delivery').selectedIndex = 0;
        }
      })
      if (res.data.error.statusCode === 102) {
        this.setState({modalVariant: "success"})
        this.initDeliveryBoard();
      } else {
        this.setState({modalVariant: "danger"})
      }
    })
  }

  updateDelivery = (row) => {
    DeliveryService.updateDelivery(row).then(res => {
      this.setState({
        showModal: true,
        modalMessage: res.data.error.message,
        handleOkModal: () => this.setState({showModal: false})
      })
      if (res.data.error.statusCode === 104) {
        this.setState({
          showEdit: false,
          modalVariant: "success"
        })
        this.initDeliveryBoard();
      } else {
        this.setState({modalVariant: "danger"})
      }
    })
  }

  showDeleteDeliveryDialog = (row) => {
    this.setState({
      showModal: true,
      modalVariant: "primary",
      modalMessage: "Bạn có chắc chắn muốn xóa đơn vị vận chuyển này?",
      handleOkModal: () => {
        DeliveryService.deleteDelivery(row.id).then((res) => this.setState({
          modalVariant: "success",
          modalMessage: res.data.error.message,
          handleOkModal: () => {
            this.initDeliveryBoard();
            this.setState({showModal: false});
          },
          handleCloseModal: null
        })).catch(error => {
          this.setState({
            modalVariant: "danger",
            modalMessage: error.message,
            handleOkModal: () => this.setState({showModal: false}),
            handleCloseModal: null
          });
        })
      },
      handleCloseModal: () => this.setState({showModal: false})
    })
  }

  showEditDeliveryDialog = (row) => {
    this.setState({selectedRow: row, showEdit: true});
  }

  closeEditDeliveryDialog = () => {
    this.setState({showEdit: false});
  }

  render() {
    const {selectedRow, showEdit,  deliveryUnitName, shops, isLoading, entities, showModal, handleOkModal, handleCloseModal, modalVariant, modalMessage} = this.state;
    return (
      <div className="row">
        {showEdit && <DeliveryEditForm row={selectedRow} show={showEdit} handleClose={this.closeEditDeliveryDialog} updateDelivery={this.updateDelivery} />}
        <DeliveryDialog
          show={showModal}
          handleOk={handleOkModal}
          handleClose={handleCloseModal}
          variant={modalVariant}
          message={modalMessage}
        />
        <div className="col-lg-7 col-md-7">
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
                classes="table table-head-custom table-vertical-center overflow-scroll"
                bootstrap4
                keyField="id"
                data={entities}
                columns={deliveryColumns(this)}
                noDataIndication="Không tìm thấy bản ghi nào"
              />
            </div>
          </div>
        </div>
        <div className="col-lg-5 col-md-5">
          {/*begin::Card*/}
          <div className="card card-custom">
            <div className="card-header">
              <div className="card-title">
                <h3 className="card-label">Kết nối mới</h3>
              </div>
            </div>
            <div className="card-body">
              <div className="container">
              {/*begin: Select Input*/}
              <div className="row align-items-center mb-3">
                <div className="col-5 p-0">
                  Chọn đơn vị vận chuyển
                </div>
                <div className="col-7 p-0">
                  <select
                    className="form-control"
                    id="select_delivery"
                    onChange={this.showDelivery}
                  >
                    <option value={""}>Chọn</option>
                    <option value={"GHN"}>Giao hàng nhanh</option>
                    <option value={"VTP"}>Viettel Post</option>
                    <option value={"J&T"}>J&T</option>
                  </select>
                </div>
              </div>
              {/*end::Select Input*/}
              {deliveryUnitName==="GHN" && (<>
                <div className="row align-items-center justify-content-end">
                  <div className="text-muted">
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
                </div>
                <div className="row align-items-center mb-9">
                  <div className="col-4 p-0">
                    Nhập mã bí mật
                  </div>
                  <div className="col-8 p-0 input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Mã do đơn vị vận chuyển cung cấp"
                      onChange={this.tokenHandle}
                    />
                    <div className="input-group-append">
                      <a className="btn btn-secondary btn-icon" id="validate_token" onClick={this.getShops}>
                        {!isLoading && <span className="svg-icon svg-icon-md">
                          <i className="bi bi-patch-check"></i>
                        </span>}
                        {isLoading && <div className="spinner-border spinner-border-sm" role="status"></div>}
                      </a>
                    </div>
                  </div>
                </div>
                {shops && (
                  <div className="row align-items-center">
                    <div className="col-4 p-0">
                      Chọn mã cửa hàng
                    </div>
                    <div className="col-6 p-0 input-group">
                      <select className="form-control" onChange={this.shopIdHandle}>
                        {shops.map((shop, index) => (
                          <option value={shop._id} defaultValue={index===0? true: false}>{shop._id + " | " + shop.name}</option>
                        ))}
                      </select>
                    </div>
                    <div className="col-2 pr-0">
                      <button className="btn btn-primary w-100" type="button" onClick={this.createDelivery}>
                          Lưu
                      </button>
                    </div>
                  </div>
                )}
              </>)}
              </div>
            </div>
          </div>
          {/*end::Card*/}
        </div>
      </div>
    );
  }
}

export default DeliveryContent;
