import { Component } from "react";

import SVG from 'react-inlinesvg';

class LoginPage extends Component {
  render() {
    return (
      <div>
        {/*begin::Body*/}
        {/*begin::Main*/}
        <div
          className="d-flex flex-column flex-root"
          style={{ overflow: 'hidden' }}
        >
          {/*begin::Login*/}
          <div className="login login-4 wizard d-flex flex-column flex-lg-row flex-column-fluid">
            {/*begin::Content*/}
            <div className="col-md-6 mt-6 ml-3" style={{display: 'flex', height: '680px'}}>
            <div className="login-container order-2 order-lg-1 d-flex flex-center flex-row-fluid px-7 pt-lg-0 pb-lg-0 pt-4 pb-6 bg-white">
              {/*begin::Wrapper*/}
              <div className="login-content d-flex flex-column pt-lg-0 pt-12">
                {/*begin::Logo*/}
                <a href="/" className="login-logo pb-xl-20 pb-15" style={{color: '#000', fontSize: '18pt', fontWeight: 'bold'}}>
                  <img src="assets/media/logos/logo-uet.png" style={{maxHeight: '50px', marginRight: '10px'}} alt="" />
                  OMS-UET
                </a>
                {/*end::Logo*/}
                {/*begin::Login*/}
                <div className="login-form">
                  {/*begin::Form*/}
                  <form className="form" id="kt_login_singin_form" action="post">
                    {/*begin::Title*/}
                    <div className="pb-5 pb-lg-15">
                      <h3 className="font-weight-bolder text-dark font-size-h2 font-size-h1-lg">
                        Đăng nhập
                      </h3>
                      <div className="text-muted font-weight-bold font-size-h4">
                        Bạn chưa có tài khoản?&nbsp;
                        <a
                          href="/register"
                          className="text-primary font-weight-bolder"
                        >
                          Đăng ký ngay
                        </a>
                      </div>
                    </div>
                    {/*begin::Title*/}
                    {/*begin::Form group*/}
                    <div className="form-group">
                      <label className="font-size-h6 font-weight-bolder text-dark">
                        Tên tài khoản
                      </label>
                      <input
                        className="form-control form-control-solid h-auto py-7 px-6 rounded-lg border-0"
                        type="text"
                        name="username"
                        autoComplete="off"
                      />
                    </div>
                    {/*end::Form group*/}
                    {/*begin::Form group*/}
                    <div className="form-group">
                      <div className="d-flex justify-content-between mt-n5">
                        <label className="font-size-h6 font-weight-bolder text-dark pt-5">
                          Mật khẩu
                        </label>
                        <a
                          href="/forgot"
                          className="text-primary font-size-h6 font-weight-bolder text-hover-primary pt-5"
                        >
                          Quên mật khẩu?
                        </a>
                      </div>
                      <input
                        className="form-control form-control-solid h-auto py-7 px-6 rounded-lg border-0"
                        type="password"
                        name="password"
                        autoComplete="off"
                      />
                    </div>
                    {/*end::Form group*/}
                    {/*begin::Action*/}
                    <div className="pb-lg-0 pb-5">
                      <button
                        type="submit"
                        id="kt_login_singin_form_submit_button"
                        className="btn btn-primary font-weight-bolder font-size-h6 px-8 py-4 my-3 mr-3"
                      >
                        Đăng nhập
                      </button>
                      <button
                        type="button"
                        className="btn btn-light-primary font-weight-bolder px-8 py-4 my-3 font-size-lg"
                      >
                        <span className="svg-icon svg-icon-md">
                          <SVG src="assets/media/svg/social-icons/google.svg" />
                          
                          {/*end::Svg Icon*/}
                        </span>
                        Đăng nhập với Google
                      </button>
                    </div>
                    {/*end::Action*/}
                  </form>
                  {/*end::Form*/}
                </div>
                {/*end::Login*/}
              </div>
              {/*end::Wrapper*/}
            </div>
            </div>
            {/*begin::Content*/}
            {/*begin::Aside*/}
            <div className="col-md-6 mt-6 mr-3">
            <div className="login-aside order-1 order-lg-2 bgi-no-repeat bgi-position-x-right" style={{ width: '700px', height: '100%'}}>
              <div
                className="login-conteiner bgi-no-repeat bgi-position-x-right bgi-position-y-bottom"
                style={{ backgroundImage: `url(assets/media/svg/illustrations/login-visual-4.svg)` }}
              >
                {/*begin::Aside title*/}
                <h3 className="pt-lg-40 pl-lg-20 pb-lg-0 pl-10 py-20 m-0 d-flex justify-content-lg-start font-weight-boldest display5 display1-lg text-white">
                  We Got
                  <br />A Surprise
                  <br />
                  For You
                </h3>
                {/*end::Aside title*/}
              </div>
            </div>
            </div>
            {/*end::Aside*/}
          </div>
          {/*end::Login*/}
        </div>
        {/*end::Main*/}
        {/*end::Body*/}
      </div>
    );
  }
}
export default LoginPage;
