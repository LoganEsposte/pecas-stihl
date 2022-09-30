/*  
    MOTOSSERRAS
*/

class Motosserra {
    constructor(cod0, cod1, cod2, cod3, cod4, cod5, cod6, cod7, cod8, cod9, cod10, cod11, cod12, cod13,
        cod14, cod15, cod16, cod17, cod18, cod19, cod20, cod21) {
        this.name = cod0;
        this.cilindro_com_pistão = cod1;
        this.silenciador = cod2;
        this.sabre = cod3;
        this.corrente_cortada = cod4;
        this.lima = cod5;
        this.filtro_de_ar = cod6;
        this.tampa_tanque_gasolina = cod7;
        this.tampa_tanque_óleo = cod8;
        this.carcaça_do_ventilador_com_arranque = cod9;
        this.tanque_de_óleo = cod10;
        this.tanque_de_combustível = cod11;
        this.cabeçote_de_aspiração = cod12;
        this.mangueira_combustível = cod13;
        this.módulo_de_ignição = cod14;
        this.carburador = cod15;
        this.pinhão_da_corrente = cod16;
        this.carcaça_do_tanque = cod17;
        this.carcaça_do_motor = cod18;
        this.jogo_de_juntas_de_vedação = cod19;
        this.chave_combinada = cod20;
        this.cordão_de_arranque = cod21;
    }
};

const ms170 = new Motosserra('ms170', "1130-020-1207", "1130-140-0600", "3005-000-3905",
    "3610-000-0044", "5605-771-4006", "1130-140-2814", "1130-350-0500", "1130-350-0500",
    "1130-080-2110", "1130-350-4400", "1130-350-0412", "0000-350-3500", "1130-358-7701",
    "1130-400-1302", "1130-120-0606", "1123-640-2003", "-", "1130-020-3033", "0783-830-2000",
    "1129-890-3401", "0000-195-8200");

const ms180 = new Motosserra('ms180', "1130-020-1208", "1130-140-0600", "3005-008-3909",
    "3610-000-0050", "5605-771-4006", "1130-140-2814", "1130-350-0500", "1130-350-0500",
    "1130-080-2114", "1130-350-4400", "1130-350-0412", "0000-350-3500", "", "1130-400-1302",
    "1130-120-0606", "1123-640-2003", "-", "1130-020-3033", "0783-830-2000", "1129-890-3401",
    "0000-195-8200");

const ms210 = new Motosserra('ms210', "1123-020-1221", "1123-140-0611", "3005-000-4809",
    "3523-000-0050", "5605-771-4006", "1123-120-1651", "0000-350-0533", "0000-350-0537",
    "1123-080-2115", "-", "-", "0000-350-3500", "", "0000-400-1306", "1123-120-0628",
    "-", "-", "1123-020-3033", "0783-830-2000", "1129-890-3401", "0000-195-8200");

const ms230 = new Motosserra('ms230', "1123-020-1223", "1123-140-0611", "3005-000-4813",
    "3523-000-0055", "5605-771-4006", "1123-120-1651", "0000-350-0533", "0000-350-0537",
    "1123-080-2115", "-", "-", "0000-350-3500", "", "0000-400-1306", "1123-120-0628",
    "-", "-", "1123-020-3033", "0783-830-2000", "1129-890-3401", "0000-195-8200");

const ms250 = new Motosserra('ms250', "1123-020-1209", "1123-140-0611", "3005-000-4813",
    "3523-000-0055", "5605-771-4006", "1123-120-1651", "0000-350-0533", "0000-350-0537",
    "1123-080-2115", "-", "-", "0000-350-3500", "", "0000-400-1306", "1123-120-0628",
    "-", "-", "1123-020-3033", "0783-830-2000", "1129-890-3401", "0000-195-8200");

const ms260 = new Motosserra('ms260', "1121-020-1217", "1121-140-0604", "3003-008-6813",
    "3639-000-0067", "5605-771-4806", "1121-120-1618", "0000-350-0533", "0000-350-0537",
    "1121-080-2101", "-", "-", "0000-350-3518", "", "0000-400-1300", "1121-120-0621",
    "1121-350-0834", "1121-350-0834", "-", "1121-007-1050", "1129-890-3401", "0000-930-2203");

const ms310 = new Motosserra('ms310', "1127-020-1214", "1127-140-0601", "3003-001-9221",
    "3514-000-0072", "5605-771-5206", "1127-120-1621", "0000-350-0533", "0000-350-0533",
    "1127-080-2108", "-", "-", "0000-350-3518", "", "0000-400-1300", "1127-120-0651",
    "1125-640-2004", "-", "1127-020-3006", "0783-830-2000", "1129-890-3401", "0000-930-2203");

