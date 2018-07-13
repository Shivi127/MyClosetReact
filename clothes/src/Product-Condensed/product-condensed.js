import React ,{Component} from 'react';
import './product-condensed.css'

class ProductCondensed extends Component{
    constructor(props){
        super(props);
        this.removeProduct = this.removeProduct.bind(this);
    }
    removeProduct = ()=>{}
//    Render is particular to Component
    render(){
        return(
            <div>
                <li className='list-group-item pc-condensed'>
                    <a className='btn btn-outline-danger' onClick={()=>this.removeProduct()}>X</a>
                    <p>{this.props.product.ImageURL}  <b> $ {this.props.product.Product_Title} </b> </p>
                </li>
            </div>
        );
    }
}

export default ProductCondensed;