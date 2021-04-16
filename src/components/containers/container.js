import React, { Component } from "react";
import Chat from "../layouts/extra/chat";
import Loading from "../layouts/extra/loading";
import Scrolltop from "../layouts/extra/scrolltop";
import Toolbar from "../layouts/extra/toolbar";
import Content from "../layouts/general/content";
import HeaderMobile from "../layouts/general/header-mobile";
import Layout from "../layouts/layout";
import DemoPanel from "../layouts/offcanvas/demo-panel";
import QuickCart from "../layouts/offcanvas/quick-cart";
import QuickPanel from "../layouts/offcanvas/quick-panel";
import QuickUser from "../layouts/offcanvas/quick-user";

export default class Container extends Component {
  render() {
    return (
      <div className="header-fixed header-mobile-fixed subheader-enabled subheader-fixed aside-enabled aside-fixed aside-minimize-hoverable">
        {/* <Loading/> */}
        {/*[html-partial:include:{"file":"partials/_header-mobile.html"}]/*/}
        <HeaderMobile />
        <Layout>
          {/* <Content/> */}
          <div className="card card-custom">
            <div className="card-header flex-wrap border-0 pt-6 pb-0">
              <div className="card-title">
                <h3 className="card-label">
                  Remote Datasource
                  <span className="d-block text-muted pt-2 font-size-sm">
                    Sorting &amp; pagination remote datasource
                  </span>
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
                      {/*begin::Svg Icon | path:assets/media/svg/icons/Design/PenAndRuller.svg*/}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="24px"
                        height="24px"
                        viewBox="0 0 24 24"
                        version="1.1"
                      >
                        <g
                          stroke="none"
                          strokeWidth={1}
                          fill="none"
                          fillRule="evenodd"
                        >
                          <rect x={0} y={0} width={24} height={24} />
                          <path
                            d="M3,16 L5,16 C5.55228475,16 6,15.5522847 6,15 C6,14.4477153 5.55228475,14 5,14 L3,14 L3,12 L5,12 C5.55228475,12 6,11.5522847 6,11 C6,10.4477153 5.55228475,10 5,10 L3,10 L3,8 L5,8 C5.55228475,8 6,7.55228475 6,7 C6,6.44771525 5.55228475,6 5,6 L3,6 L3,4 C3,3.44771525 3.44771525,3 4,3 L10,3 C10.5522847,3 11,3.44771525 11,4 L11,19 C11,19.5522847 10.5522847,20 10,20 L4,20 C3.44771525,20 3,19.5522847 3,19 L3,16 Z"
                            fill="#000000"
                            opacity="0.3"
                          />
                          <path
                            d="M16,3 L19,3 C20.1045695,3 21,3.8954305 21,5 L21,15.2485298 C21,15.7329761 20.8241635,16.200956 20.5051534,16.565539 L17.8762883,19.5699562 C17.6944473,19.7777745 17.378566,19.7988332 17.1707477,19.6169922 C17.1540423,19.602375 17.1383289,19.5866616 17.1237117,19.5699562 L14.4948466,16.565539 C14.1758365,16.200956 14,15.7329761 14,15.2485298 L14,5 C14,3.8954305 14.8954305,3 16,3 Z"
                            fill="#000000"
                          />
                        </g>
                      </svg>
                      {/*end::Svg Icon*/}
                    </span>
                    Export
                  </button>
                  {/*begin::Dropdown Menu*/}
                  <div className="dropdown-menu dropdown-menu-sm dropdown-menu-right">
                    {/*begin::Navigation*/}
                    <ul className="navi flex-column navi-hover py-2">
                      <li className="navi-header font-weight-bolder text-uppercase font-size-sm text-primary pb-2">
                        Choose an option:
                      </li>
                      <li className="navi-item">
                        <a href="#" className="navi-link">
                          <span className="navi-icon">
                            <i className="la la-print" />
                          </span>
                          <span className="navi-text">Print</span>
                        </a>
                      </li>
                      <li className="navi-item">
                        <a href="#" className="navi-link">
                          <span className="navi-icon">
                            <i className="la la-copy" />
                          </span>
                          <span className="navi-text">Copy</span>
                        </a>
                      </li>
                      <li className="navi-item">
                        <a href="#" className="navi-link">
                          <span className="navi-icon">
                            <i className="la la-file-excel-o" />
                          </span>
                          <span className="navi-text">Excel</span>
                        </a>
                      </li>
                      <li className="navi-item">
                        <a href="#" className="navi-link">
                          <span className="navi-icon">
                            <i className="la la-file-text-o" />
                          </span>
                          <span className="navi-text">CSV</span>
                        </a>
                      </li>
                      <li className="navi-item">
                        <a href="#" className="navi-link">
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
                {/*begin::Button*/}
                <a href="#" className="btn btn-primary font-weight-bolder">
                  <span className="svg-icon svg-icon-md">
                    {/*begin::Svg Icon | path:assets/media/svg/icons/Design/Flatten.svg*/}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      width="24px"
                      height="24px"
                      viewBox="0 0 24 24"
                      version="1.1"
                    >
                      <g
                        stroke="none"
                        strokeWidth={1}
                        fill="none"
                        fillRule="evenodd"
                      >
                        <rect x={0} y={0} width={24} height={24} />
                        <circle fill="#000000" cx={9} cy={15} r={6} />
                        <path
                          d="M8.8012943,7.00241953 C9.83837775,5.20768121 11.7781543,4 14,4 C17.3137085,4 20,6.6862915 20,10 C20,12.2218457 18.7923188,14.1616223 16.9975805,15.1987057 C16.9991904,15.1326658 17,15.0664274 17,15 C17,10.581722 13.418278,7 9,7 C8.93357256,7 8.86733422,7.00080962 8.8012943,7.00241953 Z"
                          fill="#000000"
                          opacity="0.3"
                        />
                      </g>
                    </svg>
                    {/*end::Svg Icon*/}
                  </span>
                  New Record
                </a>
                {/*end::Button*/}
              </div>
            </div>
            <div className="card-body">
              {/*begin: Search Form*/}
              {/*begin::Search Form*/}
              <div className="mb-7">
                <div className="row align-items-center">
                  <div className="col-lg-9 col-xl-8">
                    <div className="row align-items-center">
                      <div className="col-md-4 my-2 my-md-0">
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
                      <div className="col-md-4 my-2 my-md-0">
                        <div className="d-flex align-items-center">
                          <label className="mr-3 mb-0 d-none d-md-block" style={{width: '100px'}}>
                            Trạng thái:
                          </label>
                          <select
                            className="form-control"
                            id="kt_datatable_search_status"
                          >
                            <option value={""}>Tất cả</option>
                            <option value={"wait_confirm"}>Chờ xác nhận</option>
                            <option value={"not_responded"}>Không phản hồi</option>
                            <option value={"canceled"}>Đã hủy</option>
                            <option value={"await_trans"}>Chờ vận chuyển</option>
                            <option value={"success"}>Giao thành công</option>
                            <option value={"fail"}>Giao thất bại</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-xl-4 mt-5 mt-lg-0">
                    <a
                      href="#"
                      className="btn btn-light-primary px-6 font-weight-bold"
                    >
                      Search
                    </a>
                  </div>
                </div>
              </div>
              {/*end::Search Form*/}
              {/*end: Search Form*/}
              {/*begin: Datatable*/}
              <div
                className="datatable datatable-bordered datatable-head-custom"
                id="kt_datatable"
              />
              {/*end: Datatable*/}
            </div>
          </div>
        </Layout>
        <QuickUser />
        <QuickCart />
        <QuickPanel />
        <Chat />
        <Scrolltop />
        <Toolbar />
        <DemoPanel />
      </div>
    );
  }
}
