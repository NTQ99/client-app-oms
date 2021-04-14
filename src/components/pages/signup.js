import logo from './assets/assets/media/logos/logo-4.png';
import backgroundImage from './assets/assets/media/svg/illustrations/login-visual-4.svg';

function App() {
  return (
    <div>
      {/*begin::Body*/}
      {/*begin::Main*/}
      <div className="d-flex flex-column flex-root" style={{ height: "100vh" }}>
        {/*begin::Login*/}
        <div
          className="login login-4 wizard d-flex flex-column flex-lg-row flex-column-fluid wizard"
          id="kt_login"
        >
          {/*begin::Content*/}
          <div className="login-container d-flex flex-center flex-row flex-row-fluid order-2 order-lg-1 flex-row-fluid bg-white py-lg-0 pb-lg-0 pt-15 pb-12">
            {/*begin::Container*/}
            <div className="login-content login-content-signup d-flex flex-column">
              {/*begin::Aside Top*/}
              <div className="d-flex flex-column-auto flex-column px-10">
                {/*begin::Aside header*/}
                <a href="#" className="login-logo pb-lg-4 pb-10">
                  <img src={logo} className="max-h-70px" alt="" />
                </a>
                {/*end::Aside header*/}
                {/*begin: Wizard Nav*/}
                <div className="wizard-nav pt-5 pt-lg-15 pb-10">
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
                          <h3 className="wizard-title">Account</h3>
                          <div className="wizard-desc">Account details</div>
                        </div>
                        <span className="svg-icon pl-6">
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
                              <polygon points="0 0 24 0 24 24 0 24" />
                              <rect
                                fill="#000000"
                                opacity="0.3"
                                transform="translate(8.500000, 12.000000) rotate(-90.000000) translate(-8.500000, -12.000000)"
                                x="7.5"
                                y="7.5"
                                width={2}
                                height={9}
                                rx={1}
                              />
                              <path
                                d="M9.70710318,15.7071045 C9.31657888,16.0976288 8.68341391,16.0976288 8.29288961,15.7071045 C7.90236532,15.3165802 7.90236532,14.6834152 8.29288961,14.2928909 L14.2928896,8.29289093 C14.6714686,7.914312 15.281055,7.90106637 15.675721,8.26284357 L21.675721,13.7628436 C22.08284,14.136036 22.1103429,14.7686034 21.7371505,15.1757223 C21.3639581,15.5828413 20.7313908,15.6103443 20.3242718,15.2371519 L15.0300721,10.3841355 L9.70710318,15.7071045 Z"
                                fill="#000000"
                                fillRule="nonzero"
                                transform="translate(14.999999, 11.999997) scale(1, -1) rotate(90.000000) translate(-14.999999, -11.999997)"
                              />
                            </g>
                          </svg>
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
                          <h3 className="wizard-title">Address</h3>
                          <div className="wizard-desc">Residential address</div>
                        </div>
                        <span className="svg-icon pl-6">
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
                              <polygon points="0 0 24 0 24 24 0 24" />
                              <rect
                                fill="#000000"
                                opacity="0.3"
                                transform="translate(8.500000, 12.000000) rotate(-90.000000) translate(-8.500000, -12.000000)"
                                x="7.5"
                                y="7.5"
                                width={2}
                                height={9}
                                rx={1}
                              />
                              <path
                                d="M9.70710318,15.7071045 C9.31657888,16.0976288 8.68341391,16.0976288 8.29288961,15.7071045 C7.90236532,15.3165802 7.90236532,14.6834152 8.29288961,14.2928909 L14.2928896,8.29289093 C14.6714686,7.914312 15.281055,7.90106637 15.675721,8.26284357 L21.675721,13.7628436 C22.08284,14.136036 22.1103429,14.7686034 21.7371505,15.1757223 C21.3639581,15.5828413 20.7313908,15.6103443 20.3242718,15.2371519 L15.0300721,10.3841355 L9.70710318,15.7071045 Z"
                                fill="#000000"
                                fillRule="nonzero"
                                transform="translate(14.999999, 11.999997) scale(1, -1) rotate(90.000000) translate(-14.999999, -11.999997)"
                              />
                            </g>
                          </svg>
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
                          <h3 className="wizard-title">Complete</h3>
                          <div className="wizard-desc">Submit form</div>
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
                        Create Account
                      </h3>
                      <div className="text-muted font-weight-bold font-size-h4">
                        Already have an Account ?
                        <a
                          href="custom/pages/login/login-4/signin.html"
                          className="text-primary font-weight-bolder"
                        >
                          Sign In
                        </a>
                      </div>
                    </div>
                    {/*begin::Title*/}
                    {/*begin::Form Group*/}
                    <div className="form-group">
                      <label className="font-size-h6 font-weight-bolder text-dark">
                        First Name
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-solid h-auto py-7 px-6 border-0 rounded-lg font-size-h6"
                        name="fname"
                        placeholder="First Name"
                        defaultValue=""
                      />
                    </div>
                    {/*end::Form Group*/}
                    {/*begin::Form Group*/}
                    <div className="form-group">
                      <label className="font-size-h6 font-weight-bolder text-dark">
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-solid h-auto py-7 px-6 border-0 rounded-lg font-size-h6"
                        name="lname"
                        placeholder="Last Name"
                        defaultValue=""
                      />
                    </div>
                    {/*end::Form Group*/}
                  </div>
                  {/*end: Wizard Step 1*/}
                  {/*begin: Wizard Step 2*/}
                  <div className="pb-5" data-wizard-type="step-content">
                    {/*begin::Title*/}
                    <div className="pt-lg-0 pt-5 pb-15">
                      <h3 className="font-weight-bolder text-dark font-size-h2 font-size-h1-lg">
                        Address Details
                      </h3>
                      <div className="text-muted font-weight-bold font-size-h4">
                        Have a Different Address ?
                        <a href="#" className="text-primary font-weight-bolder">
                          Add Address
                        </a>
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
                            <option value="AF">Afghanistan</option>
                            <option value="AX">Åland Islands</option>
                            <option value="AL">Albania</option>
                            <option value="DZ">Algeria</option>
                            <option value="AS">American Samoa</option>
                            <option value="AD">Andorra</option>
                            <option value="AO">Angola</option>
                            <option value="AI">Anguilla</option>
                            <option value="AQ">Antarctica</option>
                            <option value="AG">Antigua and Barbuda</option>
                            <option value="AR">Argentina</option>
                            <option value="AM">Armenia</option>
                            <option value="AW">Aruba</option>
                            <option value="AU">Australia</option>
                            <option value="AT">Austria</option>
                            <option value="AZ">Azerbaijan</option>
                            <option value="BS">Bahamas</option>
                            <option value="BH">Bahrain</option>
                            <option value="BD">Bangladesh</option>
                            <option value="BB">Barbados</option>
                            <option value="BY">Belarus</option>
                            <option value="BE">Belgium</option>
                            <option value="BZ">Belize</option>
                            <option value="BJ">Benin</option>
                            <option value="BM">Bermuda</option>
                            <option value="BT">Bhutan</option>
                            <option value="BO">Bolivia, Plurinational State of</option>
                            <option value="BQ">Bonaire, Sint Eustatius and Saba</option>
                            <option value="BA">Bosnia and Herzegovina</option>
                            <option value="BW">Botswana</option>
                            <option value="BV">Bouvet Island</option>
                            <option value="BR">Brazil</option>
                            <option value="IO">British Indian Ocean Territory</option>
                            <option value="BN">Brunei Darussalam</option>
                            <option value="BG">Bulgaria</option>
                            <option value="BF">Burkina Faso</option>
                            <option value="BI">Burundi</option>
                            <option value="KH">Cambodia</option>
                            <option value="CM">Cameroon</option>
                            <option value="CA">Canada</option>
                            <option value="CV">Cape Verde</option>
                            <option value="KY">Cayman Islands</option>
                            <option value="CF">Central African Republic</option>
                            <option value="TD">Chad</option>
                            <option value="CL">Chile</option>
                            <option value="CN">China</option>
                            <option value="CX">Christmas Island</option>
                            <option value="CC">Cocos (Keeling) Islands</option>
                            <option value="CO">Colombia</option>
                            <option value="KM">Comoros</option>
                            <option value="CG">Congo</option>
                            <option value="CD">Congo, the Democratic Republic of the</option>
                            <option value="CK">Cook Islands</option>
                            <option value="CR">Costa Rica</option>
                            <option value="CI">Côte d'Ivoire</option>
                            <option value="HR">Croatia</option>
                            <option value="CU">Cuba</option>
                            <option value="CW">Curaçao</option>
                            <option value="CY">Cyprus</option>
                            <option value="CZ">Czech Republic</option>
                            <option value="DK">Denmark</option>
                            <option value="DJ">Djibouti</option>
                            <option value="DM">Dominica</option>
                            <option value="DO">Dominican Republic</option>
                            <option value="EC">Ecuador</option>
                            <option value="EG">Egypt</option>
                            <option value="SV">El Salvador</option>
                            <option value="GQ">Equatorial Guinea</option>
                            <option value="ER">Eritrea</option>
                            <option value="EE">Estonia</option>
                            <option value="ET">Ethiopia</option>
                            <option value="FK">Falkland Islands (Malvinas)</option>
                            <option value="FO">Faroe Islands</option>
                            <option value="FJ">Fiji</option>
                            <option value="FI">Finland</option>
                            <option value="FR">France</option>
                            <option value="GF">French Guiana</option>
                            <option value="PF">French Polynesia</option>
                            <option value="TF">French Southern Territories</option>
                            <option value="GA">Gabon</option>
                            <option value="GM">Gambia</option>
                            <option value="GE">Georgia</option>
                            <option value="DE">Germany</option>
                            <option value="GH">Ghana</option>
                            <option value="GI">Gibraltar</option>
                            <option value="GR">Greece</option>
                            <option value="GL">Greenland</option>
                            <option value="GD">Grenada</option>
                            <option value="GP">Guadeloupe</option>
                            <option value="GU">Guam</option>
                            <option value="GT">Guatemala</option>
                            <option value="GG">Guernsey</option>
                            <option value="GN">Guinea</option>
                            <option value="GW">Guinea-Bissau</option>
                            <option value="GY">Guyana</option>
                            <option value="HT">Haiti</option>
                            <option value="HM">Heard Island and McDonald Islands</option>
                            <option value="VA">Holy See (Vatican City State)</option>
                            <option value="HN">Honduras</option>
                            <option value="HK">Hong Kong</option>
                            <option value="HU">Hungary</option>
                            <option value="IS">Iceland</option>
                            <option value="IN">India</option>
                            <option value="ID">Indonesia</option>
                            <option value="IR">Iran, Islamic Republic of</option>
                            <option value="IQ">Iraq</option>
                            <option value="IE">Ireland</option>
                            <option value="IM">Isle of Man</option>
                            <option value="IL">Israel</option>
                            <option value="IT">Italy</option>
                            <option value="JM">Jamaica</option>
                            <option value="JP">Japan</option>
                            <option value="JE">Jersey</option>
                            <option value="JO">Jordan</option>
                            <option value="KZ">Kazakhstan</option>
                            <option value="KE">Kenya</option>
                            <option value="KI">Kiribati</option>
                            <option value="KP">Korea, Democratic People's Republic of</option>
                            <option value="KR">Korea, Republic of</option>
                            <option value="KW">Kuwait</option>
                            <option value="KG">Kyrgyzstan</option>
                            <option value="LA">Lao People's Democratic Republic</option>
                            <option value="LV">Latvia</option>
                            <option value="LB">Lebanon</option>
                            <option value="LS">Lesotho</option>
                            <option value="LR">Liberia</option>
                            <option value="LY">Libya</option>
                            <option value="LI">Liechtenstein</option>
                            <option value="LT">Lithuania</option>
                            <option value="LU">Luxembourg</option>
                            <option value="MO">Macao</option>
                            <option value="MK">Macedonia, the former Yugoslav Republic of</option>
                            <option value="MG">Madagascar</option>
                            <option value="MW">Malawi</option>
                            <option value="MY">Malaysia</option>
                            <option value="MV">Maldives</option>
                            <option value="ML">Mali</option>
                            <option value="MT">Malta</option>
                            <option value="MH">Marshall Islands</option>
                            <option value="MQ">Martinique</option>
                            <option value="MR">Mauritania</option>
                            <option value="MU">Mauritius</option>
                            <option value="YT">Mayotte</option>
                            <option value="MX">Mexico</option>
                            <option value="FM">Micronesia, Federated States of</option>
                            <option value="MD">Moldova, Republic of</option>
                            <option value="MC">Monaco</option>
                            <option value="MN">Mongolia</option>
                            <option value="ME">Montenegro</option>
                            <option value="MS">Montserrat</option>
                            <option value="MA">Morocco</option>
                            <option value="MZ">Mozambique</option>
                            <option value="MM">Myanmar</option>
                            <option value="NA">Namibia</option>
                            <option value="NR">Nauru</option>
                            <option value="NP">Nepal</option>
                            <option value="NL">Netherlands</option>
                            <option value="NC">New Caledonia</option>
                            <option value="NZ">New Zealand</option>
                            <option value="NI">Nicaragua</option>
                            <option value="NE">Niger</option>
                            <option value="NG">Nigeria</option>
                            <option value="NU">Niue</option>
                            <option value="NF">Norfolk Island</option>
                            <option value="MP">Northern Mariana Islands</option>
                            <option value="NO">Norway</option>
                            <option value="OM">Oman</option>
                            <option value="PK">Pakistan</option>
                            <option value="PW">Palau</option>
                            <option value="PS">
                              Palestinian Territory, Occupied
                            </option>
                            <option value="PA">Panama</option>
                            <option value="PG">Papua New Guinea</option>
                            <option value="PY">Paraguay</option>
                            <option value="PE">Peru</option>
                            <option value="PH">Philippines</option>
                            <option value="PN">Pitcairn</option>
                            <option value="PL">Poland</option>
                            <option value="PT">Portugal</option>
                            <option value="PR">Puerto Rico</option>
                            <option value="QA">Qatar</option>
                            <option value="RE">Réunion</option>
                            <option value="RO">Romania</option>
                            <option value="RU">Russian Federation</option>
                            <option value="RW">Rwanda</option>
                            <option value="BL">Saint Barthélemy</option>
                            <option value="SH">
                              Saint Helena, Ascension and Tristan da Cunha
                            </option>
                            <option value="KN">Saint Kitts and Nevis</option>
                            <option value="LC">Saint Lucia</option>
                            <option value="MF">
                              Saint Martin (French part)
                            </option>
                            <option value="PM">
                              Saint Pierre and Miquelon
                            </option>
                            <option value="VC">
                              Saint Vincent and the Grenadines
                            </option>
                            <option value="WS">Samoa</option>
                            <option value="SM">San Marino</option>
                            <option value="ST">Sao Tome and Principe</option>
                            <option value="SA">Saudi Arabia</option>
                            <option value="SN">Senegal</option>
                            <option value="RS">Serbia</option>
                            <option value="SC">Seychelles</option>
                            <option value="SL">Sierra Leone</option>
                            <option value="SG">Singapore</option>
                            <option value="SX">
                              Sint Maarten (Dutch part)
                            </option>
                            <option value="SK">Slovakia</option>
                            <option value="SI">Slovenia</option>
                            <option value="SB">Solomon Islands</option>
                            <option value="SO">Somalia</option>
                            <option value="ZA">South Africa</option>
                            <option value="GS">
                              South Georgia and the South Sandwich Islands
                            </option>
                            <option value="SS">South Sudan</option>
                            <option value="ES">Spain</option>
                            <option value="LK">Sri Lanka</option>
                            <option value="SD">Sudan</option>
                            <option value="SR">Suriname</option>
                            <option value="SJ">Svalbard and Jan Mayen</option>
                            <option value="SZ">Swaziland</option>
                            <option value="SE">Sweden</option>
                            <option value="CH">Switzerland</option>
                            <option value="SY">Syrian Arab Republic</option>
                            <option value="TW">
                              Taiwan, Province of China
                            </option>
                            <option value="TJ">Tajikistan</option>
                            <option value="TZ">
                              Tanzania, United Republic of
                            </option>
                            <option value="TH">Thailand</option>
                            <option value="TL">Timor-Leste</option>
                            <option value="TG">Togo</option>
                            <option value="TK">Tokelau</option>
                            <option value="TO">Tonga</option>
                            <option value="TT">Trinidad and Tobago</option>
                            <option value="TN">Tunisia</option>
                            <option value="TR">Turkey</option>
                            <option value="TM">Turkmenistan</option>
                            <option value="TC">Turks and Caicos Islands</option>
                            <option value="TV">Tuvalu</option>
                            <option value="UG">Uganda</option>
                            <option value="UA">Ukraine</option>
                            <option value="AE">United Arab Emirates</option>
                            <option value="GB">United Kingdom</option>
                            <option value="US">United States</option>
                            <option value="UM">
                              United States Minor Outlying Islands
                            </option>
                            <option value="UY">Uruguay</option>
                            <option value="UZ">Uzbekistan</option>
                            <option value="VU">Vanuatu</option>
                            <option value="VE">
                              Venezuela, Bolivarian Republic of
                            </option>
                            <option value="VN" selected>Viet Nam</option>
                            <option value="VG">Virgin Islands, British</option>
                            <option value="VI">Virgin Islands, U.S.</option>
                            <option value="WF">Wallis and Futuna</option>
                            <option value="EH">Western Sahara</option>
                            <option value="YE">Yemen</option>
                            <option value="ZM">Zambia</option>
                            <option value="ZW">Zimbabwe</option>
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
                          {/*begin::Svg Icon | path:assets/media/svg/icons/Navigation/Left-2.svg*/}
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
                              <polygon points="0 0 24 0 24 24 0 24" />
                              <rect
                                fill="#000000"
                                opacity="0.3"
                                transform="translate(15.000000, 12.000000) scale(-1, 1) rotate(-90.000000) translate(-15.000000, -12.000000)"
                                x={14}
                                y={7}
                                width={2}
                                height={10}
                                rx={1}
                              />
                              <path
                                d="M3.7071045,15.7071045 C3.3165802,16.0976288 2.68341522,16.0976288 2.29289093,15.7071045 C1.90236664,15.3165802 1.90236664,14.6834152 2.29289093,14.2928909 L8.29289093,8.29289093 C8.67146987,7.914312 9.28105631,7.90106637 9.67572234,8.26284357 L15.6757223,13.7628436 C16.0828413,14.136036 16.1103443,14.7686034 15.7371519,15.1757223 C15.3639594,15.5828413 14.7313921,15.6103443 14.3242731,15.2371519 L9.03007346,10.3841355 L3.7071045,15.7071045 Z"
                                fill="#000000"
                                fillRule="nonzero"
                                transform="translate(9.000001, 11.999997) scale(-1, -1) rotate(90.000000) translate(-9.000001, -11.999997)"
                              />
                            </g>
                          </svg>
                          {/*end::Svg Icon*/}
                        </span>
                        Previous
                      </button>
                    </div>
                    <div>
                      <button
                        className="btn btn-primary font-weight-bolder font-size-h6 pl-8 pr-4 py-4 my-3"
                        data-wizard-type="action-submit"
                        type="submit"
                        id="kt_login_signup_form_submit_button"
                      >
                        Submit
                        <span className="svg-icon svg-icon-md ml-2">
                          {/*begin::Svg Icon | path:assets/media/svg/icons/Navigation/Right-2.svg*/}
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
                              <polygon points="0 0 24 0 24 24 0 24" />
                              <rect
                                fill="#000000"
                                opacity="0.3"
                                transform="translate(8.500000, 12.000000) rotate(-90.000000) translate(-8.500000, -12.000000)"
                                x="7.5"
                                y="7.5"
                                width={2}
                                height={9}
                                rx={1}
                              />
                              <path
                                d="M9.70710318,15.7071045 C9.31657888,16.0976288 8.68341391,16.0976288 8.29288961,15.7071045 C7.90236532,15.3165802 7.90236532,14.6834152 8.29288961,14.2928909 L14.2928896,8.29289093 C14.6714686,7.914312 15.281055,7.90106637 15.675721,8.26284357 L21.675721,13.7628436 C22.08284,14.136036 22.1103429,14.7686034 21.7371505,15.1757223 C21.3639581,15.5828413 20.7313908,15.6103443 20.3242718,15.2371519 L15.0300721,10.3841355 L9.70710318,15.7071045 Z"
                                fill="#000000"
                                fillRule="nonzero"
                                transform="translate(14.999999, 11.999997) scale(1, -1) rotate(90.000000) translate(-14.999999, -11.999997)"
                              />
                            </g>
                          </svg>
                          {/*end::Svg Icon*/}
                        </span>
                      </button>
                      <button
                        type="button"
                        className="btn btn-primary font-weight-bolder font-size-h6 pl-8 pr-4 py-4 my-3"
                        data-wizard-type="action-next"
                      >
                        Next
                        <span className="svg-icon svg-icon-md ml-2">
                          {/*begin::Svg Icon | path:assets/media/svg/icons/Navigation/Right-2.svg*/}
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
                              <polygon points="0 0 24 0 24 24 0 24" />
                              <rect
                                fill="#000000"
                                opacity="0.3"
                                transform="translate(8.500000, 12.000000) rotate(-90.000000) translate(-8.500000, -12.000000)"
                                x="7.5"
                                y="7.5"
                                width={2}
                                height={9}
                                rx={1}
                              />
                              <path
                                d="M9.70710318,15.7071045 C9.31657888,16.0976288 8.68341391,16.0976288 8.29288961,15.7071045 C7.90236532,15.3165802 7.90236532,14.6834152 8.29288961,14.2928909 L14.2928896,8.29289093 C14.6714686,7.914312 15.281055,7.90106637 15.675721,8.26284357 L21.675721,13.7628436 C22.08284,14.136036 22.1103429,14.7686034 21.7371505,15.1757223 C21.3639581,15.5828413 20.7313908,15.6103443 20.3242718,15.2371519 L15.0300721,10.3841355 L9.70710318,15.7071045 Z"
                                fill="#000000"
                                fillRule="nonzero"
                                transform="translate(14.999999, 11.999997) scale(1, -1) rotate(90.000000) translate(-14.999999, -11.999997)"
                              />
                            </g>
                          </svg>
                          {/*end::Svg Icon*/}
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