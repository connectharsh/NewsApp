import React , {Component} from 'react'
export class MyCard extends Component{
    render(){
        let {title,description,image} = this.props;
    return(
        <>
        <div className="col-md-4 col-sm-10" id='myCard'>
            <div className="originalCard">
                <img src={image?image:'https://thumbs.dreamstime.com/b/sample-stamp-white-background-sign-90532936.jpg'} alt="imgtxt"></img>
                <h2>{title?title:"Sample title for kingNewz".slice(0,40)}.....</h2>
                <div id="paragraph">
                     <p>{description?description:'Sorry unable to fetch description from News api because No description is available for this news or this news has been deleted please refresh this page for more info '.slice(0,300)}.....</p>
                     <p id="readMore"><a href="/">Read More...</a></p>
                </div>   
            </div>
            
        </div>
        </>
    );
    }
}
export default MyCard;