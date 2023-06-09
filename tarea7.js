

// // numero 7
var medida = 10
var long = 'cm'
switch (long){
  case "cm":
    metro = medida / 100
    kilometro = medida / 100000
    console.log ("tu resultado es",medida+"cm","en metro son:",metro+"m", "y en km son:", kilometro+"km")
    break;
      case "m":
    centimetro = medida * 100
    kilometro = medida / 1000
    console.log ("tu resultado es",medida+"m","en centimetro son:",centimetro+"cm", "y en km son:", kilometro+"km")
    break;
      case "km":
    centimetro = medida * 100000
    metro= medida * 1000
    console.log ("tu resultado es",medida+"km","en metro son:",metro+"m", "y en cm son:", centimetro+"cm")
}

