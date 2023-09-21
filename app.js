const calculadora = {
  data() {
    return {
      numero1: "",
      numero2: "",
      operacao: "soma",
      resultado: 0,
    };
  },
  methods: {
    calcularResultado() {
      if (this.operacao === "soma") {
        this.resultado = this.numero1 + this.numero2;
      } else if (this.operacao === "subtracao") {
        this.resultado = this.numero1 - this.numero2;
      } else if (this.operacao === "multiplicacao") {
        this.resultado = this.numero1 * this.numero2;
      } else if (this.operacao === "divisao") {
        this.resultado = this.numero1 / this.numero2;
      }
    },
  },
};

Vue.createApp(calculadora).mount("#app");
