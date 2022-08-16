import "./new.scss"
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';

const New = () => {
    return (
        <div className="new">
            <Sidebar />
            <div className="new-container">
                <Navbar />
                <div className="add-new">
                    <div className="top"><h1 className="title">Add New User</h1></div>
                    <div className="bottom">
                        <div className="left">
                            <div>
                                <img className="avatar" src="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg" alt="avatar" />
                            </div>
                        </div>
                        <div className="right">
                            <form action="">

                                <div className="form-input file-input">
                                    <label className="label-file" htmlFor="file"><span>Image:</span> <DriveFolderUploadIcon className="drive-icon"/></label>
                                    <input type="file" id="file" style={{display:"none"}}/>
                                </div>

                                <div className="form-input">
                                    <label>Fullname</label>
                                    <input type="text" placeholder="John Doe"/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default New