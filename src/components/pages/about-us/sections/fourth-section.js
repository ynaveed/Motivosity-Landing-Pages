import React from 'react';
import PropTypes from 'prop-types';
import MyEnhancedForm from '../../../templates/ContactForm';

import mail from '../../../../img/mail.png';
import phone from '../../../../img/phone.png';

const FourthSection = ({ data }) => {
  const relative = { position: 'relative' };
  const zIndex = { zIndex: '100' };
  const marginZero = { margin: '0' };
  return (
    <div class="about-footer" style={relative}>
      <div class="footer-box flip" id="side-1">
        <div class="footer-wrapper">
          <div class="footer-title">
            <h2>Reach Out</h2>
          </div>
          <div id="getintouchform">
            <div>
              <MyEnhancedForm
                user={{
                  email: '',
                  firstName: '',
                  lastName: '',
                  phone: '',
                  company: '',
                  estimatedEmployeeCount: '',
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div class="footer-thanks flip" id="side-2">
        <div class="thanks-wrapper">
          <h2>Thanks!!!</h2>
        </div>
      </div>
      <div class="grid center color-light-gray footer-bottom">
        <div class="footer-cell">
          <img src={phone} alt="phone" height="15" width="15" />
          <a href="tel:(801) 851-5518">(801) 851-5518</a>
        </div>
        <i class="icon-o" />
        <div class="footer-mail">
          <img src={mail} alt="mail" height="13" width="20" />
          <a href="mailto:Sales@motivosity.com">sales@motivosity.com</a>
        </div>
      </div>
    </div>
  );
};

export default FourthSection;
