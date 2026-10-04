const LoadingSpinner = ({ text = 'Loading...' }) => {
  return (
    <div className="d-flex align-items-center justify-content-center p-4">
      <div className="spinner-border text-primary me-2" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      {text && <span>{text}</span>}
    </div>
  );
};

export default LoadingSpinner;
