import './login.css'

function Login(){
   return(
      <section className={'login'}>
         <div className={'login__bg'}></div>
         <div className={'login__form'}>
            <form>
               <h4>Login</h4>
               <div>
                  <label for={'email'}>E-mail</label>
                  <input type={'email'} id={'email'} />
               </div>
               <div>
                  <label for={'senha'}>Senha</label>
                  <input type={'password'} id={'senha'} />
               </div>
               <button>Entrar</button>
            </form>
            <form>
               <h4>Cadastro</h4>
               <div>
                  <label for={'apelido'}>Apelido</label>
                  <input type={'text'} id={'apelido'} />
               </div>
               <div>
                  <label for={'email-cadastro'}>E-mail</label>
                  <input type={'email'} id={'email-cadastro'} />
               </div>
               <div>
                  <label for={'senha-cadastro'}>Senha</label>
                  <input type={'password'} id={'senha-cadastro'} />
               </div>
               <div>
                  <label for={'senha-confirma'}>Confirme a senha</label>
                  <input type={'password'} id={'senha-confirma'} />
               </div>
               <button>Entrar</button>
            </form>

         </div>
      </section>
   );
}

export default Login;