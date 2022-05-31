import React,{Component} from "react";

class One extends Component {
    render(){
        return(
            <div style={{display:"flex"}}>
                <div style={{textAlign : "center"}}>
                    <p><img src={this.props.img} width={500} height={500}></img></p>
                    <p>{this.props.name}</p>
                    <p>{this.props.detail}</p>
                </div>
            </div>
        );
    }
}
export default One;