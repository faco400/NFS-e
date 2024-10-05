function gerarNota() {
  const valorVenda = parseFloat(document.getElementById('valorVenda').value);
  const itens = document.getElementById('produtos').value;

  const impostoIRPF = parseFloat(document.getElementById('impostoIRPF').value) / 100;
  const impostoPIS = parseFloat(document.getElementById('impostoPIS').value) / 100;
  const impostoCOFINS = parseFloat(document.getElementById('impostoCOFINS').value) / 100;
  const impostoINSS = parseFloat(document.getElementById('impostoINSS').value) / 100;
  const impostoISSQN = parseFloat(document.getElementById('impostoISSQN').value) / 100;

  // Calculando os impostos
  const valorIrpf = valorVenda * impostoIRPF;
  const valorPis = valorVenda * impostoPIS;
  const valorCofins = valorVenda * impostoCOFINS;
  const valorInss = valorVenda * impostoINSS;
  const valorIssqn = valorVenda * impostoISSQN;

  const totalImpostos = valorIrpf + valorPis + valorCofins + valorInss + valorIssqn;
  const valorLiquido = valorVenda - totalImpostos;

  // Gerando o conteúdo da Nota Fiscal
  const notaFiscal = `
      <h2>Nota Fiscal de Serviço Eletrônica (NFS-E)</h2>
      <p><strong>Itens Vendidos:</strong> ${itens}</p>
      <p><strong>Valor da Venda:</strong> R$ ${valorVenda.toFixed(2)}</p>
      <p><strong>IRPF (R$):</strong> ${valorIrpf.toFixed(2)}</p>
      <p><strong>PIS (R$):</strong> ${valorPis.toFixed(2)}</p>
      <p><strong>COFINS (R$):</strong> ${valorCofins.toFixed(2)}</p>
      <p><strong>INSS (R$):</strong> ${valorInss.toFixed(2)}</p>
      <p><strong>ISSQN (R$):</strong> ${valorIssqn.toFixed(2)}</p>
      <p><strong>Total de Impostos:</strong> R$ ${totalImpostos.toFixed(2)}</p>
      <p><strong>Valor Líquido (após impostos):</strong> R$ ${valorLiquido.toFixed(2)}</p>
  `;

  document.getElementById('notaFiscal').innerHTML = notaFiscal;
}