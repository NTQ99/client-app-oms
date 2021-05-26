import React, { Component } from "react";
import { Card, Table, ButtonGroup, Dropdown } from "react-bootstrap";

import { getPaginationOptions, productColumns } from "../../../config/configTable";

import CustomTable from "../table/CustomTable";

import SVG from 'react-inlinesvg';

import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";
import productService from "../../../service/product.service";

const orderStatus = {
  wait_confirm: "Chờ xác nhận",
  not_responded: "Không phản hồi",
  canceled: "Đã hủy",
  success: "Giao thành công",
  await_trans: "Chờ vận chuyển",
  fail: "Giao thất bại"
};

const SearchInput = (props) => {
  const {onSearch} = props;
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
      note: "Ghi chú"
    }
    
    jsonData = jsonData.map((el, index) => {
      let newJson = new Object();
      Object.keys(headers).forEach((header) => {
        switch(header) {
          case "recordId":
            newJson[header] = index + 1;
            break;
          case "priceType":
            newJson[header] = (el[header] === 1)? "Đơn lẻ": "Đơn sỉ";
            break;
          case "status":
            newJson[header] = orderStatus[el[header]];
            break;
          case "deliveryTo":
            newJson[header] = `${el.deliveryTo.detail}; ${el.deliveryTo.ward}, ${el.deliveryTo.district}, ${el.deliveryTo.province}`;
            break;
          case "createdAt":
            newJson[header] = new Date(el[header]);
            break;
          default:
            newJson[header] = el[header]
            break;
        }
      });
      return newJson;
    });

    jsonData.unshift(headers);
    
    const ws = XLSX.utils.json_to_sheet(jsonData, {skipHeader: true});
    
    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, "DS_Đơn_hàng" + fileExtension);
  };
  return (<>
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
    <a
    href="/create-order"
    className="btn btn-primary font-weight-bolder"
  >
    <span className="svg-icon svg-icon-md">
      <SVG src="assets/media/svg/icons/Design/Flatten.svg" />
    </span>
    Tạo mới
  </a>
  {/*end::Button*/}</>
  );
}

const expandRow = {
  renderer: (row) => (
    <Card>
      <Card.Body>
      <Table className="mb-0" style={{borderBottom: '1px solid #ebedf3'}}>
      <tbody>
    <tr>
      <td className="title-style">Phân loại</td>
      <td>{(row.priceType === 1)? "Đơn lẻ": "Đơn sỉ"}</td>
      <td colSpan="2">
        <span className="title-style" style={{display: 'inline-block', width: '100px'}}>Tiền COD</span>
        <span>{row.codAmount.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}</span>
      </td>
    </tr>
    {row.products.map((product, index) => (
      <tr>
        <td className="title-style">{(index===0)? "Sản phẩm": ""}</td>
        <td>{product.productName}</td>
        <td colSpan="2">{`Số lượng: ${product.quantity}`}</td>
    </tr>
    ))}
    <tr>
      <td className="title-style">Địa chỉ</td>
      <td colSpan="3">{`${row.deliveryTo.detail}; ${row.deliveryTo.ward}, ${row.deliveryTo.district}, ${row.deliveryTo.province}`}</td>
    </tr>
    {row.note && row.note !== "" && (
      <tr>
        <td className="title-style">Ghi chú</td>
        <td colSpan="3">{row.note}</td>
      </tr>
    )}
    {row.deliveryUnitName && row.deliveryUnitName !== "" && (
      <tr>
        <td className="title-style">Vận chuyển</td>
        <td colSpan="3">
          <a
          href={`https://donhang.ghn.vn/?order_code=${row.deliveryCode}`}
          target="_blank"
          rel="noreferrer"
          className="text-primary">
            {row.deliveryUnitName}
          </a>
        </td>
      </tr>
    )}
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

class CustomerContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reloadTime: new Date().toISOString(),
      isLoading: false,
      action: {
        id: null,
        type: null,
      },
      showModal: false,
      entities: [],
    };
  }

  onStatusFilter = null;
  componentDidMount() {
    this.fetchData()
  }

  async fetchData() {
    this.setState({isLoading: true});
    await productService.getProductBoard().then(res => {
      this.setState({entities: res.data.data});
    })
    this.setState({isLoading: false});
  }
  
  render() {
    const entities = this.state.entities;
    const columns = productColumns(this);
    const options = getPaginationOptions(this.state.entities.length);
    return (
      <CustomTable
        title="Danh sách sản phẩm"
        loading={this.state.isLoading}
        options={options}
        entities={entities}
        columns={columns}
        Search={SearchInput}
        Toolbar={OrderToolbar}
        expandRow={expandRow}
        rowStyle={{ cursor: "pointer" }}
      />
    );
  }
}

export default CustomerContent;
