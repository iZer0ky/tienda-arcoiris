import {app, auth} from "../Config/firebase";
import {useForm} from 'react-hook-form';
import { login } from "../Services/authService";
import {useNavigate} from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate();

    const { 
        register, 
        handleSubmit, 
        watch, 
        formState: { errors } 
    } = useForm({mode: "onChange"});

    const onSubmit = async data => {
        try {
            await login(data);
            localStorage.setItem("isLogged", true);
            navigate("/", {replace: true});
            window.location.reload();
        } catch (e) {
            console.log(e);
            window.alert("Error al Iniciar Sesión.");
        }
    };

    return(
        <div>
            <form className="formulario-wrapper" onSubmit={handleSubmit(onSubmit)}>
                <h3>Iniciar Sesión</h3>
                <label>Correo Electrónico</label>
                <input type="text" {...register("email", {required: true})}/>

                <label>Contraseña:</label>
                <input type="password" {...register("password", {required: true})}/>

                <br />
                <button type="submit">Iniciar Sesión</button>
            </form>
        </div>
    )    
}

export default Login;