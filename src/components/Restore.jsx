import React from 'react';
import { Link } from 'react-router-dom';

const Restore = () => {
    return (
        <div className='restoreContainer sm:text-center'>
            <h2 className='text sm:text-center mb-3  lg:text-center font-extrabold'>¿Has olvidado la contraseña?</h2>
            <input type="text" placeholder='correo electrónico' className='restoreInput sm: w-60 h-10 mb-3' />
            <div className='ButtonRestore '>
                <button className=' buttonRestore sm: w-60 h-10 mb-3'> Restablecer la contraseña </button>

            </div>
            <Link className='linkSesion ' to="/"> *inicia sesión </Link>




        </div>
    );
};

export default Restore;