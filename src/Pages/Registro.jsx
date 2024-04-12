import {useForm} from 'react-hook-form';
import {create} from '../Services/authService';
import {useNavigate } from 'react-router-dom';

const Registro = () => {
    const { 
        register, 
        handleSubmit, 
        watch, 
        formState: { errors } 
    } = useForm({mode: "onChange"});

    const navigate = useNavigate();

    const onSubmit = async data => {
        try {
            await create(data);
            navigate("/login")
        } catch (e) {
            console.log(e);
            window.alert("Error al Registrarse.");
        }
    };

    return(
        <div>
            <form className="formulario-wrapper" onSubmit={handleSubmit(onSubmit)}>
                <h3>Registro</h3>
                <label>Correo Electrónico </label>
                <input type="text" {...register("email", {required: true})}/>
                {
                    errors?.email && (<div>El campo es Obligatorio</div>)
                }

                <label>Nombre de Usuario: </label>
                <input type="text" {...register("username", {required: true})}/>
                {
                    errors?.username && (<div>El campo es Obligatorio</div>)
                }

                <label>Contraseña:</label>
                <input type="password" {...register("password", {required: true, minLength: 6})}/>
                {
                    errors?.password?.type === "minLength" && (<div>La longitud mínima de la contraseña debe de ser de 6 Caracteres</div>)
                }
                {
                    errors?.password?.type === "required" && (<div>El campo es Obligatorio</div>)
                }

                <label>Vuelva a ingresar su contraseña:</label>
                <input type="password" {...register("confirmarPassword", {required: true, minLength: 6})}/>
                {
                    errors?.password?.type === "minLength" && (<div>La longitud mínima de la contraseña debe de ser de 6 Caracteres</div>)
                }
                {
                    errors?.confirmarPassword && (<div>El campo es Obligatorio</div>)
                }

                
                <br />
                <button type="submit">Confirmar Registro</button>
            </form>
        </div>
    )    
}

export default Registro;