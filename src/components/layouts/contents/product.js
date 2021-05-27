import React, { Component } from "react";
import { Card, Table, ButtonGroup, Dropdown } from "react-bootstrap";

import {
  getPaginationOptions,
  productColumns,
} from "../../../config/configTable";

import CustomTable from "../table/CustomTable";

import SVG from "react-inlinesvg";

import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";
import productService from "../../../service/product.service";
import ProductDialog from "../modal/ProductDialog";

const orderStatus = {
  wait_confirm: "Chờ xác nhận",
  not_responded: "Không phản hồi",
  canceled: "Đã hủy",
  success: "Giao thành công",
  await_trans: "Chờ vận chuyển",
  fail: "Giao thất bại",
};

const SearchInput = (props) => {
  const { onSearch } = props;
  const handleSearchChange = (e) => {
    onSearch(e.target.value);
  };
  return (
    <div className="row align-items-center">
      <div className="col-md-3 my-2 my-md-0">
        <div className="input-icon">
          <input
            type="text"
            className="form-control"
            placeholder="Nhập tên, mã sản phẩm,..."
            autoComplete="nope"
            onChange={handleSearchChange}
          />
          <span>
            <i className="flaticon2-search-1 text-muted" />
          </span>
        </div>
        <small className="form-text text-muted">
          Tìm theo <b>Tất cả cột</b>
        </small>
      </div>
    </div>
  );
};

const OrderToolbar = (props) => {
  const fileType =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
  const fileExtension = ".xlsx";
  const handleExportClick = () => {
    let jsonData = [...props.baseProps.data];
    const headers = {
      recordId: "#",
      orderCode: "Mã đơn hàng",
      customerName: "Tên khách hàng",
      customerPhone: "SĐT khách hàng",
      priceType: "Phân loại",
      totalPrice: "Tổng giá trị",
      deliveryUnitName: "Đơn vị vận chuyển",
      shipFee: "Phí vận chuyển",
      deliveryTo: "Địa chỉ",
      status: "Trạng thái",
      createdAt: "Thời gian tạo",
      note: "Ghi chú",
    };

    jsonData = jsonData.map((el, index) => {
      let newJson = new Object();
      Object.keys(headers).forEach((header) => {
        switch (header) {
          case "recordId":
            newJson[header] = index + 1;
            break;
          case "priceType":
            newJson[header] = el[header] === 1 ? "Đơn lẻ" : "Đơn sỉ";
            break;
          case "status":
            newJson[header] = orderStatus[el[header]];
            break;
          case "deliveryTo":
            newJson[
              header
            ] = `${el.deliveryTo.detail}; ${el.deliveryTo.ward}, ${el.deliveryTo.district}, ${el.deliveryTo.province}`;
            break;
          case "createdAt":
            newJson[header] = new Date(el[header]);
            break;
          default:
            newJson[header] = el[header];
            break;
        }
      });
      return newJson;
    });

    jsonData.unshift(headers);

    const ws = XLSX.utils.json_to_sheet(jsonData, { skipHeader: true });

    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, "DS_Đơn_hàng" + fileExtension);
  };
  return (
    <>
      <div
        className="btn btn-light-primary font-weight-bolder mr-2"
        onClick={handleExportClick}
      >
        <span class="svg-icon svg-icon-md">
          <SVG src="assets/media/svg/icons/Files/ExportFile.svg" />
        </span>
        Xuất file
      </div>
      {/*begin::Button*/}
      <a href="/create-order" className="btn btn-primary font-weight-bolder">
        <span className="svg-icon svg-icon-md">
          <SVG src="assets/media/svg/icons/Design/Flatten.svg" />
        </span>
        Tạo mới
      </a>
      {/*end::Button*/}
    </>
  );
};

