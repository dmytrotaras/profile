import Model from "../components/Model"
import BackgroundColor from "./BackgroundColor"
import { primaryColors, backgroundColors } from "./data"
import PrimaryColor from "./PrimaryColor"
import './theme.css'

const Theme = () => {
  return (
    <Model className="theme__model">
        <h3>Customize Your Theme</h3>
        <small>Change the primary color to your preference.</small>
        <div className="theme__primary-wrapper" id="">
            <h5>Primary Color</h5>
            <div className="theme__primary-colors">
            {
                primaryColors.map(pColor => <PrimaryColor key={pColor.className} className={pColor.className}/>)
            }
        </div>
        </div>
        {/*<div className="theme__background-wrapper">
            <h5>Background Color</h5>
            <div className="theme__background-colors">
                {
                    backgroundColors.map(bColor => <BackgroundColor key={bColor.className} className={bColor.className}/>)
                }
            </div>
        </div>
        */}
    </Model>
  )
}

export default Theme