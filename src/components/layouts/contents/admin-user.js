import React, { Component } from "react";

import { Card, Pagination } from "react-bootstrap";
import { orderProductColumns } from "../../../config/configTable";
import { addressData } from "../../../config/dvhcvn";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory, {
  PaginationProvider,
  PaginationListStandalone,
} from "react-bootstrap-table2-paginator";
import ToolkitProvider, {
  Search,
  CSVExport,
} from "react-bootstrap-table2-toolkit";

import SVG from "react-inlinesvg";

const SearchInput = (props) => {
  let input;
  const handleChange = () => {
    props.onSearch(input.value);
  };
  return (
    <div className="col-md-6 my-2 my-md-0">
      <div className="input-icon">
        <input
          type="text"
          className="form-control"
          placeholder="Nhập tên tài khoản, email, SĐT,..."
          autoComplete="nope"
          ref={(n) => (input = n)}
          onChange={handleChange}
        />
        <span>
          <i className="flaticon2-search-1 text-muted" />
        </span>
      </div>
    </div>
  );
};

const customTotal = (from, to, size) => (
  <span class="datatable-pager-detail">
    {` Hiển thị ${from} - ${to} trong ${size} kết quả`}
  </span>
);

const pageListRenderer = ({ pages, disable, title, onPageChange }) => {
  console.log(pages);
  return (
    <div className="datatable datatable-default">
      <div className="datatable-pager">
        <ul className="datatable-pager-nav my-2 mb-sm-0">
          {pages.map((p) => {
            let style = "datatable-pager-link datatable-pager-link-";
            if (typeof p.page !== "number") {
              switch (p.title) {
                case "Trang đầu":
                  style = style + "first";
                  break;
                case "Trang trước":
                  style = style + "prev";
                  break;
                case "Trang sau":
                  style = style + "next";
                  break;
                case "Trang cuối":
                  style = style + "last";
                  break;
              }
            } else {
              if (p.active) {
                style = style + "number datatable-pager-link-active";
              } else {
                style = style + "number";
              }
            }
            if (p.disabled) style = style + " datatable-pager-link-disabled";
            return (
              <li>
                <a
                  className={style}
                  data-page={p.page}
                  title={p.title}
                  onClick={() => onPageChange(p.page)}
                >
                  {p.page}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

const sizePerPageRenderer = ({
  options,
  currSizePerPage,
  onSizePerPageChange,
}) => (
  <div
    className="database datatable-default dropdown bootstrap-select datatable-pager-size"
    style="width: 60px;"
  >
    <select
      className="selectpicker datatable-pager-size"
      title="Chọn số bản ghi trên trang"
      data-width="60px"
      data-container="body"
      data-selected={currSizePerPage}
      tabindex="null"
    >
      <option className="bs-title-option" value=""></option>
      {options.map((option) => {
        return (
          <option
            value={option.page}
            onClick={() => onSizePerPageChange(option.page)}
          >
            {option.text}
          </option>
        );
      })}
    </select>
    <button
      type="button"
      tabindex="-1"
      className="btn dropdown-toggle btn-light"
      data-toggle="dropdown"
      role="combobox"
      aria-owns="bs-select-7"
      aria-haspopup="listbox"
      aria-expanded="false"
      title="Chọn số bản ghi trên trang"
      onClick={(e) => e.target.setAttribute("aria-expanded", "true")}
    >
      <div className="filter-option">
        <div className="filter-option-inner">
          <div className="filter-option-inner-inner">{currSizePerPage}</div>
        </div>
      </div>
    </button>
    <div className="dropdown-menu ">
      <div className="inner show" role="listbox" id="bs-select-7" tabindex="-1">
        <ul className="dropdown-menu inner show" role="presentation"></ul>
      </div>
    </div>
  </div>
);

class AdminUserContent extends Component {
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
          id: "6075dc02c67f096c362f2d89",
          username: "ntquoc9",
          email: "quocnt9@gmail.com",
          phone: "0344561299",
          status: "active",
        },
        {
          recordId: 2,
          id: "607664aea1bbce00e1069461",
          username: "quoc9nt",
          email: "abcquoc@gmail.com",
          phone: "0374561299",
          status: "lock",
        },
        {
          recordId: 3,
          id: "6076a83da1bbce00e1069474",
          username: "quoc9nt9",
          email: "qucquoc@gmail.com",
          phone: "0374562299",
          status: "lock",
        },
        {
          recordId: 4,
          id: "6076a844a1bbce00e1069475",
          username: "quoc9nt87",
          email: "quocsj17@gmail.com",
          phone: "0374461299",
          status: "active",
        },
        {
          recordId: 5,
          id: "6076a851a1bbce00e1069476",
          username: "quoc9nth79",
          email: "eyuquoc@gmail.com",
          phone: "0333561299",
          status: "active",
        },
      ],
    };
    this.options = {
      pageListRenderer,
      paginationSize: 3,
      pageStartIndex: 1,
      alwaysShowAllBtns: true, // Always show next and previous button
      withFirstAndLast: true, // Hide the going to First and Last page button
      // hideSizePerPage: true, // Hide the sizePerPage dropdown always
      // hidePageListOnlyOnePage: true, // Hide the pagination list when only one page
      firstPageText: <i class="flaticon2-fast-back"></i>,
      prePageText: <i class="flaticon2-back"></i>,
      nextPageText: <i class="flaticon2-next"></i>,
      lastPageText: <i class="flaticon2-fast-next"></i>,
      nextPageTitle: "Trang đầu",
      prePageTitle: "Trang trước",
      firstPageTitle: "Trang sau",
      lastPageTitle: "Trang cuối",
      showTotal: true,
      paginationTotalRenderer: customTotal,
      // disablePageTitle: true,
      sizePerPageList: [
        {
          text: "5",
          value: 2,
        },
        {
          text: "10",
          value: 10,
        },
        {
          text: "20",
          value: 20,
        },
      ],
    };
  }

  render() {
    let entities = this.state.entities;
    let columns = [
      {
        dataField: "recordId",
        text: "#",
      },
      {
        dataField: "id",
        text: "ID tài khoản",
      },
      {
        dataField: "username",
        text: "Tên tài khoản",
      },
      {
        dataField: "email",
        text: "Email",
      },
      {
        dataField: "phone",
        text: "Số điện thoại",
      },
      {
        dataField: "status",
        text: "Trạng thái",
        autoHide: false,
        // callback function support for column rendering
        formatter: (_, row) => {
          var status = {
            deactive: {
              title: "Deactive",
              state: "danger",
            },
            lock: {
              title: "Lock",
              state: "warning",
            },
            active: {
              title: "Active",
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
                {status[row.status].title}
              </span>
            </>
          );
        },
      },
      {
        dataField: "action",
        text: "Hành động",
        formatter: (
          cellContent,
          row,
          rowIndex,
          { openEditCustomerDialog, openDeleteCustomerDialog }
        ) => (
          <>
            {row.status === "lock" && (
              <a
                title="Edit customer"
                className="btn btn-icon btn-light btn-hover-primary btn-sm mx-3"
                onClick={() => openEditCustomerDialog(row.id)}
              >
                <span className="svg-icon svg-icon-md svg-icon-primary">
                  <SVG src="assets/media/svg/icons/General/Unlock.svg" />
                </span>
              </a>
            )}
            {row.status === "active" && (
              <a
                title="Edit customer"
                className="btn btn-icon btn-light btn-hover-warning btn-sm mx-3"
                onClick={() => openEditCustomerDialog(row.id)}
              >
                <span className="svg-icon svg-icon-md svg-icon-warning">
                  <SVG src="assets/media/svg/icons/General/Lock.svg" />
                </span>
              </a>
            )}
            <> </>

            <a
              title="Delete customer"
              className="btn btn-icon btn-light btn-hover-danger btn-sm"
              onClick={() => openDeleteCustomerDialog(row.deliveryName)}
            >
              <span className="svg-icon svg-icon-md svg-icon-danger">
                <SVG src="assets/media/svg/icons/Code/Minus.svg" />
              </span>
            </a>
          </>
        ),
        formatExtraData: {
          openEditCustomerDialog: (id) => alert(id),
          openDeleteCustomerDialog: (id) => alert(id),
        },
      },
    ];
    const { SearchBar } = Search;
    const { ExportCSVButton } = CSVExport;
    return (
      <ToolkitProvider
        keyField="id"
        data={entities}
        columns={columns}
        search
        exportCSV
      >
        {(props) => (
          <Card className="card-custom gutter-b">
            <div className="card-header flex-wrap border-0 pt-6 pb-0">
              <div className="card-title">
                <h3 className="card-label">Quản lý tài khoản</h3>
              </div>
              <div className="card-toolbar">
                {/*begin::Dropdown*/}
                <div className="dropdown dropdown-inline mr-2">
                  <ExportCSVButton
                    className="btn btn-light-primary font-weight-bolder dropdown-toggle"
                    {...props.csvProps}
                  >
                    <span class="svg-icon svg-icon-md">
                      <svg
                        class="bi bi-file-earmark-arrow-down-fill"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zm-1 4v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L7.5 11.293V7.5a.5.5 0 0 1 1 0z"></path>
                      </svg>
                    </span>
                    Xuất file
                  </ExportCSVButton>
                </div>
              </div>
            </div>
            <Card.Body>
              {/* begin:: Toolbar */}
              <div className="mb-7">
                <div className="row align-items-center">
                  <div className="col-lg-9 col-xl-6">
                    <div className="row align-items-center">
                      <SearchInput {...props.searchProps} />
                      <div className="col-md-6 my-2 my-md-0">
                        <div className="d-flex align-items-center">
                          <label
                            className="mr-3 mb-0 d-none d-md-block"
                            style={{ width: "200px" }}
                          >
                            Trạng thái:
                          </label>
                          <select
                            className="form-control"
                            id="kt_datatable_search_status"
                          >
                            <option value={""}>Tất cả</option>
                            <option value={"active"}>Đang hoạt động</option>
                            <option value={"block"}>Khóa</option>
                            <option value={"deactive"}>Chặn</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* end:: Toolbar */}
              <PaginationProvider pagination={paginationFactory(this.options)}>
                {({ paginationProps, paginationTableProps }) => (
                  <div className="datatable datatable-default">
                    {/* begin:: Table */}
                    <BootstrapTable
                      {...props.baseProps}
                      // {...paginationTableProps}
                      wrapperClasses="table-responsive"
                      bordered={false}
                      classes="table table-head-custom table-vertical-center overflow-scroll"
                      bootstrap4
                      // remote
                    />
                    {/* end:: Table */}
                    <div className="datatable-pager datatable-paging-loaded">
                      <ul className="datatable-pager-nav my-2 mb-sm-0">
                        <li>
                          <a
                            title="Đầu"
                            className="datatable-pager-link datatable-pager-link-first datatable-pager-link-disabled"
                            data-page={1}
                            disabled="disabled"
                          >
                            <i className="flaticon2-fast-back" />
                          </a>
                        </li>
                        <li>
                          <a
                            title="Trước"
                            className="datatable-pager-link datatable-pager-link-prev datatable-pager-link-disabled"
                            data-page={1}
                            disabled="disabled"
                          >
                            <i className="flaticon2-back" />
                          </a>
                        </li>
                        <li style={{ display: "none" }}>
                          <input
                            type="text"
                            className="datatable-pager-input form-control"
                            title="Số trang"
                          />
                        </li>
                        <li>
                          <a
                            className="datatable-pager-link datatable-pager-link-number datatable-pager-link-active"
                            data-page={1}
                            title={1}
                          >
                            1
                          </a>
                        </li>
                        <li>
                          <a
                            className="datatable-pager-link datatable-pager-link-number"
                            data-page={2}
                            title={2}
                          >
                            2
                          </a>
                        </li>
                        <li>
                          <a
                            title="Tiếp"
                            className="datatable-pager-link datatable-pager-link-next"
                            data-page={2}
                          >
                            <i className="flaticon2-next" />
                          </a>
                        </li>
                        <li>
                          <a
                            title="Cuối"
                            className="datatable-pager-link datatable-pager-link-last"
                            data-page={2}
                          >
                            <i className="flaticon2-fast-next" />
                          </a>
                        </li>
                      </ul>
                      <div className="datatable-pager-info my-2 mb-sm-0">
                        <div
                          className="dropdown bootstrap-select datatable-pager-size"
                          style={{ width: "60px" }}
                        >
                          <select
                            className="selectpicker datatable-pager-size"
                            title="Chọn số bản ghi trên trang"
                            data-width="60px"
                            data-container="body"
                            data-selected={5}
                          >
                            <option className="bs-title-option" value />
                            <option value={5}>5</option>
                            <option value={10}>10</option>
                            <option value={20}>20</option>
                            <option value={30}>30</option>
                            <option value={50}>50</option>
                            <option value={100}>100</option>
                          </select>
                          <button
                            type="button"
                            tabIndex={-1}
                            className="btn dropdown-toggle btn-light"
                            data-toggle="dropdown"
                            role="combobox"
                            aria-owns="bs-select-2"
                            aria-haspopup="listbox"
                            aria-expanded="false"
                            title="Chọn số bản ghi trên trang"
                          >
                            <div className="filter-option">
                              <div className="filter-option-inner">
                                <div className="filter-option-inner-inner">
                                  5
                                </div>
                              </div>{" "}
                            </div>
                          </button>
                          <div className="dropdown-menu ">
                            <div
                              className="inner show"
                              role="listbox"
                              id="bs-select-2"
                              tabIndex={-1}
                            >
                              <ul
                                className="dropdown-menu inner show"
                                role="presentation"
                              />
                            </div>
                          </div>
                        </div>
                        <span className="datatable-pager-detail">
                          Hiển thị 1 - 5 trong 6
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </PaginationProvider>
            </Card.Body>
          </Card>
        )}
      </ToolkitProvider>
    );
  }
}

export default AdminUserContent;