const ms361 = new Motosserra('ms361', "1135-020-1202", "1135-140-0650", "3003-001-9221",
    "3514-000-0072", "5605-771-5206", "1135-120-1600", "0000-350-0533", "0000-350-0533",
    "1135-080-2106", "-", "-", "0000-350-3518", "", "1135-400-1308", "1135-120-0609",
    "1128-007-1000", "1135-350-0823", "-", "1135-007-1050", "1129-890-3401", "1128 190 2900");

const ms382 = new Motosserra('ms382', "1119-020-1209", "1119-140-0602", "3003-001-9221",
    "3514-000-0072", "5605-771-5206", "1119-120-1628", "0000-350-0533", "0000-350-0537",
    "1119-080-2104", "-", "-", "0000-350-3518", "", "1119-400-1300", "1119-120-0613",
    "1128-007-1000", "1119-350-0816", "-", "1119-007-1601", "1129-890-3401", "1128 190 2900");

const ms651 = new Motosserra('ms651', "1144-020-1201", "1144-140-0605", "3003-001-9221",
    "3514-000-0072", "5605-771-5206", "1144-140-4402", "0000-350-0533", "0000-350-0533",
    "1144-080-2102", "-", "-", "0000-350-3518", "", "1144-400-1304", "1144-120-0625",
    "1122-007-1000", "1144-350-0811", "-", "1142-007-1601", "1129-890-3401", "1122-190-2900");

const ms661 = new Motosserra('ms661', "1144-020-1202", "1144-140-0600", "3003-001-9221",
    "3514-000-0072", "5605-771-5206", "1144-140-4402", "0000-350-0533", "0000-350-0533",
    "1144-080-2102", "-", "-", "0000-350-3518", "", "1144-400-1309", "1144-120-0626",
    "1122-007-1000", "1144-350-0811", "-", "1144-007-1601", "1129-890-3401", "1122-190-2900");

/*  
    ROÇADEIRAS
*/

class Rocadeira {
    constructor(cod0, cod1, cod2, cod3, cod4, cod5, cod6, cod7, cod8, cod9, cod10, cod11, cod12, cod13,
        cod14, cod15, cod16, cod17, cod18, cod19, cod20, cod21, cod22, cod23, cod24, cod25) {
        this.name = cod0;
        this.cilindro_com_pistão = cod1;
        this.silenciador = cod2;
        this.virabrequim = cod3;
        this.mola_de_recuo = cod4;
        this.polia = cod5;
        this.filtro_de_ar = cod6;
        this.filtro_adcional = cod7;
        this.tampa_do_tanque_gasolina = cod8;
        this.tampa_do_arranque = cod9;
        this.carcaça_do_tanque = cod10;
        this.volante = cod11;
        this.cabeçote_de_aspiração = cod12;
        this.módulo_de_ignição = cod13;
        this.carburador = cod14;
        this.tambor_da_embreagem = cod15;
        this.jogo_de_juntas_de_vedação = cod16;
        this.chave_combinada = cod17;
        this.eixo_de_acionamento = cod18;
        this.cabo_de_manejo = cod19;
        this.cabo_do_acelerador = cod20;
        this.engrenagem = cod21;
        this.porca_de_segurança = cod22;
        this.prato_giratório = cod23;
        this.carcaça_do_arranque_completa = cod24;
        this.cordão_de_arranque = cod25;
    }
};

const fs38 = new Rocadeira('fs38', "4140-020-1204", "4140-140-0617", "4140-030-0401",
    "4140-190-0601", "4128-195-0400", "4140-124-2800", "-", "4128-350-0505", "-",
    "4232-350-0411", "4140-400-1202", "0000-350-3502", "4140-400-1308", "4140-120-0624",
    "4140-160-2909", "4140-007-1050", "4128-890-3400", "4130-711-3200", "-",
    "4140-180-1750", "-", "-", "-", "4140-190-4009", "1120-195-8200");

const fs55 = new Rocadeira('fs55', "4140-020-1204", "4140-140-0617", "4140-030-0401",
    "4140-190-0601", "4128-195-0400", "4140-124-2800", "-", "4128-350-0505", "-",
    "4232-350-0411", "4140-400-1202", "0000-350-3502", "4140-400-1308", "4140-120-0624",
    "4140-160-2909", "4140-007-1050", "4128-890-3400", "4130-711-3210", "4140-790-1307",
    "4140-180-1109", "4140-641-0300", "4126-642-7600", "4126-713-3100", "4140-190-4009",
    "1120-195-8200");

