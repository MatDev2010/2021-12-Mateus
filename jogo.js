const dataI = new Date()

function temporizador(data) {

    setInterval(() => {
        const dataC = new Date()
        const lag = (dataC - dataI) / 1000

        var dateX = new Date(null);
        dateX.setSeconds(lag); // specify value for SECONDS here
        var result = dateX.toISOString().substring(11, 8);

        console.log(dataI, dataC, lag, result)
    }, 1000)
}

temporizador(dataI)

