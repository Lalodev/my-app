import { Fragment } from 'react';

const Avatar = ({ urlImagen }) => {
  return (
    <Fragment>
      <img src={urlImagen} alt="Image" className="mr-3" />
    </Fragment>
  );
};

export default Avatar;
