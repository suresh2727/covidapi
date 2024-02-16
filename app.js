let url = "https://api.coronavirus.data.gov.uk/v1/data";
let indiaUrl = "https://data.covid19india.org/v4/min/data.min.json";
let currentUrl = "https://data.covid19india.org/v4/min/timeseries.min.json";

async function fetchData() {
  const res = await fetch(indiaUrl);
  const result = await res.json();
  //   const items = Object.values(AN).length;
  console.log(result);
  console.log(result.GJ);
  //   let rj = RJ;
  //   document.getElementById("statecode").innerHTML = rj;
  document.getElementById("Confirmed").innerHTML = result.GJ.total.confirmed;
  document.getElementById("deceased").innerHTML = result.GJ.total.deceased;
  document.getElementById("recovered").innerHTML = result.GJ.total.recovered;
  document.getElementById("Tested").innerHTML = result.GJ.total.tested;
}

fetchData();