const expandRow = {
  renderer: (row) => (
    <Card>
      <Card.Body>
        <Table className="mb-0" style={{ borderBottom: "1px solid #ebedf3" }}>
          <tbody>
            <tr>
              <td className="title-style">Giá lẻ</td>
              <td>{row.price[1]}</td>
              <td colSpan="2">
                <span
                  className="title-style"
                  style={{ display: "inline-block", width: "100px" }}
                >
                  Giá sỉ
                </span>
                <span>{row.price[1]}</span>
              </td>
            </tr>
            <tr>
              <td className="title-style">Cân nặng</td>
              <td colSpan="3">{`${row.weight} gram`}</td>
            </tr>
            <tr>
              <td className="title-style">Chi tiết</td>
              <td>
                <img src={row.productPhotos[0]} width="250" />
              </td>
              {console.log(row.productDetail.split("\n"))}
              <td colSpan="2" className="align-top">
                {row.productDetail.split("\n").map(v => <p>{v}</p>)}
              </td>
            </tr>
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  ),
  showExpandColumn: true,
  onlyOneExpanding: true,
  expandHeaderColumnRenderer: ({ isAnyExpands }) => {
    if (isAnyExpands) {
      return (
        <div
          className="btn btn-sm btn-clean btn-icon active"
          style={{ width: "20px", height: "20px" }}
        >
          <span className="svg-icon svg-icon-md">
            <i className="las la-minus-square"></i>
          </span>
        </div>
      );
    }
    return (
      <div
        className="btn btn-sm btn-clean btn-icon"
        style={{ width: "20px", height: "20px" }}
      >
        <span className="svg-icon svg-icon-md">
          <i class="lar la-plus-square"></i>
        </span>
      </div>
    );
  },
  expandColumnRenderer: ({ expanded }) => {
    if (expanded) {
      return (
        <div
          className="btn btn-sm btn-clean btn-icon active"
          style={{ width: "20px", height: "20px" }}
        >
          <span className="svg-icon svg-icon-md">
            <i className="las la-caret-down"></i>
          </span>
        </div>
      );
    }
    return (
      <div
        className="btn btn-sm btn-clean btn-icon"
        style={{ width: "20px", height: "20px" }}
      >
        <span className="svg-icon svg-icon-md">
          <i className="las la-caret-right"></i>
        </span>
      </div>
    );
  },
};

const defaultSorted = [
  {
    dataField: "createdAt",
    order: "desc",
  },
];

class CustomerContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      action: {
        id: null,
        type: null,
      },
      modal: {
        show: false,
      },
      entities: [],
    };
  }

  onStatusFilter = null;
  async componentDidMount() {
    await this.fetchData();
  }

  async fetchData() {
    this.setState({ isLoading: true });
    await productService.getProductBoard().then(async (res) => {
      this.setState({ entities: res.data.data });
    });
    this.setState({ isLoading: false });
  }

  deleteProduct = async (id) => {
    await productService.deleteProduct(id).then(res => {
      this.fetchData();
      this.setState({
        action: null,
        modal: {
          show: true,
          handleOk: () => this.setState({modal:{show: false}}),
          variant: "success",
          message: res.data.error.message
        }
      })
    }).catch(error => this.setState({
      action: null,
      modal: {
        show: true,
        handleOk: () => this.setState({modal:{show: false}}),
        variant: "error",
        message: error.message
      }
    }))
  }

  render() {
    const entities = this.state.entities;
    const columns = productColumns(this);
    const options = getPaginationOptions(this.state.entities.length);
    const { modal } = this.state;
    return (<>
      <ProductDialog
        { ...modal }
      />
      <CustomTable
        title="Danh sách sản phẩm"
        loading={this.state.isLoading}
        options={options}
        entities={entities}
        columns={columns}
        Search={SearchInput}
        Toolbar={OrderToolbar}
        expandRow={expandRow}
        defaultSorted={defaultSorted}
        rowStyle={{ cursor: "pointer" }}
      />
    </>);
  }
}

export default CustomerContent;
