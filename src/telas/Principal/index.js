import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { CardConsulta } from "../../componentes/CardConsulta";
import { InformacoesUsuario } from "../../componentes/InformacoesUsuario";
import { TelaDeFundo } from "../../componentes/TelaDeFundo";
import soniaFoto from "../../assets/Luiza.png";
import pacientes from "./pacientes";
import styles from "./styles";
import Carrosel from "../../componentes/Carrosel";

export default function Principal() {
  const quantidadeConsultas = pacientes.length;

  return (
    <TelaDeFundo>
    <View style={styles.container}>
      <InformacoesUsuario 
        nome="Olá, Luiza"
          detalhes={`Mais ${quantidadeConsultas} consultas hoje`}
        foto={soniaFoto}
      />
      <Text style={styles.texto}>Hoje</Text>

        <FlatList
          data={pacientes}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) =>
            <TouchableOpacity onPress={() => navigation.navigate("Detalhes", item)}>
              <CardConsulta {...item} />
            </TouchableOpacity>
          }
          showsVerticalScrollIndicator={false}
        />
    </View> 
    </TelaDeFundo>
  );
}