import { FormikErrors, FormikTouched, FormikValues } from 'formik';
import * as React from 'react';

const errorStyle: React.CSSProperties = {
  color: 'red',
};

export const renderError = (
  errors: FormikErrors<FormikValues>,
  touched: FormikTouched<FormikValues>,
  field: string
) => {
  if (touched[field] && errors[field]) {
    return <div style={errorStyle}>{errors[field]}</div>;
  }
  return null;
};
