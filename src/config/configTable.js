import SVG from "react-inlinesvg";
import { Form } from "react-bootstrap";
import { customFilter, FILTER_TYPES } from 'react-bootstrap-table2-filter';
import { getTimeFormat } from "../service/helper";

export const getPaginationOptions = (totalSize) => {
  return {
    custom: true,
    totalSize: totalSize,
    sizePerPage: 10,
    page: 1,
    sizePerPageList: [
      { text: "5", value: 5 },
      { text: "10", value: 10 },
      { text: "20", value: 20 },
    ],
  };
}

export const deliveryColumns = (obj) => [
  {
    dataField: "recordId",
    text: "#",
    headerStyle: { width: "50px" },
    formatter: (cellContent, row, rowIndex) => rowIndex + 1
  },
  {
    dataField: "id",
    text: "deliveryId",
    hidden: true,
  },
  {
    dataField: "deliveryUnitName",
    text: "ĐVVC",
    headerTitle: () => "Đơn vị vận chuyển",
    headerStyle: { width: "150px" },
    formatter: (_, row) => {
      var name = {
        "GHN": "Giao hàng nhanh",
        "J&T": "J&T",
        "VTP": "Viettel Post",
      };
      return name[row.deliveryUnitName]
    }
  },
  {
    dataField: "token",
    text: "Mã bí mật",
    headerStyle: { width: "200px" },
    style: { overflow: 'overlay', whiteSpace: 'nowrap'}
  },
  {
    dataField: "shopId",
    text: "Mã CH",
    headerTitle: () => "Mã cửa hàng",
    headerStyle: { width: "90px" },
  },
  {
    dataField: "action",
    text: "Hành động",
    headerStyle: { width: "120px" },
    formatter: function (
      cellContent,
      row,
      rowIndex,
      { showEditDeliveryDialog, showDeleteDeliveryDialog }
    ) {
      return (
        <>
          <div
            title="Sửa"
            className="btn btn-icon btn-light btn-hover-primary btn-sm mx-3"
            onClick={()=>showEditDeliveryDialog(row)}
          >
            <span className="svg-icon svg-icon-md svg-icon-primary">
              <SVG src="assets/media/svg/icons/Communication/Write.svg" />
            </span>
          </div>
          <> </>

          <div
            title="Xóa"
            className="btn btn-icon btn-light btn-hover-danger btn-sm"
            onClick={()=>showDeleteDeliveryDialog(row)}
          >
            <span className="svg-icon svg-icon-md svg-icon-danger">
              <SVG src="assets/media/svg/icons/General/Trash.svg" />
            </span>
          </div>
        </>
      );
    },
    formatExtraData: {
      showEditDeliveryDialog: (row) => obj.showEditDeliveryDialog(row),
      showDeleteDeliveryDialog: (row) => obj.showDeleteDeliveryDialog(row),
    },
  },
];

export function orderProductColumns(obj) {
  return [
    {
      dataField: "recordId",
      text: "#",
      editable: false,
      formatter: (cellContent, row, rowIndex) => rowIndex + 1
    },
    {
      dataField: "id",
      text: "productId",
      hidden: true,
      editable: false,
    },
    {
      dataField: "productName",
      text: "Tên sản phẩm",
      editable: false,
    },
    {
      dataField: obj.state.priceType,
      text: "Đơn giá",
      editable: false,
    },
    {
      dataField: "_quantity",
      text: "Số lượng",
      formatter: (_, row) => {
        return (
          <Form.Control
            defaultValue={1}
            min={1}
            max={10}
            onChange={(e) =>
              obj.prices({
                actionType: "changeRow",
                row: row.id,
                quantity: e.target.value,
              })
            }
            type="number"
          />
        );
      },
      style: { maxWidth: "50px", padding: "0" },
    },
    {
      dataField: "totalMoney",
      text: "Thành tiền",
      editable: false,
    },
    {
      dataField: "action",
      text: "Hành động",
      editable: false,
      formatter: (_, row) => {
        return (
          <>
            <div
              title="Delete customer"
              className="btn btn-icon btn-light btn-hover-danger btn-sm"
              onClick={() =>
                obj.prices({
                  actionType: "deleteRow",
                  row: row.id,
                })
              }
            >
              <span className="svg-icon svg-icon-md svg-icon-danger">
                <SVG src="assets/media/svg/icons/General/Trash.svg" />
              </span>
            </div>
          </>
        );
      },
      formatExtraData: {
        deleteProductRow: (id) => alert(id),
      },
    },
  ];
}

