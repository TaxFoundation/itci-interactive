import React from 'react';
import styled from 'styled-components';

import { OrangeButton } from './Button';

const FieldsContainer = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template: repeat(3, auto) / 1fr;

  @media screen and (min-width: 700px) {
    grid-template: auto / repeat(3, 1fr);
  }
`;

const Title = styled.h2`
  color: ${props => props.theme.orange};
  font-family: ${props => props.theme.fontFamilies.oswald};
  font-size: 2rem;
  margin: 1rem 0;
  text-align: center;
`;

const Label = styled.label`
  display: block;
`;

const TextInput = styled.input`
  border: 1px solid ${props => props.theme.borderColor};
  border-radius: 4px;
  font-family: ${props => props.theme.fontFamilies.lato};
  font-size: 1rem;
  line-height: 1.5;
  padding: 0.5rem;
  width: 100%;

  &:hover,
  &:focus {
    border: 1px solid ${props => props.theme.orange};
    color: ${props => props.theme.orange};
  }
`;

const Select = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: ${props => props.theme.white};
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAh0lEQVQ4T93TMQrCUAzG8V9x8QziiYSuXdzFC7h4AcELOPQAdXYovZCHEATlgQV5GFTe1ozJlz/kS1IpjKqw3wQBVyy++JI0y1GTe7DCBbMAckeNIQKk/BanALBB+16LtnDELoMcsM/BESDlz2heDR3WePwKSLo5eoxz3z6NNcFD+vu3ij14Aqz/DxGbKB7CAAAAAElFTkSuQmCC');
  background-repeat: no-repeat;
  background-position: 98% center;
  border: 1px solid ${props => props.theme.borderColor};
  border-radius: 4px;
  color: ${props => props.theme.color};
  cursor: pointer;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  margin: 0 0 0.5rem;
  padding: 0.5rem;
  text-align: center;
  transition: background-color 0.1s ease-in, border 0.1s ease-in,
    color 0.1s ease-in;
  width: 100%;

  &:hover,
  &:focus {
    border: 1px solid ${props => props.theme.orange};
    color: ${props => props.theme.orange};
  }
`;

const Everything = styled.div`
  background-color: ${props => props.theme.lightOrange};
  margin: 0.5rem 0;
  padding: 1rem;
`;

const Disclaimer = styled.p`
  color: ${props => props.theme.borderColor};
  font-style: italic;
  margin: 0.5rem 0;

  a {
    color: ${props => props.theme.borderColor};
  }
`;

