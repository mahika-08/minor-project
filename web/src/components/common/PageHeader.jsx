const PageHeader = ({ title, subtitle, action }) => {
  return (
    <div className="page-header d-flex justify-content-between align-items-center">
      <div>
        <h1 className="h3 mb-1">{title}</h1>
        {subtitle && <p className="text-muted mb-0">{subtitle}</p>}
      </div>
      {action && <div>{action}</div>}
    </div>
  );
};

export default PageHeader;
