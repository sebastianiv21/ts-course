### Uso de Generics en TypeScript

Los **Generics** en TypeScript permiten escribir código flexible y reutilizable,
proporcionando la capacidad de trabajar con varios tipos de datos sin perder el
control sobre la tipificación. Aquí te presento una guía sobre el uso de
Generics en TypeScript.

#### Definición Básica

Los Generics se definen utilizando un par de ángulos `<T>`, donde `T` es un tipo
que aún no se ha especificado. Aquí tienes un ejemplo básico:

```typescript
function identity<T>(arg: T): T {
  return arg;
}

let result = identity<string>("Hola");
// result ahora es de tipo string
```

#### Uso en Funciones

Los Generics se pueden utilizar en funciones para trabajar con diferentes tipos
de datos. Veamos un ejemplo:

```typescript
function imprimirArray<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

imprimirArray<number>([1, 2, 3]);
```

#### Uso en Clases

Los Generics también pueden ser utilizados en la definición de clases. Aquí hay
un ejemplo:

```typescript
class Contenedor<T> {
  valor: T;

  constructor(valor: T) {
    this.valor = valor;
  }
}

let contenedorDeEntero = new Contenedor<number>(42);
let contenedorDeString = new Contenedor<string>("Hola");

console.log(contenedorDeEntero.valor); // 42
console.log(contenedorDeString.valor); // "Hola"
```

#### Uso en Interfaces

Los Generics pueden ser aplicados a interfaces para hacerlas más flexibles.
Ejemplo:

```typescript
interface ParOrdenado<T, U> {
  primero: T;
  segundo: U;
}

let par: ParOrdenado<number, string> = { primero: 1, segundo: "dos" };
```

#### Restricciones en Generics

Puedes aplicar restricciones a los tipos que se pueden utilizar con Generics.
Por ejemplo:

```typescript
interface ConLongitud {
  length: number;
}

function obtenerLongitud<T extends ConLongitud>(valor: T): number {
  return valor.length;
}

let longitudDeString = obtenerLongitud("Hola");
let longitudDeArray = obtenerLongitud([1, 2, 3]);
```

#### Conclusiones

Los Generics en TypeScript proporcionan una poderosa herramienta para escribir
código más flexible y reutilizable. Al entender cómo aplicarlos en funciones,
clases e interfaces, puedes mejorar la tipificación y la legibilidad de tu
código. Experimenta con Generics para descubrir cómo pueden hacer que tu código
sea más robusto y adaptable a diferentes situaciones.
