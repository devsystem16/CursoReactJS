import React, { Component, Fragment } from 'react';
class Formulario extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nombre: '',
            apellido: '',
            sexo: '',
        }
    }

    guardarState = (e) => {
            this.setState({
                ...this.state, [e.target.name]: e.target.value
            })
    }


    enviarFOrmulario =(e) =>{
            e.preventDefault();
            this.props.vistaFormulario(this.state);
    }

    render() {
        return (<Fragment>
            <form className="row" onSubmit={this.enviarFOrmulario}>

                <div className="form-group col-6">
                    <input type="text" className="form-control" name="nombre" placeholder="Ingrese nombre"
                        onChange={this.guardarState}
                    />
                </div>

                <div className="form-group col-6">
                    <input type="text" className="form-control" name="apellido" placeholder="Ingrese nombre"
                        onChange={this.guardarState}
                    />
                </div>

                <div className="form-group col-12">
                    <select className="form-control" type="text"
                    name="sexo"
                        onChange={this.guardarState}
                    >
                        <option value="Hombre">Seleccione una opcion</option>
                        <option value="Hombre">Hombre</option>
                        <option value="Mujer">Mujer</option>
                    </select>
                </div>

                <button className="btn btn-primary" type="submit">Enviar</button>





            </form>


        </Fragment>);
    }
}

export default Formulario;