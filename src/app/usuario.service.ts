import { Injectable } from '@angular/core';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() { }

  public getUsuario(): Usuario{
    let usuairo = new Usuario()
    usuairo.nome = "Gabriel"
    usuairo.email = "gabriel.playmovi@gmail.com"

    return usuairo
  }

  public listaUsuario(): Usuario[]{
    return  [
      { 
        nome:"Gabriel",
        email:"gabriel.playmovi@gmail.com"
      },
      { 
        nome:"Maria",
        email:"Maria@gmail.com"
      },
      { 
        nome:"João",
        email:"João@gmail.com"
      },
      { 
        nome:"Laura",
        email:"Laura@gmail.com"
      },
      { 
        nome:"Chico",
        email:"Chico@gmail.com"
      },
    ]
  }
}
