import { FlatList, View, Image, Alert } from "react-native";
import styles from './styles.js'
import { useEffect, useRef, useState } from 'react'

export default function Carrosel({ itens, tempo=1500 }) {
    const carroselRef = useRef(null)
    const [index, setIndex] = useState(0)
    const [direction, setDirection] = useState(1);

    function alteraPosicao() {
    const nextIndex = index + direction;
    if (nextIndex === itens.length || nextIndex === -1) {
      setDirection(direction * -1);
    } else {
      setIndex(nextIndex);
    }
    }

    useEffect(() => {
        carroselRef.current?.scrollToIndex({ index: index, animated: true })
        
        const intervalo = setInterval(() => {
            alteraPosicao()
        }, tempo)

        return () => clearInterval(intervalo)
    }, [index, direction])

    const onScrollToIndexFailed = (info) => {
    Alert('Falha ao rolar para o índice:', info.index);
    };

    return (
        <View style={styles.container}>
            <FlatList
              data={itens}
              horizontal
              onScrollToIndexFailed={onScrollToIndexFailed}
              showsHorizontalScrollIndicator={false}
              keyExtractor={item => item.id}
              renderItem={({ item, index }) => (
                  <Image
                  source={item.imagem}
                      style={[styles.imagem,
                        { marginRight: index === itens.length-1 ? 200 : 0 }
                    ]}
                      resizeMode="contain"

                  />
                  )}
             ref={carroselRef}
            />
        </View>
    )
}
        