const fs80 = new Rocadeira('fs80', "4137-020-1203", "4137-140-0603", "4137-030-0401", "-",
    "4137-190-1100 Com mola de recuo", "4137-124-2800", "4137-124-1500", "4128-350-0505",
    "4137-190-0400", "4137-350-0410", "4137-400-1200", "0000-350-3502", "4137-400-1350",
    "4137-350-0410", "4137-160-2900", "0783-830-2000", "4128-890-3400", "4137-711-3202",
    "4137-790-4900", "4137-180-1110", "4180-640-0114", "4126-642-7600", "4126-713-3100",
    "-", "4137-195-8200");

const fs85 = new Rocadeira('fs85', "4137-007-1042", "4137-140-0603", "4137-030-0401", "-",
    "4137-190-1100 com mola de recuo", "4137-124-2801", "4137-124-1501", "4128-350-0505",
    "4137-190-0400", "4137-350-0410", "4137-400-1200", "0000-350-3502", "4137-400-1304",
    "4137-120-0629", "4137-160-2900", "0783-830-2000", "4128-890-3400", "4137-711-3200",
    "4137-790-4900", "4137-180-1110", "4180-640-0114", "4126-642-7600", "4126-713-3100",
    "-", "4137-195-8200");

const fs120 = new Rocadeira('fs120', "4134-020-1218", "sem referencia", "4134-030-0406",
    "4134-190-0601", "4128-195-0400", "4134-141-0300", "-", "4128-350-0505", "-",
    "4134-350-0420", "4134-400-1202", "0000-350-3502", "4134-400-1312", "4134-120-0623",
    "4134-160-2900", "4134-007-1601", "4128-890-3400", "4137-711-3200", "4134-790-4902",
    "4134-180-1113", "4180-640-0114", "4126-642-7600", "4126-713-3100", "4134-080-2103",
    "0000-195-8203");

const fs160 = new Rocadeira('fs160', "4119-020-1203", "4119-140-0605", "4119-030-0400",
    "4116-190-0600", "4119-195-0400", "4119-120-1600", "4119-141-0300", "4116-350-0502",
    "4119-190-0401", "4119-350-0800", "4119-400-1201", "0000-350-3502", "0000-400-1306",
    "4119-120-0602", "4119-160-2906", "4119-007-1052", "4128-890-3400", "4119-711-3201",
    "4140-790-1304", "4119-180-1103", "4128-640-0106", "4119-642-7600", "4119-642-7600",
    "-", "0000-195-8203");

const fs220 = new Rocadeira('fs220', "4119-020-1204", "4119-140-0605", "4119-030-0400",
    "4116-190-0600", "4119-195-0400", "4119-120-1600", "4119-141-0300", "4116-350-0502",
    "4119-190-0401", "4119-350-0800", "4119-400-1201", "0000-350-3502", "0000-400-1306",
    "4119-120-0602", "4119-160-2906", "4119-007-1052", "4128-890-3400", "4119-711-3201",
    "4140-790-1304", "4119-180-1103", "4128-640-0106", "4119-642-7600", "4119-642-7600",
    "-", "0000-195-8203");

const fs290 = new Rocadeira('fs290', "4119-020-1208", "4119-140-0606", "4119-030-0400",
    "4116-190-0600", "4119-195-0400", "4119-120-1606", "4119-141-0300", "4116-350-0502",
    "4119-190-0401", "4119-350-0800", "4119-400-1201", "0000-350-3502", "0000-400-1306",
    "4119-120-0602", "4119-160-2906", "4119-007-1052", "4128-890-3400", "4119-711-3201",
    "4140-790-1304", "4119-180-1103", "4128-640-0106", "4119-642-7600", "4119-642-7600",
    "-", "0000-195-8203");

const fs300 = new Rocadeira('fs300', "4134-020-1211", "4134-140-0613", "4134-030-0406",
    "4134-190-0600", "4128-195-0400", "4134-141-0300", "4128-141-0310", "4128-350-0505",
    "-", "4134-350-0400", "4134-400-1202", "0000-350-3502", "4134-400-1312",
    "4134-120-0623", "4128-160-2900", "4134-007-1050", "4128-890-3400", "4134-711-3200",
    "4128-790-1309", "4128-182-3203", "4128-640-0106", "4119-642-7600", "4119-713-3100",
    "4134-080-2101", "0000-195-8203",);

const fs350 = new Rocadeira('fs350', "4134-020-1219", "4134-140-0613", "4134-030-0406",
    "4134-190-0601", "4128-195-0400", "4134-141-0300", "4128-141-0310", "4128-350-0505",
    "-", "4134-350-0400", "4134-400-1202", "0000-350-3502", "4134-400-1301", "4134-120-0655",
    "4128-160-2900", "4134-007-1050", "4128-890-3400", "4134-711-3200", "4128-790-1309",
    "4128-182-3203", "4128-640-0106", "4119-642-7600", "4119-713-3100", "4134-080-2101",
    "0000-195-8203");

