import HeaderMobile from "./components/layouts/general/header-mobile.js";
import Aside from "./components/layouts/general/aside.js";
import Header from "./components/layouts/general/header.js";
import SubHeader from "./components/layouts/subheader/subheader.js";
import Footer from "./components/layouts/general/footer.js";

function App() {
  return (
    <div>
      {/*begin::Main*/}
      {/*[html-partial:include:{"file":"partials/_header-mobile.html"}]/*/}
      < HeaderMobile />
      <div className="d-flex flex-column flex-root">
        {/*begin::Page*/}
        <div className="d-flex flex-row flex-column-fluid page">
          {/*[html-partial:include:{"file":"partials/_aside.html"}]/*/}
          < Aside />
          {/*begin::Wrapper*/}
          <div className="d-flex flex-column flex-row-fluid wrapper" id="kt_wrapper">
            {/*[html-partial:include:{"file":"partials/_header.html"}]/*/}
            < Header />
            {/*begin::Content*/}
            <div className="content d-flex flex-column flex-column-fluid" id="kt_content">
              {/*[html-partial:include:{"file":"partials/_subheader/subheader-v1.html"}]/*/}
              < SubHeader />
              {/*Content area here*/}
            </div>
            {/*end::Content*/}
            {/*[html-partial:include:{"file":"partials/_footer.html"}]/*/}
            < Footer />
          </div>
          {/*end::Wrapper*/}
        </div>
        {/*end::Page*/}
      </div>
      {/*end::Main*/}
    </div>

  );
}

export default App;
