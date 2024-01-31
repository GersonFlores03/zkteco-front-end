//import DefaultLayout from "../layout/DefaultLayout";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import '../login.css';

//import { useAuth } from "../auth/AuthProvider.tsx";

export default function Login() {
   const [email, setEmail] = useState("");
   const [userpwd, setUserpwd] = useState("");

//   const auth = useAuth();
//   if (auth.isAuthenticated) {
//      return <Navigate to="/dashboard" />;
//   }
   return (
      //      <DefaultLayout>
      <>
         <div className="displayMainFlex">
            <div>
               <h2 className="loginTitleh2">Iniciar sesión en tu cuenta</h2>
            </div>
            <div>
               <img src="" alt="userIcon"></img>
            </div>
            <div>
               <form className="loginForm">
                  {/*<label>eMail:</label>*/}
                  <input
                     className="inputLoginLayout"
                     type="text"
                     placeholder="Correo electrónico"
                     onChange={(e) => setEmail(e.target.value)}
                  />
                  <br></br>

                  {/*<label>Contraseña:</label>*/}
                  <input
                     className="inputLoginLayout"
                     type="password"
                     placeholder="Contraseña"
                     onChange={(e) => setUserpwd(e.target.value)}
                  />
                  <br></br>

                  <button className="buttonLoginLayout">ingresar</button>
                  <br></br>
               </form>
            </div>
            <div>
               <a className="mainLayoutNav" href="">
                  He olvidado su contraseña
               </a>
            </div>
            <div>
               <a className="mainLayoutNav" href="">
                  Iniciar sesión con una cuenta diferente
               </a>
            </div>
            <div>
               <label>¿No tiene una cuenta?</label>
               <a className="mainLayoutNav" href="">
                  Registrate
               </a>
            </div>
            <div>
               <a className="mainLayoutNav" href="">
                  Inicia sesión con tu organización
               </a>
            </div>
         </div>
      </>
      //      </DefaultLayout>
   );
}
