import React from 'react';

const Register = () => {
    return (
        <div>
            <div>
                <button className='aline items-center'>Registrate</button>

            </div>
            <input type="checkbox" name="hola" id="" />
            <p className='sm:text-center lg:flex justify-start'>Quiero recibir oferta especiales, recomendaciones perzonalizadas y consejos de aprendizaje</p>
            <div>
                <button className="bg-pink-600 text-white font-bold py-2 px-20">
                    Registrate
                </button>
            </div>
            <div>
                <p className="md:w-2/3 block text-gray-500">Al registarte, aceptas nuestras Condiciones de uso  y nuestras Política de privacidad </p>
                <p>
                    ¿Ya tienes una cuenta?
                    <a href="#" style={{ textDecoration: 'underline', color: 'blue' }}>
                        Inicia sesión
                    </a>

                </p>

            </div>

            <div className='flex flex-col h-screen w-full '>
               
                <div className='bg-gray-200 flex-grow'>




                    <div className='p-20'>
                        <button className="bg-blue-500 text-black  py-2 px-10 ">
                            iniciar sesión
                        </button>

                    </div>
                    <div className='py -20 px-10'>
                        <button className="bg-black text-white  py-2 px-10 ">
                            Registro
                        </button>
                    </div>

                    <div className="  flex relative">
                        <h2 className=" top-10 text-2xl font-bold tracking-tight text-blue-900">REGISTRATE Y COMIENZA</h2>

                    </div>

                </div>
            
            </div>
        </div>
    );
};

export default Register;