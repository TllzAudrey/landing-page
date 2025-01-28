// ReusableForm.js
import React from 'react';

const ReusableForm = ({ fields, onSubmit, lien,titre_formulaire, action, method}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });
    onSubmit(data);
  };

  return (
    <section id={lien} class="cont-formulaire" >
      <h1>{titre_formulaire}</h1>
      <form onSubmit={handleSubmit} action={action} method={method} id="cont-formulaire">
        {fields.map((field, index) => {
          switch (field.type) {
            case 'text':
              return (
                <div key={index} class="Inputs" id="input">
                  <label htmlFor={field.name}>{field.label}</label>
                  <input type="text" name={field.name} id={field.name} required={field.required} />
                </div>
              );
            case 'button':
              return (
                <div key={index} class="Inputs" id="button">
                  <button type="submit">{field.label}</button>
                </div>
              );
            case 'select':
              return (
                <div key={index} class="Inputs" id="select">
                  <label htmlFor={field.name}>{field.label}</label>
                  <select name={field.name} id={field.name} required={field.required}>
                    {field.options.map((option, i) => (
                      <option key={i} value={option.value}>{option.label}</option>
                    ))}
                  </select>
                </div>
              );
            default:
              return null;
          }
        })}
      </form>
    </section>
  );
};

export default ReusableForm;
