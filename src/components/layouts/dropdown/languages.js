// import flag1 from "../../../assets/assets/media/svg/flags/226-united-states.svg";
// import flag2 from "../../../assets/assets/media/svg/flags/128-spain.svg";
// import flag3 from "../../../assets/assets/media/svg/flags/162-germany.svg";
// import flag4 from "../../../assets/assets/media/svg/flags/063-japan.svg";
// import flag5 from "../../../assets/assets/media/svg/flags/195-france.svg";
function Languages() {
  return (
    <div>
      {/*begin::Nav*/}
<ul className="navi navi-hover py-4">
  {/*begin::Item*/}
  <li className="navi-item">
    <a href="#" className="navi-link">
      <span className="symbol symbol-20 mr-3">
        <img src={"flag1"} alt="" />
      </span>
      <span className="navi-text">English</span>
    </a>
  </li>
  {/*end::Item*/}
  {/*begin::Item*/}
  <li className="navi-item active">
    <a href="#" className="navi-link">
      <span className="symbol symbol-20 mr-3">
        <img src={"flag2"} alt="" />
      </span>
      <span className="navi-text">Spanish</span>
    </a>
  </li>
  {/*end::Item*/}
  {/*begin::Item*/}
  <li className="navi-item">
    <a href="#" className="navi-link">
      <span className="symbol symbol-20 mr-3">
        <img src={"flag3"} alt="" />
      </span>
      <span className="navi-text">German</span>
    </a>
  </li>
  {/*end::Item*/}
  {/*begin::Item*/}
  <li className="navi-item">
    <a href="#" className="navi-link">
      <span className="symbol symbol-20 mr-3">
        <img src={"flag4"} alt="" />
      </span>
      <span className="navi-text">Japanese</span>
    </a>
  </li>
  {/*end::Item*/}
  {/*begin::Item*/}
  <li className="navi-item">
    <a href="#" className="navi-link">
      <span className="symbol symbol-20 mr-3">
        <img src={"flag5"} alt="" />
      </span>
      <span className="navi-text">French</span>
    </a>
  </li>
  {/*end::Item*/}
</ul>
{/*end::Nav*/}

    </div>

  );
}

export default Languages;
