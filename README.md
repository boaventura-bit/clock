# 🕒✨ Relógio Digital com Previsão do Tempo 🌤️

Seja bem-vindo ao **projeto mais elegante de todos os tempos!** ⏰💫 Este relógio digital não só te mantém no horário, mas também te conta como está o clima, direto da sua localização. E o melhor de tudo? Ele faz isso com **muito estilo**! Cada segundo é uma festa visual, com um fundo que muda conforme o tempo (sol, chuva, nuvens – temos de tudo por aqui!). 🌈☔🌞

---

## 🎯 Funcionalidades Principais

- **🕰️ Relógio em tempo real:** Cada segundo conta, literalmente. E com **numerais retrôs** para te levar de volta ao passado!
- **📅 Data Completa:** Exibe o dia da semana, o dia do mês, e o ano no estilão “22 - 08 - 2024”.
- **🖼️ Fundo Dinâmico:** O plano de fundo muda de acordo com o clima – sol, chuva, nuvens, neve, você escolhe o clima, ele se adapta!
- **📱 Responsividade:** Funciona lindamente no seu desktop, tablet, ou até no seu celular!

---

## 🔧 O que você vai precisar:

- **Chave da API do OpenWeather**: Vai lá no [OpenWeather](https://home.openweathermap.org/users/sign_up), faz uma conta e pega a sua chave. Depois, coloque no nosso código.
- **Geolocalização Ativada**: Permita que o navegador saiba onde você está para que possamos te mostrar o clima (não se preocupe, não somos stalkers!).

---

## 🗂️ Estrutura do Projeto

Aqui está a organização desse pequeno pedaço de céu tecnológico:

```bash
.
├── index.html          # O centro do universo (ou do relógio!)
├── style.css           # O guarda-roupa do relógio (tudo de bom!)
├── script.js           # A mente por trás de tudo (sério, ele faz magia!)
├── img/                # Imagens para combinar com o clima!
│   ├── clear.jpeg      # Céu limpo e solzão!
│   ├── cloudy.jpeg     # Dias nublados? Temos.
│   ├── rainy.jpeg      # Chuva molhada? Também temos!
│   ├── snowy.jpeg      # Neve, para aquele clima de inverno perfeito.
│   └── default.jpeg    # Quando o clima não decide, o padrão assume!
└── QuartzMSRegular.TTF # A fonte Quartz MS, para dar aquele charme retrô!
```

---

## 🚀 Como Colocar para Rodar

1. **Clone o repositório** (vá lá, clone com carinho):
   
   ```bash
   git clone https://github.com/seu-usuario/relogio-digital-frufru.git
   ```

2. **Abra o arquivo `index.html`** no seu navegador. Simples assim!

3. **Configure sua chave API do OpenWeather**:
   No arquivo `script.js`, substitua a linha:
   
   ```javascript
   const apiKey = 'e76a27b9fd4b4fc452f2e9eeb263be64';
   ```
   
   Pela sua chave **super secreta e incrível** do OpenWeather.

4. **Não se esqueça** de deixar o navegador usar sua localização, ou então ele não vai saber qual é o clima por aí! 🌍📍

---

## 🎨 Personalizações

- **Imagens de Fundo:** Quer mudar o estilo? Sinta-se à vontade para personalizar as imagens de fundo. Vá até a pasta `img/` e troque as imagens.
- **Fonte Customizada:** Não curtiu a vibe retrô da `Quartz MS`? Pode trocar pelo que achar melhor! Tudo isso no arquivo `style.css`.

---

## 🛠️ Tecnologias Utilizadas

- **HTML5** para a estrutura. Clássico, né?
- **CSS3** para todo o brilho visual.
- **JavaScript** para trazer o relógio à vida e pegar as informações da API do clima.
- **API de Geolocalização** e **OpenWeather API** para fazer tudo isso acontecer magicamente.

---

## 💡 Ideias de Expansão

Sinta-se à vontade para adicionar novas funcionalidades:
- **Temas noturno/diurno** com base na hora.
- **Animações climáticas** (imagine gotas de chuva caindo na tela!).
- **Previsão de longo prazo**: que tal adicionar os próximos dias?

---

## 👨‍💻 Contribuições

Quer colaborar? Envie seu **pull request** e vamos criar o relógio mais estiloso da web juntos!

---

## 📝 Licença

Distribuído sob a licença MIT. Faça o que quiser, mas lembre-se de dar o crédito! 😄

---

Desenvolvido com muito ❤️ e ☕ por [Carlos Boaventura](https://github.com/boaventura-bit).
