| package |
package := Package name: 'ProyectoFinal'.
package paxVersion: 1;
	basicComment: ''.


package classNames
	add: #Butaca;
	add: #Cliente;
	add: #Pelicula;
	add: #Persona;
	add: #Sala;
	yourself.

package binaryGlobalNames: (Set new
	yourself).

package globalAliases: (Set new
	yourself).

package setPrerequisites: (IdentitySet new
	add: '..\Object Arts\Dolphin\Base\Dolphin';
	yourself).

package!

"Class Definitions"!

Object subclass: #Butaca
	instanceVariableNames: 'IdButaca Ocupada'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
Object subclass: #Pelicula
	instanceVariableNames: 'IdPelicula Nombre Duracion'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
Object subclass: #Persona
	instanceVariableNames: 'DNI Nombre'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
Object subclass: #Sala
	instanceVariableNames: 'IdSala Pelicula Butacas CantButacas'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
Persona subclass: #Cliente
	instanceVariableNames: 'IdCliente'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!

"Global Aliases"!


"Loose Methods"!

"End of package definition"!

"Source Globals"!

"Classes"!

Butaca guid: (GUID fromString: '{B1F1EA07-E0E2-4C1C-ADFD-C86F70E045FB}')!
Butaca comment: ''!
!Butaca categoriesForClass!Kernel-Objects! !
!Butaca methodsFor!

InitButaca: unId Ocupada: unBool
	IdButaca := unId.
	Ocupada := unBool! !
!Butaca categoriesFor: #InitButaca:Ocupada:!public! !

!Butaca class methodsFor!

CrearButaca: unId Ocupada: unBool
^(self new)InitButaca: unId Ocupada: unBool.! !
!Butaca class categoriesFor: #CrearButaca:Ocupada:!public! !

Pelicula guid: (GUID fromString: '{4A246601-082D-4FE4-85FE-1BAAE692AC00}')!
Pelicula comment: ''!
!Pelicula categoriesForClass!Kernel-Objects! !
!Pelicula methodsFor!

InitPelicula: unId Nombre: unNombre Duracion: unaDuracion
	IdPelicula := unId.
	Nombre := unNombre.
	Duracion := unaDuracion! !
!Pelicula categoriesFor: #InitPelicula:Nombre:Duracion:!public! !

!Pelicula class methodsFor!

CrearPelicula: unId Nombre: unNombre Duracion: unaDuracion
	^self new
		InitPelicula: unId
		Nombre: unNombre
		Duracion: unaDuracion! !
!Pelicula class categoriesFor: #CrearPelicula:Nombre:Duracion:!public! !

Persona guid: (GUID fromString: '{2EC4D49D-8C0A-4748-A070-AC484B2BF634}')!
Persona comment: ''!
!Persona categoriesForClass!Kernel-Objects! !
Sala guid: (GUID fromString: '{CB7EB096-4257-42F5-B0C0-0DA485C6284C}')!
Sala comment: ''!
!Sala categoriesForClass!Kernel-Objects! !
!Sala methodsFor!

InitSala: unId Pelicula: unaPelicula CantButacas: unaCantidad
	IdSala := unId.
	Pelicula := unaPelicula.
	CantButacas := unaCantidad.
	Butacas := Sala CrearButacas: unaCantidad! !
!Sala categoriesFor: #InitSala:Pelicula:CantButacas:!public! !

!Sala class methodsFor!

CrearButacas: unaCantidad
	| butacas butaca contador |
	contador := 0.
	butacas := OrderedCollection new.
	[contador < unaCantidad] whileTrue: 
			[butaca := Butaca CrearButaca: contador Ocupada: false.
			butacas add: butaca.
			contador := contador + 1].
	^butacas!

CrearSala: unId Pelicula: unaPelicula CantButacas: unaCantidad
	^self new
		InitSala: unId
		Pelicula: unaPelicula
		CantButacas: unaCantidad! !
!Sala class categoriesFor: #CrearButacas:!private! !
!Sala class categoriesFor: #CrearSala:Pelicula:CantButacas:!public! !

Cliente guid: (GUID fromString: '{23FA2BD4-4F57-4AED-A093-7E4CF7162F57}')!
Cliente comment: ''!
!Cliente categoriesForClass!Kernel-Objects! !
!Cliente methodsFor!

InitCliente: unDNI Nombre: unNombre IdCliente: unId
	Nombre := unNombre.
	IdCliente := unId.
	DNI := unDNI! !
!Cliente categoriesFor: #InitCliente:Nombre:IdCliente:!public! !

!Cliente class methodsFor!

CrearCliente: unDni Nombre: unNombre IdCliente: unId
	^self new
		InitCliente: unDni
		Nombre: unNombre
		IdCliente: unId! !
!Cliente class categoriesFor: #CrearCliente:Nombre:IdCliente:!public! !

"Binary Globals"!

