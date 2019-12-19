# metrop-app
CDMX Metro Stats
# Metro-Stats

Metro-Stats es una plataforma de estadisticas del Sistema de Transporte Colectivo(metro) basado en la API de datos abietos de la CDMX

## API

|   Route   | HTTP Verb |   Description   |
|-----------|-----------|-----------------|
| `/estaciones` |    GET    | Regresa todas las esatciones del metro |
| `/estaciones/:id` |    GET    | Regresa una estacion del metro |
| `/usuario` |    POST    | Pasar una ubicacion([lon, lat]). Regresa estaciones cercanas a la ubicacion |
| `/horarios` |    GET    | Regresa los horarios de las estaciones del metro |
| `/horarios/:name` |    GET    | Regresa el horario de una estacion |

## Modelos de usuario

Un tipo de usuario:

- Usuario
```sh
    Acciones posibles:

    - Acceder a la plataforma.
```

## Proyecto

> El modelo busca incentivar a la gente a incentivar las denuncias para poder tener mejor data y se puedan tomar las adecuadas medidas de proteccion para los ciudadanos de la CDMX
> 
> Y que puedan saber en tiempo real cuales son las estaciones mas cercanas al usuario pero mas seguras.
>
> 

- Cuentas para los jueces
```sh
    Juez1 :
    
    - Email : juez1@gmail.com

    - Contraseña : 123456

    Juez2:
        
    - Email : juez2@gmail.com

    - Contraseña : 123456

    Juez3:
        
    - Email : juez3@gmail.com

    - Contraseña : 123456

```

Url: https://objective-ramanujan-2b11a3.netlify.com/
