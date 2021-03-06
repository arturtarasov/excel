import { Excel } from './components/excel/excel'
import { Formula } from './components/formula/Formula'
import { Header } from './components/header/Header'
import { Table } from './components/table/Table'
import { Toolbar } from './components/toolbar/Toolbar'
import { createStore } from './core/createStore'
import { rootReducer } from './redux/rootReducer'
import './scss/index.scss'

const store = createStore(rootReducer)

const excel = new Excel('#app', {
    components: [Header, Toolbar, Formula, Table],
    store
})
excel.render()
