function changecolor(colorIndex) {
	const colorArr = ['red', 'blue', 'green', 'yellow', '#fc3']

	// switch (randNum) {
	// 	case 1:
	// 		document.querySelector('body').style.backgroundColor = 'blue'
	// 		document.querySelector('body').style.color = 'white'
	// 		document.querySelector('button').style.color = 'red'
	// 		document.querySelector('button').style.backgroundColor = 'orange'
	// 		break
	// 	case 2:
	// 		document.querySelector('body').style.backgroundColor = 'red'
	// 		document.querySelector('body').style.color = 'black'
	// 		document.querySelector('button').style.color = 'orange'
	// 		document.querySelector('button').style.backgroundColor = 'white'
	// 		break
	// 	case 3:
	// 		document.querySelector('body').style.backgroundColor = 'green'
	// 		document.querySelector('body').style.color = 'black'
	// 		document.querySelector('button').style.color = 'blue'
	// 		document.querySelector('button').style.backgroundColor = 'orange'
	// 		break
	// 	case 4:
	// 		document.querySelector('body').style.backgroundColor = 'black'
	// 		document.querySelector('body').style.color = 'white'
	// 		document.querySelector('button').style.color = 'yellow'
	// 		document.querySelector('button').style.backgroundColor = 'blue'
	// 		break
	// }
	

	document.querySelector('body').style.backgroundColor = colorArr[colorIndex]
}

function change() {
	let curentIndex = 0
	
	setInterval(() => {
		
		if (curentIndex == 4) {
			return changecolor(curentIndex),
			 curentIndex = 0
		}else{
			changecolor(curentIndex)
			curentIndex++
		}
	}, 700)
}
change()
