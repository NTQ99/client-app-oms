import React, { Component } from "react";
import { Card, Table, Dropdown, ButtonGroup } from "react-bootstrap";

import {
  getPaginationOptions,
  customerColumns,
  orderHistoryColumns,
} from "../../../config/configTable";

import CustomTable from "../table/CustomTable";

import SVG from "react-inlinesvg";

import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";

import customerService from "../../../service/customer.service";
import RowExpandTable from "../table/RowExpandTable";
// import CustomerDialog from "../modal/CustomerDialog";
// import CustomerForm from "../modal/CustomerForm";

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

const OrderToolbar = (onCreateHandle) => {
  return (props) => {
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
        <Dropdown as={ButtonGroup} className="mr-2">
          <Dropdown.Toggle variant="light" className="font-weight-bolder">
            <span className="svg-icon svg-icon-md">
              <SVG src="assets/media/svg/icons/Devices/Printer.svg" />
            </span>
            In
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.ItemText className="font-weight-bolder text-uppercase font-size-sm text-primary pb-2">
              Tùy chọn:
            </Dropdown.ItemText>
            <Dropdown.Item>
              <div className="symbol symbol-20 mr-5">
                <i className="la la-print" />
                <i
                  className="symbol-badge bg-success"
                  style={{
                    width: "10px",
                    height: "10px",
                    top: "-5px",
                    right: "-5px",
                  }}
                ></i>
              </div>
              Toàn bộ
            </Dropdown.Item>
            <Dropdown.Item>
              <div className="symbol symbol-20 mr-5">
                <i className="la la-print" />
                <i
                  className="symbol-badge bg-danger"
                  style={{
                    width: "10px",
                    height: "10px",
                    top: "-5px",
                    right: "-5px",
                  }}
                ></i>
              </div>
              Đơn mới
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <div
          className="btn btn-light-primary font-weight-bolder mr-2"
          onClick={handleExportClick}
        >
          <span className="svg-icon svg-icon-md">
            <SVG src="assets/media/svg/icons/Files/ExportFile.svg" />
          </span>
          Xuất file
        </div>
        {/*begin::Button*/}
        <button
          className="btn btn-primary font-weight-bolder"
          onClick={onCreateHandle}
        >
          <span className="svg-icon svg-icon-md">
            <SVG src="assets/media/svg/icons/Design/Flatten.svg" />
          </span>
          Tạo mới
        </button>
        {/*end::Button*/}
      </>
    );
  };
};

const defaultSorted = [
  {
    dataField: "createdAt",
    order: "desc",
  },
];

const expandRow = {
    renderer: (row) => {
      return (
        <RowExpandTable id={row.id} />
      )
    },
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
            <i className="lar la-plus-square"></i>
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
      isLoading: false,
      dialogProps: {
        show: false,
      },
      formProps: {
        show: false,
      },
      entities: [],
    };
  }
  
  async componentDidMount() {
    await this.fetchData();
  }
  
  async fetchData() {
    this.setState({ isLoading: true });
    await customerService.getCustomerBoard().then(async (res) => {
      this.setState({ entities: res.data.data });
    });
    this.setState({ isLoading: false });
  }
  
  setExpandData = (data) => {
    this.setState({expandData: data})
  }

  render() {
    const {entities, isLoading} = this.state;
    const columns = customerColumns(this);
    const options = getPaginationOptions(entities.length);
    // const { dialogProps, formProps } = this.state;
    return (
      <CustomTable
        title="Danh sách khách hàng"
        loading={isLoading}
        options={options}
        entities={entities}
        columns={columns}
        Search={SearchInput}
        Toolbar={OrderToolbar(this.openCreateCustomerForm)}
        expandRow={expandRow}
        defaultSorted={defaultSorted}
        rowStyle={{ cursor: "pointer" }}
      >
        {/* <CustomerForm { ...formProps } /> */}
        {/* <CustomerDialog { ...dialogProps } /> */}
      </CustomTable>
    );
  }
}

export default CustomerContent;
