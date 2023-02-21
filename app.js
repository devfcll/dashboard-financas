const labels = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho"];
const data = {
  labels: labels,
  datasets: [
    {
      label: "Receitas",
      backgroundColor: "#00b894",
      data: [10000, 15000, 20000, 25000, 30000, 35000],
    },
    {
      label: "Despesas",
      backgroundColor: "#d63031",
      data: [5000, 7000, 9000, 11000, 13000, 15000],
    },
  ],
};

const config = {
  type: "bar",
  data: data,
  options: {
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  },
};

var myChart = new Chart(document.getElementById("myChart"), config);
