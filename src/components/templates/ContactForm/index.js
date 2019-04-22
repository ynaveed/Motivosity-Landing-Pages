import React from 'react';
import { render } from 'react-dom';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import classnames from 'classnames';
import TextInput from '../../atoms/Input';
import TextArea from '../../atoms/TextArea';

const formikEnhancer = withFormik({
  validationSchema: Yup.object().shape({
    firstName: Yup.string().required('First name is required.'),
    lastName: Yup.string().required('Last name is required.'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required!'),
    phone: Yup.string().required('Phone is required!'),
    company: Yup.string().required('Company is required!'),
  }),

  mapPropsToValues: ({ user }) => ({
    ...user,
  }),
  handleSubmit: (payload, { setSubmitting }) => {
    alert(payload.email);
    setSubmitting(false);
  },
  displayName: 'MyForm',
});

const flexProperty = { flex: '1 1 50%' };
const agreedStyle = {
  height: '45px',
  textAlign: 'left',
  margin: '6px 0px',
  fontSize: '12px',
  fontWeight: '300',
};

const MyForm = props => {
  const {
    values,
    touched,
    errors,
    dirty,
    handleChange,
    handleBlur,
    handleSubmit,
    handleReset,
    isSubmitting,
  } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div className="grid">
        <TextInput
          id="firstName"
          type="text"
          label="First Name"
          error={touched.firstName && errors.firstName}
          value={values.firstName}
          onChange={handleChange}
          onBlur={handleBlur}
          className="grid-cell"
          style={flexProperty}
        />
        <TextInput
          id="lastName"
          type="text"
          label="Last Name"
          error={touched.lastName && errors.lastName}
          value={values.lastName}
          onChange={handleChange}
          onBlur={handleBlur}
          className="grid-cell marginLeft"
          style={flexProperty}
        />
      </div>
      <div class="grid">
        <TextInput
          id="email"
          type="email"
          label="Email"
          error={touched.email && errors.email}
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          className="grid-cell"
          style={flexProperty}
        />
        <TextInput
          id="phone"
          type="text"
          label="Phone"
          error={touched.phone && errors.phone}
          value={values.phone}
          onChange={handleChange}
          onBlur={handleBlur}
          className="grid-cell marginLeft"
          style={flexProperty}
        />
      </div>
      <div class="grid">
        <TextInput
          id="company"
          type="text"
          label="Company"
          error={touched.company && errors.company}
          value={values.company}
          onChange={handleChange}
          onBlur={handleBlur}
          className="grid-cell"
          style={flexProperty}
        />
        <TextInput
          id="estimatedEmployeeCount"
          type="text"
          label="Employee Count"
          error={
            touched.estimatedEmployeeCount && errors.estimatedEmployeeCount
          }
          value={values.estimatedEmployeeCount}
          onChange={handleChange}
          onBlur={handleBlur}
          className="grid-cell marginLeft"
          style={flexProperty}
        />
      </div>
      <div class="grid">
        <TextArea
          id="txtNoteFooter"
          label="Message"
          error={
            touched.estimatedEmployeeCount && errors.estimatedEmployeeCount
          }
          value={values.estimatedEmployeeCount}
          onChange={handleChange}
          onBlur={handleBlur}
          className="grid-cell"
        />
      </div>
      <div class="grid row-orient nowrap" style={agreedStyle}>
        <div class="grid-cell">
          <span style={{ display: 'inline-block', width: ' 35px' }}>
            <input
              type="radio"
              name="subscribed"
              ng-model="leads.subscribed"
              value="true"
              style={{ height: 'auto' }}
            />
          </span>
          <span>I wish to subscribe to Motivosity's newsletter</span>
        </div>
        <div class="grid-cell">
          By registering, I confirm that I have read and agree to the{' '}
          <a href="https://www.motivosity.com/legal/privacy.html">
            privacy policy
          </a>
        </div>
      </div>
      <div class="footer-form-button-section">
        <div class="center">
          <a class="btn large blue sign-up-btn" style={{ marginTop: '10px' }}>
            <div class="loader" style={{ display: 'none' }} />SUBMIT
          </a>
        </div>
      </div>
    </form>
  );
};

const MyEnhancedForm = formikEnhancer(MyForm);

export default MyEnhancedForm;