export function adminUserColumns(obj) {
  return [
    {
      dataField: "recordId",
      text: "#",
      headerStyle: { width: "50px" },
      formatter: (cellContent, row, rowIndex) => rowIndex + 1
    },
    {
      dataField: "id",
      text: "ID tài khoản",
      csvText: "ID",
      headerStyle: { width: "250px" },
    },
    {
      dataField: "username",
      text: "Tên tài khoản",
      csvText: "Username",
      headerStyle: { width: "150px" },
    },
    {
      dataField: "email",
      text: "Email",
      headerStyle: { width: "200px" },
    },
    {
      dataField: "phone",
      text: "Số điện thoại",
      csvText: "Phone number",
      headerStyle: { width: "150px" },
    },
    {
      dataField: "status",
      text: "Trạng thái",
      csvText: "Status",
      sort: true,
      headerStyle: { width: "120px" },
      // callback function support for column rendering
      formatter: (_, row) => {
        var status = {
          banned: {
            text: "Chặn",
            state: "danger",
          },
          locked: {
            text: "Khóa",
            state: "warning",
          },
          active: {
            text: "Hoạt động",
            state: "success",
          },
        };
        return (
          <>
            <span
              className={`label label-${
                status[row.status].state
              } label-dot mr-2`}
            ></span>
            <span
              className={`font-weight-bold text-${status[row.status].state}`}
            >
              {status[row.status].text}
            </span>
          </>
        );
      },
    },
    {
      dataField: "action",
      text: "Hành động",
      csvExport: false,
      headerStyle: { width: "120px" },
      formatter: (cellContent, row, rowIndex) => (
        <>
          {row.status === "locked" && (
            <div
              title="Mở khóa"
              className="btn btn-icon btn-light btn-hover-primary btn-sm mx-3"
              onClick={() =>
                obj.setState({
                  action: { id: row.id, type: "active" },
                  showModal: true,
                })
              }
            >
              <span className="svg-icon svg-icon-md svg-icon-primary">
                <SVG src="assets/media/svg/icons/General/Unlock.svg" />
              </span>
            </div>
          )}
          {row.status !== "locked" && (
            <div
              title="Khóa"
              className={`btn btn-icon btn-light${
                row.status === "banned" ? " disabled" : " btn-hover-warning"
              } btn-sm mx-3`}
              onClick={() =>
                obj.setState({
                  action: { id: row.id, type: "locked" },
                  showModal: true,
                })
              }
            >
              <span
                className={`svg-icon svg-icon-md${
                  row.status === "banned" ? "" : " svg-icon-warning"
                }`}
              >
                <SVG src="assets/media/svg/icons/General/Lock.svg" />
              </span>
            </div>
          )}
          <> </>

          <div
            title="Chặn"
            className={`btn btn-icon btn-light${
              row.status === "banned" ? " disabled" : " btn-hover-danger"
            } btn-sm`}
            onClick={() =>
              obj.setState({
                action: { id: row.id, type: "banned" },
                showModal: true,
              })
            }
          >
            <span
              className={`svg-icon svg-icon-md${
                row.status === "banned" ? "" : " svg-icon-danger"
              }`}
            >
              <SVG src="assets/media/svg/icons/Code/Minus.svg" />
            </span>
          </div>
        </>
      ),
      formatExtraData: {
        deleteProductRow: (id) => alert(id),
      },
    },
  ];
}

