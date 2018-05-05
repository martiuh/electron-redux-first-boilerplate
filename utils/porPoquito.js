// porPoquito es la función que ayuda a encontrar similitudes en palabras mal escritas
const porPoquito = (duda,correcta) => {
  if (typeof duda !== "string" && typeof correcta !== "string") {
    throw new Error ("Deben de ser dos strings para comparar")
  }
	dudaArr = duda.toLowerCase().split('')
	correctaArr = correcta.toLowerCase().split('')
	const masLargo = dudaArr.length > correctaArr.length ? dudaArr : correctaArr
	const masCorto = dudaArr.length < correctaArr.length ? dudaArr : correctaArr
	const diferencia = Math.abs(dudaArr.length - correctaArr.length)
	let parecido = 0
	if (dudaArr.length === correctaArr.length) {
		for (let i = 0; i < masLargo.length; i++) {
			if (dudaArr[i] === correctaArr[i]) {
				parecido += 1
			}
		}
	} else if (diferencia === Math.abs(1) || diferencia === Math.abs(2)) {
		// diferencia = diferencia === 1 ? 1 :
		const trim1 = masLargo.slice(diferencia,masLargo.length)
		const trim2 = masLargo.slice(0, masLargo.length - diferencia)
		for (let i = 0; i < dudaArr.length; i++) {
			if (masCorto[i] === undefined) {
				break
			}
			switch (true) {
				case (masCorto[i] === trim1[i]):
					parecido += 1
					break;
			}
			switch (true) {
				case (masCorto[i] === trim2[i]):
					parecido += 1
					break;
			}
		}
	}
	const probabilidad = diferencia > 1 ? parseFloat((parecido/((masLargo.length * 2)- diferencia)).toFixed(2)) : parseFloat((parecido/masLargo.length).toFixed(2))
	if (probabilidad >= 0.50) {
		return { palabra: correcta,duda,probabilidad }
	} else {
		return false
	}
}
