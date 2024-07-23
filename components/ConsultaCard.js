import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '@emotion/react';

const icons = {
  "Prendedores de Roupa": "md-briefcase",
  "Encaixe Certo": "md-puzzle",
  "Corte Criativo": "md-cut",
  "Jogo da Memoria": "md-book",
};

const ConsultaCard = ({ title }) => {
  const theme = useTheme();
  const iconName = icons[title] || "md-help"; // Default icon if title not found

  return (
    <View style={[styles.card, { backgroundColor: theme.colors.primary }]}>
      <View style={styles.textContainer}>
        <Text style={[styles.title, { color: theme.colors.surface }]}>{title}</Text>
      </View>
      <Ionicons name={iconName} size={50} color={theme.colors.surface} style={styles.icon} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    padding: 20,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    height: 100,
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