export function orderColumns(obj) {
  return [
    {
      dataField: "recordId",
      text: "#",
      headerTitle: () => "Số thứ tự",
      headerStyle: { width: "50px" },
      formatter: (cellContent, row, rowIndex) => rowIndex + 1
    },
    {
      dataField: "id",
      text: "ID đơn hàng",
      hidden: true,
    },
    {
      dataField: "orderCode",
      text: "Mã ĐH",
      headerTitle: () => "Mã đơn hàng",
      headerStyle: { width: "80px" },
    },
    {
      dataField: "customerName",
      text: "Họ tên",
      headerTitle: () => "Họ tên khách hàng",
      headerStyle: { width: "150px" },
    },
    {
      dataField: "customerPhone",
      text: "SĐT",
      headerTitle: () => "Số điện thoại khách hàng",
      headerStyle: { width: "100px" },
    },
    {
      dataField: "totalPrice",
      text: "Tổng giá",
      sort: true,
      headerTitle: () => "Tổng giá trị đơn hàng",
      headerStyle: { width: "100px" },
      formatter: (cell) =>
        cell.toLocaleString("it-IT", { style: "currency", currency: "VND" }),
    },
    {
      dataField: "createdAt",
      text: "Thời gian",
      sort: true,
      headerTitle: () => "Thời gian tạo đơn hàng",
      headerStyle: { width: "100px" },
      filter: customFilter({
        type: FILTER_TYPES.NUMBER,
        onFilter: (filterVal, entities) => {
          return entities.filter(entity => entity.createdAt >= filterVal.start && entity.createdAt <= filterVal.end)
        }
      }),
      filterRenderer: (onFilter, column) => {
        obj.onDateRangeFilter = onFilter;
        return null;
      },
      formatter: (cell) => {
        let dateObj = cell;
        if (typeof cell !== "object") {
          dateObj = new Date(cell);
        }
        return getTimeFormat(dateObj, "dd/mm, HH:MM");
      },
    },
    {
      dataField: "status",
      text: "Trạng thái",
      sort: true,
      headerTitle: () => "Trạng thái đơn hàng",
      headerStyle: { width: "150px" },
      filter: customFilter(),
      filterRenderer: (onFilter, column) => {
        obj.onStatusFilter = onFilter;
        return null;
      },
      // callback function support for column rendering
      formatter: (cellContent, row, rowIndex) => {
        var status = {
          wait_confirm: {
            text: "Chờ xác nhận",
            class: " label-light-primary",
          },
          not_responded: {
            text: "Không phản hồi",
            class: " label-light-warning",
          },
          canceled: {
            text: "Đã hủy",
            class: " label-light-danger",
          },
          success: {
            text: "Giao thành công",
            class: " label-light-success",
          },
          await_trans: {
            text: "Chờ vận chuyển",
            class: " label-light-info",
          },
          fail: {
            text: "Giao thất bại",
            class: " label-light-danger",
          },
        };
        return (
          <span
            className={`label font-weight-bold label-lg ${status[row.status].class} label-inline`}
          >
            {status[row.status].text}
          </span>
        );
      },
    },
    {
      dataField: "Actions",
      text: "Hành động",
      headerStyle: { width: "130px" },
      formatter: (cellContent, row, rowIndex, {getDisabled}) => (
        <>
          {row.status === "await_trans" && (<>
            <div
              className="btn btn-sm btn-clean btn-icon mr-2"
              title={`In vận đơn | ${row.isPinted? "Đã in": "Chưa in"}`}
            >
              <span className="svg-icon svg-icon-md">
              <div className="symbol symbol-20">
                <i className="la la-print" />
                <i className={`symbol-badge bg-${row.isPinted? "success": "danger"}`} style={{width: '10px', height: '10px', top: '-5px', right: '-5px'}}></i>
              </div>
              </span>
            </div>
            <div className="btn btn-sm btn-clean btn-icon mr-2" title="Hủy">
              <span className="svg-icon svg-icon-md">
                <i className="las la-ban"></i>
              </span>
            </div>
          </>)}
          {row.status !== "await_trans" && (<>
            <div
              className={`btn btn-sm btn-clean btn-icon mr-2${getDisabled(row.status)}`}
              title="Gửi vận đơn"
            >
              <span className="svg-icon svg-icon-md">
                <i className="las la-truck"></i>
              </span>
            </div>
            <div className={`btn btn-sm btn-clean btn-icon mr-2${getDisabled(row.status)}`} title="Sửa">
              <span className="svg-icon svg-icon-md">
                <i className="las la-edit"></i>
              </span>
            </div>
          </>)}
          <div className="btn btn-sm btn-clean btn-icon" title="Xóa">
            <span className="svg-icon svg-icon-md">
              <i className="las la-trash-alt"></i>
            </span>
          </div>
        </>
      ),
      formatExtraData: {
        getDisabled: (status) => {
          switch(status) {
            case "canceled":
            case "success":
            case "fail":
              return " disabled";
            default:
              return "";
          }
        },
      },
    },
  ];
}

