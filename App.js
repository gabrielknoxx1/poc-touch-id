import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import * as LocalAuthentication from "expo-local-authentication";

export default function App() {
  const [user, setUser] = useState("Não Usuario");
  const [supported, setSupported] = useState(null);

  useEffect(() => {
    LocalAuthentication.supportedAuthenticationTypesAsync()
      .then((sucess) => {
        console.log("🚀 ~ file: App.js ~ line 13 ~ .then ~ sucess", sucess);
        setSupported(true);
      })
      .catch((error) => {
        console.log("🚀 ~ file: App.js ~ line 17 ~ useEffect ~ error", error);
        setSupported(false);
      });
  }, []);

  const handleAuth = () => {
    LocalAuthentication.authenticateAsync({ promptMessage: "asdasd" })
      .then((sucess) => {
        setUser("GAbriel PDG");
      })
      .catch((error) => {
        alert("Deu ruim parsa");
      });
  };
  return (
    <View
      style={{ flex: 1, alignItems: "center", justifyContent: "space-around" }}
    >
      <Text style={{ color: "#000" }}>{user}</Text>
      <TouchableOpacity
        onPress={handleAuth}
        style={{
          paddingHorizontal: 32,
          paddingVertical: 16,
          backgroundColor: "#f10666",
          borderRadius: 5,
        }}
      >
        <Text style={{ color: "#000" }}>Entrar</Text>
      </TouchableOpacity>
      {supported ? (
        <Text style={{ color: "#000" }}>TouchId Habilidado</Text>
      ) : (
        <Text style={{ color: "#000", textAlign: "center" }}>
          Seu Device não possui TouchId Habilitado , ao não fornece suporte ao
          mesmo{" "}
        </Text>
      )}
      <StatusBar style="auto" />
    </View>
  );
}
