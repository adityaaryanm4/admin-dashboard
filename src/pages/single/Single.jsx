import "./single.scss"
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'

const Single = () => {
    return (
        <div className="single">
            <Sidebar />

            <div className="singleContainer">
                <Navbar />
                <div className="top">
                    <div className="left">
                        <div className="title"><h1>information</h1></div>
                        <div className="item"></div>
                    </div>
                    <div className="right"></div>
                </div>
                <div className="bottom"></div>

            </div>
        </div>
    )
}

export default Single