export function productColumns(obj) {
  return [
    {
      dataField: "recordId",
      text: "#",
      headerTitle: () => "Số thứ tự",
      headerStyle: { width: "50px" },
      formatter: (cellContent, row, rowIndex) => rowIndex + 1
    },
    {
      dataField: "id",
      text: "ID sản phẩm",
      hidden: true,
    },
    {
      dataField: "productCode",
      text: "Mã sản phẩm",
      headerStyle: { width: "100px" },
    },
    {
      dataField: "productName",
      text: "Tên sản phẩm",
      headerStyle: { width: "200px" },
    },
    {
      dataField: "stock",
      text: "SL tồn kho",
      sort: true,
      headerTitle: () => "Số lượng tồn kho",
      headerStyle: { width: "100px" },
      formatter: (cell) => {
        if (cell === 0) return <span className="text-danger">{cell}</span>
        else return cell
      }
    },
    {
      dataField: "price",
      text: "Giá nhập",
      sort: true,
      headerStyle: { width: "100px" },
      formatter: (cell, row) =>
        row.price[0].toLocaleString("it-IT", { style: "currency", currency: "VND" }),
    },
    {
      dataField: "promotion",
      text: "Giảm giá",
      headerStyle: { width: "100px" },
      formatter: (cell) => cell + " %"
    },
    {
      dataField: "Actions",
      text: "Hành động",
      headerStyle: { width: "130px" },
      formatter: (cellContent, row, rowIndex) => (
        <>
          {row.status === "await_trans" && (<>
            <div
              className="btn btn-sm btn-clean btn-icon mr-2"
              title={`In vận đơn | ${row.isPinted? "Đã in": "Chưa in"}`}
            >
              <span className="svg-icon svg-icon-md">
              <div className="symbol symbol-20">
                <i className="la la-print" />
                <i className={`symbol-badge bg-${row.isPinted? "success": "danger"}`} style={{width: '10px', height: '10px', top: '-5px', right: '-5px'}}></i>
              </div>
              </span>
            </div>
            <div className="btn btn-sm btn-clean btn-icon mr-2" title="Hủy">
              <span className="svg-icon svg-icon-md">
                <i className="las la-ban"></i>
              </span>
            </div>
          </>)}
          {row.status !== "await_trans" && (<>
            <div
              className="btn btn-sm btn-clean btn-icon mr-2"
              title="Gửi vận đơn"
            >
              <span className="svg-icon svg-icon-md">
                <i className="las la-truck"></i>
              </span>
            </div>
            <div className="btn btn-sm btn-clean btn-icon mr-2" title="Sửa">
              <span className="svg-icon svg-icon-md">
                <i className="las la-edit"></i>
              </span>
            </div>
          </>)}
          <div className="btn btn-sm btn-clean btn-icon" title="Xóa">
            <span className="svg-icon svg-icon-md">
              <i className="las la-trash-alt"></i>
            </span>
          </div>
        </>
      ),
    },
  ];
}
