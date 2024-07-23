import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { useTheme } from '@emotion/react';

const { height, width } = Dimensions.get('window');

const icons = {
  "Prendedores de Roupa": "../assets/pregador.png",
  "Encaixe Certo": "../assets/quebra.png",
  "Corte Criativo": "../assets/tesoura.png",
  "Jogo da Memoria": "../assets/cartas.png",
};

const ConsultaCard = ({ title }) => {
  const theme = useTheme();
  const iconName = icons[title] 

  return (
    <View style={[styles.card, { backgroundColor: theme.colors.primary }]}>
      <View style={styles.textContainer}>
        <Text style={[styles.title, { color: theme.colors.surface }]}>{title}</Text>
      </View>
      <Image source={require(iconName)} size={50} color={theme.colors.surface} style={styles.icon} />

    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,  // Borda mais arredondada
    padding: width * 0.05,  // Padding baseado em percentual da largura
    marginVertical: height * 0.01,  // Margem vertical baseada em percentual da altura
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    height: height * 0.15,  // 15% da altura da tela
    width: '100%',
  },
  icon: {
    marginLeft: 10,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ConsultaCard;
