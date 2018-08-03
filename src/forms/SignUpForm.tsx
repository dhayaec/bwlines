import * as React from 'react';
import * as Yup from 'yup';
import { withFormik, FormikProps, Form, Field } from 'formik';
import { renderError } from '../ui/renderError';

interface SignUpFormProps {
  title: string;
}

interface SignUpFormState {}

interface FormValues {
  email: string;
  password: string;
}

const spacing: React.CSSProperties = {
  padding: 10,
  margin: 5,
  width: '100%',
};

class FormComponent extends React.PureComponent<
  SignUpFormProps & FormikProps<FormValues>,
  SignUpFormState
> {
  public render(): JSX.Element {
    const { touched, errors, isSubmitting, title } = this.props;
    return (
      <Form style={{ width: 500, margin: 0 }} onChange={this.onChange}>
        <h1>{title}</h1>
        <Field style={spacing} type="text" name="email" />
        {renderError(errors, touched, 'email')}
        <br />
        <Field style={spacing} type="password" name="password" />
        {renderError(errors, touched, 'password')}
        <br />
        <button style={spacing} type="submit" disabled={isSubmitting}>
          Register
        </button>
      </Form>
    );
  }
  private onChange = () => {
    const { setSubmitting } = this.props;
    setSubmitting(false);
  }
}

interface SignUpFormProps {
  initialEmail?: string;
  title: string;
}

const SignUpForm = withFormik<SignUpFormProps, FormValues>({
  mapPropsToValues: props => {
    return {
      email: props.initialEmail || '',
      password: '',
    };
  },

  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email('Invalid Email address')
      .required('Enter a valid email address'),
    password: Yup.string()
      .required('Enter a valid password')
      .min(6, 'Password should be 6 chars long'),
  }),

  handleSubmit: values => {
    console.log(values);
  },
})(FormComponent);

export default SignUpForm;
