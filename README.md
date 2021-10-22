# Ong Client

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

---

### Skeleton

Skeleton disponible para cualquier componente en src/features/skeleton/SkeletonComponent.js
Dentro del archivo encontraremos el component <Skeleton /> proporcionado por la libreria ChakraUI el cual cuenta con una propiedad "isLoading". Si la misma se encuentra en "false" muestra el componente y si se encuentra en "true" no lo muestra

---

### Spinner

_The react-spinner-loader provides simple React SVG spinner component which can be implemented for async await operation before data loads to the view._

#### _You can pass by props the type, color, width and height._

```js
  <Spinner Spinner type={type} color={color} height={height} width={width} />
```

#### _By default the component comes with the following data:_

```js
  <Spinner type={'ThreeDots'} color={'blue'} height={80} width={80} />
```

#### _The types of spinner that are available are:_

* Audio
* BallTriangle
* Bars
* Circles
* Grid
* Hearts
* Oval
* Puff
* Rings
* TailSpin
* ThreeDots

#### _You can pass the colors you want and the measures you need, example:_

```js
  <Spinner type={'Bars'} color={'red'} height={60} width={60} />
```
---

### Alerts

Disponible en src/features/alert/alert.js.

#### Uso

* successAlert() puede o no recibir parámetros título y texto, devuelve un alert de éxito
```js
  successAlert("titulo","texto");
```
* errorAlert() puede o no recibir parámetros título y texto, devuelve un alert de error
```js
  errorAlert("titulo","texto");
```
* questionAlert() puede o no recibir parámetros título, texto y texto del botón confirmar , retorna un booleano, trabaja de manera asincrónica
```js
  const respuesta = await questionAlert("titulo","texto","texto del boton confirmar");
```
#### Ejemplo de uso
* Si, se usa sin parámentros tiene texto por default

 ```js
const success =() =>{
    successAlert();
}
const error =() =>{
    errorAlert();
}
const question =async() =>{
   const resp = await questionAlert();
   resp && (successAlert() )
}

const alertExample = () => {
    return (
        <div>
            <button onClick={success}>success</button>
            <hr />
            <button onClick={error}>error</button>
            <hr />
            <button onClick={question}>question</button>
        </div>
    )
}

```
---
### Lazy Load Image

Available in src/features/lazyLoadImage/.

#### How to use. LazyLoadImage receive by props:

* src
* alt
* height
* width

```js
  <LazyLoadImage
      src={src} 
      alt={alt}
      height={height}
      width={width}
  />
```
_To change the size of the Skeleton you must send by props:_

* heightSkeleton
* widthSkeleton

```js
  <LazyLoadImage
      src={'urlImage'} 
      alt={'text'}
      height={'300px'}
      width={'300px'}
      heightSkeleton={'300px'}
      heightSkeleton={'300px'}
  />
```
#### Default comes this data:

```js
  <LazyLoadImage
      alt={'text image'}
      height={'340px'}
      width={'340px'}
      heightSkeleton={'340px'}
      heightSkeleton={'340px'}
  />
```
---

### ProgressBar

    La barra de progreso es usada para visualizar el status de una tarea que lleva mucho tiempo o consiste en diferentes pasos.

    Importación:

    import { Progress } from "@chakra-ui/react"

    Uso:

    <Progress value={80} />

    Tamanos de barra de progreso:

    Hay dos maneras en las que puedes incrementar la altura de la barra de progreso:

    *Puedes agregar un prop tamano para incrementar el mismo.
    *Puedes usar la propiedad height para setear la altura manualmente.

    <Progress colorScheme="green" size="lg" value={20} />
    <Progress colorScheme="green" height="32px" value={20} />

    Progreso animado:

    Para visualizar un progreso animado, pasa el prop isIndeterminate.

    <Progress size="xs" isIndeterminate />

---