const fs380 = new Rocadeira('fs380', "4134-020-1220", "4134-140-0609", "4134-030-0406",
    "4134-190-0601", "4128-195-0400", "4134-141-0300", "4128-141-0310", "4128-350-0505",
    "sem referencia", "4134-350-0400", "4134-400-1202", "0000-350-3502", "4134-400-1301",
    "4134-120-0625", "4128-160-2900", "4134-007-1050", "4128-890-3400", "4134-711-3200",
    "4128-790-1309", "4128-182-3203", "4128-640-0106", "4119-642-7600", "4119-713-3100",
    "4134-080-2101", "0000-195-8203");

const nomesRocadeiras = [fs38, fs55, fs80, fs85, fs120, fs160, fs220, fs290, fs300, fs350, fs380];
const indiceRocadeiras = ['fs38', 'fs55', 'fs80', 'fs85', 'fs120', 'fs160', 'fs220', 'fs290', 'fs300', 'fs350', 'fs380'];

const nomesMotosserras = [ms170, ms180, ms210, ms230, ms250, ms260, ms310, ms361, ms382, ms651, ms661];
const indiceMotosserras = ['ms170', 'ms180', 'ms210', 'ms230', 'ms250', 'ms260', 'ms310', 'ms361', 'ms382', 'ms651', 'ms661'];


// Começando Programa

document.querySelector('#maquina').addEventListener('input', selecionarPrimeiroInput);
document.querySelector('#modelo').addEventListener('input', selecionarSegundoInput);
document.querySelector('#peca').addEventListener('input', selecionarTerceiroInput);
//variavel em que é atribuída o objeto final papra consulta do código
let objTemp = '';

function selecionarPrimeiroInput(){
    let maquina = document.querySelector('#maquina').value;

    if(maquina === 'motosserras'){
        zerarProximosInputs();
        preencherSegundoInput(nomesMotosserras);
    };
    if(maquina === 'rocadeiras'){
        zerarProximosInputs();
        preencherSegundoInput(nomesRocadeiras);
    };    
    if(!maquina){
        zerarProximosInputs();
    };
};

function zerarProximosInputs (){
    let input2 = document.querySelector('#modelo');
    let input3 = document.querySelector('#peca');
    input2.innerHTML = `<option value="" disabled selected>Selecionar Modelo</option>`;
    input3.innerHTML = `<option value="" disabled selected>Selecionar Peça</option>`;
    zeraApresentacao();
    objTemp = '';
};

function preencherSegundoInput(modelos){
    let input2 = document.querySelector('#modelo');

    for(let i = 0; i < modelos.length; i++){
        input2.innerHTML += `<option value="${modelos[i].name.toLowerCase()}">${modelos[i].name.toUpperCase()}</option>`;
    }

};

function zerarUltimoInput(){
    let input3 = document.querySelector('#peca');
    input3.innerHTML = `<option value="" disabled selected>Selecionar Peça</option>`;
    zeraApresentacao();
    objTemp = '';
};

function selecionarSegundoInput(){
    let peca = document.querySelector('#modelo').value;
    let index = '';

    if(indiceMotosserras.indexOf(peca) !== -1){
        index = indiceMotosserras.indexOf(peca);
        zerarUltimoInput();
        preencherTerceiroInput(index, nomesMotosserras);
        return
    };
    if(indiceRocadeiras.indexOf(peca) !== -1){
        index = indiceRocadeiras.indexOf(peca);
        zerarUltimoInput();
        preencherTerceiroInput(index, nomesRocadeiras);
        return
    };
};

function preencherTerceiroInput(index, arrayMaquinas){
    let input3 = document.querySelector('#peca');
    let objeto = arrayMaquinas[index];
    // define a quantidade de itens dentro do objeto;
    let qntObjeto = Object.keys(arrayMaquinas[index]).length 

    for (let i in objeto){
        input3.innerHTML += `<option value="${i.toLowerCase()}">
        ${i.toUpperCase().replaceAll('_', ' ')}</option>`;
    }
    objTemp = objeto;
};

function selecionarTerceiroInput(){
    let codigo = document.querySelector('#peca').value;
    apresentaCodigos(objTemp, codigo);
};

function apresentaCodigos(objTemp, codigo){
    let resultado = document.querySelector('.resultado');
    let resposta = 
    `<span class="nomeMaquina">${objTemp.name.toUpperCase()}</span> 
    ${codigo.toUpperCase().replaceAll('_', ' ')}  <br>
    <span class="codigoFinal">${objTemp[codigo]}</span>`;
    resultado.innerHTML = resposta
};

function zeraApresentacao(){
    let resultado = document.querySelector('.resultado');
    resultado.innerHTML = ``
};

// INICIO do Programa

zeraApresentacao();
zerarProximosInputs();
