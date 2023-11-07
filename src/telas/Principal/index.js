import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { CardConsulta } from "../../componentes/CardConsulta";
import { InformacoesUsuario } from "../../componentes/InformacoesUsuario";
import { TelaDeFundo } from "../../componentes/TelaDeFundo";
import soniaFoto from "../../assets/Luiza.png";
import pacientes from "./pacientes";
import styles from "./styles";
import { CardConsultaShimmerEffect } from "../../componentes/CardConsultaShimmerEffect";
import { InformacoesUsuarioShimmerEffect } from "../../componentes/InformacoesUsuarioShimmerEffect";

export default function Principal({ navigation }) {
  const quantidadeConsultas = pacientes.length;

  const [loadingFake, setLoadingFake] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoadingFake(true)
    }, 2000)

  }, [])


  const renderShimmer = () => {
    const shimmerCards = [];
    for (let i = 0; i < 4; i++) {
      shimmerCards.push(<CardConsultaShimmerEffect key={i} />);
    }
    return shimmerCards;
  }

  return (
    <TelaDeFundo>
      <View style={styles.container}>
      {loadingFake ?
        (<>
          <InformacoesUsuarioShimmerEffect />
          {renderShimmer()}
        </>) :
        (<>
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
          </>)
        }
        </View>
    </TelaDeFundo>
  );
}