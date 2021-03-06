import React from 'react'
import Card from '../components/card'
import FormGroup from '../components/form-group'
import {withRouter} from 'react-router-dom'
import UsuarioService from '../app/service/usuarioService'
import { mensagemErro, mensagemSucesso } from '../components/toastr'

class CadastroUsuario extends React.Component{

    state = {
        nome: '',
        email: '',
        senha: '',
        senhaRepeticao: ''
    }

    constructor(){
        super();
        this.service = new UsuarioService();
    }

    cadastrar = () =>{
        const {nome, email, senha, senhaRepeticao } = this.state        
        const usuario = {nome,  email, senha, senhaRepeticao }

        try{
            this.service.validar(usuario);
        }catch(erro){
            const msgs = erro.mensagens;
            msgs.forEach(msg => mensagemErro(msg));
            return false;
        }

        this.service.salvar(usuario)
            .then( response => {
                mensagemSucesso('Usuário cadastrado com sucesso! faça o login para para acessar o sistema.')
                this.props.history.push('/login')
            }).catch( error => {
                mensagemErro(error.response.data)
        })
    }

    cancelar = () => {
        this.props.history.push('/login')
    }

    render(){
        return(
               <Card title='Cadastro de Usuário'>
                   <div className="row">
                       <div className="col-lg-12">
                           <div className="bs-component">
                               <FormGroup label='Nome: *' htmlFor='inputNome'>
                                   <input type='text' 
                                          id='inputNome' 
                                          name='nome' 
                                          placeholder='Nome'
                                          onChange={ e => this.setState ({nome: e.target.value})}
                                          className='form-control' />
                               </FormGroup>
                               <FormGroup label='Email: *' htmlFor='inputEmail'>
                                   <input type='email'
                                           id='inputEmail'
                                           name='email' 
                                           placeholder='Email'
                                           onChange={ e => this.setState ({email: e.target.value})}
                                           className='form-control' />
                               </FormGroup>
                               <FormGroup label='Senha: *' htmlFor='inputSenha'>
                                   <input type='password'
                                           id='inputSenha'
                                           name='senha' 
                                           placeholder='Senha'
                                           onChange={ e => this.setState ({senha: e.target.value})}
                                           className='form-control' />
                               </FormGroup>
                               <FormGroup label='Repita a Senha: *' htmlFor='inputRepitaSenha'>
                                   <input type='password'
                                           id='inputRepitaSenha'
                                           name='senha' 
                                           placeholder='repita sua senha'
                                           onChange={ e => this.setState ({senhaRepeticao: e.target.value})}
                                           className='form-control' />
                               </FormGroup>
                                   <button onClick={this.cadastrar} type="button" className="btn btn-success">Salvar</button>
                                   <button onClick={this.cancelar} type="button" className="btn btn-danger">Cancelar</button>
                             </div>
                         </div>
                     </div>
               </Card>
        )
    }
}

export default withRouter (CadastroUsuario)