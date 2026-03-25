

//Eduardo - Scritp para a tela de buscar postos
const portoAlegre = [
  { nome: "Clínica da Família IAPI", distancia_km: 2.3 },
  { nome: "Clínica da Família Álvaro Difini", distancia_km: 4.1 },
  { nome: "Unidade de Saúde Alto Erechim", distancia_km: 1.8 },
  { nome: "Unidade de Saúde Aparício Borges", distancia_km: 3.6 },
  { nome: "Unidade de Saúde Vila Cruzeiro", distancia_km: 2.9 }
];
const canoas = [
  { nome: "UBS Guajuviras", distancia_km: 1.5 },
  { nome: "UBS Mathias Velho", distancia_km: 3.2 },
  { nome: "UBS Niterói", distancia_km: 4.7 },
  { nome: "UBS Rio Branco", distancia_km: 2.6 },
  { nome: "UBS Harmonia", distancia_km: 1.9 }
];
const esteio = [
  { nome: "UBS Centro", distancia_km: 2.4 },
  { nome: "UBS Primavera", distancia_km: 3.8 },
  { nome: "UBS Tamandaré", distancia_km: 1.7 },
  { nome: "UBS Parque Amador", distancia_km: 4.3 },
  { nome: "UBS Santo Inácio", distancia_km: 2.1 }
];
const sapucaiaDoSul = [
  { nome: "UBS Centro", distancia_km: 3.5 },
  { nome: "UBS Vargas", distancia_km: 1.6 },
  { nome: "UBS Capão da Cruz", distancia_km: 4.8 },
  { nome: "UBS Fortuna", distancia_km: 2.7 },
  { nome: "UBS Primor", distancia_km: 3.1 }
];
const saoLeopoldo = [
  { nome: "UBS Centro do Idoso", distancia_km: 2.2 },
  { nome: "UBS Vicentina", distancia_km: 3.9 },
  { nome: "UBS Scharlau", distancia_km: 1.4 },
  { nome: "UBS Feitoria", distancia_km: 4.5 },
  { nome: "UBS Campina", distancia_km: 2.8 }
];
const novoHamburgo = [
  { nome: "UBS Canudos", distancia_km: 3.3 },
  { nome: "UBS Santo Afonso", distancia_km: 1.9 },
  { nome: "UBS Rondônia", distancia_km: 4.2 },
  { nome: "UBS Liberdade", distancia_km: 2.5 },
  { nome: "UBS Primavera", distancia_km: 3.7 }
];

const postosPorCidade = {
  "Porto Alegre": portoAlegre,
  "Canoas": canoas,
  "Esteio": esteio,
  "Sapucaia do Sul": sapucaiaDoSul,
  "São Leopoldo": saoLeopoldo,
  "Novo Hamburgo": novoHamburgo
};


function buscarPostos(){
    cidade = document.getElementById("cidade").value;
    

    switch (cidade) {
        case "Porto Alegre":
            listarPostos(portoAlegre);
            break;
        case "Canoas":
             listarPostos(canoas);
            break;
        case "Esteio":
            listarPostos(esteio);
            break;
        case "Sapucaia do Sul":
             listarPostos(sapucaiaDoSul);
            break;
        case "São Leopoldo":
             listarPostos(saoLeopoldo);
            break;
        case "Novo Hamburgo":
            listarPostos(novoHamburgo);
            break;
    
        default:
            break;
    }


}

function listarPostos(city) {
    document.getElementById("tabposto").hidden = false;
    const resultado = document.getElementById("listaPostos");
    resultado.innerHTML = "";

    

    for (let i = 0; i < city.length; i++) {
        const posto = city[i];

        const tr = document.createElement("tr");

        tr.innerHTML = `
            <td>${posto.nome}</td>
            <td>${posto.distancia_km} km</td>
            <td style="cursor:pointer;" onclick="abrirMapa('${posto.nome}')">🗺️</td>
        `;

        resultado.appendChild(tr);
    }
}


function abrirMapa(nome) {
  const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(nome)}`;
  window.open(url, "_blank");
}

function escondeResultado(){
    document.getElementById("tabposto").hidden = true;
}

//Eduardo  - Fim do script da tela de buscar postos



//Eduardo -- Inicio calcular IMC

function calcularIMC(){
  peso = document.getElementById("peso").value;
  altura = document.getElementById("altura").value;
  classificacao = null;

  imc = peso / (altura*altura);

  //alert(imc.toFixed(2));

  if(imc < 18.5){
    classificacao = "Você esta abaixo do peso";
  }else if(imc>= 18.5 && imc <25){
    classificacao = "Você esta com o peso Ideal";
  }else if(imc >= 25 && imc <30){
    classificacao = "Você esta com sobrepeso";
  }else{
    classificacao = "Você esta com obesidade";
  }
  //alert(classificacao);

  pesoMinimo = 18.5 * (altura * altura);
  pesoMaximo = 24.9 * (altura * altura);

  //alert("Seu peso ideal esta entre" + pesoMinimo.toFixed(2) + " e " + pesoMaximo.toFixed(2) + "kg");

  document.getElementById("imc").innerHTML = "Seu IMC é " + imc.toFixed(2);
  document.getElementById("classificacao").innerHTML = classificacao;
  document.getElementById("pesoIdeal").innerHTML = "Seu peso ideal esta entre " + pesoMinimo.toFixed(2) + " e " + pesoMaximo.toFixed(2) + "kg";

}



//Eduardo -- Fim calcular IMC