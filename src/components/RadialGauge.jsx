import ReactApexChart from "react-apexcharts";

const RadialGauge = (props) => {
  const options = {
    theme: {
      mode: "dark",
    },
    tooltip: {
      enabled: false,
    },
    chart: {
      background: "transparent",
      sparkline: {
        enabled: false,
      },
    },
    grid: {
      padding: {
        left: -10,
        right: 0,
      },
    },
    plotOptions: {
      radialBar: {
        startAngle: -45,
        endAngle: 90,
        dataLabels: {
          name: {
            fontSize: "2rem",
            color: "white",
            offsetY: -48,
          },
          value: {
            offsetY: 0,
            fontSize: "4rem",
            color: "white",
            formatter: function (val) {
              return val + "°C";
            },
          },
        },
        hollow: {
          size: "55%",
        },
        track: {
          show: true,
          background: "#f2f2f2",
          strokeWidth: "20%",
          opacity: 1,
          margin: 15,
        },
      },
    },
    fill: {
      colors: "#00FF00",
      opacity: 1,
    },

    // eslint-disable-next-line react/prop-types
    labels: [props.label],
  };
  // eslint-disable-next-line react/prop-types
  const series = [[props?.data || 50]];

  return (
    <>
      <ReactApexChart
        options={options}
        series={series}
        type="radialBar"
        height={350}
      />
    </>
  );
};

export default RadialGauge;