import React, { Component } from "react";

import SVG from 'react-inlinesvg';

class ProductContent extends Component {
  render() {
    return (
      <div className="card card-custom gutter-b">
        <div className="card-header flex-wrap border-0 pt-6 pb-0">
          <div className="card-title">
            <h3 className="card-label">
              Danh sách khách hàng
            </h3>
          </div>
          <div className="card-toolbar">
            {/*begin::Dropdown*/}
            <div className="dropdown dropdown-inline mr-2">
              <button
                type="button"
                className="btn btn-light-primary font-weight-bolder dropdown-toggle"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span className="svg-icon svg-icon-md">
                  <SVG src="assets/media/svg/icons/Shopping/Download.svg" />
                </span>
                Xuất file
              </button>
              {/*begin::Dropdown Menu*/}
              <div className="dropdown-menu dropdown-menu-sm dropdown-menu-right">
                {/*begin::Navigation*/}
                <ul className="navi flex-column navi-hover py-2">
                  <li className="navi-header font-weight-bolder text-uppercase font-size-sm text-primary pb-2">
                    Choose an option:
                  </li>
                  <li className="navi-item">
                    <a href="/" className="navi-link">
                      <span className="navi-icon">
                        <i className="la la-print" />
                      </span>
                      <span className="navi-text">Print</span>
                    </a>
                  </li>
                  <li className="navi-item">
                    <a href="/" className="navi-link">
                      <span className="navi-icon">
                        <i className="la la-copy" />
                      </span>
                      <span className="navi-text">Copy</span>
                    </a>
                  </li>
                  <li className="navi-item">
                    <a href="/" className="navi-link">
                      <span className="navi-icon">
                        <i className="la la-file-excel-o" />
                      </span>
                      <span className="navi-text">Excel</span>
                    </a>
                  </li>
                  <li className="navi-item">
                    <a href="/" className="navi-link">
                      <span className="navi-icon">
                        <i className="la la-file-text-o" />
                      </span>
                      <span className="navi-text">CSV</span>
                    </a>
                  </li>
                  <li className="navi-item">
                    <a href="/" className="navi-link">
                      <span className="navi-icon">
                        <i className="la la-file-pdf-o" />
                      </span>
                      <span className="navi-text">PDF</span>
                    </a>
                  </li>
                </ul>
                {/*end::Navigation*/}
              </div>
              {/*end::Dropdown Menu*/}
            </div>
            {/*end::Dropdown*/}
          </div>
        </div>
        <div className="card-body">
          {/*begin: Search Form*/}
          {/*begin::Search Form*/}
          <div className="mb-7">
            <div className="row align-items-center">
              <div className="col-lg-9 col-xl-6">
                <div className="row align-items-center">
                  <div className="col-md-6 my-2 my-md-0">
                    <div className="input-icon">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Nhập tên, SĐT"
                        id="kt_datatable_search_query"
                      />
                      <span>
                        <i className="flaticon2-search-1 text-muted" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*end::Search Form*/}
          {/*end: Search Form*/}
          {/*begin: Datatable*/}
          <div
            className="datatable datatable-bordered datatable-head-custom"
            id="customer_datatable"
          />
          {/*end: Datatable*/}
        </div>
      </div>
    );
  }
}

export default ProductContent;
