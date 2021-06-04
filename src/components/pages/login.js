import { Component } from "react";

import SVG from "react-inlinesvg";

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

class LoginPage extends Component {
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
      AuthService.login(this.state.username, this.state.password).then(
        (response) => {
          this.setState({isLoading: false})
          if (response && response.error && response.error.statusCode === 200) {
            MySwal.fire({
              title: "Đăng nhập thành công",
              icon: "success",
              showConfirmButton: false,
              timer: 1000,
            }).then(() => {
              if (AuthService.getRoles().includes("ROLE_ADMIN")) {
                this.props.history.push("/admin-user");
              } else {
                this.props.history.push("/order");
              }
              window.location.reload();
            });
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
          style={{ overflow: "hidden" }}
        >
          {/*begin::Login*/}
          <div className="login login-4 wizard d-flex flex-column flex-lg-row flex-column-fluid">
            {/*begin::Content*/}
            <div
              className="col-md-6 mt-6 ml-3"
              style={{ display: "flex", height: "680px" }}
            >
              <div className="login-container order-2 order-lg-1 d-flex flex-center flex-row-fluid px-7 pt-lg-0 pb-lg-0 pt-4 pb-6 bg-white">
                {/*begin::Wrapper*/}
                <div className="login-content d-flex flex-column pt-lg-0 pt-12">
                  {/*begin::Logo*/}
                  <a
                    href="/"
                    className="login-logo pb-xl-20 pb-15"
                    style={{
                      color: "#000",
                      fontSize: "18pt",
                      fontWeight: "bold",
                    }}
                  >
                    <img
                      src="assets/media/logos/logo-uet.png"
                      style={{ maxHeight: "50px", marginRight: "10px" }}
                      alt=""
                    />
                    OMS-UET
                  </a>
                  {/*end::Logo*/}
                  {/*begin::Login*/}
                  <div className="login-form">
                    {/*begin::Form*/}
                    <form
                      className="form"
                      id="login_form"
                      onSubmit={this.submitForm}
                    >
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
                      {/*end::Form group*/}
                      {/*begin::Action*/}
                      <div className="pb-lg-0 pb-5">
                        <button
                          type="submit"
                          tabIndex="3"
                          id="kt_login_singin_form_submit_button"
                          className="btn btn-primary font-weight-bolder font-size-h6 px-8 py-4 my-3 mr-3"
                        >
                          {!this.state.isLoading && "Đăng nhập"}
                          {this.state.isLoading && (
                            <span className="spinner-border spinner-border-sm"></span>
                          )}
                        </button>
                        <button
                          type="button"
                          tabIndex="4"
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
              <div
                className="login-aside order-1 order-lg-2 bgi-no-repeat bgi-position-x-right"
                style={{ width: "700px", height: "100%" }}
              >
                <div
                  className="login-conteiner bgi-no-repeat bgi-position-x-right bgi-position-y-bottom"
                  style={{
                    backgroundImage: `url(assets/media/svg/illustrations/login-visual-4.svg)`,
                  }}
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
