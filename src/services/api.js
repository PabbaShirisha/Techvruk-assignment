export const getComponents = () => {
  return Promise.resolve([
    { id: 1, name: "Resistor", x: 120, y: 80 },
    { id: 2, name: "Capacitor", x: 300, y: 150 },
    { id: 3, name: "Diode", x: 220, y: 220 },
    { id: 4, name: "Transistor", x: 400, y: 100 }
  ]);
};