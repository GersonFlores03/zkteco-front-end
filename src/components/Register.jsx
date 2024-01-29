import React from 'react';

const Register = () => {
    return (
        <div>

            <div className='restoreContainer sm:text-center'>
                <h2 className='text sm:text-center text-2xl mb-5 lg:text-center font-bold'>REGISTRATE Y COMIENZA </h2>

                <input type="text" placeholder='nombre completo' className='restoreInput sm: w-80 h-10 mb-5' />
                <div className='ButtonRestore '>
                    <div>
                        <input type="text" placeholder='correo electrónico' className='restoreInput sm: w-80 h-10 mb-5' />
                    </div>
                    <div>
                        <input type="text" placeholder='contraseña' className='restoreInput sm: w-80 h-10 mb-5' />
                    </div>
                    <div className='-ml-80 -mb-5'><input type="checkbox" name="hola" id="" /></div>

                    <div>

                        <p className='md:w-2/4 mx-auto text-xs xl:pr-4 mb-4'>Quiero recibir oferta especiales, recomendaciones perzonalizadas y consejos de aprendizaje</p>
                    </div>




                    <button className=' buttonRestore sm: w-60 h-10 mb-3'> Registrate </button>
                    <div>
                        <p className="md:w-2/3 block text-gray-500 mx-auto mb-3">Al registarte, aceptas nuestras <u>Condiciones de uso</u>  y nuestras <u>Política de privacidad</u> </p>
                        <p>
                            ¿Ya tienes una cuenta?
                            <a href="#" style={{ textDecoration: 'underline', color: 'blue' }}>
                                Inicia sesión
                            </a>

                        </p>
                    </div>
                </div>





            </div>


        </div>

    );
};

export default Register;