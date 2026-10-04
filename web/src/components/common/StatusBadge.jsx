const StatusBadge = ({ status, variant = 'primary' }) => {
  return (
    <span className={`badge bg-${variant}`}>
      {status}
    </span>
  );
};

export default StatusBadge;
