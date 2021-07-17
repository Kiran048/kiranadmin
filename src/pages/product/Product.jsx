import "./product.css";
import {Link} from "react-router-dom";
import Chart from "../../components/chart/Chart";
import {productData} from "../../dummyData";
import {Publish} from "@material-ui/icons"

export default function Product() {
    return (
        <div className="product">
            <div className="productTitleContainer">
                <h1 className="productTitle">Product</h1>
                <Link to="/newproduct">
                <button className="productAddButton">Create</button>
                </Link>
            </div>
            <div className="productTop">
                <div className="productTopLeft">
                    <Chart data={productData} dataKey="Active User" title="Sales Performence"/>
                </div>
                <div className="productTopRight">
                    <div className="productInfoTop">
                        <img src="https://images.unsplash.com/photo-1560472355-af30e12ec1bd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YXBwbGUlMjBhaXJwb2RzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" className="productInfoImg"/>
                        <span className="productName">Apple Airpods</span>
                    </div>
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                        <span className="productInfoItemKey">id:</span>
                        <span className="productInfoItemValue">123</span>
                    </div>
                    <div className="productInfoItem">
                        
                        <span className="productInfoItemKey">sales:</span>
                        <span className="productInfoItemValue">5123</span>
                    </div>
                    <div className="productInfoItem">
                        <span className="productInfoItemKey">active:</span>
                        <span className="productInfoItemValue">yes</span>
                    </div>
                    <div className="productInfoItem">
                        <span className="productInfoItemKey">in stock:</span>
                        <span className="productInfoItemValue">no</span>
                    </div>
                    </div>
                </div>
            </div>
            <div className="productBottom">
                <form className="productForm">
                    <div className="productFormLeft">
                        <label>Product Name</label>  
                        <input type="text" placeholder="Apple AirPod"/>
                        <label>In Stock</label>  
                        <select name="inStock" id="idStock">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                        <label>Active</label>  
                        <select name="active" id="active">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <div className="productFormRight">
                        <div className="productUpload">
                            <img src="https://images.unsplash.com/photo-1588156979401-db3dc31817cb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGFwcGxlJTIwYWlycG9kc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" className="productUploadImg"/>
                            <label for="file">
                                <Publish/>
                            </label>
                            <input type="file" id="file" style={{display:"none"}}/>
                        </div>
                        <button className="productButton">Update</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
 