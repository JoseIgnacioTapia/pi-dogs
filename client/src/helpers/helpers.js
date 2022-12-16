export const validationsForm = form => {
  let errors = {};

  if (
    !form.name.trim() ||
    !/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/.test(form.name.trim())
  ) {
    errors.name =
      "El campo 'Nombre' es requerido y puede contener solo letras y espacios en blancos";
  }

  if (!form.minWeight || form.minWeight >= 20 || form.minWeight <= 1) {
    errors.minWeight = "El campo 'Peso min' debe tener un valor entre 1 y 20";
  }

  if (!form.maxWeight || form.maxWeight >= 100 || form.maxWeight <= 1) {
    errors.maxWeight = "El campo 'Peso max' debe tener un valor entre 1 y 100";
  }

  if (!form.minHeight || form.minHeight > 150 || form.minHeight <= 1) {
    errors.minHeight =
      "El campo 'Altura min' debe tener un valor entre 1 y 150";
  }

  if (!form.maxHeight || form.maxHeight >= 170 || form.maxHeight <= 5) {
    errors.maxHeight =
      "El campo 'Altura max' debe tener un valor entre 5 y 170";
  }

  if (!form.lifeSpan || form.lifeSpan >= 25 || form.lifeSpan < 1) {
    errors.lifeSpan =
      "El campo 'Tiempo de vida' debe tener un valor entre 1 y 25";
  }

  if (form.temperaments.length === 0) {
    errors.temperaments = 'Debe asignar al menos un temperamento';
  }

  return errors;
};
