import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TypesOfComponents from './src/screens/TypesOfComponents';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <TypesOfComponents/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

/*
tipos de componentes:

1- Presentational components:
  conocido como stateless components (sin estado), presentan los datos por pantalla.

2- Container components:
  conocidos como state components, encargados de realizar llamadas a las API’s externas, 
  conectarse a Redux o establecer la lógica a realizar en función de las acciones que realice el usuario sobre la interfaz.
  retornan un componente de tipo 1.

3- reciben como parámetro un componente y devuelven un nuevo componente:

  ContainerBox -->> componente tipo 2
  AnyBox --> componente tipo 1

  function ContainerBoxHoc(AnyBox) {
  return class ContainerBox extends React.Component {
    constructor() {
      super();
      this.state = { name: “Gerardo” }
    }
    render() {
      return <AnyBox {…this.state} />
    }
  }
}

const ContainerBox = ContainerBoxHoc(Box); -->> es un componente ContainerBox que recibe un componente tipo Box

function SpanBox = props => <span>{props.name}</span>

const OtherContainerBox = ContainerBoxHoc(SpanBox) -->> es otro componente ContainerBox que recibe un componente tipo SpanBox



4- Render props:
  reciben una función a través de las props (la cual devuelve un elemento de React) y que será la que empleen dentro de su propia 
  función render para pintar por pantalla.

  class ContainerBox extends React.Component {
  constructor() {
    super();
    this.state = { name: “Gerardo” }
  }
  render() {
    return this.props.renderBox(this.state);
  }
  }
const Box = props => <div>{props.name}</div> -->> componente tipo 1

const ContainerBoxWithBox = (
<ContainerBox renderBox={state => (<Box {…state} />)} /> -->> en la prop renderBox se pasa una funcion que pinta la info definida 
                                                              en el componente padre
);

https://latteandcode.medium.com/react-4-tipos-de-componentes-para-gobernarlos-a-todos-7c8f5c28e0b0

*/