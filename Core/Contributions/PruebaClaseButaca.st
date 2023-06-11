|butacas butaca contador|

contador:=0.
butacas:= OrderedCollection new.
[contador < 10] whileTrue:[
butaca:= Butaca CrearButaca: contador Ocupada: false.
butacas add: butaca.
contador:= (contador + 1).
].
butacas inspect.

