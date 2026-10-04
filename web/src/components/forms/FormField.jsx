const FormField = ({ label, type = 'text', id, name, value, onChange, placeholder, required = false, error }) => {
  return (
    <div className="mb-3 text-start">
      {label && <label htmlFor={id} className="form-label">{label} {required && <span className="text-danger">*</span>}</label>}
      <input
        type={type}
        className={`form-control ${error ? 'is-invalid' : ''}`}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
      />
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

export default FormField;
