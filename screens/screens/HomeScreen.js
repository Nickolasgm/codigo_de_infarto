import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HomeScreen() {
  const [heartRate, setHeartRate] = useState(70);
  const [spo2, setSpo2] = useState(98);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeartRate(Math.floor(Math.random() * 40) + 60); // entre 60 y 100
      setSpo2(Math.floor(Math.random() * 5) + 95);        // entre 95 y 100
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Datos en Tiempo Real</Text>
      <Text style={styles.data}>Frecuencia cardíaca: {heartRate} BPM</Text>
      <Text style={styles.data}>SpO₂: {spo2}%</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 24, marginBottom: 20 },
  data: { fontSize: 20, marginBottom: 10 },
});
