import { View, Text, StyleSheet } from "react-native";
import * as Location from "expo-location";
import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "https://api.openweathermap.org/data/2.5/weather";

const API_KEY = "7580da23727867a6ebc7f187481a00cf";

function App() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    getLocation();
  }, []);

  async function getLocation() {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
      return;
    }
    let location = await Location.getCurrentPositionAsync({});

    const response = await axios.get(API_URL, {
      params: {
        lat: location.coords.latitude,
        lon: location.coords.longitude,
        appid: API_KEY,
        units: "metric",
        lang: "pt_br",
      },
    });
    console.log(response.data);
    setWeather(response.data);
  }

  function getBackgroundColor() {
    if (!weather) return "#6495ED";
    const main = weather.weather[0].main.toLowerCase();
    if (main.includes("rain")) return "#4a7c8e";
    if (main.includes("cloud")) return "#777474";
    if (main.includes("clear")) return "#87CEEB";
    return "#6495ED";
  }

  return (
    <View style={[styles.container, { backgroundColor: getBackgroundColor() }]}>
      {weather ? (
        <>
          <Text style={styles.cityName}>{weather.name}</Text>
          <Text style={styles.temperature}>
            {Math.round(weather.main.temp)}°C
          </Text>
          <Text style={styles.description}>
            {weather.weather[0].description}
          </Text>

          <View style={styles.InfoContainer}>
            <View style={styles.InfoBox}>
              <Text style={styles.infoLabel}>Sensação</Text>
              <Text style={styles.infoValue}>
                {Math.round(weather.main.feels_like)}°C
              </Text>
            </View>

            <View style={styles.InfoBox}>
              <Text style={styles.infoLabel}>Umidade</Text>
              <Text style={styles.infoValue}>
                {Math.round(weather.main.humidity)}%
              </Text>
            </View>

            <View style={styles.InfoBox}>
              <Text style={styles.infoLabel}>Vento</Text>
              <Text style={styles.infoValue}>
                {Math.round(weather.wind.speed)} m/s
              </Text>
            </View>
          </View>
        </>
      ) : (
        <Text style={styles.loadingText}>Carregando clima...</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  cityName: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
  },
  temperature: {
    fontSize: 64,
    color: "#fff",
  },
  description: {
    fontSize: 20,
    color: "#fff",
    marginBottom: 40,
    textTransform: "capitalize",
  },
  InfoContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    paddingHorizontal: 20,
  },
  InfoBox: {
    alignItems: "center",
    backgroundColor: "#rgba(255, 255, 255, 0.31)",
    padding: 10,
    borderRadius: 10,
    minWidth: 80,
  },
  infoLabel: {
    fontSize: 16,
    padding: 10,
    color: "#fff",
    fontWeight: "bold",
    opacity: 0.8,
    marginBottom: 5,
  },
  infoValue: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
  },
  loadingText: {
    fontSize: 20,
    color: "#ffffff",
  },
});

export default App;
