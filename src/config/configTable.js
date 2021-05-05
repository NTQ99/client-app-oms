import SVG from "react-inlinesvg";
import { Form } from "react-bootstrap";

export const deliveryColumns = [
  {
    dataField: "recordId",
    text: "#",
  },
  {
    dataField: "id",
    text: "deliveryId",
    hidden: true,
  },
  {
    dataField: "deliveryName",
    text: "Đơn vị vận chuyển",
  },
  {
    dataField: "deliveryToken",
    text: "Mã bí mật",
  },
  {
    dataField: "action",
    text: "Hành động",
    formatter: function (
      cellContent,
      row,
      rowIndex,
      { openEditCustomerDialog, openDeleteCustomerDialog }
    ) {
      return (
        <>
          <a
            title="Edit customer"
            className="btn btn-icon btn-light btn-hover-primary btn-sm mx-3"
            onClick={() => openEditCustomerDialog(row.id)}
          >
            <span className="svg-icon svg-icon-md svg-icon-primary">
              <SVG src="assets/media/svg/icons/Communication/Write.svg" />
            </span>
          </a>
          <> </>

          <a
            title="Delete customer"
            className="btn btn-icon btn-light btn-hover-danger btn-sm"
            onClick={() => openDeleteCustomerDialog(row.deliveryName)}
          >
            <span className="svg-icon svg-icon-md svg-icon-danger">
              <SVG src="assets/media/svg/icons/General/Trash.svg" />
            </span>
          </a>
        </>
      );
    },
    formatExtraData: {
      openEditCustomerDialog: (id) => alert(id),
      openDeleteCustomerDialog: (id) => alert(id),
    },
  },
];

export function orderProductColumns(obj) {
  return [
    {
      dataField: "recordId",
      text: "#",
      editable: false,
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
            onChange={(e) => obj.prices({
                  actionType: "changeRow",
                  row: row.id,
                  quantity: e.target.value,
                })
            }
            type="number" />
          );
        },
        style: { maxWidth: '50px', padding: '0' }
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
              <a
                title="Delete customer"
                className="btn btn-icon btn-light btn-hover-danger btn-sm"
                onClick={() => obj.prices({
                      actionType: "deleteRow",
                      row: row.id,
                  })}
              >
                <span className="svg-icon svg-icon-md svg-icon-danger">
                  <SVG src="assets/media/svg/icons/General/Trash.svg" />
                </span>
              </a>
            </>
          );
        },
        formatExtraData: {
          deleteProductRow: (id) => alert(id),
        },
      }
  ];
}
