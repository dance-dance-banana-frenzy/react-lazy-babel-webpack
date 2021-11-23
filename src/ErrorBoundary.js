import React from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends React.Component {
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  componentDidCatch(error, errorInfo) {
    // eslint-disable-next-line no-console
    console.log('<ErrorBoundary />::componentDidCatch', error, errorInfo);
  }
  render() {
    const { hasError } = this.state;
    if (hasError) return <div>Error</div>;
    return this.props.children;
  }
}
ErrorBoundary.propTypes = {
  children: PropTypes.node
};

export default ErrorBoundary;