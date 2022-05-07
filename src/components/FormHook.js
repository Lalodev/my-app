import React from 'react';
import { useForm } from 'react-hook-form';

const FormHook = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data, e) => {
    console.log(data);
    e.target.reset();
  };

  //console.log(watch('example')); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input
        defaultValue="test"
        {...register('example')}
        className="form-control my-2"
      />

      {/* include validation with required or other standard HTML validation rules */}
      <input
        {...register('exampleRequired', { required: true })}
        className="form-control my-2"
      />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}

      <input type="submit" className="btn btn-primary" />
    </form>
  );
};

export default FormHook;
