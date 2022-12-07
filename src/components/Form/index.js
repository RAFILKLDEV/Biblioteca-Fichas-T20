import './form.css';
import {Link} from 'react-router-dom';

function Form(){
   return(
      <section className={'login'}>
         <div className={'login__bg'}></div>
         <div className={'login__form'}>
            <form>
               <h4>Login</h4>
               <div>
                  <label htmlFor={'email'}>E-mail</label>
                  <input type={'email'} id={'email'} />
               </div>
               <div>
                  <label htmlFor={'senha'}>Senha</label>
                  <input type={'password'} id={'senha'} />
               </div>
               <Link to={'/Fichas'} ><button>Entrar</button></Link>
            </form>
            <form>
               <h4>Cadastro</h4>
               <div>
                  <label htmlFor={'apelido'}>Apelido</label>
                  <input type={'text'} id={'apelido'} />
               </div>
               <div>
                  <label htmlFor={'email-cadastro'}>E-mail</label>
                  <input type={'email'} id={'email-cadastro'} />
               </div>
               <div>
                  <label htmlFor={'senha-cadastro'}>Senha</label>
                  <input type={'password'} id={'senha-cadastro'} />
               </div>
               <div>
                  <label htmlFor={'senha-confirma'}>Confirme a senha</label>
                  <input type={'password'} id={'senha-confirma'} />
               </div>
               <button>Entrar</button>
            </form>

         </div>
      </section>
   );
}

export default Form;