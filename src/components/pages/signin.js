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
                {/*begin::Form*/}
                <form className="form" id="kt_login_singin_form" action="">
                  {/*begin::Title*/}
                  <div className="pb-5 pb-lg-15">
                    <h3 className="font-weight-bolder text-dark font-size-h2 font-size-h1-lg">Sign In</h3>
                    <div className="text-muted font-weight-bold font-size-h4">New Here?&nbsp;
                      <a href="custom/pages/login/login-4/signup.html" className="text-primary font-weight-bolder">Create Account</a></div>
                  </div>
                  {/*begin::Title*/}
                  {/*begin::Form group*/}
                  <div className="form-group">
                    <label className="font-size-h6 font-weight-bolder text-dark">Your Email</label>
                    <input className="form-control form-control-solid h-auto py-7 px-6 rounded-lg border-0" type="text" name="username" autoComplete="off" />
                  </div>
                  {/*end::Form group*/}
                  {/*begin::Form group*/}
                  <div className="form-group">
                    <div className="d-flex justify-content-between mt-n5">
                      <label className="font-size-h6 font-weight-bolder text-dark pt-5">Your Name</label>
                      <a href="custom/pages/login/login-4/forgot.html" className="text-primary font-size-h6 font-weight-bolder text-hover-primary pt-5">Forgot Password ?</a>
                    </div>
                    <input className="form-control form-control-solid h-auto py-7 px-6 rounded-lg border-0" type="password" name="password" autoComplete="off" />
                  </div>
                  {/*end::Form group*/}
                  {/*begin::Action*/}
                  <div className="pb-lg-0 pb-5">
                    <button type="submit" id="kt_login_singin_form_submit_button" className="btn btn-primary font-weight-bolder font-size-h6 px-8 py-4 my-3 mr-3">Sign In</button>
                    <button type="button" className="btn btn-light-primary font-weight-bolder px-8 py-4 my-3 font-size-lg">
                      <span className="svg-icon svg-icon-md">
                        {/*begin::Svg Icon | path:assets/media/svg/social-icons/google.svg*/}
                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                          <path d="M19.9895 10.1871C19.9895 9.36767 19.9214 8.76973 19.7742 8.14966H10.1992V11.848H15.8195C15.7062 12.7671 15.0943 14.1512 13.7346 15.0813L13.7155 15.2051L16.7429 17.4969L16.9527 17.5174C18.879 15.7789 19.9895 13.221 19.9895 10.1871Z" fill="#4285F4" />
                          <path d="M10.1993 19.9313C12.9527 19.9313 15.2643 19.0454 16.9527 17.5174L13.7346 15.0813C12.8734 15.6682 11.7176 16.0779 10.1993 16.0779C7.50243 16.0779 5.21352 14.3395 4.39759 11.9366L4.27799 11.9466L1.13003 14.3273L1.08887 14.4391C2.76588 17.6945 6.21061 19.9313 10.1993 19.9313Z" fill="#34A853" />
                          <path d="M4.39748 11.9366C4.18219 11.3166 4.05759 10.6521 4.05759 9.96565C4.05759 9.27909 4.18219 8.61473 4.38615 7.99466L4.38045 7.8626L1.19304 5.44366L1.08875 5.49214C0.397576 6.84305 0.000976562 8.36008 0.000976562 9.96565C0.000976562 11.5712 0.397576 13.0882 1.08875 14.4391L4.39748 11.9366Z" fill="#FBBC05" />
                          <path d="M10.1993 3.85336C12.1142 3.85336 13.406 4.66168 14.1425 5.33717L17.0207 2.59107C15.253 0.985496 12.9527 0 10.1993 0C6.2106 0 2.76588 2.23672 1.08887 5.49214L4.38626 7.99466C5.21352 5.59183 7.50242 3.85336 10.1993 3.85336Z" fill="#EB4335" />
                        </svg>
                        {/*end::Svg Icon*/}
                      </span>Sign in with Google</button>
                  </div>
                  {/*end::Action*/}
                </form>
                {/*end::Form*/}
              </div>
              {/*end::Signin*/}
            </div>
            {/*end::Wrapper*/}
          </div>
          {/*begin::Content*/}
          {/*begin::Aside*/}
          <div className="login-aside order-1 order-lg-2 bgi-no-repeat bgi-position-x-right">
            <div className="login-conteiner bgi-no-repeat bgi-position-x-right bgi-position-y-bottom" style={{backgroundImage: `url(${backgroundImage})`}}>
              {/*begin::Aside title*/}
              <h3 className="pt-lg-40 pl-lg-20 pb-lg-0 pl-10 py-20 m-0 d-flex justify-content-lg-start font-weight-boldest display5 display1-lg text-white">We Got
                <br />A Surprise
                <br />For You</h3>
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