import LoadingSpinner from './LoadingSpinner';

const LoadingState = ({ message = 'Loading content...' }) => {
  return (
    <div className="state-container text-center py-5">
      <LoadingSpinner text={message} />
    </div>
  );
};

export default LoadingState;
