import React, {Component} from "react";
// import {Link} from "react-router-dom";

class ItemInfo extends Component{
    
    state = {
        item: {},
        displayCart: false
    };

    componentDidMount(){
        fetch(`http://localhost:3000/items/${this.props.match.params.id}`)
            .then(response => response.json())
            .then(item => {
                this.setState({
                    item: item
                })
            }) 
    };

    render(){
        // console.log(this.state.item)
        const {item} = this.state;
        const {addToCart} = this.props;
        return(
            <div className="item">
                {item.id 
                    ? (<>
                        <h3>{item.name}</h3> 
                        <h3>${item.price}</h3>
                        <p>{item.description}</p>
                        <img src={item.image} alt="duck-image"></img>
                        <button
                            type="submit" 
                            onClick={() => addToCart(item)}>
                            {/* // onClick={() => this.setState({displayCart: !displayCart})}> */}

                                Add
                        </button>
                      </>) 
                    : null
                }
                {/* {displayCart
                    ? (<>
                        <h3>Do you want to proceed to the shopping cart?</h3>
                        <div className="choose-buttons">
                            <Link
                                to="/cart"
                                type="submit">
                             
                                    Yes!
                            </Link>
                            <Link
                                to="/store"
                                type="submit">
                                    
                                    No, keep shopping!
                            </Link>
                        </div>
                      </>)
                    : null
                } */}
            </div>
        );
    };

}

export default ItemInfo;