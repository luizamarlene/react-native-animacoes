import React from "react";
import { View, Image } from "react-native";
import styles from "../CardConsulta/styles";
import shimmerGif from '../../assets/shimmer.gif';

export function CardConsultaShimmerEffect() {
  return (
    <View style={styles.container}>
      <View style={styles.pessoaArea}>
        <Image source={shimmerGif} style={[styles.foto, {
          overlayColor: '#FFF',
        }]
        } />
        <View style={styles.informacoes}>
          <Image source={shimmerGif} style={{ width: 200, height: 22 }} />

          <View style={styles.consultaArea}>
            <Image source={shimmerGif} style={{ width: 150, height: 20, marginTop: 3 }} />
          </View>
        </View>
      </View>
      <View style={styles.informacoesAgendamento}>
        <Image source={shimmerGif} style={{ width: 150, height: 20 }} />
      <View style={styles.botoesArea}>
        <Image source={shimmerGif} style={ [styles.botaoLocalizacao, {overlayColor: '#FFF'}]} />
      </View>
      </View>
    </View>
  );
}