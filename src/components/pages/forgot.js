import logo from './assets/assets/media/logos/logo-4.png';
import backgroundImage from './assets/assets/media/svg/illustrations/login-visual-4.svg';

function App() {
  return (
    <div>
      {/*begin::Body*/}
      {/*begin::Main*/}
      <div className="d-flex flex-column flex-root" style={{height: '100vh'}}>
        {/*begin::Login*/}
        <div className="login login-4 wizard d-flex flex-column flex-lg-row flex-column-fluid">
          {/*begin::Content*/}
          <div className="login-container order-2 order-lg-1 d-flex flex-center flex-row-fluid px-7 pt-lg-0 pb-lg-0 pt-4 pb-6 bg-white">
            {/*begin::Wrapper*/}
            <div className="login-content d-flex flex-column pt-lg-0 pt-12">
              {/*begin::Logo*/}
              <a href="#" className="login-logo pb-xl-20 pb-15">
                <img src={logo} className="max-h-70px" alt="" />
              </a>
              {/*end::Logo*/}
              {/*begin::Signin*/}
              <div className="login-form">
                <form className="form" id="kt_login_forgot_form" action>
                  {/*begin::Title*/}
                  <div className="pb-5 pb-lg-15">
                    <h3 className="font-weight-bolder text-dark font-size-h2 font-size-h1-lg">
                      Forgotten Password ?
                    </h3>
                    <p className="text-muted font-weight-bold font-size-h4">
                      Enter your email to reset your password
                    </p>
                  </div>
                  {/*end::Title*/}
                  {/*begin::Form group*/}
                  <div className="form-group">
                    <input
                      className="form-control form-control-solid h-auto py-7 px-6 border-0 rounded-lg font-size-h6"
                      type="email"
                      placeholder="Email"
                      name="email"
                      autoComplete="off"
                    />
                  </div>
                  {/*end::Form group*/}
                  {/*begin::Form group*/}
                  <div className="form-group d-flex flex-wrap">
                    <button
                      type="submit"
                      id="kt_login_forgot_form_submit_button"
                      className="btn btn-primary font-weight-bolder font-size-h6 px-8 py-4 my-3 mr-4"
                    >
                      Submit
                    </button>
                    <a
                      href="custom/pages/login/login-4/signin.html"
                      id="kt_login_forgot_cancel"
                      className="btn btn-light-primary font-weight-bolder font-size-h6 px-8 py-4 my-3"
                    >
                      Cancel
                    </a>
                  </div>
                  {/*end::Form group*/}
                </form>
              </div>
              {/*end::Signin*/}
            </div>
            {/*end::Wrapper*/}
          </div>
          {/*begin::Content*/}
          {/*begin::Aside*/}
          <div className="login-aside order-1 order-lg-2 bgi-no-repeat bgi-position-x-right">
            <div
              className="login-conteiner bgi-no-repeat bgi-position-x-right bgi-position-y-bottom"
              style={{ backgroundImage: `url(${backgroundImage})` }}
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
          {/*end::Aside*/}
        </div>
        {/*end::Login*/}
      </div>
      {/*end::Main*/}
      {/*end::Body*/}
    </div>
  );
}

export default App;
