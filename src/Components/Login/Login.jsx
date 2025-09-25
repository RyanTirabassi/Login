import { FaLock, FaUser } from "react-icons/fa"

import (FaUser)

const Login = () => {
  return (
    <div className="container">
        <form>
            <h1>Acesse o sistema</h1>
            
            <div>
            <input type="email" placeholder='E-mail' />
            <FaUser className="icon"/>
            </div>

            <div>
            <input type="password" placeholder='Senha' />
            <FaLock className="icon"/>
            </div>

            <div className="recall-forget">
                <label htmlFor="">
                    <input type="checkbox" /> Lembrar-me
                </label>
                
                <a href="#">Esqueci minha senha</a>
            </div>

            <button>Entrar</button>

            <div className="signup-link">
                <p>
                    Não tem uma conta? <a href="#">Cadastre-se</a>
                </p>
            </div>
        </form>
    </div>
  )
}

export default Login