const MailChimp = () => (
  <div id="mc_embed_signup">
    <form
      action="https://TaxFoundation.us1.list-manage.com/subscribe/post?u=fefb55dc846b4d629857464f8&amp;id=6c6b782bd7"
      method="post"
      id="mc-embedded-subscribe-form"
      name="mc-embedded-subscribe-form"
      className="validate"
      target="_blank"
      noValidate
    >
      <div id="mc_embed_signup_scroll">
        <Title>Subscribe to the Tax Foundation's Global Updates</Title>
        <FieldsContainer>
          <div className="mc-field-group">
            <Label htmlFor="mce-FNAME">First Name</Label>
            <TextInput
              type="text"
              value=""
              name="FNAME"
              className="required"
              id="mce-FNAME"
            />
          </div>
          <div className="mc-field-group">
            <Label htmlFor="mce-EMAIL">Email Address</Label>
            <TextInput
              type="email"
              value=""
              name="EMAIL"
              className="required email"
              id="mce-EMAIL"
            />
          </div>
          <div className="mc-field-group">
            <Label htmlFor="mce-COUNTRY">Country</Label>
            <Select name="COUNTRY" className="required" id="mce-COUNTRY">
              <option value=""></option>
              <option value="The United States">The United States</option>
              <option value="Aaland Islands">Aaland Islands</option>
              <option value="Afghanistan">Afghanistan</option>
              <option value="Albania">Albania</option>
              <option value="Algeria">Algeria</option>
              <option value="American Samoa">American Samoa</option>
              <option value="Andorra">Andorra</option>
              <option value="Angola">Angola</option>
              <option value="Anguilla">Anguilla</option>
              <option value="Antarctica">Antarctica</option>
              <option value="Antigua And Barbuda">Antigua And Barbuda</option>
              <option value="Argentina">Argentina</option>
              <option value="Armenia">Armenia</option>
              <option value="Aruba">Aruba</option>
              <option value="Australia">Australia</option>
              <option value="Austria">Austria</option>
              <option value="Azerbaijan">Azerbaijan</option>
              <option value="The Bahamas">The Bahamas</option>
              <option value="Bahrain">Bahrain</option>
              <option value="Bangladesh">Bangladesh</option>
              <option value="Barbados">Barbados</option>
              <option value="Belarus">Belarus</option>
              <option value="Belgium">Belgium</option>
              <option value="Belize">Belize</option>
              <option value="Benin">Benin</option>
              <option value="Bermuda">Bermuda</option>
              <option value="Bhutan">Bhutan</option>
              <option value="Bolivia">Bolivia</option>
              <option value="Bonaire, Saint Eustatius and Saba">
                Bonaire, Saint Eustatius and Saba
              </option>
              <option value="Bosnia and Herzegovina">
                Bosnia and Herzegovina
              </option>
              <option value="Botswana">Botswana</option>
              <option value="Bouvet Island">Bouvet Island</option>
              <option value="Brazil">Brazil</option>
              <option value="British Indian Ocean Territory">
                British Indian Ocean Territory
              </option>
              <option value="Brunei Darussalam">Brunei Darussalam</option>
              <option value="Bulgaria">Bulgaria</option>
              <option value="Burkina Faso">Burkina Faso</option>
              <option value="Burundi">Burundi</option>
              <option value="Cambodia">Cambodia</option>
              <option value="Cameroon">Cameroon</option>
              <option value="Canada">Canada</option>
              <option value="Cape Verde">Cape Verde</option>
              <option value="The Cayman Islands">The Cayman Islands</option>
              <option value="Central African Republic">
                Central African Republic
              </option>
              <option value="Chad">Chad</option>
              <option value="Chile">Chile</option>
              <option value="China">China</option>
              <option value="Christmas Island">Christmas Island</option>
              <option value="Cocos (Keeling) Islands">
                Cocos (Keeling) Islands
              </option>
              <option value="Colombia">Colombia</option>
              <option value="Comoros">Comoros</option>
              <option value="Congo">Congo</option>
              <option value="Cook Islands">Cook Islands</option>
              <option value="Costa Rica">Costa Rica</option>
              <option value="Cote D'Ivoire">Cote D'Ivoire</option>
              <option value="Croatia">Croatia</option>
              <option value="Cuba">Cuba</option>
              <option value="Curacao">Curacao</option>
              <option value="Cyprus">Cyprus</option>
              <option value="The Czech Republic">The Czech Republic</option>
              <option value="The Democratic Republic of the Congo">
                The Democratic Republic of the Congo
              </option>
              <option value="Denmark">Denmark</option>
              <option value="Djibouti">Djibouti</option>
              <option value="Dominica">Dominica</option>
              <option value="The Dominican Republic">
                The Dominican Republic
              </option>
              <option value="Ecuador">Ecuador</option>
              <option value="Egypt">Egypt</option>
              <option value="El Salvador">El Salvador</option>
              <option value="Equatorial Guinea">Equatorial Guinea</option>
              <option value="Eritrea">Eritrea</option>
              <option value="Estonia">Estonia</option>
              <option value="Ethiopia">Ethiopia</option>
              <option value="The Falkland Islands">The Falkland Islands</option>
              <option value="The Faroe Islands">The Faroe Islands</option>
              <option value="Fiji">Fiji</option>
              <option value="Finland">Finland</option>
              <option value="France">France</option>
              <option value="French Guiana">French Guiana</option>
              <option value="French Polynesia">French Polynesia</option>
              <option value="French Southern Territories">
                French Southern Territories
              </option>
              <option value="Gabon">Gabon</option>
              <option value="Gambia">Gambia</option>
              <option value="Georgia">Georgia</option>
              <option value="Germany">Germany</option>
              <option value="Ghana">Ghana</option>
              <option value="Gibraltar">Gibraltar</option>
              <option value="Greece">Greece</option>
              <option value="Greenland">Greenland</option>
              <option value="Grenada">Grenada</option>
              <option value="Guadeloupe">Guadeloupe</option>
              <option value="Guam">Guam</option>
              <option value="Guatemala">Guatemala</option>
              <option value="Guernsey">Guernsey</option>
              <option value="Guinea">Guinea</option>
              <option value="Guinea-Bissau">Guinea-Bissau</option>
              <option value="Guyana">Guyana</option>
              <option value="Haiti">Haiti</option>
              <option value="Heard and Mc Donald Islands">
                Heard and Mc Donald Islands
              </option>
              <option value="Honduras">Honduras</option>
              <option value="Hong Kong">Hong Kong</option>
              <option value="Hungary">Hungary</option>
              <option value="Iceland">Iceland</option>
              <option value="India">India</option>
              <option value="Indonesia">Indonesia</option>
              <option value="Iran">Iran</option>
              <option value="Iraq">Iraq</option>
              <option value="Ireland">Ireland</option>
              <option value="Isle of Man">Isle of Man</option>
              <option value="Israel">Israel</option>
              <option value="Italy">Italy</option>
              <option value="Jamaica">Jamaica</option>
              <option value="Japan">Japan</option>
              <option value="Jersey  (Channel Islands)">
                Jersey (Channel Islands)
              </option>
              <option value="Jordan">Jordan</option>
              <option value="Kazakhstan">Kazakhstan</option>
              <option value="Kenya">Kenya</option>
              <option value="Kiribati">Kiribati</option>
              <option value="Kuwait">Kuwait</option>
              <option value="Kyrgyzstan">Kyrgyzstan</option>
              <option value="Lao People's Democratic Republic">
                Lao People's Democratic Republic
              </option>
              <option value="Latvia">Latvia</option>
              <option value="Lebanon">Lebanon</option>
              <option value="Lesotho">Lesotho</option>
              <option value="Liberia">Liberia</option>
              <option value="Libya">Libya</option>
              <option value="Liechtenstein">Liechtenstein</option>
              <option value="Lithuania">Lithuania</option>
              <option value="Luxembourg">Luxembourg</option>
              <option value="Macau">Macau</option>
              <option value="Macedonia">Macedonia</option>
              <option value="Madagascar">Madagascar</option>
              <option value="Malawi">Malawi</option>
              <option value="Malaysia">Malaysia</option>
              <option value="Maldives">Maldives</option>
              <option value="Mali">Mali</option>
              <option value="Malta">Malta</option>
              <option value="The Marshall Islands">The Marshall Islands</option>
              <option value="Martinique">Martinique</option>
              <option value="Mauritania">Mauritania</option>
              <option value="Mauritius">Mauritius</option>
              <option value="Mayotte">Mayotte</option>
              <option value="Mexico">Mexico</option>
              <option value="The Federated States of Micronesia">
                The Federated States of Micronesia
              </option>
              <option value="The Republic of Moldova">
                The Republic of Moldova
              </option>
              <option value="Monaco">Monaco</option>
              <option value="Mongolia">Mongolia</option>
              <option value="Montenegro">Montenegro</option>
              <option value="Montserrat">Montserrat</option>
              <option value="Morocco">Morocco</option>
              <option value="Mozambique">Mozambique</option>
              <option value="Myanmar">Myanmar</option>
              <option value="Namibia">Namibia</option>
              <option value="Nauru">Nauru</option>
              <option value="Nepal">Nepal</option>
              <option value="The Netherlands">The Netherlands</option>
              <option value="The Netherlands Antilles">
                The Netherlands Antilles
              </option>
              <option value="New Caledonia">New Caledonia</option>
              <option value="New Zealand">New Zealand</option>
              <option value="Nicaragua">Nicaragua</option>
              <option value="Niger">Niger</option>
              <option value="Nigeria">Nigeria</option>
              <option value="Niue">Niue</option>
              <option value="Norfolk Island">Norfolk Island</option>
              <option value="North Korea">North Korea</option>
              <option value="The Northern Mariana Islands">
                The Northern Mariana Islands
              </option>
              <option value="Norway">Norway</option>
              <option value="Oman">Oman</option>
              <option value="Pakistan">Pakistan</option>
              <option value="Palau">Palau</option>
              <option value="Palestine">Palestine</option>
              <option value="Panama">Panama</option>
              <option value="Papua New Guinea">Papua New Guinea</option>
              <option value="Paraguay">Paraguay</option>
              <option value="Peru">Peru</option>
              <option value="Philippines">Philippines</option>
              <option value="Pitcairn">Pitcairn</option>
              <option value="Poland">Poland</option>
              <option value="Portugal">Portugal</option>
              <option value="Puerto Rico">Puerto Rico</option>
              <option value="Qatar">Qatar</option>
              <option value="The Republic of Kosovo">
                The Republic of Kosovo
              </option>
              <option value="Reunion">Reunion</option>
              <option value="Romania">Romania</option>
              <option value="Russia">Russia</option>
              <option value="Rwanda">Rwanda</option>
              <option value="Saint Kitts and Nevis">
                Saint Kitts and Nevis
              </option>
              <option value="Saint Lucia">Saint Lucia</option>
              <option value="Saint Martin">Saint Martin</option>
              <option value="Saint Vincent and the Grenadines">
                Saint Vincent and the Grenadines
              </option>
              <option value="Samoa (Independent)">Samoa (Independent)</option>
              <option value="San Marino">San Marino</option>
              <option value="Sao Tome and Principe">
                Sao Tome and Principe
              </option>
              <option value="Saudi Arabia">Saudi Arabia</option>
              <option value="Senegal">Senegal</option>
              <option value="Serbia">Serbia</option>
              <option value="Seychelles">Seychelles</option>
              <option value="Sierra Leone">Sierra Leone</option>
              <option value="Singapore">Singapore</option>
              <option value="Sint Maarten">Sint Maarten</option>
              <option value="The Slovak Republic">The Slovak Republic</option>
              <option value="Slovenia">Slovenia</option>
              <option value="The Solomon Islands">The Solomon Islands</option>
              <option value="Somalia">Somalia</option>
              <option value="South Africa">South Africa</option>
              <option value="The South Georgia and the South Sandwich Islands">
                The South Georgia and the South Sandwich Islands
              </option>
              <option value="South Korea">South Korea</option>
              <option value="South Sudan">South Sudan</option>
              <option value="Spain">Spain</option>
              <option value="Sri Lanka">Sri Lanka</option>
              <option value="St. Helena">St. Helena</option>
              <option value="St. Pierre and Miquelon">
                St. Pierre and Miquelon
              </option>
              <option value="Sudan">Sudan</option>
              <option value="Suriname">Suriname</option>
              <option value="Svalbard and Jan Mayen Islands">
                Svalbard and Jan Mayen Islands
              </option>
              <option value="Swaziland">Swaziland</option>
              <option value="Sweden">Sweden</option>
              <option value="Switzerland">Switzerland</option>
              <option value="Syria">Syria</option>
              <option value="Taiwan">Taiwan</option>
              <option value="Tajikistan">Tajikistan</option>
              <option value="Tanzania">Tanzania</option>
              <option value="Thailand">Thailand</option>
              <option value="Timor-Leste">Timor-Leste</option>
              <option value="Togo">Togo</option>
              <option value="Tokelau">Tokelau</option>
              <option value="Tonga">Tonga</option>
              <option value="Trinidad and Tobago">Trinidad and Tobago</option>
              <option value="Tunisia">Tunisia</option>
              <option value="Turkey">Turkey</option>
              <option value="Turkmenistan">Turkmenistan</option>
              <option value="The Turks &amp; Caicos Islands">
                The Turks &amp; Caicos Islands
              </option>
              <option value="The Turks and Caicos Islands">
                The Turks and Caicos Islands
              </option>
              <option value="Tuvalu">Tuvalu</option>
              <option value="Uganda">Uganda</option>
              <option value="Ukraine">Ukraine</option>
              <option value="The United Arab Emirates">
                The United Arab Emirates
              </option>
              <option value="The United Kingdom">The United Kingdom</option>
              <option value="Uruguay">Uruguay</option>
              <option value="USA Minor Outlying Islands">
                USA Minor Outlying Islands
              </option>
              <option value="Uzbekistan">Uzbekistan</option>
              <option value="Vanuatu">Vanuatu</option>
              <option value="Vatican City State (Holy See)">
                Vatican City State (Holy See)
              </option>
              <option value="Venezuela">Venezuela</option>
              <option value="Vietnam">Vietnam</option>
              <option value="The Virgin Islands (British)">
                The Virgin Islands (British)
              </option>
              <option value="The Virgin Islands (U.S.)">
                The Virgin Islands (U.S.)
              </option>
              <option value="Wallis and Futuna Islands">
                Wallis and Futuna Islands
              </option>
              <option value="Western Sahara">Western Sahara</option>
              <option value="Yemen">Yemen</option>
              <option value="Zambia">Zambia</option>
              <option value="Zimbabwe">Zimbabwe</option>
            </Select>
          </div>
        </FieldsContainer>
        <Everything className="mc-field-group input-group">
          <ul>
            <li>
              <input
                type="radio"
                value="Sign up to receive updates about all of our work in the U.S."
                name="EVERYTHING"
                id="mce-EVERYTHING-0"
              />
              <label htmlFor="mce-EVERYTHING-0">
                Sign up to also receive updates about all of our work in the
                U.S.
              </label>
            </li>
          </ul>
        </Everything>
        <div
          id="mergeRow-gdpr"
          className="mergeRow gdpr-mergeRow content__gdprBlock mc-field-group"
        >
          <div className="content__gdpr">
            <fieldset
              className="mc_fieldset gdprRequired mc-field-group"
              name="interestgroup_field"
            >
              <input
                type="checkbox"
                id="gdpr_37"
                name="gdpr[37]"
                value="Y"
                className="av-checkbox gdpr"
                style={{ display: 'none' }}
                checked
              />
            </fieldset>
          </div>
        </div>
        <div id="mce-responses" className="clear">
          <div
            className="response"
            id="mce-error-response"
            style={{ display: 'none' }}
          ></div>
          <div
            className="response"
            id="mce-success-response"
            style={{ display: 'none' }}
          ></div>
        </div>
        <div
          style={{ position: 'absolute', left: '-5000px' }}
          aria-hidden="true"
        >
          <input
            type="text"
            name="b_fefb55dc846b4d629857464f8_6c6b782bd7"
            tabIndex="-1"
            value=""
          />
        </div>
        <div className="clear">
          <OrangeButton
            type="submit"
            name="subscribe"
            id="mc-embedded-subscribe"
          >
            Subscribe
          </OrangeButton>
        </div>
      </div>
    </form>
    <div className="content__gdprLegal">
      <Disclaimer>
        We use Mailchimp as our marketing platform. By clicking below to
        subscribe, you acknowledge that your information will be transferred to
        Mailchimp for processing.{' '}
        <a
          href="https://mailchimp.com/legal/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn more about Mailchimp's privacy practices here.
        </a>
      </Disclaimer>
    </div>
  </div>
);

export default MailChimp;
