import ReactDOM from 'react-dom'
import { Fragment } from 'react'
import Card from './Card'
import './model.css'
import { useModelContext } from '../context/model-context'

const Model = ({className, children}) => {
    const {showModel, closeModelHandler} = useModelContext();
  return (
    <Fragment>
    {
        showModel && ReactDOM.createPortal(<>
        <section id='backdrop' onClick={closeModelHandler}></section>
        <Card className={className}>{children}</Card>
        </>, document.querySelector('#overlays'))
    }
    </Fragment>
  )
}

export default Model