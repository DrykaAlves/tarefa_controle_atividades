/**
 * Aluna Adriana Fernandes Alves
 * Atividade 1 da displicina
 * DESENVOLVIMENTO DE APPS MÓVEIS MULTIPLATAFORMA COM TECNOLOGIAS WEB
 * Professor Roberson J. Fernandes Alves
 * 
 */
import React, {Component} from 'react';
import {StyleSheet, Text, View, FlatList, ScrollView, TextInput, Button, Image} from 'react-native';


class Botao extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.styles = StyleSheet.create({
      botao: {
        width: 70,
        height: 20,
        borderColor: '',
        backgroundColor: props.cor,
        borderWidth: 1,
        borderRadius: 5,
        margin: 5
      },

      botaoArea: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },

      botaoTexto: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000000'
      }
    });
  }

  render() {
    return (
      <TouchableOpacity style={this.styles.botao} onPress={this.props.onPress}>
        <View style={this.styles.botaoArea}>
          <Text style={this.styles.botaoTexto}>{this.props.title}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}


export default class App extends Component {
  
  constructor(props) {

    super(props);

    this.state ={
      text: '',
      tarefas:[
        {key: '1', descTarefa: "Atividade 1", professorTarefa:'Roberson', pesoTarefa: '3'},
        {key: '2', descTarefa: "Atividade Final", professorTarefa:'Roberson', pesoTarefa: '7'},
        {key: '3', descTarefa: "Artigo final", professorTarefa:'Otilia', pesoTarefa: '10'},
      ]
    }

    this.inserirTarefa = this.inserirTarefa.bind(this)

  }

  renderItem(obj) {

    return(
    
      <Text style={styles.linha}>

        {obj.item.key} ) {obj.item.descTarefa}  | Professor(a): {obj.item.professorTarefa} | Peso: {obj.item.pesoTarefa}  
      
      </Text>

    );

  }

  inserirTarefa(){

    let state = this.state;

    if ( (state.tarefa != '') && (state.professor != '') && (state.peso != '') && (state.tarefa != undefined) && (state.professor != undefined) && (state.peso != undefined) ) {
 
      if ( (this.state.peso >= 11) || (this.state.peso <= 0) ) {
        alert('Somente valores entre 1 e 10!');
 
      } else {

        let novaTarefa = {
          key: this.state.tarefas.length.toString(),
          descTarefa: this.state.tarefa,
          professorTarefa: this.state.professor,
          pesoTarefa: this.state.peso,

        }

        let tarefas = this.state.tarefas;
        tarefas.push(novaTarefa)
        this.setState({tarefas})

        alert('Tarefa: " ' + this.state.tarefa + ' " inserida!')

        this.limparTela();
      }

    } else {
      alert('Favor preencher todos os dados!');

    }


  }

  limparTela(){

    let state = this.state;
    state.tarefa = '';
    state.professor = '';
    state.peso = '';

    this.setState(state);


  }


    render() {
      return (
        <View style={styles.container}>
         

          <View style={styles.cabecalho}>
            <Text style={styles.textoTopo}>Acadêmica: Adriana F. Alves</Text>
            <Text style={styles.textoTopo}>CONTROLE DE ATIVIDADES</Text>
          </View>

          <View>
            <Text style={styles.textoCorpoTitulo}>Cadastrar</Text>
            
            <TextInput placeholder='Descrição...' style={styles.imput} value={this.state.tarefa} onChangeText={ (tarefa) => {this.setState({tarefa}) } } />

            <View style={styles.viewLinha}>
              <TextInput placeholder='Professor(a)...' style={styles.imput2} value={this.state.professor} onChangeText={ (professor) => {this.setState({professor}) } } />
              <TextInput placeholder='Peso...' style={styles.imput3} value={this.state.peso} onChangeText={ (peso) => {this.setState({peso}) } } keyboardType='numeric' />
            </View>

          </View>

          <View style={styles.viewLinha}>
            <Button onPress={this.inserirTarefa} title="Cadastrar" cor='#0395bf'/> 
            <Button onPress={this.limparTela} title="Limpar" cor='#e0e0be'/> 
          </View>

          <View style={styles.corpo}>
            <ScrollView>
                <Text style={styles.textoCorpoTitulo}>Agenda</Text>
                <FlatList style={styles.lista} data={this.state.tarefas} renderItem={this.renderItem} extraData={this.state} />
            </ScrollView>
          </View>


          <View style={styles.rodape}>
            <Text style={styles.textoRodape}>Pós-Graduação Desenvolvimento Web, </Text> 
            <Text style={styles.textoRodape}>Cloud e Dispositivos Móveis</Text>
          </View>

        </View>
      );
    }
  
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#a6c3cb',
  },

  corpo: {
    marginTop: 10,
  },

  cabecalho: {
    backgroundColor: '#5e8d9a',
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },

  rodape: {
    backgroundColor: '#2b4d57',
    height: 90,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 70,
  },

  textoRodape: {
    fontSize: 15,
    color: 'white'
  },

  textoTopo: {
    fontSize: 20,
    color: '#0a272f',
    fontWeight: 'bold',
  },

  textoCorpo: {
    fontSize: 15,
    color: 'black',
    paddingTop: 15,
    paddingBottom: 10,
  },

  textoCorpoTitulo: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'black'
  },

  lista: {
    marginTop: 24,
  },

  linha: {
    paddingBottom: 10,
    backgroundColor: '#c2dee6',
    marginTop: 5
  },

  imput: {
    backgroundColor: '#e2ebee',
    borderColor: '#587c87',
    borderRadius: 5,
    borderWidth: 3,
    padding: 10,
    margin: 20
  },

  imput2: {
    backgroundColor: '#e2ebee',
    borderColor: '#587c87',
    borderRadius: 5,
    borderWidth: 3,
    padding: 10,
    width: 255,
  },

  imput3: {
    backgroundColor: '#e2ebee',
    borderColor: '#587c87',
    borderRadius: 5,
    borderWidth: 3,
    padding: 10,
    width: 90,
  },

  viewLinha: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 10
  },


});
