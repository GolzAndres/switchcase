
// numero 6
let año =60;
let categoria ;
switch (true ){
  case (año >= 0 && año <= 2):
    categoria = "eres bebe";
  break;
  case (año >= 3 && año <= 12):
    categoria = "niño/a";
    break;
  case (año >= 13 && año <= 19):
    categoria = "adolecente";
    break;
  case (año >= 20 && año <= 59):
    categoria = "adulto/a";
    break;
  case (año >= 60):
    categoria = "adulto mayor";
}


