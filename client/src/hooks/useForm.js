import { useState } from 'react';

const URL = 'http://localhost:3001/dogs';

export const useForm = (initialForm, validateForm) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const handleChange = e => {
    const newValues =
      e.target.name === 'temperaments'
        ? {
            ...form,
            temperaments: [...new Set([...form.temperaments, e.target.value])],
          }
        : {
            ...form,
            [e.target.name]: e.target.value,
          };

    setForm(newValues);
  };

  const handleBlur = e => {
    handleChange(e);
    setErrors(validateForm(form));
  };

  const handleDeleteTemperament = temp => {
    const newArr = form.temperaments.filter(t => t !== temp);

    setForm({
      ...form,
      temperaments: newArr,
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    if (Object.keys(validateForm(form)).length === 0) {
      setLoading(true);

      try {
        await fetch(URL, {
          method: 'POST',
          body: JSON.stringify(form),
          headers: {
            Accept: 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
          },
        });
        setLoading(false);
        setResponse(true);
        setTimeout(() => setResponse(false), 5000);
        setForm(initialForm);
      } catch (error) {
        setLoading(false);
        setResponse(error.status);
        setForm(initialForm);
      }
    }
  };

  return {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleDeleteTemperament,
    handleSubmit,
  };
};
