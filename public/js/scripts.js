// Top Nav Functionality

var toggler = document.getElementById('toggler');
var navMenu = document.getElementById('nav-menu');
toggler.addEventListener('click', function (element) {
  navMenu.classList.toggle('active');
});

// JSON for Bar Graph
var chartItem =[
  {
    label: "Public Medical School, In-State $34,592",
    cost: 34592,
    color: "#E57373"
  },
  {
    label: "Public Medical School, Out-of-State $56,668",
    cost: 58668,
    color: "#64B5F6"
  },
  {
    label: "Private Medical School $50,000",
    cost: 50000,
    color: "#4DB6AC"
  },
  {
    label: "CAM Education $25,000",
    cost: 25000,
    color: "#FF8A65"
  }
]

// Output Bar Graph
function renderTuitionGraph(data) {
  const averageTuitionGraph = document.getElementById('average_tuition_graph');
  const maxCost = Math.max.apply(Math, chartItem.map(object => object.cost));
  console.log(maxCost);

  data.forEach(statistic => {
    const costPercentage = Math.round((statistic.cost / maxCost) * 100);
    console.log(costPercentage);
    const graphData = `<dt data-aos="grow-right" class="percentage-${costPercentage}" style="background-color: ${statistic.color}">${statistic.label}</dt>`;
    averageTuitionGraph.innerHTML += graphData;
  });
}

renderTuitionGraph(chartItem);

// Initialize Animate On Scroll
AOS.init();