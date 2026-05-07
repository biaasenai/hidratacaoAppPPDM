import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function App() {
  const metaDiaria = 2000;
  const [agua, setAgua] = useState<number>(0);
  const [darkmode, setDarkmode] = useState<boolean>(false);

  function beberAgua() {
    setAgua(prev => prev + 250);
  }

  function removerAgua(): void {
    if (agua >= 250) {
      setAgua(prev => prev - 250);
    }
  }

  function resetarAgua(): void {
    setAgua(0);
  }

  const metaAtingida = agua >= metaDiaria;

  return (
    <View style={[
      styles.container,
      darkmode ? styles.darkContainer : styles.lightContainer
    ]}>
      <View style={styles.card}>
        <Text style={[
          styles.titulos,
          darkmode ? styles.darkText : styles.lightText
        ]}>
          💧Controle de Água
        </Text>
        <Text style={[
          styles.meta,
          darkmode ? styles.darkText : styles.lightText
        ]}>
          Meta diária: {metaDiaria} ml
        </Text>
        <View style={styles.valorContainer}>
          <Text style={[
            styles.valor,
            metaAtingida ? styles.metaAtingida : styles.valorNormal,
            darkmode ? styles.darkText : styles.lightText
          ]}>
            {agua} ml
          </Text>
          <Text style={styles.statusText}>
            {metaAtingida ? 'Meta atingida!' : 'Continue bebendo água'}
          </Text>
        </View>
      </View>

      <View style={styles.buttonGroup}>
        <TouchableOpacity style={[
          styles.button,
          darkmode ? styles.buttonDark : styles.buttonLight
        ]} onPress={beberAgua}>
          <Text style={styles.buttonText}>Beber Água</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[
          styles.button,
          darkmode ? styles.buttonDark : styles.buttonLight
        ]} onPress={removerAgua}>
          <Text style={styles.buttonText}>Remover Água</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[
          styles.button,
          darkmode ? styles.buttonDark : styles.buttonLight
        ]} onPress={resetarAgua}>
          <Text style={styles.buttonText}>Resetar Tudo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[
          styles.button,
          darkmode ? styles.buttonDark : styles.buttonLight
        ]} onPress={() => setDarkmode(!darkmode)}>
          <Text style={styles.buttonText}>Modo Dark/Light</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  card: {
    width: '100%',
    borderRadius: 0,
    padding: 24,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 20,
    elevation: 8,
    backgroundColor: 'rgba(175, 230, 255, 0.9)',
  },
  titulos: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  meta: {
    fontSize: 16,
    marginTop: 8,
    textAlign: 'center',
  },
  valorContainer: {
    marginTop: 24,
    alignItems: 'center',
  },
  valor: {
    fontSize: 42,
    fontWeight: 'bold',
  },
  valorNormal: {
    color: '#ffffff',
  },
  metaAtingida: {
    color: '#00ff55',
  },
  statusText: {
    marginTop: 10,
    fontSize: 16,
    color: '#ffffff',
  },
  buttonGroup: {
    width: '100%',
    gap: 12,
  },
  button: {
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 24,
    alignItems: 'center',
  },
  buttonLight: {
    backgroundColor: '#b2d1ff',
  },
  buttonDark: {
    backgroundColor: '#b9bdff',
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  darkContainer: {
    backgroundColor: '#7786cd',
  },
  lightContainer: {
    backgroundColor: '#dbeff4',
  },
  darkText: {
    color: '#fff',
  },
  lightText: {
    color: '#111827',
  },
});