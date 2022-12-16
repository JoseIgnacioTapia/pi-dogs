import { useState } from 'react';

const URL = 'http://localhost:3001/dogs';

export const useForm = (initialForm, validateForm) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const handleChange = e => {
    if (e.target.name === 'temperaments') {
      setForm({
        ...form,
        temperaments: [...new Set([...form.temperaments, e.target.value])],
      });
    } else {
      setForm({
        ...form,
        [e.target.name]: e.target.value,
      });
    }

    console.log(form);
  };

  const handleBlur = e => {
    handleChange(e);
    setErrors(validateForm(form));
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      await fetch(URL, {
        method: 'POST',
        body: JSON.stringify(form),
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
        },
      });
    } catch (error) {
      setLoading(false);
      setResponse(error.status);
      setForm(initialForm);
    }
  };

  return {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  };
};
