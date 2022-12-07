import './form.css';
import {Link} from 'react-router-dom';

function Form(){
   return(
      <section className={'login'}>
         <div className={'login__bg'}></div>
         <div className={'login__form'}>
            <form className={'form__container'}>
               <h4 className={'form__title'}>Login</h4>
               <div>
                  <label className={'form__label'} htmlFor={'email'}>E-mail</label>
                  <input type={'email'} id={'email'} />
               </div>
               <div>
                  <label className={'form__label'} htmlFor={'senha'}>Senha</label>
                  <input type={'password'} id={'senha'} />
               </div>
               <button className={'form__button'}><Link to={'/Fichas'} >Entrar</Link></button>
            </form>
            <form className={'form__container'}>
               <h4 className={'form__title'}>Cadastro</h4>
               <div>
                  <label className={'form__label'} htmlFor={'apelido'}>Apelido</label>
                  <input type={'text'} id={'apelido'} />
               </div>
               <div>
                  <label className={'form__label'} htmlFor={'email-cadastro'}>E-mail</label>
                  <input type={'email'} id={'email-cadastro'} />
               </div>
               <div>
                  <label className={'form__label'} htmlFor={'senha-cadastro'}>Senha</label>
                  <input type={'password'} id={'senha-cadastro'} />
               </div>
               <div>
                  <label className={'form__label'} htmlFor={'senha-confirma'}>Confirme a senha</label>
                  <input type={'password'} id={'senha-confirma'} />
               </div>
               <button className={'form__button'}>Entrar</button>
            </form>

         </div>
      </section>
   );
}

export default Form;