import styles from "./styles";
import { View } from "react-native";
import LottieView from "lottie-react-native";
import splash from "../../assets/splash-aluramed.json";

const SplashScreen = ({ navigation }) => {
  
  const irPraOnboarding = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "Onboarding" }],
    })
  }

  return (
    <View style={styles.container}>
      <LottieView
        style={styles.animation}
        source={splash}
        autoPlay
        loop={false}
        onAnimationFinish={() => {irPraOnboarding()}}
      />
    </View>
  );
}

export default SplashScreen;