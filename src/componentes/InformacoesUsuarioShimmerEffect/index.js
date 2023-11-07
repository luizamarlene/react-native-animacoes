import { View, Image } from "react-native";
import styles from "../InformacoesUsuario/styles";
import shimmerGif from "../../assets/shimmer.gif";

export function InformacoesUsuarioShimmerEffect() {
  return (
    <View style={styles.container}>
      <Image source={shimmerGif} style={[styles.foto, {
        overlayColor: 'rgba(239,240,244,1.0)',
      }]} />
      <View style={styles.informacoes}>
        <Image source={shimmerGif} style={{width: 200, height: 20}} />
        <Image source={shimmerGif} style={{ width: 100, height: 20, marginTop: 10 }} />
      </View>
    </View>
  );
}