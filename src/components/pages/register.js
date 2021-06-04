import { Component } from "react";
import SVG from 'react-inlinesvg';

import SimpleReactValidator from "simple-react-validator";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import AuthService from "../../service/auth.service";

import authHeader from "../../service/auth-header";

const MySwal = withReactContent(Swal);

SimpleReactValidator.addLocale("vi", {
  required: "Không được bỏ trống :attribute.",
  max: "Độ dài :attribute phải nhỏ hơn :max ký tự.",
  min: "Độ dài :attribute phải lớn hơn :min ký tự.",
});

class RegisterPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      username: "",
      password: "",
    };
    this.validator = new SimpleReactValidator({
      locale: "vi",
      element: (message) => (
        <div className="fv-plugins-bootstrap fv-plugins-message-container">
          <div className="fv-help-block">{message}</div>
        </div>
      ),
    });
  }

  componentDidMount() {
    if (authHeader()) {
      if (AuthService.getRoles().includes("ROLE_ADMIN")) {
        this.props.history.push("/admin-user");
      } else {
        this.props.history.push("/order");
      }
    }
  }

  showPopup = (message, icon) => {
    return MySwal.fire({
      title: message,
      icon: icon,
      buttonsStyling: false,
      confirmButtonText: "Quay lại",
      customClass: {
        confirmButton: "btn font-weight-bold btn-light-primary",
      },
    });
  };

  submitForm = (e) => {
    e.preventDefault();
    this.setState({isLoading: true});
    if (this.validator.allValid()) {
      AuthService.register(this.state.username, this.state.password).then(
        (response) => {
          console.log(response)
          this.setState({isLoading: false});
          if (response && response.data && response.data.error) {
            if (response.data.error.statusCode === 206) {
              MySwal.fire({
                title: "Đăng ký thành công",
                icon: "success",
                showConfirmButton: false,
                timer: 1000,
              }).then(() => {
                  this.props.history.push("/login");
              });
            } else {
              this.showPopup(response.data.error.message, "error");
            }
          } else {
            this.showPopup(response.error.message, "error");
          }
        }
      );
    } else {
      this.validator.showMessages();

      this.showPopup("Thông tin không hợp lệ!", "error").then(() =>
        this.forceUpdate()
      );
    }
  };

  render() {
    return (
      <div>
        {/*begin::Body*/}
        {/*begin::Main*/}
        <div
          className="d-flex flex-column flex-root"
          style={{ overflowX: "hidden" }}
        >
          {/*begin::Login*/}
          <div
            className="login login-4 wizard d-flex flex-column flex-lg-row flex-column-fluid wizard"
          >
            {/*begin::Content*/}
            <div className="col-md-6 mt-6 ml-3">
              <div className="login-container d-flex flex-center flex-row flex-row-fluid order-2 order-lg-1 flex-row-fluid bg-white py-lg-0 pb-lg-0 pt-15 pb-12">
                {/*begin::Container*/}
                <div className="login-content login-content-signup d-flex flex-column">
                  {/*begin::Aside Top*/}
                  <div className="d-flex flex-column-auto flex-column px-10">
                    {/*begin::Aside header*/}
                    <a href="/" className="login-logo pt-10" style={{color: '#000', fontSize: '18pt', fontWeight: 'bold'}}>
                    <img src="assets/media/logos/logo-uet.png" style={{maxHeight: '50px', marginRight: '10px'}} alt="" />
                    OMS-UET
                  </a>
                    {/*end::Aside header*/}
                    {/*begin: Wizard Nav*/}
                    <div className="wizard-nav pt-5 pt-lg-10 pb-10">
                      {/*begin::Wizard Steps*/}
                      <div className="wizard-steps d-flex flex-column flex-sm-row">
                        {/*begin::Wizard Step 1 Nav*/}
                        <div
                          className="wizard-step flex-grow-1 flex-basis-0"
                          data-wizard-type="step"
                          data-wizard-state="current"
                        >
                          <div className="wizard-wrapper pr-7">
                            <div className="wizard-icon">
                              <i className="wizard-check ki ki-check" />
                              <span className="wizard-number">1</span>
                            </div>
                            <div className="wizard-label">
                              <h3 className="wizard-title">Tài khoản</h3>
                              <div className="wizard-desc">Chi tiết tài khoản</div>
                            </div>
                            <span className="svg-icon pl-6">
                              <SVG src="assets/media/svg/shapes/shape.svg" />
                            </span>
                          </div>
                        </div>
                        {/*end::Wizard Step 1 Nav*/}
                        {/*begin::Wizard Step 2 Nav*/}
                        <div
                          className="wizard-step flex-grow-1 flex-basis-0"
                          data-wizard-type="step"
                        >
                          <div className="wizard-wrapper pr-7">
                            <div className="wizard-icon">
                              <i className="wizard-check ki ki-check" />
                              <span className="wizard-number">2</span>
                            </div>
                            <div className="wizard-label">
                              <h3 className="wizard-title">Thông tin</h3>
                              <div className="wizard-desc">
                                Thông tin cá nhân
                              </div>
                            </div>
                            <span className="svg-icon pl-6">
                              <SVG src="assets/media/svg/shapes/shape.svg" />
                            </span>
                          </div>
                        </div>
                        {/*end::Wizard Step 2 Nav*/}
                        {/*begin::Wizard Step 3 Nav*/}
                        <div
                          className="wizard-step flex-grow-1 flex-basis-0"
                          data-wizard-type="step"
                        >
                          <div className="wizard-wrapper">
                            <div className="wizard-icon">
                              <i className="wizard-check ki ki-check" />
                              <span className="wizard-number">3</span>
                            </div>
                            <div className="wizard-label">
                              <h3 className="wizard-title">Vận chuyển</h3>
                              <div className="wizard-desc">Kết nối nhà vận chuyển</div>
                            </div>
                          </div>
                        </div>
                        {/*end::Wizard Step 3 Nav*/}
                      </div>
                      {/*end::Wizard Steps*/}
                    </div>
                    {/*end: Wizard Nav*/}
                  </div>
                  {/*end::Aside Top*/}
                  {/*begin::Signin*/}
                  <div className="login-form">
                    {/*begin::Form*/}
                    <form
                      className="form px-10"
                      noValidate="novalidate"
                      id="kt_login_signup_form"
                    >
                      {/*begin: Wizard Step 1*/}
                      <div
                        data-wizard-type="step-content"
                        data-wizard-state="current"
                      >
                        {/*begin::Title*/}
                        <div className="pb-10 pb-lg-12">
                          <h3 className="font-weight-bolder text-dark font-size-h2 font-size-h1-lg">
                            Đăng ký tài khoản
                          </h3>
                          <div className="text-muted font-weight-bold font-size-h4">
                            Bạn đã có tài khoản?&nbsp;
                            <a
                              href="/login"
                              className="text-primary font-weight-bolder"
                            >
                              Đăng nhập
                            </a>
                          </div>
                        </div>
                        {/*begin::Title*/}
                        {/*begin::Form Group*/}
                        <div className="form-group">
                          <label className="font-size-h6 font-weight-bolder text-dark">
                            Tên tài khoản
                          </label>
                          <input
                            className="form-control form-control-solid h-auto py-7 px-6 rounded-lg border-0"
                            tabIndex="1"
                            type="text"
                            onChange={(e) => {
                              this.setState({ username: e.target.value });
                              this.validator.showMessageFor("Tên tài khoản");
                            }}
                          />
                          {this.validator.message(
                            "Tên tài khoản",
                            this.state.username,
                            "required|min:4|max:20"
                          )}
                          </div>
                        {/*end::Form Group*/}
                        {/*begin::Form Group*/}
                        <div className="form-group">
                          <label className="font-size-h6 font-weight-bolder text-dark">
                            Mật khẩu
                          </label>
                          <input
                            className="form-control form-control-solid h-auto py-7 px-6 rounded-lg border-0"
                            tabIndex="2"
                            type="password"
                            onChange={(e) => {
                              this.setState({ password: e.target.value });
                              this.validator.showMessageFor("Mật khẩu");
                            }}
                          />
                          {this.validator.message(
                            "Mật khẩu",
                            this.state.password,
                            "required|min:6|max:40"
                          )}
                        </div>
                        {/*end::Form Group*/}
                      </div>
                      {/*end: Wizard Step 1*/}
                      {/*begin: Wizard Step 2*/}
                      <div className="pb-5" data-wizard-type="step-content">
                        {/*begin::Title*/}
                        <div className="pt-lg-0 pt-5 pb-15">
                          <h3 className="font-weight-bolder text-dark font-size-h2 font-size-h1-lg">
                            Thông tin
                          </h3>
                          <div className="text-muted font-weight-bold font-size-h4">
                            Bạn hãy nhập thông tin cá nhân và thông tin cửa hàng nhé
                          </div>
                        </div>
                        {/*begin::Title*/}
                        {/*begin::Row*/}
                        <div className="row">
                          <div className="col-xl-6">
                            {/*begin::Input*/}
                            <div className="form-group">
                              <label className="font-size-h6 font-weight-bolder text-dark">
                                Address Line 1
                              </label>
                              <input
                                type="text"
                                className="form-control form-control-solid h-auto py-7 px-6 border-0 rounded-lg font-size-h6"
                                name="address1"
                                placeholder="Address Line 1"
                                defaultValue="Address Line 1"
                              />
                              <span className="form-text text-muted">
                                Please enter your Address.
                              </span>
                            </div>
                            {/*end::Input*/}
                          </div>
                          <div className="col-xl-6">
                            {/*begin::Input*/}
                            <div className="form-group">
                              <label className="font-size-h6 font-weight-bolder text-dark">
                                Address Line 2
                              </label>
                              <input
                                type="text"
                                className="form-control form-control-solid h-auto py-7 px-6 border-0 rounded-lg font-size-h6"
                                name="address2"
                                placeholder="Address Line 2"
                                defaultValue="Address Line 2"
                              />
                              <span className="form-text text-muted">
                                Please enter your Address.
                              </span>
                            </div>
                            {/*end::Input*/}
                          </div>
                        </div>
                        {/*end::Row*/}
                        {/*begin::Row*/}
                        <div className="row">
                          <div className="col-xl-6">
                            {/*begin::Input*/}
                            <div className="form-group">
                              <label className="font-size-h6 font-weight-bolder text-dark">
                                State
                              </label>
                              <input
                                type="text"
                                className="form-control form-control-solid h-auto py-7 px-6 border-0 rounded-lg font-size-h6"
                                name="state"
                                placeholder="State"
                                defaultValue="VIC"
                              />
                              <span className="form-text text-muted">
                                Please enter your State.
                              </span>
                            </div>
                            {/*end::Input*/}
                          </div>
                          <div className="col-xl-6">
                            {/*begin::Select*/}
                            <div className="form-group">
                              <label className="font-size-h6 font-weight-bolder text-dark">
                                Country
                              </label>
                              <select
                                name="country"
                                className="form-control form-control-solid h-auto py-7 px-5 border-0 rounded-lg font-size-h6"
                              >
                                <option value>Select</option>
                                <option value="VN" selected>
                                  Viet Nam
                                </option>
                              </select>
                            </div>
                            {/*end::Input*/}
                          </div>
                        </div>
                        {/*end::Row*/}
                      </div>
                      {/*end: Wizard Step 2*/}
                      {/*begin: Wizard Step 3*/}
                      <div className="pb-5" data-wizard-type="step-content">
                        {/*begin::Title*/}
                        <div className="pt-lg-0 pt-5 pb-15">
                          <h3 className="font-weight-bolder text-dark font-size-h2 font-size-h1-lg">
                            Complete
                          </h3>
                          <div className="text-muted font-weight-bold font-size-h4">
                            Complete Your Signup And Become A Member!
                          </div>
                        </div>
                        {/*end::Title*/}
                        {/*begin::Section*/}
                        <h4 className="font-weight-bolder mb-3">
                          Accoun Settings:
                        </h4>
                        <div className="text-dark-50 font-weight-bold line-height-lg mb-8">
                          <div>Nick Stone</div>
                          <div>+12233434-34</div>
                          <div>nick.stone@gmail.com</div>
                        </div>
                        {/*end::Section*/}
                        {/*begin::Section*/}
                        <h4 className="font-weight-bolder mb-3">
                          Address Details:
                        </h4>
                        <div className="text-dark-50 font-weight-bold line-height-lg mb-8">
                          <div>Address Line 1</div>
                          <div>Address Line 2</div>
                          <div>Melbourne 3000, VIC, Australia</div>
                        </div>
                        {/*end::Section*/}
                        {/*begin::Section*/}
                        <h4 className="font-weight-bolder mb-3">
                          Support Channels:
                        </h4>
                        <div className="text-dark-50 font-weight-bold line-height-lg mb-8">
                          <div>Overnight Delivery with Regular Packaging</div>
                          <div>Preferred Morning (8:00AM - 11:00AM) Delivery</div>
                        </div>
                        {/*end::Section*/}
                      </div>
                      {/*end: Wizard Step 5*/}
                      {/*begin: Wizard Actions*/}
                      <div className="d-flex justify-content-between pt-7">
                        <div className="mr-2">
                          <button
                            type="button"
                            className="btn btn-light-primary font-weight-bolder font-size-h6 pr-8 pl-6 py-4 my-3 mr-3"
                            data-wizard-type="action-prev"
                          >
                            <span className="svg-icon svg-icon-md mr-2">
                              <SVG src="assets/media/svg/icons/Navigation/Left-2.svg" />
                            </span>
                            Trở về
                          </button>
                        </div>
                        <div>
                          <button
                            className="btn btn-primary font-weight-bolder font-size-h6 pl-8 pr-4 py-4 my-3"
                            data-wizard-type="action-submit"
                            type="submit"
                            id="kt_login_signup_form_submit_button"
                          >
                            Hoàn thành
                            <span className="svg-icon svg-icon-md ml-2">
                              <SVG src="assets/media/svg/icons/Navigation/Right-2.svg" />
                            </span>
                          </button>
                          <button
                            type="button"
                            className="btn btn-primary font-weight-bolder font-size-h6 pl-8 pr-4 py-4 my-3"
                            data-wizard-type="action-next"
                            onClick={this.submitForm}
                          >
                            {!this.state.isLoading && "Tiếp tục"}
                            {this.state.isLoading && (
                              <span className="spinner-border spinner-border-sm"></span>
                            )}
                            <span className="svg-icon svg-icon-md ml-2">
                              <SVG src="assets/media/svg/icons/Navigation/Right-2.svg" />
                            </span>
                          </button>
                        </div>
                      </div>
                      {/*end: Wizard Actions*/}
                    </form>
                    {/*end::Form*/}
                  </div>
                  {/*end::Signin*/}
                </div>
                {/*end::Container*/}
              </div>
            </div>
            {/*begin::Content*/}
            {/*begin::Aside*/}
            <div className="col-md-6 mt-6 mr-3">
              <div className="login-aside order-1 order-lg-2 bgi-no-repeat bgi-position-x-right" style={{width: '700px', height: '681.45px', position: 'fixed'}}>
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
export default RegisterPage;
