import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import PreJunior from "./pages/PreJunior";
import PreSenior from "./pages/PreSenior";
import PreMiddle from "./pages/PreMiddle";

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    PRE_MIDDLE: '/pre-middle',
    PRE_SINIOR: '/pre-senior',

    // add paths
}

function Routes1() {
    return (
        <div>
            {/*Switch выбирает первый подходящий роут*/}
        <Routes>
            {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу PRE_JUNIOR*/}
            {/*exact нужен чтоб указать полное совподение (что после '/' ничего не будет)*/}
            <Route path={'/'} element ={<Navigate to = {PATH.PRE_JUNIOR} />}/>

            <Route path={PATH.PRE_JUNIOR} element ={<PreJunior/>}/>
            <Route path={PATH.PRE_MIDDLE} element ={<PreMiddle/>}/>
            <Route path={PATH.PRE_SINIOR} element ={<PreSenior/>}/>

            {/*у этого роута нет пути, он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
            {/*<Route render={() => <Error404/>}/>*/}
        </Routes>
        </div>
    )
}

export default Routes1
